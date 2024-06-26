import {
  getNextYear,
  getPage,
  readFile,
  writeFile,
  parsePlayersFromHR,
} from "./utils/utils.js";
import { getAllPlayerForLetter } from "./utils/hockey-reference-id-scraper";
const HOCKEY_REFERENCE_URL = `https://www.hockey-reference.com/players`;
const chalk = require("chalk");

// This takes about 8 minutes to finish
// https://www.hockey-reference.com/friv/birthplaces.cgi
const scrapeHRPlayers = async () => {
  const places = JSON.parse(readFile(`./src/player-data/hr-player-id.json`));
  const placeToScrape = places.find(
    (place) => place.data === undefined || place.data.length == 0
  );
  const remainingPlaces = places.filter(
    (place) => place.data === undefined || place.data.length == 0
  ).length;

  console.log(
    chalk.yellow.bgBlue(
      `Trying to scrape: ${placeToScrape.name} (${remainingPlaces}/${places.length})`
    )
  );
  const players = await getPage(
    `https://www.hockey-reference.com/${placeToScrape.href}`
  ).then((html) => parsePlayersFromHR(html));

  const result = places.map((place) =>
    place.name === placeToScrape.name ? { ...place, data: players } : place
  );

  // add the returned back into the array
  writeFile(`./src/player-data/hr-player-id.json`, result);
};

export { scrapeHRPlayers };
