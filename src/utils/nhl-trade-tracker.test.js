import { getPageCount } from "./nhl-trade-tracker";
import { readFile } from "./utils";
// import page from "../../public/raw-mock-data/1977-78-1.html";

const page = readFile("./public/raw-mock-data/1977-78-1.html");
// console.log(page);

describe("getPageCount function", () => {
  test.only("should return the number of pages to scrape for that year, given an html page", async () => {
    const result = await getPageCount(page);
    console.log("R:", result);
    expect(result).toEqual(3);
  });
});
