import { getTradeTeams, bah } from "./utils";
import page from "../../public/result";

const axios = require("axios");
jest.mock("axios");

const BASE_URL = `https://www.nhltradetracker.com/user/trade_list_by_season`;

describe("getTradeTeams module", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test.only("should get the trades from a cheerio object", async () => {
    const users = "page";
    const resp = { data: page };
    axios.request.mockResolvedValue(resp);

    return getTradeTeams(`${BASE_URL}/1919-20/1`).then((data) => {
      // console.log("data:", data.html());
      expect(data).toMatchInlineSnapshot(`
[
  {
    "date": "January 14, 1920",
    "headings": [
      "Toronto Arenas",
      "Montreal Canadiens",
    ],
    "team1": [
      "Harry Cameron",
    ],
    "team2": [],
  },
  {
    "date": "December 21, 1919",
    "headings": [
      "Quebec Bulldogs",
      "Montreal Canadiens",
    ],
    "team1": [
      "Goldie Prodgers",
    ],
    "team2": [],
  },
]
`);
      // expect(1).toEqual(1);
      // console.log(data);
    });

    // expect(getTradeTeams(5)).toBe(5);
  });
});
