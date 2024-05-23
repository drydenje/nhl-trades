const chalk = require("chalk");
const cron = require("node-cron");
const BASE_URL = `https://www.nhltradetracker.com/user/trade_list_by_season`;
const HOCKEY_REFERENCE_URL = `https://www.hockey-reference.com/players`;

import { readFile, writeFile } from "./utils/utils.js";
const DRAFT_LIST_URL = `https://records.nhl.com/site/api/draft?cayenneExp=draftYear=`;
const DRAFT_YEAR_START = "1963";
const DRAFT_YEAR_END = "2023";
// const DRAFT_YEAR_START = '1963';
// const DRAFT_YEAR_END = '2023';

const getDraftResults = async (year) => {
  // try {
  const url = DRAFT_LIST_URL + year;
  let response = await fetch(url);
  let data = await response.json();
  return data;
  // } catch (error) {
  //   console.error(error);
  // }
};

getDraftResults("2016").then((data) => console.log(data));

// function start() {
//   console.log(new Date().getTime() / 1000);
// }

// cron.schedule("* * * * *", start);
