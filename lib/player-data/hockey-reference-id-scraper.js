"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parsePlayer = exports.getNamesFromPage = exports.getAllPlayerForLetter = void 0;
var _utils = require("./utils.js");
const path = require("path");
const cheerio = require("cheerio");
const chalk = require("chalk");
const getAllPlayerForLetter = async (baseUrl, letter) => {
  const url = `${baseUrl}/${letter}`;
  const page = await (0, _utils.getPage)(url);
  const players = await getNamesFromPage(page);
  return players;
};
exports.getAllPlayerForLetter = getAllPlayerForLetter;
const getNamesFromPage = async page => {
  const $ = cheerio.load(page);
  const container = $("#div_players").find("> p");
  const players = [];
  container.each((index, player) => {
    players.push(parsePlayer(player));
  });
  return players;
};
exports.getNamesFromPage = getNamesFromPage;
const parsePlayer = html => {
  const $ = cheerio.load(html);
  const name = $("a").text().trim();
  const hrID = path.parse($("a").attr("href")).name;
  const player = {
    name,
    hrID
  };
  return player;
};
exports.parsePlayer = parsePlayer;