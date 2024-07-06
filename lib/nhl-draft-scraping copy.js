"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchDraftYear = exports.convertToCSV = void 0;
var _utils = require("./utils/utils.js");
var _convertArrayToCsv = require("convert-array-to-csv");
var _fs = _interopRequireDefault(require("fs"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const chalk = require("chalk");
const cron = require("node-cron");
const DRAFT_LIST_URL = `https://records.nhl.com/site/api/draft?cayenneExp=draftYear=`;
const DRAFT_YEAR_START = "1963";
const DRAFT_YEAR_END = "2023";
const convertToCSV = jsonFilePath => {
  const draftResults = JSON.parse((0, _utils.readFile)(jsonFilePath));
  let merged = [];
  for (const [key, value] of Object.entries(draftResults)) {
    const year = key;
    merged = [...merged, ...draftResults[year]];
  }
  const headings = ["id", "playerId", "draftedByTeamId", "teamPickHistory"];
  const draftPickLines = merged.map(line => {
    return {
      id: line.id,
      playerId: line.playerId,
      draftedByTeamId: line.draftedByTeamId,
      teamPickHistory: line.teamPickHistory
    };

    // `${item.playerName}` +
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
  });
  const csvResult = (0, _convertArrayToCsv.convertArrayToCSV)(draftPickLines, {
    headings,
    separator: ","
  });
  const csvFilePath = jsonFilePath.replace(".json", ".csv");
  _fs.default.writeFile(csvFilePath, csvResult, err => {
    if (err) {
      console.log(err);
    }
    console.log(`Data written to: ${csvFilePath}`);
  });
};

/* 
  getDraftResults: Takes a year and returns all draft picks from that year, with information from the NHL.com API
    year: The year to scrape
*/
exports.convertToCSV = convertToCSV;
const getDraftResults = async year => {
  const url = DRAFT_LIST_URL + year;
  let response = await fetch(url);
  let data = await response.json();
  return data;
};

/*
  fetchDraftYear: Takes a path to a file, checks the object within it for which year to fetch, writes the returned data to the passed file.
*/
const fetchDraftYear = async fileToWriteTo => {
  const seasons = JSON.parse((0, _utils.readFile)(fileToWriteTo));
  const yearToScrape = (0, _utils.getNextYear)(seasons);
  console.log(chalk.yellow.bgBlue(`Trying to fetch: ${yearToScrape}`));
  seasons[yearToScrape] = await getDraftResults(yearToScrape).then(results => results.data);
  (0, _utils.writeFile)(fileToWriteTo, seasons);
};
exports.fetchDraftYear = fetchDraftYear;
function jsonToCsv(jsonData) {
  let csv = "";

  // Extract headers
  const headers = Object.keys(jsonData[0]);
  csv += headers.join(",") + "\n";

  // Extract values
  jsonData.forEach(obj => {
    const values = headers.map(header => obj[header]);
    csv += values.join(",") + "\n";
  });
  return csv;
}