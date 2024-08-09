import { convertArrayToCSV } from "convert-array-to-csv";
import fs from "fs";
import { writeFile, readFile } from "../utils/utils.js";
const chalk = require("chalk");

async function* scrapeDraftYear(startYear) {
  let year = startYear;
  while (year) {
    let url = `https://records.nhl.com/site/api/draft?include=draftProspect.id&include=player.birthStateProvince&include=player.birthCountry&include=player.position&include=player.onRoster&include=player.yearsPro&include=player.firstName&include=player.lastName&include=player.id&include=team.id&include=team.placeName&include=team.commonName&include=team.fullName&include=team.triCode&include=team.logos&include=franchiseTeam.franchise.mostRecentTeamId&include=franchiseTeam.franchise.teamCommonName&include=franchiseTeam.franchise.teamPlaceName&sort=[{%22property%22:%22overallPickNumber%22,%22direction%22:%22ASC%22}]&cayenneExp=%20draftYear%20=%20${year}&start=0&limit=300`;

    console.log(chalk.yellow.bgBlue(`Trying to scrape: ${year}`));

    const response = await fetch(url);
    const data = await response.json();

    if (data.total === 0) {
      year = null;
      return false;
    } else {
      await delay(3);
      yield {
        year,
        data,
      };

      year = year - 1;
    }
  }
}

const scrapeDraftPicks = async () => {
  const startTime = new Date();

  let picks = [];

  for await (const p of scrapeDraftYear(2024)) {
    // for await (const p of scrapeDraftYear(1964)) {
    const cleanedPicks = p.data.data.map((pick) => {
      delete pick.team.logos;
      return pick;
    });

    picks.push(...cleanedPicks);
  }

  const endTime = new Date();
  const timeElapsed = (endTime - startTime) / 1000;
  console.log("timeElapsed:", timeElapsed);

  writeFile("./src/draft-picks/results/nhl-picks-scraping.json", picks);
};

const convertDraftPicksToCSV = (draftPicks) => {
  const picks = draftPicks.map((pick) => {
    return {
      id: pick.id,
      playerId: pick.playerId,
      playerName: pick.playerName,
      birthDate: pick.birthDate,
      triCode: pick.triCode,
      draftDate: pick.draftDate,
      // change the stuff you want to use
      // dates in consistent format
      // name in full?
    };
  });

  const headings = [
    "id",
    "playerId",
    "playerName",
    "birthDate",
    "triCode",
    "draftDate",
  ];

  const csv = convertArrayToCSV(picks, {
    headings,
    separator: ",",
  });

  fs.writeFile("./src/csv-data/nhl-draft-picks.csv", csv, (err) => {
    if (err) {
      console.error(err);
    } else {
      return true;
    }
  });
};

// Used to delay the time between fetches, so we don't get blocked
const delay = (seconds) =>
  new Promise((resolve) => setTimeout(resolve, seconds * 1000));

export { scrapeDraftPicks, convertDraftPicksToCSV };
