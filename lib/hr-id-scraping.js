"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scrapeHRPlayers = exports.convertToCSV = void 0;
var _utils = require("./utils/utils.js");
var _convertArrayToCsv = require("convert-array-to-csv");
var _hockeyReferenceIdScraper = require("./utils/hockey-reference-id-scraper");
var _fs = _interopRequireDefault(require("fs"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const HOCKEY_REFERENCE_URL = `https://www.hockey-reference.com/players`;
const chalk = require("chalk");

// This takes about 8 minutes to finish
// https://www.hockey-reference.com/friv/birthplaces.cgi
const scrapeHRPlayers = async () => {
  // load the json file (all place.data arrays should be empty to start with)
  const places = JSON.parse((0, _utils.readFile)(`./src/player-data/hr-player-id.json`));
  // decide which place (province/state/country) to scrape
  const placeToScrape = places.find(place => place.data === undefined || place.data.length == 0);
  // create a list of places that haven't been scraped (for progress indicator)
  const remainingPlaces = places.filter(place => place.data === undefined || place.data.length == 0).length;

  // console.log(remainingPlaces);
  // prepare the data and save
  if (remainingPlaces === 0) {
    console.log(chalk.yellow.bgBlue(`Finished scraping`));
    const res = [];
    places.forEach(place => {
      res.push(place.data);
    });
    // clean up the hockey-reference id (currently in href form)
    const regex = /\w+(?=.html)/gm;
    const final = res.flat().map(player => {
      return {
        ...player,
        id: player.id.match(regex).toString()
      };
    });

    // add the returned back into the array
    (0, _utils.writeFile)(`./src/player-data/hr-player-id-final.json`, final);

    // still more data to scrape
  } else {
    // show what the script is trying to do, and give an idea of what remains to be scraped
    console.log(chalk.yellow.bgBlue(`Trying to scrape: ${placeToScrape.name} (${remainingPlaces}/${places.length})`));
    // fetch the actual html to scrape
    const players = await (0, _utils.getPage)(`https://www.hockey-reference.com/${placeToScrape.href}`)
    // pull all of the players from the page
    .then(html => (0, _utils.parsePlayersFromHR)(html));
    const result = places.map(place => place.name === placeToScrape.name ? {
      ...place,
      data: players
    } : place);
    // write the places array and continue
    (0, _utils.writeFile)(`./src/player-data/hr-player-id.json`, result);
  }
};
exports.scrapeHRPlayers = scrapeHRPlayers;
const headings = ["name", "id", "birthDate"];
const convertToCSV = () => {
  const players = JSON.parse((0, _utils.readFile)(`./src/player-data/hr-player-id-final.json`));
  const csv = (0, _convertArrayToCsv.convertArrayToCSV)(players, {
    headings,
    separator: ","
  });
  _fs.default.writeFile("./public/final-csv-files/hr-player-id-final.csv", csv, err => {
    if (err) {
      console.log(err);
    }
    // console.log(`Data written to: ${csvFilePath}`);
  });
};
exports.convertToCSV = convertToCSV;