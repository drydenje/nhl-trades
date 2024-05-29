"use strict";

var _convertArrayToCsv = require("convert-array-to-csv");
var _nhlDraftScraping = require("./nhl-draft-scraping");
var _fs = _interopRequireDefault(require("fs"));
var _playerNhlId = require("./player-nhl-id");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// const DRAFT_RESULTS_JSON = `./public/scraped-data/draft-results.json`;
// fetchDraftYear(DRAFT_RESULTS_JSON);
// cron.schedule("*/5 * * * * *", fetchDraftYear);
// convertToCSV(DRAFT_RESULTS_JSON);
// writeCSVFile(`./public/scraped-data/draft-results-test.json`);
const headings = ["id", "name"];
const playerLines = _playerNhlId.players.map(line => {
  return {
    id: line.id,
    name: line.name
  };
});
const csv = (0, _convertArrayToCsv.convertArrayToCSV)(playerLines, {
  headings,
  separator: ","
});
_fs.default.writeFile("./public/final-csv-files/player-nhl-ids.csv", csv, err => {
  if (err) {
    console.log(err);
  }
  // console.log(`Data written to: ${csvFilePath}`);
});

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