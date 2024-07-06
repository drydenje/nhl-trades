"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scrapeNHLTeams = void 0;
exports.scrapeNhlRoster = scrapeNhlRoster;
var _fs = _interopRequireDefault(require("fs"));
var _utils = require("./utils/utils.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// const _ = require("lodash");

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
    // console.log(
    //   chalk.yellow.bgBlue(`Trying to scrape: [${teamToScrape}] -> ${year}`)
    // );
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
      year = year - 10001;
      yield data;
      await delay(3);
    }
  }
}
const scrapeNHLTeams = async () => {
  // decide which team to scrape rosters from
  const teamToScrape = JSON.parse((0, _utils.readFile)(`./src/player-data/nhl-id-scraping.json`))
  // search only the active teams (temporary, need to remove for historical teams)
  .filter(team => team.isActive === true)
  // teams with a franchise start date
  .filter(team => team.start !== null)
  // check if there's any scraped data stored in the team object
  .find(team => Object.keys(team.data).length === 0 && team.data.constructor === Object);

  // console.log(teamToScrape);

  const rosters = {};
  let temp = [];
  for await (const roster of scrapeNhlRoster(teamToScrape.abbreviation, teamToScrape.start)) {
    temp.push(roster);
    rosters[teamToScrape.start] = roster;
  }
  const result = {
    ...teamToScrape
    // teamToScrape[`data`]: rosters
  };
  (0, _utils.writeFile)("./rosterTest.json", temp);
};

// Used to delay the time between fetches, so we don't get blocked
exports.scrapeNHLTeams = scrapeNHLTeams;
const delay = function (ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
};