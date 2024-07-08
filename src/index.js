import { convertArrayToCSV } from "convert-array-to-csv";
import { writeFile, readFile } from "./utils/utils.js";
// import { fetchDraftYear, convertToCSV } from "./nhl-draft-scraping.js";
import { scrapeHRPlayers, convertToCSV } from "./hr-id-scraping.js";
import fs from "fs";
import { players } from "./player-data/player-nhl-id.js";
import { scrapeNhlRoster, scrapeNHLTeams } from "./nhl-id-scraping.js";
// import { runScrape, getTeamRosters } from "./experiment.js";

import cron from "node-cron";

/////////////////////////////////////////////
// Scraping NHL Reference
/////////////////////////////////////////////
// cron.schedule("*/5 * * * * *", scrapeHRPlayers);
// scrapeHRPlayers();
// convertToCSV();

/////////////////////////////////////////////
// Scraping NHL Rosters
/////////////////////////////////////////////
// (async function () {
//   while (true) {
//     await scrapeNHLTeams();
//   }
// })();

/////////////////////////////////////////////
const teams = JSON.parse(
  readFile(`./src/player-data/nhl-id-scraping.json`)
  // readFile(`./src/player-data/nhl-id-scraping copy.json`)
  // readFile(`./src/player-data/nhl-id-scraping copy 2.json`)
);

// Extract all player data and flatten into one array
const allPlayers = teams
  .map((team) => {
    const players = Object.values(team.data).map((player) => {
      return player;
    });
    return players;
  })
  .flat(2);

// Remove all of the duplicate entries
const uniquePlayerList = allPlayers.filter(
  (obj1, i, arr) => arr.findIndex((obj2) => obj2.id === obj1.id) === i
);

writeFile(`./src/player-data/nhl-id-scraping-unique.json`, uniquePlayerList);

// console.log("Players:", allPlayers);
console.log("Total Number of Players:", allPlayers.length);
console.log("Total Unique Players:", uniquePlayerList.length);

/////////////////////////////////////////////

// const DRAFT_RESULTS_JSON = `./public/scraped-data/draft-results.json`;
// fetchDraftYear(DRAFT_RESULTS_JSON);
// cron.schedule("*/5 * * * * *", fetchDraftYear);
// convertToCSV(DRAFT_RESULTS_JSON);
// writeCSVFile(`./public/scraped-data/draft-results-test.json`);

// 1. Load all unique names from duplicate-ids-copy
//    (one name for multiple instances of the name)
// 2. Map over the hr-player-id-copy.js array, and create
//    a new array of names that contain an instance of the duplicate names
// 3. Fetch each of these names from hockey-reference.com, and save the bday
// 4. Combine the hr ids and birthdays with duplicate-ids file
// 5. Add the new data to hr-and-nhl-player-id.json
// 6. Repeat the process with hockeydb, setup for other sites as well

/////////////////////////////////////////////
// Add a birthdate to the duplicate id json file
/////////////////////////////////////////////
// import { addBirthdayToPlayer } from "./utils/nhl-birthday-scraper";

// const scrapeNHLBirthdays = async () => {
//   // public\scraped-data\duplicate-ids-copy.json
//   const DUPLICATE_IDS = `./public/scraped-data/duplicate-ids-copy.json`;
//   const players = JSON.parse(
//     fs.readFileSync(DUPLICATE_IDS, "utf8")
//     // , (err, data) => {
//     //   if (err) throw err;
//     //   console.log(data);
//     // })
//   );
//   // console.log(players);
//   const newJSON = await addBirthdayToPlayer(players);
//   const remaining = newJSON.filter(
//     (player) => player.birthDate === undefined
//   ).length;
//   console.log("Remaining:", remaining);
//   fs.writeFileSync(
//     `./public/scraped-data/duplicate-ids-copy.json`,
//     JSON.stringify(newJSON),
//     (err, data) => {
//       if (err) throw err;
//       console.log("HUH", data);
//     }
//   );
// };

// cron.schedule("*/5 * * * * *", scrapeNHLBirthdays);
// *******************************************
// END: Add a birthdate to the duplicate id json file
// *******************************************

// *******************************************
// Add hdbID's to the duplicate id json file
// *******************************************
// import { addHdbIDToAll } from "./utils/hockey-db-id-scraper.js";
// // import { hdbPlayers } from "../public/raw-mock-data/hockeydb/res.js";
// import hdbPlayers from "./res.js";

// const addHdbID = async () => {
//   // public\scraped-data\duplicate-ids-copy.json
//   const DUPLICATE_IDS = `./public/scraped-data/duplicate-ids-copy.json`;
//   const players = JSON.parse(fs.readFileSync(DUPLICATE_IDS, "utf8"));

//   // console.log(players);
//   // console.log(hdbPlayers);
//   const newJSON = addHdbIDToAll(players, hdbPlayers);

//   fs.writeFileSync(
//     `./public/scraped-data/duplicate-ids-copy2.json`,
//     JSON.stringify(newJSON),
//     (err, data) => {
//       if (err) throw err;
//       console.log("ERROR:", data);
//     }
//   );
// };

// addHdbID();

// *******************************************
// END: Add hdbID's to the duplicate id json file
// *******************************************

// *******************************************
// Add duplicate players with hdbID to main player list
// *******************************************
// import { addHdbIDToAll } from "./utils/hockey-db-id-scraper.js";
// // import { hdbPlayers } from "../public/raw-mock-data/hockeydb/res.js";
// import { players } from "./player-nhl-id.js";
// import { hdbPlayers } from "./res.js";
// import { hrPlayers } from "./hr-player-id-copy.js";
// // 183 duplicates
// const duplicatePlayers = JSON.parse(
//   fs.readFileSync("./src/duplicate-ids-copy2.json", "utf8")
// );

