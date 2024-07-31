"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.teamsToCSV = exports.scrapeNhlTeams = void 0;
var _fs = require("fs");
var _convertArrayToCsv = require("convert-array-to-csv");
const TEAM_REST_URL = `https://api.nhle.com/stats/rest/en/team`;
const JSON_RESULTS_FILE = `./src/teams/results/teams.json`;
const CSV_RESULTS_FILE = `./src/csv-data/nhl-teams.csv`;
const scrapeNhlTeams = async () => {
  try {
    const response = await fetch(TEAM_REST_URL);
    if (!response.ok) {
      console.error("Unable to fetch team list");
    } else {
      const data = await response.json().then(res => res.data);
      return data;
    }
  } catch (error) {
    console.error(error);
  } finally {
    console.log(data);
  }
};
exports.scrapeNhlTeams = scrapeNhlTeams;
const teamsToCSV = () => {
  const headings = ["id", "franchiseId", "fullName", "leagueId", "rawTricode", "triCode"
  // "colors",
  // "logo",
  // "isActive",
  // "start",
  //   "end",
  ];
  const csv = (0, _convertArrayToCsv.convertArrayToCSV)(teams, {
    headings,
    separator: ","
  });
  (0, _fs.writeFile)(CSV_RESULTS_FILE, csv, err => {
    if (err) {
      console.log(err);
    }
    // console.log(`Data written to: ${csvFilePath}`);
  });
};

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

// fs.writeFile("./public/final-csv-files/team-nhl-ids.csv", csv, (err) => {
//   if (err) {
//     console.log(err);
//   }
//   // console.log(`Data written to: ${csvFilePath}`);
// });

// const headings = [
//   "id",
//   "name",
//   "abbreviation",
//   "nicknames",
//   "colors",
//   "logo",
//   "goalHorn",
//   // "goalHornSong",
//   "isActive",
//   "start",
//   "end",
// ];

// const temp = teams.map((team) => {
//   delete team.nicknames;
//   delete team.goalHorn;
//   delete team.goalHornSong;
//   return {
//     ...team,
//     // removing things we don't want
//     // nicknames: null,
//     colors: team.colors.join("/"),
//     // goalHorn: null,
//     // goalHornSong: null,

//     // to get around csv quotation problem
//     // nicknames: team.nicknames.join("/"),
//     // colors: team.colors.join("/"),
//   };
// });

// console.log(temp[0]);

// // writeFile(`./src/player-data/nhl-team-ids.csv`, csv);
// fs.writeFile("./src/csv-data/nhl-team-ids.csv", csv, (err) => {
//   if (err) {
//     console.log(err);
//   }
// });
exports.teamsToCSV = teamsToCSV;