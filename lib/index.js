"use strict";

require("dotenv/config");
var _fs = _interopRequireDefault(require("fs"));
var _utils = require("./utils/utils.js");
var _nodeCron = _interopRequireDefault(require("node-cron"));
var _nhlDraftScraping = require("./draft-picks/nhl-draft-scraping.js");
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
// Scraping NHL_DRAFT_PICKS
/////////////////////////////////////////////
//#region <NHL_DRAFT_PICKS>
// todo: convert them into a csv

// (async function () {
// let keepScraping = true;
// while (keepScraping) {
//   keepScraping = await scrapeDraftPicks();
// }
const temp = (0, _nhlDraftScraping.convertDraftPicksToCSV)([{
  id: 7051,
  ageInDays: 6072,
  ageInDaysForYear: 228,
  ageInYears: 16,
  amateurClubName: "St. Michael's Juveniles",
  amateurLeague: null,
  birthDate: "1946-10-20",
  birthPlace: "Barrie, ON  CAN",
  countryCode: "CAN",
  csPlayerId: null,
  draftDate: "1963-06-05",
  draftMasterId: 1,
  draftProspect: null,
  draftYear: 1963,
  draftedByTeamId: 8,
  firstName: "Garry",
  franchiseTeam: {
    franchise: {
      mostRecentTeamId: 8,
      teamCommonName: "Canadiens",
      teamPlaceName: "Montréal"
    }
  },
  height: 72,
  lastName: "Monahan",
  notes: null,
  overallPickNumber: 1,
  pickInRound: 1,
  player: {
    id: 8447883,
    birthCountry: "CAN",
    birthStateProvince: "ON",
    firstName: "Garry",
    lastName: "Monahan",
    onRoster: "N",
    position: "L",
    yearsPro: null
  },
  playerId: 8447883,
  playerName: "Garry Monahan",
  position: "LW",
  removedOutright: "N",
  removedOutrightWhy: null,
  roundNumber: 1,
  shootsCatches: "L",
  supplementalDraft: "N",
  team: {
    id: 8,
    commonName: "Canadiens",
    fullName: "Montréal Canadiens",
    placeName: "Montréal",
    triCode: "MTL"
  },
  teamPickHistory: "MTL",
  triCode: "MTL",
  weight: 199
}]);
console.log("TEMP:", temp);
// })();

// Convert NHL picks to CSV

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
// Scrape NHL Teams and convert to CSV ✅
/////////////////////////////////////////////
//#region <NHL_TEAMS>

// import { scrapeNhlTeams, teamsToCSV } from "./teams/nhl-team-scraping";

// (async function () {
//   // scrape the NHL Team list
//   await scrapeNhlTeams()
//     // Save the teams to a CSV File
//     .then((teams) => teamsToCSV(teams));
// })();

//#endregion

/////////////////////////////////////////////
// Convert NHL Trades to CSV
/////////////////////////////////////////////
//#region <NHL_TRADES>
//#endregion