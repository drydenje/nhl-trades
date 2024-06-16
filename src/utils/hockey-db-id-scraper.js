import { getPage } from "./utils.js";
import { readFile } from "./utils";
const path = require("path");
const cheerio = require("cheerio");
const chalk = require("chalk");

// can probably delete this
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
  const names = $(".sortable > tbody")
    .children()
    .map((index, player) => {
      return {
        id: $("a", player).attr("href").match(/\d+$/)[0],
        name: $("a", player).html(),
        birthDate: $("td:eq(2)", player).html().trim(),
      };
    })
    .toArray();
  // console.log("N:", names);
  return names;
};

const getAllPlayers = async (letters, baseFilePath) => {
  // const allPlayers = [];
  // for each letter in the array
  const players = letters.map((letter) => {
    const fileToParse = `${baseFilePath}/NHL Player List -- ${letter.toUpperCase()}.html`;
    const html = readFile(fileToParse);
    const playersForLetter = getNamesFromPage(html);
    return playersForLetter;
  });
  console.log("P:", players[0]);
  return players;
  // call getNamesFromPage
  // append the array of players to a file? maybe keep this out?
};

export { getNamesFromPage, parsePlayer, getAllPlayers };
