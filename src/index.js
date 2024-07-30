import "dotenv/config";
import fs from "fs";
import { combineSiteIds, writeFile, readFile } from "./utils/utils.js";
import cron from "node-cron";
import latinize from "latinize";

// import { fetchDraftYear, convertToCSV } from "./nhl-draft-scraping.js";
import { scrapeHRPlayers } from "./player-data/hr-id-scraping.js";
import { scrapeHDBPlayers } from "./player-data/hockey-db-id-scraper.js";
// import { players } from "./player-data/player-nhl-id.js";
// import { scrapeNhlRoster, scrapeNHLTeams } from "./nhl-id-scraping.js";
// import { runScrape, getTeamRosters } from "./experiment.js";
////////////////
var neo4j = require("neo4j-driver");
(async () => {
  let driver;

  try {
    driver = neo4j.driver(
      process.env.NEO4J_URI,
      neo4j.auth.basic(process.env.NEO4J_USERNAME, process.env.NEO4J_PASSWORD)
    );
    const serverInfo = await driver.getServerInfo();
    console.log("Connection established");
    console.log(serverInfo);

    // Get the name of all 42 year-olds
    const { records, summary, keys } = await driver.executeQuery(
      "MATCH (t:Team {isActive: true}) RETURN t.name AS name",
      { database: "neo4j" }
    );

    // Summary information
    console.log(
      `>> The query ${summary.query.text} ` +
        `returned ${records.length} records ` +
        `in ${summary.resultAvailableAfter} ms.`
    );

    // console.log(records);
    // Loop through results and do something with them
    console.log(">> Results");
    for (let record of records) {
      console.log(record.get("name"));
    }
  } catch (err) {
    console.log(`Connection error\n${err}\nCause: ${err.cause}`);
  } finally {
    driver.close();
  }
})();
/////////////////////

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
import { convertNHLPlayersToCSV } from "./player-data/nhl-id-scraping.js";

const jsonFilePath = "";
convertNHLPlayersToCSV(jsonFilePath);

/////////////////////////////////////////////
// Convert NHL Teams to CSV
/////////////////////////////////////////////

/////////////////////////////////////////////
// Convert NHL Trades to CSV
/////////////////////////////////////////////
// const trades = JSON.parse(readFile(`./src/trades/trades.json`));

// let result = [];
// Object.entries(trades).forEach(([key, value]) => {
//   result.push(value);
// });

// result = result.flat();

// console.log(result.length);
// console.log(result[0]);
/////////////
