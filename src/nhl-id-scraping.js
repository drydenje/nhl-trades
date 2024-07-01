// const _ = require("lodash");
import fs from "fs";
import { writeFile, readFile } from "./utils/utils.js";
const chalk = require("chalk");

const scrapeNhlRoster = async (teamToScrape, yearToScrape) => {
  const TEAM_ROSTER_URL = `https://api-web.nhle.com/v1/roster/${teamToScrape}/${yearToScrape}`;

  const result = await fetch(TEAM_ROSTER_URL)
    .then((res) => res.json())
    .then((res) => [...res.forwards, ...res.defensemen, ...res.goalies])
    .then((res) =>
      res.map((player) => {
        return {
          ...player,
          hrID: null,
          hdbID: null,
          verified: false,
        };
      })
    );

  return result;
};

const scrapeNHLTeams = async () => {
  // check
  const teamToScrape = JSON.parse(
    readFile(`./src/player-data/nhl-id-scraping.json`)
  )
    .filter((team) => team.isActive === true)
    .filter((team) => team.start !== null)
    .find(
      (team) =>
        Object.keys(team.data).length === 0 && team.data.constructor === Object
    );

  // for enddate to startdate
  // fetch the roster

  let years = [];
  // console.log(teamToScrape);

  for (
    let year = parseInt(teamToScrape.end);
    year >= parseInt(teamToScrape.start);
    year = year - 10001
  ) {
    // console.log(year);
    years.push(`${year}`);
  }
  // let s = "20212022";

  years.forEach(async (year) => {
    console.log(chalk.yellow.bgBlue(`Trying to scrape:${year}`));
    teamToScrape.data[year] = await scrapeNhlRoster(
      teamToScrape.abbreviation,
      year
    );
    await delay(10000);
    // await
    // then((roster) => {
    //    = roster;
    // });
  });

  // +10,001 to cycle each year (or subtract and check for failure)
  // .map((team) => {
  //   return {
  //     ...team,
  //     start: null,
  //     end: null,
  //     data: [],
  //   };
  // });

  console.log(teamToScrape);
  console.log("years:", years);
};

const delay = function (ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export { scrapeNhlRoster, scrapeNHLTeams };
