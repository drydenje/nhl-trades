import { getPage, readFile, writeFile } from "./utils";
import {
  getAllPlayers,
  getNamesFromPage,
  setHdbID,
  addHdbIDToAll,
} from "./hockey-db-id-scraper.js";

describe("getNamesFromPage function", () => {
  test("when passed an html page, will extract all of the players from it", async () => {
    const url = `public/raw-mock-data/hockeydb/NHL Player List -- U.html`;
    const html = readFile(url);
    const result = await getNamesFromPage(html);

    expect(result).toMatchSnapshot();
    expect(result.length).toEqual(14);
  });
});

describe("getAllPlayers function", () => {
  test("when passed an array of letters and a base file path, will extract all player info", async () => {
    const filePath = `public/raw-mock-data/hockeydb`;
    const letters = ["A", "U"];
    // const letters = [
    //   "A",
    //   "B",
    //   "C",
    //   "D",
    //   "E",
    //   "F",
    //   "G",
    //   "H",
    //   "I",
    //   "J",
    //   "K",
    //   "L",
    //   "M",
    //   "N",
    //   "O",
    //   "P",
    //   "Q",
    //   "R",
    //   "S",
    //   "T",
    //   "U",
    //   "V",
    //   "W",
    //   "X",
    //   "Y",
    //   "Z",
    // ];
    // const output = `${filePath}/res.js`;
    const result = getAllPlayers(letters, filePath);
    // writeFile(output, result);
    // expect(result).toMatchSnapshot();
    expect(result.length).toEqual(259);
    // expect(result.length).toEqual(8556);
  });
});

describe("set hdbID on player objects", () => {
  test("when a players name and birthdate match, add the hdbID to it", () => {
    const player = {
      id: 8444998,
      name: "Ace Bailey",
      hrID: "baileac01",
      birthDate: "1903-07-03",
    };

    const hdbIDPlayer = {
      name: "Ace Bailey",
      hdbID: "167",
      birthDate: "1903-07-03",
    };

    const expected = {
      id: 8444998,
      name: "Ace Bailey",
      hrID: "baileac01",
      hdbID: "167",
      birthDate: "1903-07-03",
    };

    const result = setHdbID(player, hdbIDPlayer);

    expect(result).toEqual(expected);
  });

  test("when a players name and birthdate dont' match, don't add the hdbID to it", () => {
    const player = {
      id: 8444998,
      name: "Ace Bailey",
      hrID: "baileac01",
      birthDate: "1903-07-03",
    };

    const hdbIDPlayer = {
      name: "Ace Bailey",
      hdbID: "167",
      birthDate: "1943-07-03",
    };

    const expected = {
      id: 8444998,
      name: "Ace Bailey",
      hrID: "baileac01",
      birthDate: "1903-07-03",
    };

    const result = setHdbID(player, hdbIDPlayer);

    expect(result).toEqual(expected);
  });

  test.only("add all hdbIDs to an array of players", () => {
    const players = [
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
        birthDate: "1957-05-03",
      },
      {
        id: 8446177,
        name: "Alain Cote",
        hrID: "coteal02",
        birthDate: "1967-04-14",
      },
      {
        id: 8460842,
        name: "Alain Cote",
        hrID: null,
        birthDate: "1973-08-13",
      },
      {
        id: 8470678,
        name: "Alexandre Picard",
        hrID: "picaral01",
        birthDate: "1985-07-05",
      },
    ];

    const hdbPlayers = [
      { hdbID: "167", name: "Irvine Bailey", birthDate: "1903-07-03" },
      { hdbID: "29879", name: "Charlie Cotch", birthDate: "Invalid Date" },
      { hdbID: "7423", name: "Alain Cote", birthDate: "1957-05-03" },
      { hdbID: "1111", name: "Alain Cote", birthDate: "1967-04-14" },
      { hdbID: "49839", name: "Jean-Philippe Cote", birthDate: "1982-04-22" },
      { hdbID: "70731", name: "Alexandre Picard", birthDate: "1985-10-09" },
      { hdbID: "62277", name: "Alexandre Picard", birthDate: "1985-07-05" },
      { hdbID: "4281", name: "Michel Picard", birthDate: "1969-10-07" },
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
        hdbID: "7423",
        birthDate: "1957-05-03",
      },
      {
        id: 8446177,
        name: "Alain Cote",
        hrID: "coteal02",
        hdbID: "1111",
        birthDate: "1967-04-14",
      },
      {
        id: 8460842,
        name: "Alain Cote",
        hrID: null,
        hdbID: null,
        birthDate: "1973-08-13",
      },
      {
        id: 8470678,
        name: "Alexandre Picard",
        hrID: "picaral01",
        hdbID: "62277",
        birthDate: "1985-07-05",
      },
    ];

    const result = addHdbIDToAll(players, hdbPlayers);
    // console.log("FINAL:", result);

    expect(result).toEqual(expected);
  });
});
