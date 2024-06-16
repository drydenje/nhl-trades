import { getNamesFromPage, parsePlayer } from "./hockey-reference-id-scraper";
import { getPage } from "./utils";

describe("parsePlayer function", () => {
  test.only("when passed a link, will return an object with name and referenceID", () => {
    const html = `<p class="non_nhl"><a href="/players/a/aaltoju01.html">Juhamatti Aaltonen</a> (RW)</p>`;
    const player = {
      name: `Juhamatti Aaltonen`,
      hrID: `aaltoju01`,
    };

    const result = parsePlayer(html);
    expect(result).toEqual(player);
  });
});

describe("getNamesFromPage function", () => {
  test("when passed an html page, will extract all players from it", async () => {
    const url = `https://www.hockey-reference.com/players/a/`;
    const result = await getPage(url).then((html) => getNamesFromPage(html));
    expect(result).toMatchSnapshot();
  });
});
