"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scrapeHDBPlayers = exports.parsePlayersFromHDB = void 0;
var _utils = require("../utils/utils");
var _nodeFs = require("node:fs");
const path = require("path");
const cheerio = require("cheerio");
const chalk = require("chalk");
const scrapeHDBPlayers = async filePath => {
  // check if the results file exists
  if (!(0, _nodeFs.existsSync)(filePath)) {
    console.log("File doesn't exist: creating new file with template");
    // create a new json file using the blank template
    (0, _utils.writeFile)(filePath, hdbEmptyTemplate);
  }

  // load the json file (all links.data arrays should be empty to start with)
  const links = JSON.parse((0, _utils.readFile)(filePath));

  // decide which letter and league to scrape
  const linkToScrape = links.find(link => link.data === undefined || link.data.length == 0);
  const remainingLinks = links.filter(link => link.data === undefined || link.data.length == 0).length;

  // when there are no more places to scrape, prepare the data and save
  if (remainingLinks === 0) {
    console.log(chalk.yellow.bgBlue(`Finished scraping`));
    const res = [];
    links.forEach(link => {
      res.push(link.data);
    });
    const final = res.flat();
    (0, _utils.writeFile)(filePath, final);

    // still more data to scrape
  } else {
    // show what the script is trying to do, and give an idea of what remains to be scraped
    console.log(chalk.yellow.bgBlue(`Trying to scrape: ${linkToScrape.name} (${remainingLinks}/${links.length})`));

    // fetch the actual html to scrape
    const players = await (0, _utils.getPage)(linkToScrape.url)
    // pull all of the players from the page
    .then(html => parsePlayersFromHDB(html));
    const result = links.map(link => link.name === linkToScrape.name ? {
      ...link,
      data: players
    } : link);
    (0, _utils.writeFile)(filePath, result);
  }
};
exports.scrapeHDBPlayers = scrapeHDBPlayers;
const parsePlayersFromHDB = html => {
  const $ = cheerio.load(html);
  const names = $(".sortable > tbody").children().map((index, player) => {
    return {
      name: (0, _utils.removeNickname)($("a", player).html()),
      hdbID: $("a", player).attr("href").match(/\d+$/)[0],
      birthDate: new Date($("td:eq(2)", player).html().trim()).toLocaleDateString("en-CA"),
      birthCity: $("td:eq(3)", player).html().trim().split(",")[0]
    };
  }).toArray();
  return names;
};

