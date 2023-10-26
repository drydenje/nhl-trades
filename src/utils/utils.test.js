import { checkArray, getNextYear, getPage, readFile } from "./utils";

const DATA_FILEPATH = `./public/raw-mock-data/`;
global.fetch = jest.fn((url) => {
  Promise.resolve({
    status: 200,
    json: async () => ({
      token: "MOCKED_GITHUB_INSTALLATION_ACCESS_TOKEN",
      expires_at: TOMORROW.toISOString(),
    }),
    // body: async () => await readFile(url),
  });
});
// Promise.resolve({
//   json: () => Promise.resolve({ rates: { CAD: 1.42 } }),
// })
// );
// .fn(() => "default")
// .mockImplementationOnce((url) => Promise.resolve(url));

beforeEach(() => {
  fetch.mockClear();
});

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
  test.only("should asynchronously return an html page when passed a url", async () => {
    // const fetch =
    const url = `${DATA_FILEPATH}/1977-78-1.html`;
    const result = await getPage(url);
    // const result = await fetch("testy");
    console.log("result:", result);
    // console.log(fetch(url));
  });
});
