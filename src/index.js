import { convertArrayToCSV } from "convert-array-to-csv";

import { fetchDraftYear, convertToCSV } from "./nhl-draft-scraping";
import fs from "fs";

// const DRAFT_RESULTS_JSON = `./public/scraped-data/draft-results.json`;
// fetchDraftYear(DRAFT_RESULTS_JSON);
// cron.schedule("*/5 * * * * *", fetchDraftYear);
// convertToCSV(DRAFT_RESULTS_JSON);
// writeCSVFile(`./public/scraped-data/draft-results-test.json`);

import { addHrIdsToPlayerList } from "./utils/player-csv-prep";
import { players } from "./player-nhl-id";
import { hrPlayers } from "./hr-player-id-copy";
const headings = ["id", "name", "hrId"];

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

const result = addHrIdsToPlayerList(players, hrPlayers);

console.log("NHL id's:", players.length);
console.log("HR id's:", hrPlayers.length);

// console.log("Merged id's:", finalPlayers.length);
const missing = result.filter((player) => player.hrID === undefined);
console.log("Missing:", missing);

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
