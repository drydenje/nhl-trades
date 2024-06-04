"use strict";

var _convertArrayToCsv = require("convert-array-to-csv");
var _nhlDraftScraping = require("./nhl-draft-scraping");
var _fs = _interopRequireDefault(require("fs"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// const DRAFT_RESULTS_JSON = `./public/scraped-data/draft-results.json`;
// fetchDraftYear(DRAFT_RESULTS_JSON);
// cron.schedule("*/5 * * * * *", fetchDraftYear);
// convertToCSV(DRAFT_RESULTS_JSON);
// writeCSVFile(`./public/scraped-data/draft-results-test.json`);

// import { players } from "./player-nhl-id";
// import { hrPlayers } from "./hr-player-id-copy";
const headings = ["id", "name", "hrId"];

// two "Greg Adams"

const players = [{
  id: 8444924,
  name: "Jim Anderson"
}, {
  id: 8444926,
  name: "Murray Anderson"
}, {
  id: 8444995,
  name: "Pete Backor"
}, {
  id: 8444893,
  name: "Jim Agnew"
}, {
  id: 8446831,
  name: "Stephane Fiset"
}, {
  id: 8446831,
  name: "Stephane Fiset"
}];
const hrPlayers = [{
  name: "Jim Anderson",
  hrID: "anderji01"
}, {
  name: "Murray Anderson",
  hrID: "andermu01"
}, {
  name: "Pete Backor",
  hrID: "backope01"
}, {
  name: "Mats Sundin",
  hrID: "sundima01"
}, {
  name: "Stéphane Fiset",
  hrID: "fisetst01"
}
// { name: "Stéphane Fiset", hrID: "fisetst01" },
];

console.log("NHL id's:", players.length);
console.log("HR id's:", hrPlayers.length);

// two 'Ron Anderson's
// const test = hrPlayers["a"].filter((player) => player.name === "Ron Anderson");

// let missingHrPlayers = [];
let finalPlayers = [];

// Cycle through the nhl.com player list
// Create an object with an id and name
// Push the object to the final array
players.forEach(player => {
  const test = hrPlayers.filter(hrPlayer => hrPlayer.name === player.name);
  const obj = {
    id: player.id,
    name: player.name,
    ...(test[0] ? {
      hrID: test[0].hrID
    } : null)
  };

  // might have multiple similar names
  finalPlayers.push(obj);
});

// Cycle through the hockey-reference player list
hrPlayers.forEach(player => {
  // Check if the player exists in the final array
  const filteredPlayer = players.filter(nhlPlayer => player.name.localeCompare(nhlPlayer.name, "en-US", {
    sensitivity: "base"
  }));
  console.log("FP Length:", filteredPlayer);
  // Add the player and hrID if they don't (no nhl.com id)
  if (filteredPlayer.length === 0) {
    finalPlayers.push({
      name: player.name,
      hrID: player.hrID
    });
  } else if (filteredPlayer.length > 1) {
    console.log("More than one:", player.name);
  } else {
    // Just add the hrID (the player already exists)
    // filteredPlayer
    // console.log("FP:", filteredPlayer);
  }
});

// should have mats sundin and jim agnew as well
// console.log(finalPlayers);

// if (test.length === 1) {
//   console.log(test[0].hrID);
// }

// const playerLines = players.map((line) => {

//   return {
//     id: line.id,
//     name: line.name,
//   };
// });

// console.log("Merged id's:", finalPlayers.length);
const missing = finalPlayers.filter(player => player.hrID === undefined);
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