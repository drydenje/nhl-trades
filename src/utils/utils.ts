const cheerio = require("cheerio");
const axios = require("axios");

const getTradeTeams = async (url: string) => {
  const axiosResponse = await axios.request({
    method: "GET",
    url: url,
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
    },
  });

  const $ = cheerio.load(axiosResponse.data);
  const lines = [];
  const tables = $("#container")
    // .find("> table")
    .find("> table")
    .children("tbody")
    .each((index, trade) => {
      //console.log(`ELEMENT: #${index}`);
      // console.log($(trade).find("tbody > tr > td > strong").html());
      // console.log($(trade).html());
      // lines.push(extract(trade));
      // console.log(extract(trade))
      // return extract(trade);
      lines.push(parseTrade(trade));
    });
  // .text()
  // .trim();
  // .toArray();
  // console.log(lines);
  return lines;
};

// define function which accepts body and cheerio as args
function extract(input) {
  // return object with extracted values
  let $ = cheerio.load(input);
  const headings = $("tbody > tr")
    .find("td")
    .map(function () {
      return $(this).text().trim();
    })
    .toArray();
  /*
    	.map(function() {
          return {
            line: $('td', this).html().trim()
          }
        }).toArray();
  	*/

  //.children('strong:contains("acquire")')
  //.html();
  //return list;
  // console.log(headings);
  return headings;
}

const parseTrade = (input: string) => {
  let $ = cheerio.load(input);
  const headings = $("tbody > tr")
    .find("td > strong")
    .map(function () {
      if ($(this).text() !== "Date") {
        return $(this).text().replace(" acquire", "");
      }
    })
    .toArray();

  const date = $("tr:nth(1) > td:nth(1)").text().trim();

  const team1 = $("table:nth(1)")
    .text()
    .trim()
    .split("\n")
    .map((item) => {
      return item.trim();
    })
    .filter((s) => s);
  const team2 = $("table:nth(2)")
    .text()
    .trim()
    .split("\n")
    .map((item) => {
      return item.trim();
    })
    .filter((s) => s);

  return {
    date,
    headings,
    //      teams,
    team1,
    team2,
  };
};

export { getTradeTeams };
