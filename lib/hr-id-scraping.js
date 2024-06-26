"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scrapeHRPlayers = void 0;
var _utils = require("./utils/utils.js");
var _hockeyReferenceIdScraper = require("./utils/hockey-reference-id-scraper");
const HOCKEY_REFERENCE_URL = `https://www.hockey-reference.com/players`;
const chalk = require("chalk");

// This takes about 8 minutes to finish
// https://www.hockey-reference.com/friv/birthplaces.cgi
const scrapeHRPlayers = async () => {
  // const places = JSON.parse(readFile(`./src/player-data/hr-player-id.json`));
  // console.log(places[0]);
  // const placeToScrape = places.find(
  //   (place) => place.data === undefined || place.data.length == 0
  // );
  // const remainingPlaces = places.filter(
  //   (place) => place.data === undefined || place.data.length == 0
  // ).length;

  // console.log(
  //   chalk.yellow.bgBlue(
  //     `Trying to scrape: ${placeToScrape.name} (${remainingPlaces}/${places.length})`
  //   )
  // );
  // const players = await getPage(
  //   `https://www.hockey-reference.com/${placeToScrape.href}`
  // ).then((html) => parsePlayersFromHR(html));

  // const result = places.map((place) =>
  //   place.name === placeToScrape.name ? { ...place, data: players } : place
  // );

  // const res = [];
  // places.forEach((place) => {
  //   chalk.yellow.bgBlue(`Trying to scrape: ${place.name})`);
  //   res.push(place.data);
  // });

  const players = JSON.parse((0, _utils.readFile)(`./src/player-data/hr-player-id-test.json`));
  const regex = /\w+(?=.html)/gm;
  const res = players.map(player => {
    return {
      ...player,
      id: player.id.match(regex)
    };
  });
  // const player = {
  //   name: "Gene Achtymichuk",
  //   id: "/players/a/achtyge01.html",
  //   birthDate: "1932-09-07",
  // };

  // const res = player.id.match(regex);
  // console.log(res);

  // add the returned back into the array
  (0, _utils.writeFile)(`./src/player-data/hr-player-id-test.json`, res);
};
exports.scrapeHRPlayers = scrapeHRPlayers;