import { readFile, removeNickname } from "./utils";
const path = require("path");
const cheerio = require("cheerio");
const chalk = require("chalk");

// can probably delete this
const parsePlayer = (html) => {
  const $ = cheerio.load(html);
  // console.log(html);
  const playerName = $("a").text().trim();
  const playerId = $("a").attr("href").match(/\d+$/)[0];
  const birthDate = $("td");
  // console.log("bd:", birthDate);

  const data = {
    name: playerName,
    id: playerId,
    birthDate: null,
  };

  return data;
};

const getNamesFromPage = (page) => {
  const $ = cheerio.load(page);
  const names = $(".sortable > tbody")
    .children()
    .map((index, player) => {
      return {
        hdbID: $("a", player).attr("href").match(/\d+$/)[0],
        name: removeNickname($("a", player).html()),
        birthDate: new Date(
          $("td:eq(2)", player).html().trim()
        ).toLocaleDateString("en-CA"),
        // new Date('02/04/1930').toLocaleDateString('en-CA')
      };
    })
    .toArray();
  // console.log("N:", names);
  return names;
};

const play = [
  [
    {
      birthDate: "12/26/1937",
      id: "5512",
      name: "Gene Ubriaco",
    },
    {
      birthDate: "12/31/1992",
      id: "123037",
      name: "Dominik Uher",
    },
    {
      birthDate: "10/01/1969",
      id: "5515",
      name: "Igor Ulanov",
    },
  ],
  [
    {
      birthDate: "12/26/1935",
      id: "5516",
      name: "Norm Ullman",
    },
    {
      birthDate: "07/31/1993",
      id: "152794",
      name: "Linus Ullmark",
    },
    {
      birthDate: "04/22/1989",
      id: "112734",
      name: "David Ullstrom",
    },
  ],
  [
    {
      birthDate: "04/27/1977",
      id: "27868",
      name: "Jeff Ulmer",
    },
    {
      birthDate: "09/14/1980",
      id: "31019",
      name: "Layne Ulmer",
    },
    {
      birthDate: "05/03/1982",
      id: "54470",
      name: "R.J. Umberger",
    },
  ],
];

const getAllPlayers = (letters, baseFilePath) => {
  let allPlayers = [];
  // for each letter in the array
  letters.forEach((letter) => {
    const fileToParse = `${baseFilePath}/NHL Player List -- ${letter.toUpperCase()}.html`;
    const html = readFile(fileToParse);
    const playersForLetter = getNamesFromPage(html);
    allPlayers = [...allPlayers, ...playersForLetter];
  });
  return allPlayers.flat(); //.flatMap(player => );
};

// Takes two players and returns one combined (if it's the same person)
const setHdbID = (player, hdbPlayer) => {
  // check that the name and birthdate match to verify it's the same person
  if (
    player.name === hdbPlayer.name &&
    player.birthDate === hdbPlayer.birthDate
  ) {
    // it's the same person, add the hdbID
    return {
      ...player,
      hdbID: hdbPlayer.hdbID ? hdbPlayer.hdbID : null,
    };
  } else {
    // it's a different person, just return the first player without the hdbID
    return {
      ...player,
    };
  }
};

const addHdbIDToAll = (players, hdbPlayers) => {
  const result = players.map((player) => {
    const findHdbPlayers = hdbPlayers.filter(
      (hdbPlayer) => hdbPlayer.name === player.name
    );
    // console.log("FIND:", findHdbPlayers);
    // console.log("FIND:", player);

    // if (findHdbPlayers.length === 0) {
    //   console.log("ZERO:", findHdbPlayers);
    //   console.log("PL:", player);
    // }
    // return player;

    const fPlayers = findHdbPlayers.filter(
      (p) => p.birthDate === player.birthDate
    );
    // console.log("FP:", fPlayers);

    return fPlayers[0] || player;
    // return setHdbID(player, temp);
  });

  return result;
};

export {
  getNamesFromPage,
  parsePlayer,
  getAllPlayers,
  setHdbID,
  addHdbIDToAll,
};
