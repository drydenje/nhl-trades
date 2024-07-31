import "dotenv/config";
import fs from "fs";
import { combineSiteIds, writeFile, readFile } from "./utils/utils.js";
import cron from "node-cron";

/////////////////////////////////////////////
// Scraping Hockey Reference
/////////////////////////////////////////////
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

/////////////////////////////////////////////
// Scraping HockeyDB
/////////////////////////////////////////////
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

/////////////////////////////////////////////
// Scraping NHL Rosters
/////////////////////////////////////////////
// (async function () {
//   while (true) {
//     await scrapeNHLTeams();
//   }
// })();

/////////////////////////////////////////////
// Convert NHL ids to CSV
/////////////////////////////////////////////
// import { convertNHLPlayersToCSV } from "./player-data/nhl-id-scraping.js";

// const jsonFilePath = "";
// convertNHLPlayersToCSV(jsonFilePath);

/////////////////////////////////////////////
// Convert NHL Teams to CSV
/////////////////////////////////////////////

/////////////////////////////////////////////
// Convert NHL Trades to CSV
/////////////////////////////////////////////

/////////////
