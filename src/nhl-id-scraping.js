// const _ = require("lodash");
import fs from "fs";
import { writeFile, readFile } from "./utils/utils.js";
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

      year = year - 10001;
      await delay(3);
      yield {
        year,
        data,
      };
      // maybe return an object with roster AND the year?
    }
  }
}

const scrapeNHLTeams = async () => {
  // decide which team to scrape rosters from
  const teamToScrape = JSON.parse(
    readFile(`./src/player-data/nhl-id-scraping.json`)
  )
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

  const result = {
    ...teamToScrape,
    data: rosters,
  };

  writeFile("./rosterTest.json", result);
};

// Used to delay the time between fetches, so we don't get blocked
const delay = (seconds) =>
  new Promise((resolve) => setTimeout(resolve, seconds * 1000));

export { scrapeNhlRoster, scrapeNHLTeams };
