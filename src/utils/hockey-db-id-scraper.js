import { getPage } from "./utils.js";
const path = require("path");
const cheerio = require("cheerio");
const chalk = require("chalk");

const parsePlayer = (html) => {
  const $ = cheerio.load(html);
  // console.log(html);
  const playerName = $("a").text().trim();
  const playerId = $("a").attr("href").match(/\d+$/)[0];
  const birthDate = $("td");
  // console.log("bd:", birthDate);

  const data = {
    name: playerName,
    id: playerId,
    birthDate: null,
  };

  return data;
};

const getNamesFromPage = async (page) => {
  const $ = cheerio.load(page);
  // body > div.tablebgl > table
  // body > div.tablebgl > table > tbody
  const names = $(".sortable > tbody")
    .children()
    .map((index, player) => {
      // console.log("P:", player, "I:", index);
      return {
        id: $("a", player).attr("href").match(/\d+$/)[0],
        name: $("a", player).html(),
        birthDate: $("td:eq(2)", player).html().trim(),
      };
    })
    .toArray();

  console.log("names:", names);
};

export { parsePlayer, getNamesFromPage };
