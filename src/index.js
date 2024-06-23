import { convertArrayToCSV } from "convert-array-to-csv";
import { writeFile, readFile } from "./utils/utils.js";
import { fetchDraftYear, convertToCSV } from "./nhl-draft-scraping.js";
import fs from "fs";

import cron from "node-cron";

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

// *******************************************
// Add a birthdate to the duplicate id json file
// *******************************************
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
import { addHdbIDToAll } from "./utils/hockey-db-id-scraper.js";
// import { hdbPlayers } from "../public/raw-mock-data/hockeydb/res.js";
import hdbPlayers from "./res.js";

const addHdbID = async () => {
  // public\scraped-data\duplicate-ids-copy.json
  const DUPLICATE_IDS = `./public/scraped-data/duplicate-ids-copy.json`;
  const players = JSON.parse(fs.readFileSync(DUPLICATE_IDS, "utf8"));

  // console.log(players);
  // console.log(hdbPlayers);
  const newJSON = addHdbIDToAll(players, hdbPlayers);

  fs.writeFileSync(
    `./public/scraped-data/duplicate-ids-copy2.json`,
    JSON.stringify(newJSON),
    (err, data) => {
      if (err) throw err;
      console.log("ERROR:", data);
    }
  );
};

addHdbID();

// *******************************************
// END: Add hdbID's to the duplicate id json file
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
