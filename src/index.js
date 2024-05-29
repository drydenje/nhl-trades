import { convertArrayToCSV } from "convert-array-to-csv";

import { fetchDraftYear, convertToCSV } from "./nhl-draft-scraping";
import fs from "fs";

// const DRAFT_RESULTS_JSON = `./public/scraped-data/draft-results.json`;
// fetchDraftYear(DRAFT_RESULTS_JSON);
// cron.schedule("*/5 * * * * *", fetchDraftYear);
// convertToCSV(DRAFT_RESULTS_JSON);
// writeCSVFile(`./public/scraped-data/draft-results-test.json`);

import { players } from "./player-nhl-id";
const headings = ["id", "name"];

const playerLines = players.map((line) => {
  return {
    id: line.id,
    name: line.name,
  };
});

const csv = convertArrayToCSV(playerLines, {
  headings,
  separator: ",",
});

fs.writeFile("./public/final-csv-files/player-nhl-ids.csv", csv, (err) => {
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
