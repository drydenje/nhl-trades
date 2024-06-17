import { getPage } from "./utils.js";
import { readFile } from "./utils";
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
        name: $("a", player).html(),
        birthDate: $("td:eq(2)", player).html().trim(),
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
    // console.log("PL:", playersForLetter);
    allPlayers = [...allPlayers, ...playersForLetter];
  });
  // .flat();
  // console.log("P:", allPlayers);
  // return ["test"];
  return allPlayers.flat(); //.flatMap(player => );
  // call getNamesFromPage
  // append the array of players to a file? maybe keep this out?
};

export { getNamesFromPage, parsePlayer, getAllPlayers };
