import { getPage, readFile } from "./utils";
import { getNamesFromPage, parsePlayer } from "./hockey-db-id-scraper.js";

describe("parsePlayer function", () => {
  test("when passed a row of player data, will return an object with name, id, and birthday", () => {
    const html = `<td><a href=\"https://www.hockeydb.com/ihdb/stats/pdisplay.php?pid=5512\">Gene Ubriaco</a></td>\n<td>L</td>\n<td>12/26/1937</td>\n<td>Sault Ste. Marie, ONT</td>\n<td>1967-1970</td>\n<td>177</td>\n<td>39</td>\n<td>35</td>\n<td>74</td>\n<td>50</td>\n<td>3</td>`;
    const player = {
      name: "Gene Ubriaco",
      id: "5512",
      birthDate: "12/26/1937",
    };

    const result = parsePlayer(html);
    expect(result).toEqual(player);
  });
});

describe("getNamesFromPage function", () => {
  test.only("when passed an html page, will extract all of the players from it", async () => {
    const url = `public/raw-mock-data/hockeydb/NHL Player List -- U.html`;
    const html = readFile(url);
    // .then((html) => {
    const result = getNamesFromPage(html);
    // console.log(result);
    // });
    // expect(result).toMatchSnapshot();
  });
});
