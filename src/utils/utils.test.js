import { getTradeTeams, checkArray, getNextYear } from "./utils";
import page from "../../public/result";

const axios = require("axios");
jest.mock("axios");

const BASE_URL = `https://www.nhltradetracker.com/user/trade_list_by_season`;

// describe("getTradeTeams module", () => {
//   beforeEach(() => {
//     jest.clearAllMocks();
//   });

//   test("should get the trades from a cheerio object", async () => {
//     const resp = { data: page };
//     axios.request.mockResolvedValue(resp);

//     return getTradeTeams(`${BASE_URL}/1919-20/1`).then((data) => {
//       expect(data).toMatchInlineSnapshot(`
// [
//   {
//     "comment": null,
//     "date": "January 14, 1920",
//     "teams": {
//       "Montreal Canadiens": [
//         {
//           "id": "23517",
//           "name": "Harry Cameron",
//         },
//       ],
//       "Toronto Arenas": [
//         {
//           "id": "4394",
//           "name": "Goldie Prodgers",
//         },
//       ],
//     },
//   },
//   {
//     "comment": null,
//     "date": "December 21, 1919",
//     "teams": {
//       "Montreal Canadiens": [
//         {
//           "id": "4394",
//           "name": "Goldie Prodgers",
//         },
//       ],
//       "Quebec Bulldogs": [
//         {
//           "id": "29897",
//           "name": "Ed Carpenter",
//         },
//       ],
//     },
//   },
// ]
// `);
//     });
//   });
// });

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
  test("shoud return the most recent year that doesn't contain any data", () => {
    const seasons = {
      "2022-23": [{ data: false }],
      "2021-22": [],
      "2020-21": [],
    };

    const result = getNextYear(seasons);

    expect(result).toEqual("2021-22");
  });

  test("shoud return 'false' when all years contain data", () => {
    const seasons = {
      "2022-23": [{ data: false }],
      "2021-22": [{ data: false }],
      "2020-21": [{ data: false }],
    };

    const result = getNextYear(seasons);

    expect(result).toEqual(false);
  });
});
