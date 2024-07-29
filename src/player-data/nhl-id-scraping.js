import { convertArrayToCSV } from "convert-array-to-csv";
import fs from "fs";
import { writeFile, readFile } from "../utils/utils.js";
const chalk = require("chalk");

// const scrapeNhlRoster = async (teamToScrape, yearToScrape) => {
//   const TEAM_ROSTER_URL = `https://api-web.nhle.com/v1/roster/${teamToScrape}/${yearToScrape}`;

//   const result = await fetch(TEAM_ROSTER_URL)
//     .then((res) => res.json())
//     .then((res) => [...res.forwards, ...res.defensemen, ...res.goalies])
//     .then((res) =>
//       res.map((player) => {
//         return {
//           ...player,
//           hrID: null,
//           hdbID: null,
//           verified: false,
//         };
//       })
//     );

//   return result;
// };

async function* scrapeNhlRoster(teamToScrape, startYear) {
  let year = startYear;
  while (year) {
    let url = `https://api-web.nhle.com/v1/roster/${teamToScrape}/${year}`;

    console.log(chalk.yellow.bgBlue(`Trying to scrape: ${url}`));

    const response = await fetch(url);
    if (!response.ok) {
      year = null;
    } else {
      const data = await response
        .json()
        .then((res) => [...res.forwards, ...res.defensemen, ...res.goalies])
        .then((res) =>
          res.map((player) => {
            return {
              ...player,
              hrID: null,
              hdbID: null,
              verified: false,
            };
          })
        );

      await delay(3);
      yield {
        year,
        data,
      };

      year = year - 10001;
      // Dealing with the lockout year
      // (Thanks Gary)
      if (year === 20042005) {
        year = year - 10001;
      }
    }
  }
}

const scrapeNHLTeams = async () => {
  const startTime = new Date();

  // decide which team to scrape rosters from
  const allTeams = JSON.parse(
    readFile(`./src/player-data/nhl-id-scraping.json`)
  );

  const remainingTeamsToScrape = allTeams
    .filter((team) => team.isActive === true)
    .filter(
      (team) =>
        Object.keys(team.data).length === 0 && team.data.constructor === Object
    );
  console.log("Remaining teams to scrape:", remainingTeamsToScrape);

  const teamToScrape = allTeams
    // search only the active teams (temporary, need to remove for historical teams)
    .filter((team) => team.isActive === true)
    // teams with a franchise start date
    .filter((team) => team.start !== null)
    // check if there's any scraped data stored in the team object
    .find(
      (team) =>
        Object.keys(team.data).length === 0 && team.data.constructor === Object
    );

  // console.log(teamToScrape);

  if (!teamToScrape) {
    throw new Error("There are no more teams to scrape");
  }

  let rosters = {};
  let temp = [];

  for await (const roster of scrapeNhlRoster(
    teamToScrape.abbreviation,
    teamToScrape.start
  )) {
    rosters = {
      ...rosters,
      [roster.year]: roster.data,
    };
  }

  const endTime = new Date();
  const timeElapsed = (endTime - startTime) / 1000;
  console.log("timeElapsed:", timeElapsed);

  const result = {
    ...teamToScrape,
    data: rosters,
    scrapeTime: timeElapsed,
  };

  const newTeamArray = allTeams.map((team) =>
    team.id === result.id ? result : team
  );

  writeFile("./src/player-data/nhl-id-scraping.json", newTeamArray);
};

// Used to delay the time between fetches, so we don't get blocked
const delay = (seconds) =>
  new Promise((resolve) => setTimeout(resolve, seconds * 1000));

const convertNHLPlayersToCSV = (jsonFilePath) => {
  const players = JSON.parse(readFile(jsonFilePath)).map((player) => {
    return {
      ...player,
      firstName: player.firstName.default,
      lastName: player.lastName.default,
      birthCity: player.birthCity?.default,
      birthStateProvince: player.birthStateProvince?.default,
      name: `${player.firstName.default} ${player.lastName.default}`,
    };
  });

  const headings = [
    "id",
    "headshot",
    "firstName",
    "lastName",
    "sweaterNumber",
    "positionCode",
    "shootsCatches",
    "heightInInches",
    "weightInPounds",
    "heightInCentimeters",
    "weightInKilograms",
    "birthDate",
    "birthCity",
    "birthCountry",
    "birthStateProvince",
    "hrID",
    "hdbID",
    "verified",
    "name",
  ];

  const csv = convertArrayToCSV(players, {
    headings,
    separator: ",",
  });

  fs.writeFile("./src/player-data/nhl-id-scraping-unique.csv", csv, (err) => {
    if (err) {
      console.log(err);
    }
  });
};

export { scrapeNhlRoster, scrapeNHLTeams, convertNHLPlayersToCSV };
