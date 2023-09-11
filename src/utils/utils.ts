// const cheerio = require("cheerio");
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

  return axiosResponse.data;

  // const $ = cheerio.load(axiosResponse.data);
  // const container = $("#container");

  // return container;
};

async function bah() {
  const response = await axios.get("htts://www.example.com");
  // return "test util";
  return response.data;
}

export { getTradeTeams, bah };
