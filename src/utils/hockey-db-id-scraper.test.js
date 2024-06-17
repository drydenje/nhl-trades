import { getPage, readFile, writeFile } from "./utils";
import {
  getAllPlayers,
  getNamesFromPage,
  parsePlayer,
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
    // const letters = ["A", "U"];
    const letters = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    const output = `${filePath}/res.js`;
    // console.log(output);

    const result = getAllPlayers(letters, filePath);
    // .then((res) => {
    writeFile(output, result);
    // });
    // console.log(result);
    // expect(result).toMatchSnapshot();
    // expect(result.length).toEqual(259);
    expect(result.length).toEqual(8556);
  });
});
