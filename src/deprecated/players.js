import latinize from "latinize";

// import { fetchDraftYear, convertToCSV } from "./nhl-draft-scraping.js";
// import { scrapeHRPlayers } from "./player-data/hr-id-scraping.js";
// import { scrapeHDBPlayers } from "./player-data/hockey-db-id-scraper.js";
// import { players } from "./player-data/player-nhl-id.js";
// import { scrapeNhlRoster, scrapeNHLTeams } from "./nhl-id-scraping.js";
// import { runScrape, getTeamRosters } from "./experiment.js";

// console.log(latinize("Paul Gagné"));

// missing hr: 633, hdb: 1204
// 512, 910

// const p = combineSiteIds(
//   "./src/player-data/nhl-id-scraping-unique.json",
//   "./src/player-data/results/hdb-player-ids.json",
//   "./src/player-data/results/hr-player-id.json"
// );

// const missingHR = p.filter((player) => player.hrID === null);
// const missingHDB = p.filter((player) => player.hdbID === null);

// console.log("Total:", p.length);
// // console.log(p[0]);
// console.log("Missing HR:", missingHR.length);
// writeFile("./src/player-data/results/hr-missing.json", missingHR);
// console.log("Missing HDB:", missingHDB.length);
// writeFile("./src/player-data/results/hdb-missing.json", missingHDB);

//check name, then add other options if there are more than one?

// console.log(p.find((player) => player.id === 8446993));

// import { convertNHLPlayersToCSV } from "./player-data/nhl-id-scraping.js";

// const jsonFilePath = "";
// convertNHLPlayersToCSV(jsonFilePath);