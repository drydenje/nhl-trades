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

// console.log(latinize("Paul Gagné"));

// missing hr: 633, hdb: 1204
// 512, 910

// const p = combineSiteIds(
//   "./src/player-data/nhl-id-scraping-unique.json",
//   "./src/player-data/results/hdb-player-ids.json",
//   "./src/player-data/results/hr-player-id.json"
// );

// const missingHR = p.filter((player) => player.hrID === null);
// const missingHDB = p.filter((player) => player.hdbID === null);

// console.log("Total:", p.length);
// // console.log(p[0]);
// console.log("Missing HR:", missingHR.length);
// writeFile("./src/player-data/results/hr-missing.json", missingHR);
// console.log("Missing HDB:", missingHDB.length);
// writeFile("./src/player-data/results/hdb-missing.json", missingHDB);

//check name, then add other options if there are more than one?

// console.log(p.find((player) => player.id === 8446993));

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
// import { convertArrayToCSV } from "convert-array-to-csv";

// const players = JSON.parse(
//   readFile(`./src/player-data/nhl-id-scraping-unique.json`)
// ).map((player) => {
//   return {
//     ...player,
//     firstName: player.firstName.default,
//     lastName: player.lastName.default,
//     birthCity: player.birthCity?.default,
//     birthStateProvince: player.birthStateProvince?.default,
//     name: `${player.firstName.default} ${player.lastName.default}`,
//   };
// });

// const headings = [
//   "id",
//   "headshot",
//   "firstName",
//   "lastName",
//   "sweaterNumber",
//   "positionCode",
//   "shootsCatches",
//   "heightInInches",
//   "weightInPounds",
//   "heightInCentimeters",
//   "weightInKilograms",
//   "birthDate",
//   "birthCity",
//   "birthCountry",
//   "birthStateProvince",
//   "hrID",
//   "hdbID",
//   "verified",
//   "name",
// ];

// const csv = convertArrayToCSV(players, {
//   headings,
//   separator: ",",
// });

// fs.writeFile("./src/player-data/nhl-id-scraping-unique.csv", csv, (err) => {
//   if (err) {
//     console.log(err);
//   }
// });

/////////////////////////////////////////////
// Convert NHL Teams to CSV
/////////////////////////////////////////////
// import { convertArrayToCSV } from "convert-array-to-csv";
// // import teams from "../public/scraped-data/team-nhl-id";

// import { teams } from "./player-data/team-nhl-id";

// const headings = [
//   "id",
//   "name",
//   "abbreviation",
//   "nicknames",
//   "colors",
//   "logo",
//   "goalHorn",
//   // "goalHornSong",
//   "isActive",
//   "start",
//   "end",
// ];

// const temp = teams.map((team) => {
//   delete team.nicknames;
//   delete team.goalHorn;
//   delete team.goalHornSong;
//   return {
//     ...team,
//     // removing things we don't want
//     // nicknames: null,
//     colors: team.colors.join("/"),
//     // goalHorn: null,
//     // goalHornSong: null,

//     // to get around csv quotation problem
//     // nicknames: team.nicknames.join("/"),
//     // colors: team.colors.join("/"),
//   };
// });

// console.log(temp[0]);

// const csv = convertArrayToCSV(temp, {
//   headings,
//   separator: ",",
// });

// // writeFile(`./src/player-data/nhl-team-ids.csv`, csv);
// fs.writeFile("./src/csv-data/nhl-team-ids.csv", csv, (err) => {
//   if (err) {
//     console.log(err);
//   }
// });

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

// import { addHrIdsToPlayerList } from "./utils/player-csv-prep";
// import { players } from "./player-nhl-id";
// import { hrPlayers } from "./hr-player-id-copy";
// const headings = ["id", "name", "hrId"];

// two "Greg Adams"

// const players = [
//   {
//     id: 8444924,
//     name: "Jim Anderson",
//   },
//   {
//     id: 8444926,
//     name: "Murray Anderson",
//   },
//   {
//     id: 8444995,
//     name: "Pete Backor",
//   },
//   {
//     id: 8444893,
//     name: "Jim Agnew",
//   },
//   {
//     id: 8446831,
//     name: "Stephane Fiset",
//   },
//   {
//     id: 8446831,
//     name: "Stephane Fiset",
//   },
// ];

// const hrPlayers = [
//   { name: "Jim Anderson", hrID: "anderji01" },
//   { name: "Murray Anderson", hrID: "andermu01" },
//   { name: "Pete Backor", hrID: "backope01" },
//   { name: "Mats Sundin", hrID: "sundima01" },
//   { name: "Stéphane Fiset", hrID: "fisetst01" },
//   // { name: "Stéphane Fiset", hrID: "fisetst01" },
// ];
// console.log("Adding Hr Id's");
// console.log("NHL id's:", players.length);
// console.log("HR id's:", hrPlayers.length);

// const result = addHrIdsToPlayerList(players, hrPlayers);
// 10:30

// writeFile(`./public/scraped-data/hr-and-nhl-player-id.json`, result);

// const arrToSort = JSON.parse(
//   readFile(`./public/scraped-data/duplicate-ids.json`)
// );
// // console.log(typeof arrToSort);
// const res = arrToSort.sort((a, b) => {
//   if (a.name > b.name) {
//     return 1;
//   }
//   if (a.name < b.name) {
//     return -1;
//   }
//   return 0;
// });
// writeFile(`./public/scraped-data/duplicate-ids.json`, res);

// console.log("Merged id's:", finalPlayers.length);

// const missing = result.filter((player) => player.hrID === undefined);
// console.log("Missing:", missing);

// const csv = convertArrayToCSV(finalPlayers, {
//   headings,
//   separator: ",",
// });

// fs.writeFile("./public/final-csv-files/player-nhl-ids-2.csv", csv, (err) => {
//   if (err) {
//     console.log(err);
//   }
//   // console.log(`Data written to: ${csvFilePath}`);
// });

// import { teams } from "./team-nhl-id";
// const headings = [
//   "id",
//   "name",
//   "abbreviation",
//   "nicknames",
//   "colors",
//   "logo",
//   "isActive",
// ];
// const teamLines = teams.map((line) => {
//   return {
//     id: line.id,
//     name: line.name,
//     abbreviation: line.abbreviation,
//     nicknames: line.nicknames.toString(),
//     colors: line.colors.toString(),
//     logo: line.logo,
//     isActive: line.isActive,
//   };
// });
// const csv = convertArrayToCSV(teamLines, {
//   headings,
//   separator: ",",
// });

// fs.writeFile("./public/final-csv-files/team-nhl-ids.csv", csv, (err) => {
//   if (err) {
//     console.log(err);
//   }
//   // console.log(`Data written to: ${csvFilePath}`);
// });

// console.log(csv);

// combining multiple arrays into one for each year of trade data
