const chalk = require("chalk");
const cron = require("node-cron");
import { getNextYear, readFile, writeFile } from "./utils/utils.js";
import { convertArrayToCSV } from "convert-array-to-csv";
import fs from "fs";

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

// fs.writeFile("./public/scraped-data/draft-results-flat.csv", test, (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("worked");
// });

/* 
  getDraftResults: Takes a year and returns all draft picks from that year, with information from the NHL.com API
    year: The year to scrape
*/
const getDraftResults = async (year) => {
  const url = DRAFT_LIST_URL + year;
  let response = await fetch(url);
  let data = await response.json();
  return data;
};

const fetchDraftYear = async (fileToWriteTo) => {
  const seasons = JSON.parse(readFile(fileToWriteTo));
  const yearToScrape = getNextYear(seasons);
  console.log(chalk.yellow.bgBlue(`Trying to fetch: ${yearToScrape}`));
  seasons[yearToScrape] = await getDraftResults(yearToScrape).then(
    (results) => results.data
  );

  writeFile(fileToWriteTo, seasons);
};

export { fetchDraftYear };
