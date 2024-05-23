"use strict";

var _utils = require("./utils/utils.js");
var _hockeyReferenceIdScraper = require("./utils/hockey-reference-id-scraper");
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