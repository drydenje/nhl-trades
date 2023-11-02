"use strict";

var _experiment = require("./experiment");
describe("js experiments", () => {
  test("should", async () => {
    const result = await (0, _experiment.runScrape)();
    // console.log(result);
    expect(true).toBe(true);
  });
});