"use strict";

var _convertArrayToCsv = require("convert-array-to-csv");
var _nhlDraftScraping = require("./nhl-draft-scraping");
var _fs = _interopRequireDefault(require("fs"));
var _hrPlayerIdCopy = require("./hr-player-id-copy");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// const DRAFT_RESULTS_JSON = `./public/scraped-data/draft-results.json`;
// fetchDraftYear(DRAFT_RESULTS_JSON);
// cron.schedule("*/5 * * * * *", fetchDraftYear);
// convertToCSV(DRAFT_RESULTS_JSON);
// writeCSVFile(`./public/scraped-data/draft-results-test.json`);
// import { players } from "./player-nhl-id";
const headings = ["id", "name", "hrId"];
const players = [{
  id: 8444924,
  name: "Jim Anderson"
}, {
  id: 8444926,
  name: "Murray Anderson"
}, {
  id: 8444995,
  name: "Pete Backor"
}, {
  id: 8444893,
  name: "Jim Agnew"
}];
const hr = [{
  name: "Jim Anderson",
  hrID: "anderji01"
}, {
  name: "Murray Anderson",
  hrID: "andermu01"
}, {
  name: "Pete Backor",
  hrID: "backope01"
}];

// const h = new Set(hr);
// const i = new Set(players);
// const u = h.union(i);
// console.log(h.union(i));
const array1 = [{
  id: 1,
  name: "John"
}, {
  id: 2,
  name: "Jane"
}];
const array2 = [{
  hrID: "anderji01",
  name: "Jane"
}, {
  id: 3,
  name: "Doe"
}];

// Merging arrays with unique values using Map and Set
const map = new Map([...array1, ...array2].map(obj => [obj.name, obj]));
const mergedArray = Array.from(map.values());
console.log(mergedArray);

// two 'Ron Anderson's
// const test = hrPlayers["a"].filter((player) => player.name === "Ron Anderson");

// players.forEach((player) => {
//   const test = hrPlayers["a"].filter(
//     (hrPlayer) => hrPlayer.name === player.name
//   );

//   const obj = {
//     id: player.id,
//     name: player.name,
//     ...(test[0] ? { hrID: test[0].hrID } : null),
//   };

//   // might have multiple similar names
//   // console.log(test);
//   console.log(obj);
// });

// if (test.length === 1) {
//   console.log(test[0].hrID);
// }

// const playerLines = players.map((line) => {

//   return {
//     id: line.id,
//     name: line.name,
//   };
// });

// const csv = convertArrayToCSV(playerLines, {
//   headings,
//   separator: ",",
// });

// fs.writeFile("./public/final-csv-files/player-nhl-ids.csv", csv, (err) => {
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