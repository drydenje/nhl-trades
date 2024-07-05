"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scrapeNhlRoster = exports.scrapeNHLTeams = void 0;
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

const scrapeNhlRoster = (teamToScrape, yearToScrape) => async function* () {
  let year = yearToScrape;
  const TEAM_ROSTER_URL = `https://api-web.nhle.com/v1/roster/${teamToScrape}/${year}`;
  console.log(chalk.yellow.bgBlue(`Trying to scrape: [${teamToScrape}] -> ${year}`));
  const result = await fetch(TEAM_ROSTER_URL).then(res => res.json()).then(res => [...res.forwards, ...res.defensemen, ...res.goalies]).then(res => res.map(player => {
    return {
      ...player,
      hrID: null,
      hdbID: null,
      verified: false
    };
  }));
  yield* result;
  // set the next url to scrape

  //

  // return result;
};
exports.scrapeNhlRoster = scrapeNhlRoster;
const scrapeNHLTeams = async () => {
  // decide which team to scrape rosters from
  const teamToScrape = JSON.parse((0, _utils.readFile)(`./src/player-data/nhl-id-scraping.json`))
  // search only the active teams (temporary, need to remove for historical teams)
  .filter(team => team.isActive === true)
  // teams with a franchise start date
  .filter(team => team.start !== null)
  // check if there's any scraped data stored in the team object
  .find(team => Object.keys(team.data).length === 0 && team.data.constructor === Object);
  console.log(teamToScrape);

  // .then((team) => {
  //   return {
  //     ...team,
  //     // data: {
  //     //   [Symbol.asyncIterator]: scrapeNhlRoster(
  //     //     team.abbreviation,
  //     //     team.start
  //     //   ),
  //     // },
  //   };
  // });

  const roster = {
    data: {
      [Symbol.asyncIterator]: scrapeNhlRoster(teamToScrape.abbreviation, teamToScrape.start)
    }
  };
  const results = [];
  (async function* () {
    for await (const players of roster.data) {
      results.push(players);
      yield results;
    }
  })();
  console.log(results);

  // for startdate, counting backwards until you get a 404 response
  // fetch the roster
  // subtract 10,001 from the current year to scrape after each fetch

  // let years = [];
  // console.log(teamToScrape);

  // const getTeamRoster = (endpoint) =>
  //   async function* () {
  //     const year = "20212022";
  //     console.log(chalk.yellow.bgBlue(`Trying to scrape:${year}`));
  //     const response = await scrapeNhlRoster(teamToScrape.abbreviation, year);
  //   };

  //
  // years.forEach(async (year) => {
  //   console.log(chalk.yellow.bgBlue(`Trying to scrape:${year}`));
  //   teamToScrape.data[year] = await scrapeNhlRoster(
  //     teamToScrape.abbreviation,
  //     year
  //   );
  //   await delay(10000);
  //   // await
  //   // then((roster) => {
  //   //    = roster;
  //   // });
  // });

  // +10,001 to cycle each year (or subtract and check for failure)
  // .map((team) => {
  //   return {
  //     ...team,
  //     start: null,
  //     end: null,
  //     data: [],
  //   };
  // });

  // console.log(teamToScrape);
  // console.log("years:", years);
};
exports.scrapeNHLTeams = scrapeNHLTeams;
const delay = function (ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
};