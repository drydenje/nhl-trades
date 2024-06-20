import { getPage, readFile, writeFile } from "./utils";
import {
  getAllPlayers,
  getNamesFromPage,
  parsePlayer,
  setHdbID,
} from "./hockey-db-id-scraper.js";

// describe("parsePlayer function", () => {
//   test("when passed a row of player data, will return an object with name, id, and birthday", () => {
//     const html = `<td><a href=\"https://www.hockeydb.com/ihdb/stats/pdisplay.php?pid=5512\">Gene Ubriaco</a></td>\n<td>L</td>\n<td>12/26/1937</td>\n<td>Sault Ste. Marie, ONT</td>\n<td>1967-1970</td>\n<td>177</td>\n<td>39</td>\n<td>35</td>\n<td>74</td>\n<td>50</td>\n<td>3</td>`;
//     const player = {
//       name: "Gene Ubriaco",
//       id: "5512",
//       birthDate: "12/26/1937",
//     };

//     const result = parsePlayer(html);
//     expect(result).toEqual(player);
//   });
// });

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
  test.only("when a single player object is found, add the hdbID to it", () => {
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

    const result = setHdbID(player, 167);

    expect(result).toEqual(expected);
  });
});