// This is used to create an empty JSON file if none exists
exports.parsePlayersFromHDB = parsePlayersFromHDB;
const hdbEmptyTemplate = [{
  name: "A: Aalto to Ayres.",
  url: "https://www.hockeydb.com/ihdb/players/player_ind_a.html",
  data: []
}, {
  name: "B: Babando to Byron.",
  url: "https://www.hockeydb.com/ihdb/players/player_ind_b.html",
  data: []
}, {
  name: "C: Caamano to Czuczman.",
  url: "https://www.hockeydb.com/ihdb/players/player_ind_c.html",
  data: []
}, {
  name: "D: D'Agostini to Dziurzynski.",
  url: "https://www.hockeydb.com/ihdb/players/player_ind_d.html",
  data: []
}, {
  name: "E: Eager to Ezinicki.",
  url: "https://www.hockeydb.com/ihdb/players/player_ind_e.html",
  data: []
}, {
  name: "F: Fabbri to Fussey.",
  url: "https://www.hockeydb.com/ihdb/players/player_ind_f.html",
  data: []
}, {
  name: "G: Gaborik to Guy.",
  url: "https://www.hockeydb.com/ihdb/players/player_ind_g.html",
  data: []
}, {
  name: "H: Haakana to Hyvonen.",
  url: "https://www.hockeydb.com/ihdb/players/player_ind_h.html",
  data: []
}, {
  name: "I: Iafallo to Ivanans.",
  url: "https://www.hockeydb.com/ihdb/players/player_ind_i.html",
  data: []
}, {
  name: "J: Jablonski to Juzda.",
  url: "https://www.hockeydb.com/ihdb/players/player_ind_j.html",
  data: []
}, {
  name: "K: Kaarela to Kytnar.",
  url: "https://www.hockeydb.com/ihdb/players/player_ind_k.html",
  data: []
}, {
  name: "L: L'Abbe to Lyubushkin.",
  url: "https://www.hockeydb.com/ihdb/players/player_ind_l.html",
  data: []
}, {
  name: "M: Maatta to Myrvold.",
  url: "https://www.hockeydb.com/ihdb/players/player_ind_m.html",
  data: []
}, {
  name: "N: Nabokov to Nystrom.",
  url: "https://www.hockeydb.com/ihdb/players/player_ind_n.html",
  data: []
}, {
  name: "O: O'Brien to Ozolinsh.",
  url: "https://www.hockeydb.com/ihdb/players/player_ind_o.html",
  data: []
}, {
  name: "P: Paajarvi to Pyyhtia.",
  url: "https://www.hockeydb.com/ihdb/players/player_ind_p.html",
  data: []
}, {
  name: "Q: Quackenbush to Quintin.",
  url: "https://www.hockeydb.com/ihdb/players/player_ind_q.html",
  data: []
}, {
  name: "R: Raanta to Ryznar.",
  url: "https://www.hockeydb.com/ihdb/players/player_ind_r.html",
  data: []
}, {
  name: "S: Saad to Szwarz.",
  url: "https://www.hockeydb.com/ihdb/players/player_ind_s.html",
  data: []
}, {
  name: "T: Tabaracci to Tyutin.",
  url: "https://www.hockeydb.com/ihdb/players/player_ind_t.html",
  data: []
}, {
  name: "U: Ubriaco to Ustorf.",
  url: "https://www.hockeydb.com/ihdb/players/player_ind_u.html",
  data: []
}, {
  name: "V: Vaakanainen to Vyshedkevich.",
  url: "https://www.hockeydb.com/ihdb/players/player_ind_v.html",
  data: []
}, {
  name: "W: Waddell to Wyrozub.",
  url: "https://www.hockeydb.com/ihdb/players/player_ind_w.html",
  data: []
}, {
  name: "X: Xhekaj to Xhekaj.",
  url: "https://www.hockeydb.com/ihdb/players/player_ind_x.html",
  data: []
}, {
  name: "Y: Yablonski to Yzerman.",
  url: "https://www.hockeydb.com/ihdb/players/player_ind_y.html",
  data: []
}, {
  name: "Z: Zaba to Zyuzin.",
  url: "https://www.hockeydb.com/ihdb/players/player_ind_z.html",
  data: []
}, {
  name: "A: Abbey to Aubry.",
  url: "https://www.hockeydb.com/ihdb/players/wha_player_ind_a.html",
  data: []
}, {
  name: "B: Backstrom to Byers.",
  url: "https://www.hockeydb.com/ihdb/players/wha_player_ind_b.html",
  data: []
}, {
  name: "C: Cadle to Curtis.",
  url: "https://www.hockeydb.com/ihdb/players/wha_player_ind_c.html",
  data: []
}, {
  name: "D: D'Alvise to Dzurilla.",
  url: "https://www.hockeydb.com/ihdb/players/wha_player_ind_d.html",
  data: []
}, {
  name: "E: Earl to Evo.",
  url: "https://www.hockeydb.com/ihdb/players/wha_player_ind_e.html",
  data: []
}, {
  name: "F: Falkenberg to Ftorek.",
  url: "https://www.hockeydb.com/ihdb/players/wha_player_ind_f.html",
  data: []
}, {
  name: "G: Gallant to Gustafsson.",
  url: "https://www.hockeydb.com/ihdb/players/wha_player_ind_g.html",
  data: []
}, {
  name: "H: Haas to Hynes.",
  url: "https://www.hockeydb.com/ihdb/players/wha_player_ind_h.html",
  data: []
}, {
  name: "I: Inglis to Israelson.",
  url: "https://www.hockeydb.com/ihdb/players/wha_player_ind_i.html",
  data: []
}, {
  name: "J: Jacques to Justin.",
  url: "https://www.hockeydb.com/ihdb/players/wha_player_ind_j.html",
  data: []
}, {
  name: "K: Kamppuri to Kveton.",
  url: "https://www.hockeydb.com/ihdb/players/wha_player_ind_k.html",
  data: []
}, {
  name: "L: Labossiere to Lyle.",
  url: "https://www.hockeydb.com/ihdb/players/wha_player_ind_l.html",
  data: []
}, {
  name: "M: MacDonald to Myers.",
  url: "https://www.hockeydb.com/ihdb/players/wha_player_ind_m.html",
  data: []
}, {
  name: "N: Napier to Nugent.",
  url: "https://www.hockeydb.com/ihdb/players/wha_player_ind_n.html",
  data: []
}, {
  name: "O: O'Connell to Ozlizlo.",
  url: "https://www.hockeydb.com/ihdb/players/wha_player_ind_o.html",
  data: []
}, {
  name: "P: Paiement to Pumple.",
  url: "https://www.hockeydb.com/ihdb/players/wha_player_ind_p.html",
  data: []
}, {
  name: "R: Raeder to Rydman.",
  url: "https://www.hockeydb.com/ihdb/players/wha_player_ind_r.html",
  data: []
}, {
  name: "S: Sacharuk to Szura.",
  url: "https://www.hockeydb.com/ihdb/players/wha_player_ind_s.html",
  data: []
}, {
  name: "T: Tajcnar to Turnbull.",
  url: "https://www.hockeydb.com/ihdb/players/wha_player_ind_t.html",
  data: []
}, {
  name: "U: Ullman to Ullman.",
  url: "https://www.hockeydb.com/ihdb/players/wha_player_ind_u.html",
  data: []
}, {
  name: "V: Vaive to Vyborny.",
  url: "https://www.hockeydb.com/ihdb/players/wha_player_ind_v.html",
  data: []
}, {
  name: "W: Wakely to Wyrozub.",
  url: "https://www.hockeydb.com/ihdb/players/wha_player_ind_w.html",
  data: []
}, {
  name: "Y: Yakiwchuk to Young.",
  url: "https://www.hockeydb.com/ihdb/players/wha_player_ind_y.html",
  data: []
}, {
  name: "Z: Zaine to Zuke.",
  url: "https://www.hockeydb.com/ihdb/players/wha_player_ind_z.html",
  data: []
}];