// // console.log(hdbPlayers.length);

// const findPlayer = (id) => {
//   return duplicatePlayers.find((player) => player.id === id);
// };

// const findHdbPlayer = (name) => {
//   return hdbPlayers.find((player) => player.name === name);
// };

// // console.log(findHdbPlayer("Spencer Abbott"));

// const findHrPlayer = (name) => {
//   return hrPlayers.find((player) => player.name === name);
// };

// const addDuplicatePlayers = async () => {
//   // console.log("Duplicate players count:", duplicatePlayers.length);

//   const newPlayerArray = players.map((player) => {
//     const duplicatePlayer = findPlayer(player.id);
//     const hr = findHrPlayer(player.name);
//     const hdb = findHdbPlayer(player.name);
//     // console.log(hdb);

//     // hrID is the same?
//     const regularPlayer = {
//       ...player,
//       hrID: hr?.hrID || null,
//       birthDate: hdb?.birthDate || null,
//       hdbID: hdb?.hdbID || null,
//     };
//     return duplicatePlayer ? duplicatePlayer : regularPlayer;
//   });

//   // Total Players: 20238
//   // Players without hrID's: 10431
//   // Players with hrID's: 9807
//   // Players without birthDates: 12584
//   // Players without hdbID's: 12643

//   console.log("Total Players:", newPlayerArray.length);
//   console.log(
//     "Players without hrID's:",
//     newPlayerArray.filter((player) => player?.hrID === null).length
//   );
//   console.log(
//     "Players without birthDates:",
//     newPlayerArray.filter((player) => player?.birthDate === null).length
//   );
//   console.log(
//     "Players without hdbID's:",
//     newPlayerArray.filter((player) => player?.hdbID === null).length
//   );

//   fs.writeFileSync(
//     `./src/player-id.json`,
//     JSON.stringify(newPlayerArray),
//     (err) => {
//       if (err) throw err;
//       console.log("ERROR:", err);
//     }
//   );
// };

// console.log(findPlayer(8444998));
// addDuplicatePlayers();

// *******************************************
// END: Add duplicate players with hdbID to main player list
// *******************************************

// import { addHrIdsToPlayerList } from "./utils/player-csv-prep";
// import { players } from "./player-nhl-id";
// import { hrPlayers } from "./hr-player-id-copy";
// const headings = ["id", "name", "hrId"];

// two "Greg Adams"

// const players = [
//   {
//     id: 8444924,
//     name: "Jim Anderson",
//   },
//   {
//     id: 8444926,
//     name: "Murray Anderson",
//   },
//   {
//     id: 8444995,
//     name: "Pete Backor",
//   },
//   {
//     id: 8444893,
//     name: "Jim Agnew",
//   },
//   {
//     id: 8446831,
//     name: "Stephane Fiset",
//   },
//   {
//     id: 8446831,
//     name: "Stephane Fiset",
//   },
// ];

// const hrPlayers = [
//   { name: "Jim Anderson", hrID: "anderji01" },
//   { name: "Murray Anderson", hrID: "andermu01" },
//   { name: "Pete Backor", hrID: "backope01" },
//   { name: "Mats Sundin", hrID: "sundima01" },
//   { name: "Stéphane Fiset", hrID: "fisetst01" },
//   // { name: "Stéphane Fiset", hrID: "fisetst01" },
// ];
// console.log("Adding Hr Id's");
// console.log("NHL id's:", players.length);
// console.log("HR id's:", hrPlayers.length);

// const result = addHrIdsToPlayerList(players, hrPlayers);
// 10:30

// writeFile(`./public/scraped-data/hr-and-nhl-player-id.json`, result);

// const arrToSort = JSON.parse(
//   readFile(`./public/scraped-data/duplicate-ids.json`)
// );
// // console.log(typeof arrToSort);
// const res = arrToSort.sort((a, b) => {
//   if (a.name > b.name) {
//     return 1;
//   }
//   if (a.name < b.name) {
//     return -1;
//   }
//   return 0;
// });
// writeFile(`./public/scraped-data/duplicate-ids.json`, res);

// console.log("Merged id's:", finalPlayers.length);

// const missing = result.filter((player) => player.hrID === undefined);
// console.log("Missing:", missing);

// const csv = convertArrayToCSV(finalPlayers, {
//   headings,
//   separator: ",",
// });

// fs.writeFile("./public/final-csv-files/player-nhl-ids-2.csv", csv, (err) => {
//   if (err) {
//     console.log(err);
//   }
//   // console.log(`Data written to: ${csvFilePath}`);
// });

// import { teams } from "./team-nhl-id";
// const headings = [
//   "id",
//   "name",
//   "abbreviation",
//   "nicknames",
//   "colors",
//   "logo",
//   "isActive",
// ];
// const teamLines = teams.map((line) => {
//   return {
//     id: line.id,
//     name: line.name,
//     abbreviation: line.abbreviation,
//     nicknames: line.nicknames.toString(),
//     colors: line.colors.toString(),
//     logo: line.logo,
//     isActive: line.isActive,
//   };
// });
// const csv = convertArrayToCSV(teamLines, {
//   headings,
//   separator: ",",
// });

// fs.writeFile("./public/final-csv-files/team-nhl-ids.csv", csv, (err) => {
//   if (err) {
//     console.log(err);
//   }
//   // console.log(`Data written to: ${csvFilePath}`);
// });

// console.log(csv);

// combining multiple arrays into one for each year of trade data
