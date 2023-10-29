import { runScrape } from "./experiment";

describe("js experiments", () => {
  test("should", async () => {
    const result = await runScrape();
    // console.log(result);
    expect(true).toBe(true);
  });
});
