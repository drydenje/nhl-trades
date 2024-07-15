import { getPage, readFile, writeFile } from "./utils";
import {
  getAllPlayers,
  getNamesFromPage,
  // setHdbID,
  // addHdbIDToAll,
} from "../hockey-db-id-scraper.js";

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
    expect(result).toMatchSnapshot();
    expect(result.length).toEqual(259);
    // expect(result.length).toEqual(8556);
  });
});