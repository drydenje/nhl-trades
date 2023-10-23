const getTradeTeams = async (url) => {
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
    .find("> table")
    .each((index, trade) => {
      lines.push(parseTrade(trade));
    });

  return lines;
};

const parseTrade = (input) => {
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

  const roster = [];
  for (let i = 0; i <= 1; i++) {
    roster[i] = $(`table:nth(${i + 1})`)
      .text()
      .trim()
      .split("\n")
      .map((item) => {
        const playerName = item.trim();
        const r = /([0-9])\w+/g;
        const playerID = $(`a:contains(${playerName})`).attr("href");
        const player = {
          name: playerName,
        };
        playerID ? (player.id = playerID.match(r)[0]) : null;
        return player;
      })
      .filter((s) => s.name);
  }

  const c = $(`.comment`).next().text();
  //const c = null;
  const comment = c ? c : null;
  const teams = {};
  teams[headings[0]] = roster[0];
  teams[headings[1]] = roster[1];

  return {
    date,
    teams,
    comment,
  };
};
