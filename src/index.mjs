// const chalk = require("chalk");
// const cheerio = require("cheerio");
// const fs = require("fs");
// const path = require("path");
import path from "path";
// const cron = require("node-cron");
const BASE_URL = `https://www.nhltradetracker.com/user/trade_list_by_season`;
// const url = `https://www.hockeydb.com/ihdb/draft/nhl2023e.html`;
import { readFile, writeFile } from "./utils/utils.mjs";
// const writeFile = require("./utils/utils");
const seasons = JSON.parse(readFile(`./public/scraped-data/trades.json`));

// const seasons2 = {
//   "2022-23": [{ player: "guy" }],
//   "2021-22": [{ player: "nah" }],
// };

const trades = [
  {
    comment: null,
    date: "March 14, 1978",
    teams: {
      "Chicago Blackhawks": [
        {
          hockeyDBid: "2269",
          name: "Doug Hicks",
        },
        {
          name: "1980 3rd round pick (#58-Marcel Frere)",
        },
      ],
      "Minnesota North Stars": [
        {
          name: "future considerations (Pierre Plante)",
        },
        {
          name: "rights to Ed Mio",
        },
      ],
    },
  },
  {
    comment: null,
    date: "March 13, 1978",
    teams: {
      "Boston Bruins": [
        {
          name: "cash",
        },
      ],
      "Los Angeles Kings": [
        {
          hockeyDBid: "1533",
          name: "Darryl Edestrand",
        },
      ],
    },
  },
];

seasons["1977-78"] = trades;
await console.log("Seasons:", typeof seasons);

const year = `1977-78`;
const page = 4;
const url = `${BASE_URL}/${year}/${page}`;
// console.log(path.relative());
writeFile("./public/scraped-data/trades.json", seasons);

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

function start() {
  console.log("running");
}

// cron.schedule("*/1 * * * * *", start);

// console.log(chalk.yellow.bgBlue(`test`));
