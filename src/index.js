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

// console.log(latinize("Paul Gagné"));

// missing hr: 633, hdb: 1205
// 0,

const p = combineSiteIds(
  "./src/player-data/nhl-id-scraping-unique.json",
  "./src/player-data/results/hdb-player-ids.json",
  "./src/player-data/results/hr-player-id.json"
);

const missingHR = p.filter((player) => player.hrID === null);
const missingHDB = p.filter((player) => player.hdbID === null);

console.log("Total:", p.length);
console.log(p[0]);
console.log("Missing HR:", missingHR.length);
writeFile("./src/player-data/results/hr-missing.json", missingHR);
console.log("Missing HDB:", missingHDB.length);
writeFile("./src/player-data/results/hdb-missing.json", missingHDB);

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
//   "goalHornSong",
//   "isActive",
//   "start",
//   "end",
// ];

// const temp = teams.map((team) => {
//   return {
//     ...team,
//     nicknames: team.nicknames.join("/"),
//     colors: team.colors.join("/"),
//   };
// });

// const csv = convertArrayToCSV(temp, {
//   headings,
//   separator: ",",
// });

// // writeFile(`./src/player-data/nhl-team-ids.csv`, csv);
// fs.writeFile("./src/player-data/nhl-team-ids.csv", csv, (err) => {
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

// *******************************************
// Add duplicate players with hdbID to main player list
// *******************************************
// import { addHdbIDToAll } from "./utils/hockey-db-id-scraper.js";
// // import { hdbPlayers } from "../public/raw-mock-data/hockeydb/res.js";
// import { players } from "./player-nhl-id.js";
// import { hdbPlayers } from "./res.js";
// import { hrPlayers } from "./hr-player-id-copy.js";
// // 183 duplicates
// const duplicatePlayers = JSON.parse(
//   fs.readFileSync("./src/duplicate-ids-copy2.json", "utf8")
// );

// // console.log(hdbPlayers.length);

// const findPlayer = (id) => {
//   return duplicatePlayers.find((player) => player.id === id);
// };

// const findHdbPlayer = (name) => {
//   return hdbPlayers.find((player) => player.name === name);
// };

// // console.log(findHdbPlayer("Spencer Abbott"));

// const findHrPlayer = (name) => {
//   return hrPlayers.find((player) => player.name === name);
// };

// const addDuplicatePlayers = async () => {
//   // console.log("Duplicate players count:", duplicatePlayers.length);

//   const newPlayerArray = players.map((player) => {
//     const duplicatePlayer = findPlayer(player.id);
//     const hr = findHrPlayer(player.name);
//     const hdb = findHdbPlayer(player.name);
//     // console.log(hdb);

//     // hrID is the same?
//     const regularPlayer = {
//       ...player,
//       hrID: hr?.hrID || null,
//       birthDate: hdb?.birthDate || null,
//       hdbID: hdb?.hdbID || null,
//     };
//     return duplicatePlayer ? duplicatePlayer : regularPlayer;
//   });

//   // Total Players: 20238
//   // Players without hrID's: 10431
//   // Players with hrID's: 9807
//   // Players without birthDates: 12584
//   // Players without hdbID's: 12643

//   console.log("Total Players:", newPlayerArray.length);
//   console.log(
//     "Players without hrID's:",
//     newPlayerArray.filter((player) => player?.hrID === null).length
//   );
//   console.log(
//     "Players without birthDates:",
//     newPlayerArray.filter((player) => player?.birthDate === null).length
//   );
//   console.log(
//     "Players without hdbID's:",
//     newPlayerArray.filter((player) => player?.hdbID === null).length
//   );

//   fs.writeFileSync(
//     `./src/player-id.json`,
//     JSON.stringify(newPlayerArray),
//     (err) => {
//       if (err) throw err;
//       console.log("ERROR:", err);
//     }
//   );
// };

// console.log(findPlayer(8444998));
// addDuplicatePlayers();

// *******************************************
// END: Add duplicate players with hdbID to main player list
// *******************************************

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
