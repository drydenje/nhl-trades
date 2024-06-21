import { getPage, readFile, writeFile } from "./utils";
import {
  getAllPlayers,
  getNamesFromPage,
  setHdbID,
} from "./hockey-db-id-scraper.js";

describe("getNamesFromPage function", () => {
  test("when passed an html page, will extract all of the players from it", async () => {
    const url = `public/raw-mock-data/hockeydb/NHL Player List -- U.html`;
    const html = readFile(url);
    const result = await getNamesFromPage(html);

    expect(result).toMatchSnapshot();
    expect(result.length).toEqual(14);
  });
});

describe("getAllPlayers function", () => {
  test("when passed an array of letters and a base file path, will extract all player info", async () => {
    const filePath = `public/raw-mock-data/hockeydb`;
    const letters = ["A", "U"];
    // const letters = [
    //   "A",
    //   "B",
    //   "C",
    //   "D",
    //   "E",
    //   "F",
    //   "G",
    //   "H",
    //   "I",
    //   "J",
    //   "K",
    //   "L",
    //   "M",
    //   "N",
    //   "O",
    //   "P",
    //   "Q",
    //   "R",
    //   "S",
    //   "T",
    //   "U",
    //   "V",
    //   "W",
    //   "X",
    //   "Y",
    //   "Z",
    // ];
    // const output = `${filePath}/res.js`;
    const result = getAllPlayers(letters, filePath);
    // writeFile(output, result);
    // expect(result).toMatchSnapshot();
    expect(result.length).toEqual(259);
    // expect(result.length).toEqual(8556);
  });
});

describe("set hdbID on player objects", () => {
  test("when a players name and birthdate match, add the hdbID to it", () => {
    const player = {
      id: 8444998,
      name: "Ace Bailey",
      hrID: "baileac01",
      birthDate: "1903-07-03",
    };

    const hdbIDPlayer = {
      name: "Ace Bailey",
      hdbID: "167",
      birthDate: "1903-07-03",
    };

    const expected = {
      id: 8444998,
      name: "Ace Bailey",
      hrID: "baileac01",
      hdbID: "167",
      birthDate: "1903-07-03",
    };

    const result = setHdbID(player, hdbIDPlayer);

    expect(result).toEqual(expected);
  });

  test.only("when a players name and birthdate dont' match, don't add the hdbID to it", () => {
    const player = {
      id: 8444998,
      name: "Ace Bailey",
      hrID: "baileac01",
      birthDate: "1903-07-03",
    };

    const hdbIDPlayer = {
      name: "Ace Bailey",
      hdbID: "167",
      birthDate: "1943-07-03",
    };

    const expected = {
      id: 8444998,
      name: "Ace Bailey",
      hrID: "baileac01",
      birthDate: "1903-07-03",
    };

    const result = setHdbID(player, hdbIDPlayer);

    expect(result).toEqual(expected);
  });
});
