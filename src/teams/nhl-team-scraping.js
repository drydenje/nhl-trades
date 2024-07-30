import { teams } from "./team-nhl-id";
const headings = [
  "id",
  "name",
  "abbreviation",
  "nicknames",
  "colors",
  "logo",
  "isActive",
];
const teamLines = teams.map((line) => {
  return {
    id: line.id,
    name: line.name,
    abbreviation: line.abbreviation,
    nicknames: line.nicknames.toString(),
    colors: line.colors.toString(),
    logo: line.logo,
    isActive: line.isActive,
  };
});
const csv = convertArrayToCSV(teamLines, {
  headings,
  separator: ",",
});

fs.writeFile("./public/final-csv-files/team-nhl-ids.csv", csv, (err) => {
  if (err) {
    console.log(err);
  }
  // console.log(`Data written to: ${csvFilePath}`);
});

console.log(csv);

// combining multiple arrays into one for each year of trade data

// import { convertArrayToCSV } from "convert-array-to-csv";
// // import teams from "../public/scraped-data/team-nhl-id";

// import { teams } from "./player-data/team-nhl-id";

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

// const csv = convertArrayToCSV(temp, {
//   headings,
//   separator: ",",
// });

// // writeFile(`./src/player-data/nhl-team-ids.csv`, csv);
// fs.writeFile("./src/csv-data/nhl-team-ids.csv", csv, (err) => {
//   if (err) {
//     console.log(err);
//   }
// });
