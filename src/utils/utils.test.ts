import axios from "axios";
jest.mock("axios");
import { describe, expect, test } from "@jest/globals";
import { getTradeTeams } from "./utils";
import page from "../../public/result";

describe("getTradeTeams module", () => {
  test("should get the trades", () => {
    axios.get.mockResolvedValue(page);
    // expect(getTradeTeams(5)).toBe(5);
  });
});
