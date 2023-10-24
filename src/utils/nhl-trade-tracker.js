const cheerio = require("cheerio");

// Given a full html page, it will count the number of
// pages to scrape for that year
const getPageCount = async (page) => {
  let $ = cheerio.load(page);
  const pageCount = $(".pagination").find("a:last").prev().text();

  return parseInt(pageCount) || 1;
};

const getTradesFromPage = async (page) => {
  const $ = cheerio.load(page);
  const lines = [];
  $("#container")
    .find("> table")
    .each((index, trade) => {
      lines.push(parseTrade(trade));
    });

  return lines;
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
//             {
//                 "name": "Jakub Vrana",
//                 "hockeyDBid": "161382"
//             },
//             {
//                 "name": "2022 2nd round pick"
//             }
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
        const playerName = item.trim();
        const r = /([0-9])\w+/g;
        const playerID = $(`a:contains(${playerName})`).attr("href");
        const player = {
          name: playerName,
        };
        playerID ? (player.hockeyDBid = playerID.match(r)[0]) : null;
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

export { getPageCount, getSeasonList, getTradesFromPage, parseTrade };
