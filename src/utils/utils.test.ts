import { getTradeTeams } from "./utils";
import page from "../../public/result";

const axios = require("axios");
jest.mock("axios");

const BASE_URL = `https://www.nhltradetracker.com/user/trade_list_by_season`;

describe("getTradeTeams module", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test.only("should get the trades from a cheerio object", async () => {
    const resp = { data: page };
    axios.request.mockResolvedValue(resp);

    return getTradeTeams(`${BASE_URL}/1919-20/1`).then((data) => {
      expect(data).toMatchInlineSnapshot(`
[
  {
    "date": "January 14, 1920",
    "teams": {
      "Montreal Canadiens": [
        "Harry Cameron",
      ],
      "Toronto Arenas": [
        "Goldie Prodgers",
      ],
    },
  },
  {
    "date": "December 21, 1919",
    "teams": {
      "Montreal Canadiens": [
        "Goldie Prodgers",
      ],
      "Quebec Bulldogs": [
        "Ed Carpenter",
      ],
    },
  },
]
`);
    });
  });
});
