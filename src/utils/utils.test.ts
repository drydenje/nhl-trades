// import axios from "axios";
const axios = require("axios");
jest.mock("axios");
import { describe, expect, test } from "@jest/globals";
import { getTradeTeams } from "./utils";
import page from "../../public/result";

const BASE_URL = `https://www.nhltradetracker.com/user/trade_list_by_season`;

type Trade = {};

describe("getTradeTeams module", () => {
  test("should get the trades from a cheerio object", () => {
    const users = [{ name: "Bob" }];
    const resp = { data: { name: "Aud" } };
    // axios.get.mockResolvedValue(resp);

    return getTradeTeams(`${BASE_URL}/1919-20/1`).then((data) => {
      expect(data).toEqual(users);
      // console.log(data);
    });

    // expect(getTradeTeams(5)).toBe(5);
  });
});
