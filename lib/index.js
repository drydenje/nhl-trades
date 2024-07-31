"use strict";

require("dotenv/config");
var _fs = _interopRequireDefault(require("fs"));
var _utils = require("./utils/utils.js");
var _nodeCron = _interopRequireDefault(require("node-cron"));
var _nhlTeamScraping = require("./teams/nhl-team-scraping");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/////////////////////////////////////////////
// Scraping NHL_ID
/////////////////////////////////////////////
//#region <NHL_ID>

// import { scrapeNHLPlayers } from "./player-data/nhl-id-scraping.js";

// (async function () {
//   while (true) {
//     await scrapeNHLPlayers();
//   }
// })();

// Convert NHL ids to CSV
//#endregion

/////////////////////////////////////////////
// Scraping Hockey Reference
/////////////////////////////////////////////
//#region <HOCKEY_REFERENCE>
// const hrPlayerResults = `./src/player-data/results/hr-player-id.json`;

// cron.schedule(
//   "*/5 * * * * *",
//   (path) => {
//     scrapeHRPlayers(hrPlayerResults);
//   },
//   [hrPlayerResults]
// );

// scrapeHRPlayers(hrPlayerResults);

// check finishing condition (it's trying to scrape a player)
// rename this to hrToCSV(), put in hr-id-scraping, remove from index.js
// convertToCSV();

//#endregion

/////////////////////////////////////////////
// Scraping HockeyDB
/////////////////////////////////////////////
//#region <HOCKEY_DB>

// const hdbPlayerResults = `./src/player-data/results/hdb-player-ids.json`;

// cron.schedule(
//   "*/5 * * * * *",
//   (path) => {
//     scrapeHDBPlayers(hdbPlayerResults);
//   },
//   [hdbPlayerResults]
// );

// scrapeHDBPlayers(hdbPlayerResults);

// check finishing condition (it's trying to scrape a player)
// rename this to hrToCSV(), put in hr-id-scraping, remove from index.js
// convertToCSV();

//#endregion

/////////////////////////////////////////////
// Convert NHL Teams to CSV ✅
/////////////////////////////////////////////
//#region <NHL_TEAMS>
// Todo: Save to ./results/teams.json
// Todo: Add colours, logo url, and isActive, start, end? to teams after scrape
// Todo: Save to csv file for database insertion

(async function () {
  await (0, _nhlTeamScraping.scrapeNhlTeams)();
  // teamsToCSV();
})();

//#endregion

/////////////////////////////////////////////
// Convert NHL Trades to CSV
/////////////////////////////////////////////
//#region <NHL_TRADES>
//#endregion