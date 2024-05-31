import { convertArrayToCSV } from "convert-array-to-csv";

import { fetchDraftYear, convertToCSV } from "./nhl-draft-scraping";
import fs from "fs";

// const DRAFT_RESULTS_JSON = `./public/scraped-data/draft-results.json`;
// fetchDraftYear(DRAFT_RESULTS_JSON);
// cron.schedule("*/5 * * * * *", fetchDraftYear);
// convertToCSV(DRAFT_RESULTS_JSON);
// writeCSVFile(`./public/scraped-data/draft-results-test.json`);

// import { players } from "./player-nhl-id";
// import { hrPlayers } from "./hr-player-id-copy";
const headings = ["id", "name", "hrId"];

// two "Greg Adams"

// console.log("NHL id's:", players.length);
// console.log("HR id's:", hrPlayers.length);

const players = [
  {
    id: 8444924,
    name: "Jim Anderson",
  },
  {
    id: 8444926,
    name: "Murray Anderson",
  },
  {
    id: 8444995,
    name: "Pete Backor",
  },
  {
    id: 8444893,
    name: "Jim Agnew",
  },
];

const hrPlayers = [
  { name: "Jim Anderson", hrID: "anderji01" },
  { name: "Murray Anderson", hrID: "andermu01" },
  { name: "Pete Backor", hrID: "backope01" },
  { name: "Mats Sundin", hrID: "sundima01" },
];

// https://www.geeksforgeeks.org/how-to-merge-two-different-arrays-of-objects-with-unique-values-only-in-javascript/

// two 'Ron Anderson's
// const test = hrPlayers["a"].filter((player) => player.name === "Ron Anderson");
let missingHrPlayers = [];
let finalPlayers = [];

players.forEach((player) => {
  const test = hrPlayers.filter((hrPlayer) => hrPlayer.name === player.name);

  const obj = {
    id: player.id,
    name: player.name,
    ...(test[0] ? { hrID: test[0].hrID } : null),
  };

  // might have multiple similar names
  // console.log(test);
  // console.log(obj);
  finalPlayers.push(obj);
});

hrPlayers.forEach((player) => {
  const filteredPlayer = players.filter(
    (nhlPlayer) => nhlPlayer.name === player.name
  );
  if (filteredPlayer.length === 0) {
    // console.log("NOPE:", player.name);
    finalPlayers.push({
      name: player.name,
      hrID: player.hrID,
    });
  }
  // console.log(filteredPlayer);
});

// should have mats sundin and jim agnew as well
console.log(finalPlayers);

// if (test.length === 1) {
//   console.log(test[0].hrID);
// }

// const playerLines = players.map((line) => {

//   return {
//     id: line.id,
//     name: line.name,
//   };
// });

// const csv = convertArrayToCSV(playerLines, {
//   headings,
//   separator: ",",
// });

// fs.writeFile("./public/final-csv-files/player-nhl-ids.csv", csv, (err) => {
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
