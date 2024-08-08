"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scrapeDraftPicks = exports.convertDraftPicksToCSV = void 0;
var _convertArrayToCsv = require("convert-array-to-csv");
var _fs = _interopRequireDefault(require("fs"));
var _utils = require("../utils/utils.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const chalk = require("chalk");
async function* scrapeDraftYear(startYear) {
  let year = startYear;
  while (year) {
    let url = `https://records.nhl.com/site/api/draft?include=draftProspect.id&include=player.birthStateProvince&include=player.birthCountry&include=player.position&include=player.onRoster&include=player.yearsPro&include=player.firstName&include=player.lastName&include=player.id&include=team.id&include=team.placeName&include=team.commonName&include=team.fullName&include=team.triCode&include=team.logos&include=franchiseTeam.franchise.mostRecentTeamId&include=franchiseTeam.franchise.teamCommonName&include=franchiseTeam.franchise.teamPlaceName&sort=[{%22property%22:%22overallPickNumber%22,%22direction%22:%22ASC%22}]&cayenneExp=%20draftYear%20=%20${year}&start=0&limit=300`;
    console.log(chalk.yellow.bgBlue(`Trying to scrape: ${year}`));
    const response = await fetch(url);
    const data = await response.json();

    // console.log(data.total);
    if (data.total === 0) {
      year = null;
      return false;
    } else {
      // console.log("D:", data);
      await delay(3);
      yield {
        year,
        data
      };
      year = year - 1;
    }
  }
}
const scrapeDraftPicks = async () => {
  const startTime = new Date();
  let picks = [];
  for await (const p of scrapeDraftYear(2024)) {
    // for await (const p of scrapeDraftYear(1964)) {
    const cleanedPicks = p.data.data.map(pick => {
      delete pick.team.logos;
      return pick;
    });
    picks.push(...cleanedPicks);
    // picks = {
    //   ...picks,
    //   [p.year]: cleanedPicks,
    // };
  }
  const endTime = new Date();
  const timeElapsed = (endTime - startTime) / 1000;
  console.log("timeElapsed:", timeElapsed);
  (0, _utils.writeFile)("./src/draft-picks/results/nhl-picks-scraping.json", picks);
};
exports.scrapeDraftPicks = scrapeDraftPicks;
const convertDraftPicksToCSV = draftPicks => {
  console.log("test");
  const picks = draftPicks.map(pick => {
    return {
      id: pick.id,
      playerId: pick.playerId,
      playerName: pick.playerName,
      birthDate: pick.birthDate,
      triCode: pick.triCode,
      draftDate: pick.draftDate
      // change the stuff you want to use
      // dates in consistent format
      // name in full?
    };
  });
  const headings = ["id", "playerId", "playerName", "birthDate", "triCode", "draftDate"];
  const csv = (0, _convertArrayToCsv.convertArrayToCSV)(picks, {
    headings,
    separator: ","
  });
  console.log(csv);
  _fs.default.writeFile("./src/csv-data/nhl-draft-picks.csv", csv, err => {
    if (err) {
      console.error(err);
    } else {
      return true;
    }
  });
};

// Used to delay the time between fetches, so we don't get blocked
exports.convertDraftPicksToCSV = convertDraftPicksToCSV;
const delay = seconds => new Promise(resolve => setTimeout(resolve, seconds * 1000));