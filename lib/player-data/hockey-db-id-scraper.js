"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setHdbID = exports.parsePlayer = exports.getNamesFromPage = exports.getAllPlayers = exports.addHdbIDToAll = void 0;
var _utils = require("../utils/utils");
const path = require("path");
const cheerio = require("cheerio");
const chalk = require("chalk");

// can probably delete this
const parsePlayer = html => {
  const $ = cheerio.load(html);
  // console.log(html);
  const playerName = $("a").text().trim();
  const playerId = $("a").attr("href").match(/\d+$/)[0];
  const birthDate = $("td");
  // console.log("bd:", birthDate);

  const data = {
    name: playerName,
    id: playerId,
    birthDate: null
  };
  return data;
};
exports.parsePlayer = parsePlayer;
const getNamesFromPage = page => {
  const $ = cheerio.load(page);
  const names = $(".sortable > tbody").children().map((index, player) => {
    return {
      hdbID: $("a", player).attr("href").match(/\d+$/)[0],
      name: (0, _utils.removeNickname)($("a", player).html()),
      birthDate: new Date($("td:eq(2)", player).html().trim()).toLocaleDateString("en-CA")
      // new Date('02/04/1930').toLocaleDateString('en-CA')
    };
  }).toArray();
  // console.log("N:", names);
  return names;
};
exports.getNamesFromPage = getNamesFromPage;
const play = [[{
  birthDate: "12/26/1937",
  id: "5512",
  name: "Gene Ubriaco"
}, {
  birthDate: "12/31/1992",
  id: "123037",
  name: "Dominik Uher"
}, {
  birthDate: "10/01/1969",
  id: "5515",
  name: "Igor Ulanov"
}], [{
  birthDate: "12/26/1935",
  id: "5516",
  name: "Norm Ullman"
}, {
  birthDate: "07/31/1993",
  id: "152794",
  name: "Linus Ullmark"
}, {
  birthDate: "04/22/1989",
  id: "112734",
  name: "David Ullstrom"
}], [{
  birthDate: "04/27/1977",
  id: "27868",
  name: "Jeff Ulmer"
}, {
  birthDate: "09/14/1980",
  id: "31019",
  name: "Layne Ulmer"
}, {
  birthDate: "05/03/1982",
  id: "54470",
  name: "R.J. Umberger"
}]];
const getAllPlayers = (letters, baseFilePath) => {
  let allPlayers = [];
  // for each letter in the array
  letters.forEach(letter => {
    const fileToParse = `${baseFilePath}/NHL Player List -- ${letter.toUpperCase()}.html`;
    const html = (0, _utils.readFile)(fileToParse);
    const playersForLetter = getNamesFromPage(html);
    allPlayers = [...allPlayers, ...playersForLetter];
  });
  return allPlayers.flat(); //.flatMap(player => );
};

// Takes two players and returns one combined (if it's the same person)
exports.getAllPlayers = getAllPlayers;
const setHdbID = (player, hdbPlayer) => {
  // check that the name and birthdate match to verify it's the same person
  if (player.name === hdbPlayer.name && player.birthDate === hdbPlayer.birthDate) {
    // it's the same person, add the hdbID
    return {
      ...player,
      hdbID: hdbPlayer.hdbID ? hdbPlayer.hdbID : null
    };
  } else {
    // it's a different person, just return the first player without the hdbID
    return {
      ...player
    };
  }
};
exports.setHdbID = setHdbID;
const addHdbIDToAll = (players, hdbPlayers) => {
  // if (typeof hdbPlayers.isObject) {
  //   console.log(hdbPlayers);
  //   throw "Not an array";
  // }

  // for each player in the nhl array
  const result = players.map(player => {
    // find player(s) in the hdb array with the same name
    const findHdbPlayers = hdbPlayers.filter(hdbPlayer => hdbPlayer.name === player.name);
    // console.log("FIND:", player);

    // if (findHdbPlayers.length === 0) {
    //   console.log("ZERO:", findHdbPlayers);
    //   console.log("PL:", player);
    // }
    // return player;

    // refine the array further by comparing birthdates
    let fPlayers = findHdbPlayers.filter(p => p.birthDate === player.birthDate);

    // return the final player object to the result array
    return {
      ...player,
      hdbID: fPlayers[0]?.hdbID ? fPlayers[0].hdbID : null
    };
  });

  // return the result array
  return result;
};
exports.addHdbIDToAll = addHdbIDToAll;