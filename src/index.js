const chalk = require("chalk");
const cron = require("node-cron");
const BASE_URL = `https://www.nhltradetracker.com/user/trade_list_by_season`;
const HOCKEY_REFERENCE_URL = `https://www.hockey-reference.com/players`;

import { getNextYear, readFile, writeFile } from "./utils/utils.js";
const DRAFT_LIST_URL = `https://records.nhl.com/site/api/draft?cayenneExp=draftYear=`;
const DRAFT_YEAR_START = "1963";
const DRAFT_YEAR_END = "2023";

const getDraftResults = async (year) => {
  const url = DRAFT_LIST_URL + year;
  let response = await fetch(url);
  let data = await response.json();
  return data;
};

const fetchDraftYear = async () => {
  const seasons = JSON.parse(
    readFile(`./public/scraped-data/draft-results.json`)
  );
  const yearToScrape = getNextYear(seasons);
  console.log(chalk.yellow.bgBlue(`Trying to fetch: ${yearToScrape}`));
  seasons[yearToScrape] = await getDraftResults(yearToScrape).then(
    (results) => results.data
  );

  writeFile("./public/scraped-data/draft-results.json", seasons);
};

// cron.schedule("*/5 * * * * *", fetchDraftYear);

// combining multiple arrays into one for each year of trade data
// const cleanData = () => {
//   const arr = JSON.parse(readFile(`./public/scraped-data/draft-results.json`));
//   let merged = "";
//   let res = "";
//   for (const [key, value] of Object.entries(arr)) {
//     res = jsonToCsv(arr[key]);
// console.log(res[0]);
// let merged = [];
// arr[key].forEach((item) => {
// const lineItem = jsonToCsv(item);
// const lineItem =
//   `${item.playerName}` +
//   ",\n/n" +
//   `${item.draftYear},` +
//   `${item.id},` +
//   `${item.triCode},` +
//   `${item.teamPickHistory},` +
//   `${item.supplementalDraft},` +
//   `${item.overallPickNumber},` +
//   `${item.pickInRound},` +
//   `${item.notes},` +
//   `${item.draftedByTeamId},` +
//   `${item.draftDate}`;
// console.log(lineItem);
// merged = lineItem;
// item.forEach((trade) => {
// merged.push();
// });
// });
// arr[key] = merged;
// }

// writeFile(`./public/scraped-data/draft-results-flat.csv`, res);
// };
// function jsonToCsv(jsonData) {
//   let csv = "";

//   // console.log(jsonData[1]);

//   // Extract headers
//   const headers = Object.keys(jsonData[0]);
//   csv += headers.join(",") + "\n";

//   // Extract values
//   // console.log(jsonData);
//   jsonData.forEach((obj) => {
//     const values = headers.map((header) => obj[header]);
//     csv += values.join(",") + "\n";
//   });

//   return csv;
// }

// cleanData();

// Convert JSON to CSV
const csvData = jsonToCsv(jsonData);

console.log(csvData);
