// import { server, http, HttpResponse } from "../config/testServer.js";
import { addBirthdayToPlayer } from "./nhl-birthday-scraper";

describe("add-nhl-players birthday function", () => {
  test("should add nhl s to the player array", async () => {
    const players = [
      {
        id: 8444998,
        name: "Ace Bailey",
        hrID: "baileac01",
        birthDate: "1903-07-03",
      },
      { id: 8446178, name: "Alain Cote", hrID: "coteal01" },
      { id: 8446177, name: "Alain Cote", hrID: "coteal02" },
      { id: 8460842, name: "Alain Cote", hrID: null },
    ];

    const expected = [
      {
        id: 8444998,
        name: "Ace Bailey",
        hrID: "baileac01",
        birthDate: "1903-07-03",
      },
      {
        id: 8446178,
        name: "Alain Cote",
        hrID: "coteal01",
      },
      {
        id: 8446177,
        name: "Alain Cote",
        hrID: "coteal02",
      },
      {
        id: 8460842,
        name: "Alain Cote",
        hrID: null,
      },
    ];

    const result = await addBirthdayToPlayer(players);
    expect(result).toEqual(expected);
    expect(result.length).toEqual(4);
  });
});
