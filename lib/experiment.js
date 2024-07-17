"use strict";

const chalk = require("chalk");
// npm run exp

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
(async function () {
  //
  // const pMap = new Map();
  const pMap = new Map(players, `${players.firstName.default} ${players.lastName.default}`);
  players.forEach(player => {
    const fullName = `${player.firstName.default} ${player.lastName.default}`;
    pMap.set(fullName, player);
  });
  console.log(pMap);
})();

// id: 8445015,
// headshot: "https://assets.nhle.com/mugs/nhl/19821983/NJD/8445015.png",
// firstName: { default: "Mike" },
// lastName: { default: "Antonovich" },
// sweaterNumber: 23,
// positionCode: "C",
// shootsCatches: "L",
// heightInInches: 68,
// weightInPounds: 165,
// heightInCentimeters: 173,
// weightInKilograms: 75,
// birthDate: "1951-10-18",
// birthCity: { default: "Calumet" },
// birthCountry: "USA",
// birthStateProvince: { default: "Minnesota" },
// hrID: null,
// hdbID: null,
// verified: false,