import fs from "fs";
import { writeFile, readFile } from "./utils/utils.js";

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

const scrapeNHLTeams = () => {
  // check
  const teams = JSON.parse(readFile(`./src/player-data/nhl-id-scraping.json`))
    .filter((team) => team.isActive === true)
    .filter((team) => team.start !== null)
    .filter((team) => team.data.length === 0);

  // +10,001 to cycle each year (or subtract and check for failure)
  // .map((team) => {
  //   return {
  //     ...team,
  //     start: null,
  //     end: null,
  //     data: [],
  //   };
  // });

  console.log(teams);
  console.log(teams.length);
};

export { scrapeNhlRoster, scrapeNHLTeams };
