"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scrapeNhlRoster = exports.scrapeNHLTeams = void 0;
var _fs = _interopRequireDefault(require("fs"));
var _utils = require("./utils/utils.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const _ = require("lodash");
const scrapeNhlRoster = async (teamToScrape, yearToScrape) => {
  const TEAM_ROSTER_URL = `https://api-web.nhle.com/v1/roster/${teamToScrape}/${yearToScrape}`;
  const result = await fetch(TEAM_ROSTER_URL).then(res => res.json()).then(res => [...res.forwards, ...res.defensemen, ...res.goalies]).then(res => res.map(player => {
    return {
      ...player,
      hrID: null,
      hdbID: null,
      verified: false
    };
  }));
  return result;
};
exports.scrapeNhlRoster = scrapeNhlRoster;
const scrapeNHLTeams = () => {
  // check
  const teamToScrape = JSON.parse((0, _utils.readFile)(`./src/player-data/nhl-id-scraping.json`)).filter(team => team.isActive === true).filter(team => team.start !== null).find(team => team.data.length === 0);

  // for enddate to startdate
  // fetch the roster

  // Array.from({ length: parseInt(teamToScrape.start) }, (v, k) => k - 10001);

  let years = [];
  console.log(teamToScrape);
  for (let year = parseInt(teamToScrape.end); year >= parseInt(teamToScrape.start); year = year - 10001) {
    console.log(year);
    years.push(`${year}`);
  }
  teamToScrape.data["20212022"] = {
    test: "testy"
  };
  // _.range(
  //   20232024,
  //   // parseInt(teamToScrape.end),
  //   20172018,
  //   // parseInt(teamToScrape.start),
  //   -10001
  // );
  // const years = _.range(teamToScrape.end, teamToScrape.start, 10001);

  // Array.from({ length: 5 }, (v, k) => k + 1);
  // [1,2,3,4,5]

  // +10,001 to cycle each year (or subtract and check for failure)
  // .map((team) => {
  //   return {
  //     ...team,
  //     start: null,
  //     end: null,
  //     data: [],
  //   };
  // });

  console.log(teamToScrape);
  console.log("var:", years);
};
exports.scrapeNHLTeams = scrapeNHLTeams;