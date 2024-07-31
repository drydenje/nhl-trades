"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scrapeNHLPlayers = exports.convertNHLPlayersToCSV = void 0;
exports.scrapeNhlRoster = scrapeNhlRoster;
var _convertArrayToCsv = require("convert-array-to-csv");
var _fs = _interopRequireDefault(require("fs"));
var _utils = require("../utils/utils.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
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
      const data = await response.json().then(res => [...res.forwards, ...res.defensemen, ...res.goalies]).then(res => res.map(player => {
        return {
          ...player,
          hrID: null,
          hdbID: null,
          verified: false
        };
      }));
      await delay(3);
      yield {
        year,
        data
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
const scrapeNHLPlayers = async () => {
  const startTime = new Date();

  // decide which team to scrape rosters from
  const allTeams = JSON.parse((0, _utils.readFile)(`./src/player-data/nhl-id-scraping.json`));
  const remainingTeamsToScrape = allTeams.filter(team => team.isActive === true).filter(team => Object.keys(team.data).length === 0 && team.data.constructor === Object);
  console.log("Remaining teams to scrape:", remainingTeamsToScrape);
  const teamToScrape = allTeams
  // search only the active teams (temporary, need to remove for historical teams)
  .filter(team => team.isActive === true)
  // teams with a franchise start date
  .filter(team => team.start !== null)
  // check if there's any scraped data stored in the team object
  .find(team => Object.keys(team.data).length === 0 && team.data.constructor === Object);

  // console.log(teamToScrape);

  if (!teamToScrape) {
    throw new Error("There are no more teams to scrape");
  }
  let rosters = {};
  let temp = [];
  for await (const roster of scrapeNhlRoster(teamToScrape.abbreviation, teamToScrape.start)) {
    rosters = {
      ...rosters,
      [roster.year]: roster.data
    };
  }
  const endTime = new Date();
  const timeElapsed = (endTime - startTime) / 1000;
  console.log("timeElapsed:", timeElapsed);
  const result = {
    ...teamToScrape,
    data: rosters,
    scrapeTime: timeElapsed
  };
  const newTeamArray = allTeams.map(team => team.id === result.id ? result : team);
  (0, _utils.writeFile)("./src/player-data/nhl-id-scraping.json", newTeamArray);
};

// Used to delay the time between fetches, so we don't get blocked
exports.scrapeNHLPlayers = scrapeNHLPlayers;
const delay = seconds => new Promise(resolve => setTimeout(resolve, seconds * 1000));
const convertNHLPlayersToCSV = jsonFilePath => {
  const players = JSON.parse((0, _utils.readFile)(jsonFilePath)).map(player => {
    return {
      ...player,
      firstName: player.firstName.default,
      lastName: player.lastName.default,
      birthCity: player.birthCity?.default,
      birthStateProvince: player.birthStateProvince?.default,
      name: `${player.firstName.default} ${player.lastName.default}`
    };
  });
  const headings = ["id", "headshot", "firstName", "lastName", "sweaterNumber", "positionCode", "shootsCatches", "heightInInches", "weightInPounds", "heightInCentimeters", "weightInKilograms", "birthDate", "birthCity", "birthCountry", "birthStateProvince", "hrID", "hdbID", "verified", "name"];
  const csv = (0, _convertArrayToCsv.convertArrayToCSV)(players, {
    headings,
    separator: ","
  });
  _fs.default.writeFile("./src/player-data/nhl-id-scraping-unique.csv", csv, err => {
    if (err) {
      console.log(err);
    }
  });
};
exports.convertNHLPlayersToCSV = convertNHLPlayersToCSV;