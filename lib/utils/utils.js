"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkArray = void 0;
exports.convert = convert;
exports.writeFile = exports.removeNickname = exports.readFile = exports.parsePlayersFromHR = exports.getPage = exports.getNextYear = void 0;
var _cheerio = _interopRequireDefault(require("cheerio"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const fs = require("fs");
// import fs from "fs";

// checks to see if an array exists and is empty.
// Returns 0 if empty, 1 if the array has data, and 'false' if it's not an array
const checkArray = arr => {
  return Array.isArray(arr) && arr.length;
};

// Returns the next year to scrape
exports.checkArray = checkArray;
const getNextYear = obj => {
  const yearToScrape = Object.entries(obj).filter(year => {
    if (checkArray(year[1]) === 0) {
      return year;
    }
  });
  if (yearToScrape.length > 0) {
    // return the year of the first object of the array
    return yearToScrape[0][0];
  } else {
    return false;
  }
};

// Returns a single html page from the given url
exports.getNextYear = getNextYear;
const getPage = async url => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Request failed with status code ${result.status}`);
    }
    const data = await res.text();
    return data;
  } catch (error) {
    console.error(`Could not fetch page: ${error}`);
  }
};

// reads the file from disk
exports.getPage = getPage;
const readFile = filePath => {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    return data;
  } catch (error) {
    console.error(error);
  }
};

// writes the file to disk
exports.readFile = readFile;
const writeFile = (filePath, data) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data));
  } catch (error) {
    console.error(error);
  }
};
exports.writeFile = writeFile;
async function convert(base, destination) {
  const result = await fetch(`https://api.exchangeratesapi.io/latest?base=${base}`);
  if (!result.ok) {
    throw new Error(`Request failed with status code ${result.status}`);
  }
  const data = await result.json();
  return data.rates[destination];
}
const removeNickname = nickname => {
  // 1. Remove the nickname and the quotes around it
  // 2. This leaves two whitespace characters
  // 3. Replace the two characters with a single one
  return nickname.replace(/"([^"]*)"/g, "").replace(/\s\s+/g, " ");
};
exports.removeNickname = removeNickname;
const parsePlayersFromHR = html => {
  // return object with extracted values
  let $ = _cheerio.default.load(html);
  const players = [];
  $("#stats tbody").find("tr").each((index, element) => {
    const regex = /\w+(?=.html)/gm;
    const player = {
      name: $(element).find("td a").text(),
      id: $(element).find("td a").attr("href"),
      //.match(regex)[0],
      birthDate: $(element).find('td[data-stat="birth_date"]').text()
    };
    if (player.name && player.id.trim() !== "") {
      players.push(player);
    }
  });
  return players;
};
exports.parsePlayersFromHR = parsePlayersFromHR;