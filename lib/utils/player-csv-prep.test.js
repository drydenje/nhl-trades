"use strict";

var _playerCsvPrep = require("./player-csv-prep.js");
// import { server, http, HttpResponse } from "../config/testServer.js";
// const DATA_FILEPATH = `./public/scraped-data/`;
describe("add-hr-players function", () => {
  test("should add hr id's to the player array", () => {
    const players = [{
      id: 8444924,
      name: "Jim Anderson"
    }, {
      id: 8444926,
      name: "Murray Anderson"
    }, {
      id: 8444995,
      name: "Pete Backor"
    }];
    const hrPlayers = [{
      name: "Jim Anderson",
      hrID: "anderji01"
    }, {
      name: "Murray Anderson",
      hrID: "andermu01"
    }, {
      name: "Pete Backor",
      hrID: "backope01"
    }];
    const result = (0, _playerCsvPrep.addHrIdsToPlayerList)(players, hrPlayers);
    expect(result.length).toEqual(3);
    expect(result).toMatchSnapshot();
  });
  test("should add hockey-reference.com id's to the player array when the player name contains special characters", () => {
    const players = [{
      id: 8460712,
      name: "Tomas Vokoun"
    }, {
      id: 8469689,
      name: "Tomas Mojzis"
    }, {
      id: 8478007,
      name: "Elvis Merzlikins"
    }];
    const hrPlayers = [{
      name: "Elvis Merzļikins",
      hrID: "merzlel01"
    }, {
      name: "Tomáš Vokoun",
      hrID: "vokouto01"
    }, {
      name: "Tomáš Mojžíš",
      hrID: "mojzito01"
    }];
    const result = (0, _playerCsvPrep.addHrIdsToPlayerList)(players, hrPlayers);
    expect(result.length).toEqual(3);
    expect(result).toMatchSnapshot();
  });
  test("should skip adding hockey-reference.com id's to the player array when multiple players with the same name are found", () => {
    const players = [{
      id: 8444913,
      name: "Ray Allison"
    }, {
      id: 8444928,
      name: "Ron Anderson"
    }, {
      id: 8444929,
      name: "Ron Anderson"
    }, {
      id: 8444923,
      name: "Mike Amodeo"
    }];
    const hrPlayers = [{
      name: "Ray Allison",
      hrID: "allisra01"
    }, {
      name: "Ron Anderson",
      hrID: "anderro01"
    }, {
      name: "Ron Anderson",
      hrID: "anderro02"
    }, {
      name: "Ron F. Anderson",
      hrID: "anderro03"
    }, {
      name: "Mike Amodeo",
      hrID: "amodemi01"
    }];
    const expectedList = [{
      id: 8444913,
      name: "Ray Allison",
      hrID: "allisra01"
    }, {
      id: 8444928,
      name: "Ron Anderson"
    }, {
      id: 8444929,
      name: "Ron Anderson"
    }, {
      id: 8444923,
      name: "Mike Amodeo",
      hrID: "amodemi01"
    }];
    const result = (0, _playerCsvPrep.addHrIdsToPlayerList)(players, hrPlayers);
    // console.log(result);
    expect(result.length).toEqual(4);
    expect(result).toMatchSnapshot();
  });
});