"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scrapeNhlRoster = exports.scrapeNHLTeams = void 0;
var _fs = _interopRequireDefault(require("fs"));
var _utils = require("./utils/utils.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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
  const teams = JSON.parse((0, _utils.readFile)(`./src/player-data/nhl-id-scraping.json`)).filter(team => team.isActive === true).filter(team => team.start !== null).filter(team => team.data.length === 0);
  // .map((team) => {
  //   return {
  //     ...team,
  //     start: null,
  //     end: null,
  //     data: [],
  //   };
  // });

  console.log(teams);
  console.log(teams.length);
};
exports.scrapeNHLTeams = scrapeNHLTeams;