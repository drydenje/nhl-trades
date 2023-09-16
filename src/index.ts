const axios = require("axios");
const chalk = require("chalk");
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");

const BASE_URL = `https://www.nhltradetracker.com/user/trade_list_by_season`;
// const url = `https://www.hockeydb.com/ihdb/draft/nhl2023e.html`;

async function performScraping() {
  const seasons1 = {
    "2022-23": "",
    "2021-22": "",
    "2020-21": "",
    "2019-20": "",
    "2018-19": "",
    "2017-18": "",
    "2016-17": "",
    "2015-16": "",
    "2014-15": "",
    "2013-14": "",
    "2012-13": "",
    "2011-12": "",
    "2010-11": "",
    "2009-10": "",
    "2008-09": "",
    "2007-08": "",
    "2006-07": "",
    "2005-06": "",
    "2004-05": "",
    "2003-04": "",
    "2002-03": "",
    "2001-02": "",
    "2000-01": "",
    "1999-00": "",
    "1998-99": "",
    "1997-98": "",
    "1996-97": "",
    "1995-96": "",
    "1994-95": "",
    "1993-94": "",
    "1992-93": "",
    "1991-92": "",
    "1990-91": "",
    "1989-90": "",
    "1988-89": "",
    "1987-88": "",
    "1986-87": "",
    "1985-86": "",
    "1984-85": "",
    "1983-84": "",
    "1982-83": "",
    "1981-82": "",
    "1980-81": "",
    "1979-80": "",
    "1978-79": "",
    "1977-78": "",
    "1976-77": "",
    "1975-76": "",
    "1974-75": "",
    "1973-74": "",
    "1972-73": "",
    "1971-72": "",
    "1970-71": "",
    "1969-70": "",
    "1968-69": "",
    "1967-68": "",
    "1966-67": "",
    "1965-66": "",
    "1964-65": "",
    "1963-64": "",
    "1962-63": "",
    "1961-62": "",
    "1960-61": "",
    "1959-60": "",
    "1958-59": "",
    "1957-58": "",
    "1956-57": "",
    "1955-56": "",
    "1954-55": "",
    "1953-54": "",
    "1952-53": "",
    "1951-52": "",
    "1950-51": "",
    "1949-50": "",
    "1948-49": "",
    "1947-48": "",
    "1946-47": "",
    "1945-46": "",
    "1944-45": "",
    "1943-44": "",
    "1942-43": "",
    "1941-42": "",
    "1940-41": "",
    "1939-40": "",
    "1938-39": "",
    "1937-38": "",
    "1936-37": "",
    "1935-36": "",
    "1934-35": "",
    "1933-34": "",
    "1932-33": "",
    "1931-32": "",
    "1930-31": "",
    "1929-30": "",
    "1928-29": "",
    "1927-28": "",
    "1926-27": "",
    "1925-26": "",
    "1924-25": "",
    "1923-24": "",
    "1922-23": "",
    "1921-22": "",
    "1920-21": "",
    "1919-20": "",
    "1918-19": "",
  };
  const seasons = {
    "2022-23": "",
    "2021-22": "",
    "2020-21": "",
    "2019-20": "",
  };

  try {
    // const year = `2020-21`;
    // let years = Object.keys(seasons);
    // years.forEach((year) => {
    //   const url = `${BASE_URL}/${year}/`;
    //   const $ = cheerio.load(await getPage(url));
    //   seasons[year] = await getPageCount($);
    //   await writeData("public/season-list.js", JSON.stringify(seasons));
    // });
  } catch (error) {
    console.error(error);
  }
}

async function getPage(url) {
  const axiosResponse = await axios.request({
    method: "GET",
    url: url,
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
    },
  });

  return axiosResponse.data;
}

async function writeData(fileName, data) {
  fs.writeFile(`./${fileName}`, data, (err) => {
    if (err) {
      console.error(err);
    }
  });
}

async function getPageCount($) {
  const pageCount = $(".pagination").find("a:last").prev().text();

  return parseInt(pageCount) || 1;
}

// performScraping();
console.log(chalk.yellow.bgBlue(`test`));

// // this will grab  a list of all the nhl trade seasons
//     let $ = cheerio.load(input);
//   	const arr = $('.s_list > tbody')
//     	.find('tr')
//     	.text()
//     	.split('\n')
//     	.filter(s => s)
//     	.map(s=>s.trim())

//     const seasons = arr.reduce((accumulator, value) => {
//       return {...accumulator, [value]: ''};
//     }, {});
//   	seasons["2022-23"] = 5
//     const season = [];
//     return {
//       seasons
//     }
