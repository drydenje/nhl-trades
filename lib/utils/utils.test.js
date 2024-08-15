"use strict";

var _utils = require("./utils");
var _testServer = require("../config/testServer");
const DATA_FILEPATH = `./public/raw-mock-data/`;
describe("checkArray function", () => {
  test("should return 1 if an array contains data", () => {
    const seasons = {
      "2022-23": [],
      "2021-22": [{
        data: true
      }],
      "2020-21": []
    };
    const yearToCheck = "2021-22";
    const result = (0, _utils.checkArray)(seasons[yearToCheck]);
    expect(result).toEqual(1);
  });
  test("should return 0 if an array doesn't contain data", () => {
    const seasons = {
      "2022-23": [],
      "2021-22": [],
      "2020-21": []
    };
    const yearToCheck = "2021-22";
    const result = (0, _utils.checkArray)(seasons[yearToCheck]);
    expect(result).toEqual(0);
  });
  test("should return 'false' if there is no array", () => {
    const seasons = {
      "2022-23": [],
      "2021-22": "",
      "2020-21": []
    };
    const yearToCheck = "2021-22";
    const result = (0, _utils.checkArray)(seasons[yearToCheck]);
    expect(result).toEqual(false);
  });
});
describe("getNextYear function", () => {
  test("should return the most recent year that doesn't contain any data", () => {
    const seasons = {
      "2022-23": [{
        data: false
      }],
      "2021-22": [],
      "2020-21": []
    };
    const result = (0, _utils.getNextYear)(seasons);
    expect(result).toEqual("2021-22");
  });
  test("should return 'false' when all years contain data", () => {
    const seasons = {
      "2022-23": [{
        data: false
      }],
      "2021-22": [{
        data: false
      }],
      "2020-21": [{
        data: false
      }]
    };
    const result = (0, _utils.getNextYear)(seasons);
    expect(result).toEqual(false);
  });
});
describe("getPage function", () => {
  test("should return an html page when passed a url", async () => {
    const url = `https://www.nhltradetracker.com/user/trade_list_by_season/1977-78/1`;
    const result = await (0, _utils.getPage)(url);
    expect(result).toMatchSnapshot();
  });
  test("finds exchange", async () => {
    const rate = await (0, _utils.convert)("USD", "CAD");
    expect(rate).toEqual(1.42);
  });
  test("handles failure", async () => {
    _testServer.server.use(_testServer.http.get(`https://api.exchangeratesapi.io/latest`, (req, res, context) => {
      return new _testServer.HttpResponse("Not found", {
        status: 404,
        headers: {
          "Content-Type": "text/plain"
        }
      });
    }));
    await expect((0, _utils.convert)("FAIL", "CAD")).rejects.toThrow("404");
  });
});
describe("removeNickname function", () => {
  test("given a full name (string), should remove nickname and the quotes around it", () => {
    const player = {
      hdbID: "14560",
      name: 'Martin "Buster" Zoborosky',
      birthDate: "11/12/1916"
    };
    const result = (0, _utils.removeNickname)(player.name);
    expect(result).toEqual("Martin Zoborosky");
  });
});
describe("checkForMultipleNames function", () => {
  test.only("given an array of players and one matching name, should return 'true'", () => {
    const players = [{
      id: 8445015,
      headshot: "https://assets.nhle.com/mugs/nhl/19821983/NJD/8445015.png",
      firstName: {
        default: "Mike"
      },
      lastName: {
        default: "Antonovich"
      },
      sweaterNumber: 23,
      positionCode: "C",
      shootsCatches: "L",
      heightInInches: 68,
      weightInPounds: 165,
      heightInCentimeters: 173,
      weightInKilograms: 75,
      birthDate: "1951-10-18",
      birthCity: {
        default: "Calumet"
      },
      birthCountry: "USA",
      birthStateProvince: {
        default: "Minnesota"
      },
      hrID: null,
      hdbID: null,
      verified: false
    }, {
      id: 8445118,
      headshot: "https://assets.nhle.com/mugs/nhl/19821983/NJD/8445118.png",
      firstName: {
        default: "Brent"
      },
      lastName: {
        default: "Ashton"
      },
      sweaterNumber: 15,
      positionCode: "L",
      shootsCatches: "L",
      heightInInches: 73,
      weightInPounds: 210,
      heightInCentimeters: 185,
      weightInKilograms: 95,
      birthDate: "1960-05-18",
      birthCity: {
        default: "Saskatoon"
      },
      birthCountry: "CAN",
      birthStateProvince: {
        default: "Saskatchewan"
      },
      hrID: null,
      hdbID: null,
      verified: false
    }, {
      id: 8445725,
      headshot: "https://assets.nhle.com/mugs/nhl/19821983/NJD/8445725.png",
      firstName: {
        default: "Aaron"
      },
      lastName: {
        default: "Broten"
      },
      sweaterNumber: 10,
      positionCode: "C",
      shootsCatches: "L",
      heightInInches: 70,
      weightInPounds: 180,
      heightInCentimeters: 178,
      weightInKilograms: 82,
      birthDate: "1960-11-14",
      birthCity: {
        default: "Roseau"
      },
      birthCountry: "USA",
      birthStateProvince: {
        default: "Minnesota"
      },
      hrID: null,
      hdbID: null,
      verified: false
    }, {
      id: 8445878,
      headshot: "https://assets.nhle.com/mugs/nhl/19821983/NJD/8445878.png",
      firstName: {
        default: "Dave"
      },
      lastName: {
        default: "Cameron"
      },
      sweaterNumber: 10,
      positionCode: "C",
      shootsCatches: "L",
      heightInInches: 72,
      weightInPounds: 185,
      heightInCentimeters: 183,
      weightInKilograms: 84,
      birthDate: "1958-07-29",
      birthCity: {
        default: "Charlottetown"
      },
      birthCountry: "CAN",
      birthStateProvince: {
        default: "Prince Edward Island",
        fr: "Île du Prince-Édouard ",
        sk: "Ostrov Princa Edwarda"
      },
      hrID: null,
      hdbID: null,
      verified: false
    }, {
      id: 8465005,
      headshot: "https://assets.nhle.com/mugs/nhl/19992000/NJD/8465005.png",
      firstName: {
        default: "Colin"
      },
      lastName: {
        default: "White"
      },
      sweaterNumber: 5,
      positionCode: "D",
      shootsCatches: "L",
      heightInInches: 76,
      weightInPounds: 215,
      heightInCentimeters: 193,
      weightInKilograms: 98,
      birthDate: "1977-12-12",
      birthCity: {
        default: "New Glasgow"
      },
      birthCountry: "CAN",
      birthStateProvince: {
        default: "Nova Scotia",
        fr: "Nouvelle-Écosse"
      },
      hrID: null,
      hdbID: null,
      verified: false
    }, {
      id: 8478400,
      headshot: "https://assets.nhle.com/mugs/nhl/20162017/OTT/8478400.png",
      firstName: {
        default: "Colin"
      },
      lastName: {
        default: "White"
      },
      sweaterNumber: 36,
      positionCode: "C",
      shootsCatches: "R",
      heightInInches: 73,
      weightInPounds: 194,
      heightInCentimeters: 185,
      weightInKilograms: 88,
      birthDate: "1997-01-30",
      birthCity: {
        default: "Boston"
      },
      birthCountry: "USA",
      birthStateProvince: {
        default: "Massachusetts"
      },
      hrID: null,
      hdbID: null,
      verified: false
    }];
    const hPlayer = {
      name: "Mike Antonovich",
      hdbID: "90",
      birthDate: "1951-10-18",
      birthCity: "Calumet"
    };
    const result = (0, _utils.checkForMultipleNames)(players, hPlayer);
    expect(result).toEqual(true);
  });
  test.only("given an array of players and multiple matching names, should return false", () => {
    const players = [{
      id: 8445015,
      headshot: "https://assets.nhle.com/mugs/nhl/19821983/NJD/8445015.png",
      firstName: {
        default: "Mike"
      },
      lastName: {
        default: "Antonovich"
      },
      sweaterNumber: 23,
      positionCode: "C",
      shootsCatches: "L",
      heightInInches: 68,
      weightInPounds: 165,
      heightInCentimeters: 173,
      weightInKilograms: 75,
      birthDate: "1951-10-18",
      birthCity: {
        default: "Calumet"
      },
      birthCountry: "USA",
      birthStateProvince: {
        default: "Minnesota"
      },
      hrID: null,
      hdbID: null,
      verified: false
    }, {
      id: 8445118,
      headshot: "https://assets.nhle.com/mugs/nhl/19821983/NJD/8445118.png",
      firstName: {
        default: "Brent"
      },
      lastName: {
        default: "Ashton"
      },
      sweaterNumber: 15,
      positionCode: "L",
      shootsCatches: "L",
      heightInInches: 73,
      weightInPounds: 210,
      heightInCentimeters: 185,
      weightInKilograms: 95,
      birthDate: "1960-05-18",
      birthCity: {
        default: "Saskatoon"
      },
      birthCountry: "CAN",
      birthStateProvince: {
        default: "Saskatchewan"
      },
      hrID: null,
      hdbID: null,
      verified: false
    }, {
      id: 8445725,
      headshot: "https://assets.nhle.com/mugs/nhl/19821983/NJD/8445725.png",
      firstName: {
        default: "Aaron"
      },
      lastName: {
        default: "Broten"
      },
      sweaterNumber: 10,
      positionCode: "C",
      shootsCatches: "L",
      heightInInches: 70,
      weightInPounds: 180,
      heightInCentimeters: 178,
      weightInKilograms: 82,
      birthDate: "1960-11-14",
      birthCity: {
        default: "Roseau"
      },
      birthCountry: "USA",
      birthStateProvince: {
        default: "Minnesota"
      },
      hrID: null,
      hdbID: null,
      verified: false
    }, {
      id: 8445878,
      headshot: "https://assets.nhle.com/mugs/nhl/19821983/NJD/8445878.png",
      firstName: {
        default: "Dave"
      },
      lastName: {
        default: "Cameron"
      },
      sweaterNumber: 10,
      positionCode: "C",
      shootsCatches: "L",
      heightInInches: 72,
      weightInPounds: 185,
      heightInCentimeters: 183,
      weightInKilograms: 84,
      birthDate: "1958-07-29",
      birthCity: {
        default: "Charlottetown"
      },
      birthCountry: "CAN",
      birthStateProvince: {
        default: "Prince Edward Island",
        fr: "Île du Prince-Édouard ",
        sk: "Ostrov Princa Edwarda"
      },
      hrID: null,
      hdbID: null,
      verified: false
    }, {
      id: 8465005,
      headshot: "https://assets.nhle.com/mugs/nhl/19992000/NJD/8465005.png",
      firstName: {
        default: "Colin"
      },
      lastName: {
        default: "White"
      },
      sweaterNumber: 5,
      positionCode: "D",
      shootsCatches: "L",
      heightInInches: 76,
      weightInPounds: 215,
      heightInCentimeters: 193,
      weightInKilograms: 98,
      birthDate: "1977-12-12",
      birthCity: {
        default: "New Glasgow"
      },
      birthCountry: "CAN",
      birthStateProvince: {
        default: "Nova Scotia",
        fr: "Nouvelle-Écosse"
      },
      hrID: null,
      hdbID: null,
      verified: false
    }, {
      id: 8478400,
      headshot: "https://assets.nhle.com/mugs/nhl/20162017/OTT/8478400.png",
      firstName: {
        default: "Colin"
      },
      lastName: {
        default: "White"
      },
      sweaterNumber: 36,
      positionCode: "C",
      shootsCatches: "R",
      heightInInches: 73,
      weightInPounds: 194,
      heightInCentimeters: 185,
      weightInKilograms: 88,
      birthDate: "1997-01-30",
      birthCity: {
        default: "Boston"
      },
      birthCountry: "USA",
      birthStateProvince: {
        default: "Massachusetts"
      },
      hrID: null,
      hdbID: null,
      verified: false
    }];
    const hPlayer = {
      name: "Colin White",
      hdbID: "170355",
      birthDate: "1997-01-30",
      birthCity: "Boston"
    };
    const result = (0, _utils.checkForMultipleNames)(players, hPlayer);
    expect(result).toEqual(false);
  });
  test.only("given an array of players and no matching names, should return false", () => {
    const players = [{
      id: 8445015,
      headshot: "https://assets.nhle.com/mugs/nhl/19821983/NJD/8445015.png",
      firstName: {
        default: "Mike"
      },
      lastName: {
        default: "Antonovich"
      },
      sweaterNumber: 23,
      positionCode: "C",
      shootsCatches: "L",
      heightInInches: 68,
      weightInPounds: 165,
      heightInCentimeters: 173,
      weightInKilograms: 75,
      birthDate: "1951-10-18",
      birthCity: {
        default: "Calumet"
      },
      birthCountry: "USA",
      birthStateProvince: {
        default: "Minnesota"
      },
      hrID: null,
      hdbID: null,
      verified: false
    }, {
      id: 8445118,
      headshot: "https://assets.nhle.com/mugs/nhl/19821983/NJD/8445118.png",
      firstName: {
        default: "Brent"
      },
      lastName: {
        default: "Ashton"
      },
      sweaterNumber: 15,
      positionCode: "L",
      shootsCatches: "L",
      heightInInches: 73,
      weightInPounds: 210,
      heightInCentimeters: 185,
      weightInKilograms: 95,
      birthDate: "1960-05-18",
      birthCity: {
        default: "Saskatoon"
      },
      birthCountry: "CAN",
      birthStateProvince: {
        default: "Saskatchewan"
      },
      hrID: null,
      hdbID: null,
      verified: false
    }, {
      id: 8445725,
      headshot: "https://assets.nhle.com/mugs/nhl/19821983/NJD/8445725.png",
      firstName: {
        default: "Aaron"
      },
      lastName: {
        default: "Broten"
      },
      sweaterNumber: 10,
      positionCode: "C",
      shootsCatches: "L",
      heightInInches: 70,
      weightInPounds: 180,
      heightInCentimeters: 178,
      weightInKilograms: 82,
      birthDate: "1960-11-14",
      birthCity: {
        default: "Roseau"
      },
      birthCountry: "USA",
      birthStateProvince: {
        default: "Minnesota"
      },
      hrID: null,
      hdbID: null,
      verified: false
    }, {
      id: 8445878,
      headshot: "https://assets.nhle.com/mugs/nhl/19821983/NJD/8445878.png",
      firstName: {
        default: "Dave"
      },
      lastName: {
        default: "Cameron"
      },
      sweaterNumber: 10,
      positionCode: "C",
      shootsCatches: "L",
      heightInInches: 72,
      weightInPounds: 185,
      heightInCentimeters: 183,
      weightInKilograms: 84,
      birthDate: "1958-07-29",
      birthCity: {
        default: "Charlottetown"
      },
      birthCountry: "CAN",
      birthStateProvince: {
        default: "Prince Edward Island",
        fr: "Île du Prince-Édouard ",
        sk: "Ostrov Princa Edwarda"
      },
      hrID: null,
      hdbID: null,
      verified: false
    }, {
      id: 8465005,
      headshot: "https://assets.nhle.com/mugs/nhl/19992000/NJD/8465005.png",
      firstName: {
        default: "Colin"
      },
      lastName: {
        default: "White"
      },
      sweaterNumber: 5,
      positionCode: "D",
      shootsCatches: "L",
      heightInInches: 76,
      weightInPounds: 215,
      heightInCentimeters: 193,
      weightInKilograms: 98,
      birthDate: "1977-12-12",
      birthCity: {
        default: "New Glasgow"
      },
      birthCountry: "CAN",
      birthStateProvince: {
        default: "Nova Scotia",
        fr: "Nouvelle-Écosse"
      },
      hrID: null,
      hdbID: null,
      verified: false
    }, {
      id: 8478400,
      headshot: "https://assets.nhle.com/mugs/nhl/20162017/OTT/8478400.png",
      firstName: {
        default: "Colin"
      },
      lastName: {
        default: "White"
      },
      sweaterNumber: 36,
      positionCode: "C",
      shootsCatches: "R",
      heightInInches: 73,
      weightInPounds: 194,
      heightInCentimeters: 185,
      weightInKilograms: 88,
      birthDate: "1997-01-30",
      birthCity: {
        default: "Boston"
      },
      birthCountry: "USA",
      birthStateProvince: {
        default: "Massachusetts"
      },
      hrID: null,
      hdbID: null,
      verified: false
    }];
    const hPlayer = {
      name: "Fakey McFakerson",
      hdbID: "170355",
      birthDate: "1997-01-30",
      birthCity: "Boston"
    };
    const result = (0, _utils.checkForMultipleNames)(players, hPlayer);
    expect(result).toEqual(false);
  });
});