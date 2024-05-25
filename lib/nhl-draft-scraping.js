"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchDraftYear = void 0;
var _utils = require("./utils/utils.js");
var _convertArrayToCsv = require("convert-array-to-csv");
const chalk = require("chalk");
const cron = require("node-cron");
// import { writeFile } from "fs";

const DRAFT_LIST_URL = `https://records.nhl.com/site/api/draft?cayenneExp=draftYear=`;
const DRAFT_YEAR_START = "1963";
const DRAFT_YEAR_END = "2023";

// const header = ["id", "name", "age", "department"];
// const jsonData = [
//   {
//     id: 1,
//     name: "John Doe",
//     age: 300,
//     department: "Engineering",
//   },
//   {
//     id: 2,
//     name: "Jane Smith",
//     age: 28,
//     department: "Marketing",
//   },
// ];

// const test = convertArrayToCSV(jsonData, {
//   header,
//   separator: ",",
// });

// writeFile("./public/scraped-data/draft-results-flat.csv", test, (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("worked");
// });

/* 
  getDraftResults: Takes a year and returns all draft picks from that year, with information from the NHL.com API
    year: The year to scrape
*/
const getDraftResults = async year => {
  const url = DRAFT_LIST_URL + year;
  let response = await fetch(url);
  let data = await response.json();
  return data;
};
const fetchDraftYear = async fileToWriteTo => {
  const seasons = JSON.parse((0, _utils.readFile)(fileToWriteTo));
  const yearToScrape = (0, _utils.getNextYear)(seasons);
  console.log(chalk.yellow.bgBlue(`Trying to fetch: ${yearToScrape}`));
  seasons[yearToScrape] = await getDraftResults(yearToScrape).then(results => results.data);
  (0, _utils.writeFile)(fileToWriteTo, seasons);
};
exports.fetchDraftYear = fetchDraftYear;