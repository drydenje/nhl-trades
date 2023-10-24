import { checkArray, getNextYear } from "./utils";

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

// describe("getPage function", () => {
//   test("should asynchronously return an html page when passed a url", () => {});
// });
