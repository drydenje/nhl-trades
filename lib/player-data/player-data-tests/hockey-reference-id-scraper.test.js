"use strict";

var _hockeyReferenceIdScraper = require("./hockey-reference-id-scraper");
var _utils = require("./utils");
describe("parsePlayer function", () => {
  test.only("when passed a link, will return an object with name and referenceID", () => {
    const html = `<p class="non_nhl"><a href="/players/a/aaltoju01.html">Juhamatti Aaltonen</a> (RW)</p>`;
    const player = {
      name: `Juhamatti Aaltonen`,
      hrID: `aaltoju01`
    };
    const result = (0, _hockeyReferenceIdScraper.parsePlayer)(html);
    expect(result).toEqual(player);
  });
});
describe("getNamesFromPage function", () => {
  test("when passed an html page, will extract all players from it", async () => {
    const url = `https://www.hockey-reference.com/players/a/`;
    const result = await (0, _utils.getPage)(url).then(html => (0, _hockeyReferenceIdScraper.getNamesFromPage)(html));
    expect(result).toMatchSnapshot();
  });
});