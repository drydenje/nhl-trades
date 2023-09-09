const cheerio = require("cheerio");
const axios = require("axios");

const BASE_URL = `https://www.nhltradetracker.com/user/trade_list_by_season`;

async function performScraping() {
  const axiosResponse = await axios.request({
    method: "GET",
    url: `${BASE_URL}/1919-20/1`,
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
    },
  });

  const $ = cheerio.load(axiosResponse.data);
  // const container = $('#container');

  // const title = container()
  const tables = $("#container")
    .find("> table")
    .each((index, element) => {
      console.log(`ELEMENT: #${index}`);
      console.log($(element).html());
    });
  console.log(`Trade count: ${tables.length}`);
  // console.log(tables.html());
  // console.log(tables);
}

performScraping();
