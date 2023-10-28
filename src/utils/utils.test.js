import { checkArray, getNextYear, getPage, readFile, convert } from "./utils";
import { server, http, HttpResponse } from "../config/testServer";
// import { http, HttpResponse } from "msw";
const DATA_FILEPATH = `./public/raw-mock-data/`;

describe("checkArray function", () => {
  test("should return 1 if an array contains data", () => {
    const seasons = {
      "2022-23": [],
      "2021-22": [{ data: true }],
      "2020-21": [],
    };

    const yearToCheck = "2021-22";
    const result = checkArray(seasons[yearToCheck]);
    expect(result).toEqual(1);
  });

  test("should return 0 if an array doesn't contain data", () => {
    const seasons = {
      "2022-23": [],
      "2021-22": [],
      "2020-21": [],
    };

    const yearToCheck = "2021-22";
    const result = checkArray(seasons[yearToCheck]);
    expect(result).toEqual(0);
  });

  test("should return 'false' if there is no array", () => {
    const seasons = {
      "2022-23": [],
      "2021-22": "",
      "2020-21": [],
    };

    const yearToCheck = "2021-22";
    const result = checkArray(seasons[yearToCheck]);
    expect(result).toEqual(false);
  });
});

describe("getNextYear function", () => {
  test("should return the most recent year that doesn't contain any data", () => {
    const seasons = {
      "2022-23": [{ data: false }],
      "2021-22": [],
      "2020-21": [],
    };

    const result = getNextYear(seasons);

    expect(result).toEqual("2021-22");
  });

  test("should return 'false' when all years contain data", () => {
    const seasons = {
      "2022-23": [{ data: false }],
      "2021-22": [{ data: false }],
      "2020-21": [{ data: false }],
    };

    const result = getNextYear(seasons);

    expect(result).toEqual(false);
  });
});

describe("getPage function", () => {
  test("should return an html page when passed a url", async () => {
    const url = `https://www.nhltradetracker.com/user/trade_list_by_season/1977-78/1`;
    const result = await getPage(url);
    expect(result).toMatchSnapshot();
  });

  test("finds exchange", async () => {
    const rate = await convert("USD", "CAD");
    expect(rate).toEqual(1.42);
  });

  test("handles failure", async () => {
    server.use(
      http.get(
        `https://api.exchangeratesapi.io/latest`,
        (req, res, context) => {
          return new HttpResponse("Not found", {
            status: 404,
            headers: {
              "Content-Type": "text/plain",
            },
          });
        }
      )
    );

    await expect(convert("FAIL", "CAD")).rejects.toThrow("404");
  });
});
