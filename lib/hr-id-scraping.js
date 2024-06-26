"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scrapeHRPlayers = void 0;
var _utils = require("./utils/utils.js");
var _hockeyReferenceIdScraper = require("./utils/hockey-reference-id-scraper");
const HOCKEY_REFERENCE_URL = `https://www.hockey-reference.com/players`;
const chalk = require("chalk");
const scrapeHRPlayers = async () => {
  const places = JSON.parse((0, _utils.readFile)(`./src/player-data/hr-player-id.json`));
  const placeToScrape = places.find(place => place.data === undefined || place.data.length == 0);
  const remainingPlaces = places.filter(place => place.data === undefined || place.data.length == 0).length;
  console.log(chalk.yellow.bgBlue(`Trying to scrape: ${placeToScrape.name} (${remainingPlaces}/${places.length})`));
  const players = await (0, _utils.getPage)(`https://www.hockey-reference.com/${placeToScrape.href}`).then(html => (0, _utils.parsePlayersFromHR)(html));
  const result = places.map(place => place.name === placeToScrape.name ? {
    ...place,
    data: players
  } : place);

  // add the returned back into the array
  (0, _utils.writeFile)(`./src/player-data/hr-player-id.json`, result);
};
exports.scrapeHRPlayers = scrapeHRPlayers;