// import axios from "axios";
// import { describe, expect, test } from "@jest/globals";
import { getTradeTeams, bah } from "./utils";
// import page from "../../public/result";

const axios = require("axios");
jest.mock("axios");

const BASE_URL = `https://www.nhltradetracker.com/user/trade_list_by_season`;

describe("getTradeTeams module", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test.only("should get the trades from a cheerio object", async () => {
    const users = [{ name: "Bob" }];
    const resp = { data: [{ name: "Aud" }] };
    axios.request.mockResolvedValue(resp);

    return getTradeTeams(`${BASE_URL}/1919-20/1`).then((data) => {
      expect(data).toEqual(users);
      // console.log(data);
    });

    // expect(getTradeTeams(5)).toBe(5);
  });

  test("simple test", async () => {
    const users = [{ name: "Bob" }];
    const resp = { data: [{ name: "Sue" }] };
    axios.get.mockResolvedValue(resp);

    return bah().then((data) => expect(data).toEqual(users));
  });
});
