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
"use strict";