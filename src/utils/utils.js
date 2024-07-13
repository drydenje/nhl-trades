const fs = require("fs");
import cliProgress from "cli-progress";
import cheerio from "cheerio";
import latinize from "latinize";

// checks to see if an array exists and is empty.
// Returns 0 if empty, 1 if the array has data, and 'false' if it's not an array
const checkArray = (arr) => {
  return Array.isArray(arr) && arr.length;
};

// takes nhlPlayer and another Player object
const checkNameAndCity = (
  { firstName, lastName, birthCity },
  { name: hName, birthCity: hBirthCity }
) => {
  return (
    `${firstName.default} ${lastName.default}` === hName &&
    birthCity.default === hBirthCity
  );
};

// takes nhlPlayer and another Player object
const checkNameAndBirthDate = (
  { firstName, lastName, birthDate },
  { name: hName, birthDate: hBirthDate }
) => {
  return (
    `${firstName.default} ${lastName.default}` === hName &&
    birthDate === hBirthDate
  );
};

// Returns the next year to scrape
const getNextYear = (obj) => {
  const yearToScrape = Object.entries(obj).filter((year) => {
    if (checkArray(year[1]) === 0) {
      return year;
    }
  });

  if (yearToScrape.length > 0) {
    // return the year of the first object of the array
    return yearToScrape[0][0];
  } else {
    return false;
  }
};

// Returns a single html page from the given url
const getPage = async (url) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Request failed with status code ${result.status}`);
    }
    const data = await res.text();
    return data;
  } catch (error) {
    console.error(`Could not fetch page: ${error}`);
  }
};

// reads the file from disk
const readFile = (filePath) => {
  try {
    const data = fs.readFileSync(filePath, "utf8");

    return data;
  } catch (error) {
    console.error(error);
  }
};

// writes the file to disk
const writeFile = (filePath, data) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data));
  } catch (error) {
    console.error(error);
  }
};

const removeNickname = (nickname) => {
  // 1. Remove the nickname and the quotes around it
  // 2. This leaves two whitespace characters
  // 3. Replace the two characters with a single one
  return nickname.replace(/"([^"]*)"/g, "").replace(/\s\s+/g, " ");
};

const combineSiteIds = (nhlPlayers, hdbPlayers, hrPlayers) => {
  const players = JSON.parse(readFile(nhlPlayers));
  const hdbIDs = JSON.parse(readFile(hdbPlayers));
  const hrIDs = JSON.parse(readFile(hrPlayers));

  const progressBar = new cliProgress.SingleBar(
    {},
    cliProgress.Presets.shades_classic
  );
  progressBar.start(players.length, 0);

  //512

  const playerResult = players.map((player, index) => {
    const fullName = `${player.firstName.default} ${player.lastName.default}`;
    // const singleNameCheck = players.filter()
    const hr = hrIDs.find(
      (hrPlayer) =>
        checkNameAndBirthDate(player, hrPlayer) ||
        checkNameAndCity(player, hrPlayer)
    );

    const hdb = hdbIDs.find(
      (hdbPlayer) =>
        checkNameAndBirthDate(player, hdbPlayer) ||
        checkNameAndCity(player, hdbPlayer)
    );

    progressBar.update(index + 1);

    return {
      ...player,
      hrID: hr ? hr.id : null,
      hdbID: hdb ? hdb.hdbID : null,
    };
  });

  progressBar.stop();

  // return an array of objects containing all players with hdbid and hrids added
  return playerResult;
};

export {
  checkArray,
  combineSiteIds,
  getNextYear,
  getPage,
  readFile,
  writeFile,
  removeNickname,
};
