import { addHrIdsToPlayerList } from "./player-csv-prep.js";
// import { server, http, HttpResponse } from "../config/testServer.js";

// const DATA_FILEPATH = `./public/scraped-data/`;

// describe("add-nhl-players function", () => {
//   // this shouldn't return csv?
//   test("should return a csv (file?) given an array of nhl.com players", () => {
//     const headings = ["id", "name", "hrId"];
//     const players = [
//       {
//         id: 8444924,
//         name: "Jim Anderson",
//       },
//       {
//         id: 8444926,
//         name: "Murray Anderson",
//       },
//       {
//         id: 8444995,
//         name: "Pete Backor",
//       },
//     ];

//     // const yearToCheck = "2021-22";
//     // const result = checkArray(seasons[yearToCheck]);
//     // expect(result).toEqual(1);
//   });
// });

describe("add-hr-players function", () => {
  test("should add hockey-reference.com id's to the player array", () => {
    const players = [
      {
        id: 8444924,
        name: "Jim Anderson",
      },
      {
        id: 8444926,
        name: "Murray Anderson",
      },
      {
        id: 8444995,
        name: "Pete Backor",
      },
    ];

    const hrPlayers = [
      { name: "Jim Anderson", hrID: "anderji01" },
      { name: "Murray Anderson", hrID: "andermu01" },
      { name: "Pete Backor", hrID: "backope01" },
    ];

    const expectedList = [
      {
        id: 8444924,
        name: "Jim Anderson",
        hrID: "anderji01",
      },
      {
        id: 8444926,
        name: "Murray Anderson",
        hrID: "andermu01",
      },
      {
        id: 8444995,
        name: "Pete Backor",
        hrID: "backope01",
      },
    ];

    const result = addHrIdsToPlayerList(players, hrPlayers);
    expect(result.length).toEqual(3);
    expect(result).toEqual(expectedList);
  });
});