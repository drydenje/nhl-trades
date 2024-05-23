"use strict";

var _utils = require("./utils/utils.js");
var _nhlTradeTracker = require("./utils/nhl-trade-tracker.js");
var _hockeyReferenceIdScraper = require("./utils/hockey-reference-id-scraper");
const chalk = require("chalk");
const cron = require("node-cron");
const BASE_URL = `https://www.nhltradetracker.com/user/trade_list_by_season`;
const HOCKEY_REFERENCE_URL = `https://www.hockey-reference.com/players`;
// const url = `https://www.hockeydb.com/ihdb/draft/nhl2023e.html`;

// const writeFile = require("./utils/utils");

// combining multiple arrays into one for each year of trade data
// const cleanData = () => {
//   const arr = JSON.parse(readFile(`./public/scraped-data/trades.json`));

//   for (const [key, value] of Object.entries(arr)) {
//     let merged = [];
//     arr[key].forEach((item) => {
//       item.forEach((trade) => {
//         merged.push(trade);
//       });
//     });
//     arr[key] = merged;
//   }

//   writeFile(`./public/scraped-data/trades.json`, arr);
// };
const scrapeYear = async () => {
  const seasons = JSON.parse((0, _utils.readFile)(`./public/scraped-data/trades.json`));
  const yearToScrape = (0, _utils.getNextYear)(seasons);
  console.log(chalk.yellow.bgBlue(`Trying to scrape: ${yearToScrape}`));
  seasons[yearToScrape] = await (0, _nhlTradeTracker.getAllTradesForYear)(yearToScrape, BASE_URL);
  // await console.log("yearToScrape:", yearToScrape);

  (0, _utils.writeFile)("./public/scraped-data/trades.json", seasons);
};
const scrapeHRPlayers = async () => {
  const players = JSON.parse((0, _utils.readFile)(`./public/scraped-data/hr-player-id.json`));
  const letterToScrape = (0, _utils.getNextYear)(players);
  if (letterToScrape) {
    console.log(chalk.yellow.bgBlue(`Trying to scrape: ${letterToScrape}`));
    // get the page, then getNameFromPage
    players[letterToScrape] = await (0, _hockeyReferenceIdScraper.getAllPlayerForLetter)(HOCKEY_REFERENCE_URL, letterToScrape);
    (0, _utils.writeFile)(`./public/scraped-data/hr-player-id.json`, players);
  }
};

// seasons["1977-78"] = [];
// await console.log("Seasons:", typeof seasons);

// const url = `${BASE_URL}/${year}/${page}`;
// console.log(path.relative());

// Instructions for scraping the raw data

// ✅ check which years haven't been scraped ( is the "2022-23" array empty?)
// ✅ select the most recent one
// ✅ load the page for the year (https://www.nhltradetracker.com/user/trade_list_by_season/2022-23/1)
// save all the trades to a temp variable.
//    - keep the data limited to the html markup of that trade
//    - the data can be refined after it's all been scraped
// ✅ determine the number of pages for that year
// visit each page and scrape the data, waiting an amount of time after each one
// after each page,
//    - Check for max_user_connections error
//    - append the data to the temp variable.
// after all of the pages for the year have been scraped, add the data to the main object, and write to disk

// function start() {
//   console.log(new Date().getTime() / 1000);
// }

// cron.schedule("* * * * *", start);

// scrapeYear();
// cron.schedule("*/2 * * * *", scrapeYear);
// cron.schedule("* * * * *", scrapeYear);

// scrapeHRPlayers();
// cron.schedule("*/2 * * * *", scrapeHRPlayers);

// Extra stuff i might need later

// console.log(chalk.yellow.bgBlue(`test`));

// fetch(url).then((response) => console.log(response));
// .then((response) => response.text())
// .then((html) => {
//   fs.appendFile(
//     `./public/raw-mock-data/${year}-${page}.html`,
//     html,
//     (err) => {
//       if (err) {
//         console.error(err);
//       }
//     }
//   );

// });

// console.log("Total NHL Seasons:", Object.keys(seasons).length);
// const seasons = {
//  "2022-23": [
//    { trade_data },
//  ],
// }