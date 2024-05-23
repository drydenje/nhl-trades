import { getNextYear, readFile, writeFile } from "./utils/utils.js";
import { getAllPlayerForLetter } from "./utils/hockey-reference-id-scraper";

const scrapeHRPlayers = async () => {
  const players = JSON.parse(
    readFile(`./public/scraped-data/hr-player-id.json`)
  );
  const letterToScrape = getNextYear(players);
  if (letterToScrape) {
    console.log(chalk.yellow.bgBlue(`Trying to scrape: ${letterToScrape}`));
    // get the page, then getNameFromPage
    players[letterToScrape] = await getAllPlayerForLetter(
      HOCKEY_REFERENCE_URL,
      letterToScrape
    );

    writeFile(`./public/scraped-data/hr-player-id.json`, players);
  }
};
