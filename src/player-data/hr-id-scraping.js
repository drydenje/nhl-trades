import {
  getNextYear,
  getPage,
  readFile,
  writeFile,
  parsePlayersFromHR,
} from "../utils/utils.js";
import { convertArrayToCSV } from "convert-array-to-csv";
import { getAllPlayerForLetter } from "../utils/hockey-reference-id-scraper.js";
import fs from "fs";
const HOCKEY_REFERENCE_URL = `https://www.hockey-reference.com/players`;
const chalk = require("chalk");

// This takes about 8 minutes to finish
// https://www.hockey-reference.com/friv/birthplaces.cgi
const scrapeHRPlayers = async () => {
  // load the json file (all place.data arrays should be empty to start with)
  const places = JSON.parse(readFile(`./src/player-data/hr-player-id.json`));
  // decide which place (province/state/country) to scrape
  const placeToScrape = places.find(
    (place) => place.data === undefined || place.data.length == 0
  );
  // create a list of places that haven't been scraped (for progress indicator)
  const remainingPlaces = places.filter(
    (place) => place.data === undefined || place.data.length == 0
  ).length;

  // console.log(remainingPlaces);
  // prepare the data and save
  if (remainingPlaces === 0) {
    console.log(chalk.yellow.bgBlue(`Finished scraping`));
    const res = [];
    places.forEach((place) => {
      res.push(place.data);
    });
    // clean up the hockey-reference id (currently in href form)
    const regex = /\w+(?=.html)/gm;
    const final = res.flat().map((player) => {
      return { ...player, id: player.id.match(regex).toString() };
    });

    // add the returned back into the array
    writeFile(`./src/player-data/hr-player-id-final.json`, final);

    // still more data to scrape
  } else {
    // show what the script is trying to do, and give an idea of what remains to be scraped
    console.log(
      chalk.yellow.bgBlue(
        `Trying to scrape: ${placeToScrape.name} (${remainingPlaces}/${places.length})`
      )
    );
    // fetch the actual html to scrape
    const players = await getPage(
      `https://www.hockey-reference.com/${placeToScrape.href}`
    )
      // pull all of the players from the page
      .then((html) => parsePlayersFromHR(html));

    const result = places.map((place) =>
      place.name === placeToScrape.name ? { ...place, data: players } : place
    );
    // write the places array and continue
    writeFile(`./src/player-data/hr-player-id.json`, result);
  }
};

const headings = ["name", "id", "birthDate"];

const convertToCSV = () => {
  const players = JSON.parse(
    readFile(`./src/player-data/hr-player-id-final.json`)
  );
  const csv = convertArrayToCSV(players, {
    headings,
    separator: ",",
  });

  fs.writeFile(
    "./public/final-csv-files/hr-player-id-final.csv",
    csv,
    (err) => {
      if (err) {
        console.log(err);
      }
      // console.log(`Data written to: ${csvFilePath}`);
    }
  );
};

export { scrapeHRPlayers, convertToCSV };
