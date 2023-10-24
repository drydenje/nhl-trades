// const chalk = require("chalk");
// const cheerio = require("cheerio");
// const fs = require("fs");
// const path = require("path");
// const cron = require("node-cron");
// const BASE_URL = `https://www.nhltradetracker.com/user/trade_list_by_season`;
// const url = `https://www.hockeydb.com/ihdb/draft/nhl2023e.html`;

  /*
    use try/catch
    append data to file, not overwrite
  */

  try {
    let years = Object.keys(seasons);
    console.log(chalk.yellow.bgBlue(`Scraping: ${years}`));
    // const url = `${BASE_URL}/${year}/`;
    // const test = await resolvePromisesSeq(seasons, BASE_URL);
    // console.log("test:", test);
    // const $ = cheerio.load(await getPage(url));
    // seasons[year] = await getPageCount($);
    // await writeData("public/season-list.js", JSON.stringify(seasons));
    let delay = 0;
    const delayIncrement = 1000;
    let pageCount = 1;
    const yearOffset = 0;

    // const promises = seasonsKeys.map(async (year) => {
    const promises = async (year) => {
      delay += delayIncrement;
      return (
        new Promise((resolve) => setTimeout(resolve, delay))
          .then(() => getPage(`${BASE_URL}/${year}/`))
          // .then((page) => )
          .then((page) => writeData(`public/source-data/${year}.html`, page))
      );
    };
    let results = await Promise.all(promises);
    // results.forEach(page => writeData())
    // writeData
  } catch (error) {
    // console.error(error);
    console.log(chalk.black.bgRed(error));
  }
}

const resolvePromisesSeq = async (items, url) => {
  const results = [];
  for (const item of items) {
    clearTimeout(0);
    // const d = new Date();
    // console.log("TIME:", d.getTime());
    console.log(`${url}/${item}`);
    const $ = cheerio.load(
      await getPage(url).then((data) => {
        setTimeout(async () => {
          console.log("test");
          return data;
        }, 5000);
      })
    );
    // results.push(await task);
  }

  return results;
};

const uids = ["id1", "id2"];
const userPromises = uids.map((uid) =>
  admin
    .auth()
    .getUser(uid)
    .then((userRecord) => {
      return userRecord.toJSON();
    })
    .catch(console.error)
);

const users = await resolvePromisesSeq(userPromises); // No longer a problem!

// console.log(chalk.yellow.bgBlue(`test`));