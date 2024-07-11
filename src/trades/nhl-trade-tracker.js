import { getPage } from "../utils/utils.js";
const cheerio = require("cheerio");
const chalk = require("chalk");

// Given a full html page, it will count the number of
// pages to scrape for that year
const getPageCount = async (page) => {
  let $ = cheerio.load(page);
  const pageCount = $(".pagination").find("a:last").prev().text();

  return parseInt(pageCount) || 1;
};

// Returns an array of trades from a single page
const getTradesFromPage = async (page) => {
  const $ = cheerio.load(page);
  const title = $(".current").first().text();
  // console.log("Page Number:", title);
  const table = $("#container").find("> table");
  // console.log(table);
  // try {
  const lines = [];
  table.each((index, trade) => {
    lines.push(parseTrade(trade));
  });

  return lines;
  // } catch(())
};

// Pull all relevent data from the specific trade, and return an object
// {
//     "date": "April 12, 2021",
//     "teams": {
//         "Washington Capitals": [
//             {
//                 "name": "Anthony Mantha",
//                 "hockeyDBid": "136790"
//             }
//         ],
//         "Detroit Red Wings": [
//             {
//                 "name": "2021 1st round pick"
//             },
//             {
//                 "name": "Richard Panik",
//                 "hockeyDBid": "108683"
//             },
//         ]
//     },
//     "comment": null
// }
const parseTrade = (html) => {
  let $ = cheerio.load(html);
  const headings = $("tbody > tr")
    .find("td > strong")
    .map(function () {
      if ($(this).text() !== "Date") {
        return $(this).text().replace(" acquire", "");
      }
    })
    .toArray();

  const date = $("tr:nth(1) > td:nth(1)").text().trim();

  const roster = [];
  for (let i = 0; i <= 1; i++) {
    roster[i] = $(`table:nth(${i + 1})`)
      .text()
      .trim()
      .split("\n")
      .map((item) => {
        const playerName = item.trim().replace(/\(|\)/g, "");
        // to diagnose which player can't be parsed
        // console.log(playerName.replace(/\(|\)/g, ""));

        const playerID = $(`a:contains(${playerName})`).attr("href");
        const player = {
          name: playerName,
        };
        const regexTextBetweenQuotes =
          /(?<=(["']\b))(?:(?=(\\?))\2.)*?(?=\1|\|)/g;
        playerID
          ? (player.hockeyDBid = playerID.match(regexTextBetweenQuotes)[0])
          : "0";
        return player;
      })
      .filter((s) => s.name);
  }

  const c = $(`.comment`).next().text();
  const comment = c ? c : null;
  const teams = {};
  teams[headings[0]] = roster[0];
  teams[headings[1]] = roster[1];

  return {
    date,
    teams,
    comment,
  };
};

// this will grab  a list of all the nhl trade seasons
const getSeasonList = (page) => {
  let $ = cheerio.load(page);
  const arr = $(".s_list > tbody")
    .find("tr")
    .text()
    .split("\n")
    .filter((s) => s)
    .map((s) => s.trim());

  const seasons = arr.reduce((accumulator, value) => {
    return { ...accumulator, [value]: [] };
  }, {});

  return {
    seasons,
  };
};

// parses all pages for the year and returns an array of trades
// takes the year (string) and the base url
const getAllTradesForYear = async (year, baseUrl) => {
  const url = `${baseUrl}/${year}`;

  // load initial page 1 for the year
  const mainPage = await getPage(url + "/1");
  const pageCount = await getPageCount(mainPage);

  // sequential fetch (pass an array of urls), should be in utils?
  // console.log some numbers to initially test the timing
  // maybe have a timing test in jest? jest built in thing?

  // if > 1
  // from page 2 to the end
  // make an array of promises, timeout of 7(?) secs between them
  // parse each page
  // add all trades to the array

  let delay = 0;
  const delayIncrement = 1000;

  const pages = [...Array(pageCount).keys()].map((i) => `${url}/${i + 1}`);

  let tasks = [];
  pages.forEach((page, i) => {
    const delay = 10000 * i;
    tasks.push(
      new Promise(async function (resolve) {
        // the timer/delay
        await new Promise((res) => setTimeout(res, delay));

        // the promise to be delayed
        let result = await getPage(page).then((page) => {
          return getTradesFromPage(page);
        });
        // .catch((error) => {
        //   console.log(`Error:${error}`);
        // });

        //resolve outer/original promise with result
        resolve(result);
      })
    );
  });
  let results = await Promise.all(tasks);

  // console.log("LEN:", results.length);
  // return the array of trades
  if (pageCount === results.length) {
    return results;
  } else {
    console.log(
      chalk.black.bgRed(`Didn't scrape all of the pages for: ${year}`)
    );
    throw new Error("Failed to scrape data");
  }
};

// this error should fire when too many requests are made too quickly
const checkMaxUserException = async (page) => {
  const $ = cheerio.load(page);
  const warnings = $("[href*=function.mysql-pconnect]").text();

  if (warnings === "function.mysql-pconnect") {
    // console.log("warnings:", warnings);
    throw new Error("max_user_connections");
  } else {
    // console.log("warnings:", warnings);
    return false;
  }
};

export {
  checkMaxUserException,
  getAllTradesForYear,
  getPageCount,
  getSeasonList,
  getTradesFromPage,
  parseTrade,
};
