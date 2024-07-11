import {
  checkMaxUserException,
  getAllTradesForYear,
  getPageCount,
  getSeasonList,
  getTradesFromPage,
  parseTrade,
} from "./nhl-trade-tracker";
// const { readFile } = require("./utils.mjs");
import { readFile } from "../utils/utils";
import { server, http, HttpResponse } from "../config/testServer";

const DATA_FILEPATH = `./public/raw-mock-data/`;

describe("getPageCount function", () => {
  test("should return the number of pages (3) to scrape for that year, given an html page", async () => {
    const page = readFile(`${DATA_FILEPATH}/1977-78-1.html`);
    const result = await getPageCount(page);
    expect(result).toEqual(3);
  });

  test("should return the number of pages (6) to scrape for that year, given an html page", async () => {
    const page = readFile(`${DATA_FILEPATH}/2021-22-1.html`);
    const result = await getPageCount(page);
    expect(result).toEqual(6);
  });
});

describe("parseTrade function", () => {
  test("should create a single trade object trade data", async () => {
    const html = readFile(`${DATA_FILEPATH}/single-trade.html`);
    const result = await parseTrade(html);
    expect(result).toMatchInlineSnapshot(`
{
  "comment": null,
  "date": "April 12, 2021",
  "teams": {
    "Detroit Red Wings": [
      {
        "name": "2021 1st round pick",
      },
      {
        "hockeyDBid": "108683",
        "name": "Richard Panik",
      },
      {
        "hockeyDBid": "161382",
        "name": "Jakub Vrana",
      },
      {
        "name": "2022 2nd round pick",
      },
    ],
    "Washington Capitals": [
      {
        "hockeyDBid": "136790",
        "name": "Anthony Mantha",
      },
    ],
  },
}
`);
  });

  test("should create a single trade object trade data when the playerID is '0'", async () => {
    const html = readFile(`${DATA_FILEPATH}/single-trade-badID.html`);
    const result = await parseTrade(html);
    expect(result).toMatchInlineSnapshot(`
{
  "comment": null,
  "date": "April 12, 2021",
  "teams": {
    "Detroit Red Wings": [
      {
        "name": "2021 1st round pick",
      },
      {
        "hockeyDBid": "0",
        "name": "Richard Panik",
      },
      {
        "hockeyDBid": "161382",
        "name": "Jakub Vrana",
      },
      {
        "name": "2022 2nd round pick",
      },
    ],
    "Washington Capitals": [
      {
        "hockeyDBid": "136790",
        "name": "Anthony Mantha",
      },
    ],
  },
}
`);
  });

  test("should create a single trade object when a bracket is missing from the trade line", async () => {
    const html = readFile(`${DATA_FILEPATH}/missing-bracket-error.html`);
    const result = await parseTrade(html);
    expect(result).toMatchInlineSnapshot(`
{
  "comment": null,
  "date": "June 26, 2010",
  "teams": {
    "Colorado Avalanche": [
      {
        "name": "2010 3rd round pick #71-Michael Bournival",
      },
    ],
    "Dallas Stars": [
      {
        "name": "2010 3rd round pick #77-Alexander Guptill",
      },
      {
        "name": "2010 4th round pick #109-Alex Theriau",
      },
    ],
  },
}
`);
  });
});

describe("getTradesFromPage function", () => {
  test("should return an array filled with trades", async () => {
    const page = readFile(`${DATA_FILEPATH}/1977-78-1.html`);
    const result = await getTradesFromPage(page);
    expect(result).toMatchInlineSnapshot(`
[
  {
    "comment": null,
    "date": "March 14, 1978",
    "teams": {
      "Chicago Blackhawks": [
        {
          "hockeyDBid": "2269",
          "name": "Doug Hicks",
        },
        {
          "name": "1980 3rd round pick #58-Marcel Frere",
        },
      ],
      "Minnesota North Stars": [
        {
          "name": "future considerations Pierre Plante",
        },
        {
          "name": "rights to Ed Mio",
        },
      ],
    },
  },
  {
    "comment": null,
    "date": "March 13, 1978",
    "teams": {
      "Boston Bruins": [
        {
          "name": "cash",
        },
      ],
      "Los Angeles Kings": [
        {
          "hockeyDBid": "1533",
          "name": "Darryl Edestrand",
        },
      ],
    },
  },
  {
    "comment": null,
    "date": "March 13, 1978",
    "teams": {
      "Detroit Red Wings": [
        {
          "name": "1978 2nd round pick #31-Al Jensen",
        },
        {
          "name": "1978 1st round pick #12-Brent Peterson",
        },
        {
          "hockeyDBid": "5383",
          "name": "Errol Thompson",
        },
        {
          "name": "1980 1st round pick #11-Mike Blaisdell",
        },
      ],
      "Toronto Maple Leafs": [
        {
          "hockeyDBid": "3354",
          "name": "Dan Maloney",
        },
        {
          "name": "1980 2nd round pick #25-Craig Muni",
        },
      ],
    },
  },
  {
    "comment": null,
    "date": "February 19, 1978",
    "teams": {
      "Minnesota North Stars": [
        {
          "hockeyDBid": "5039",
          "name": "Gary Smith",
        },
      ],
      "Washington Capitals": [
        {
          "name": "cash",
        },
      ],
    },
  },
  {
    "comment": null,
    "date": "February 11, 1978",
    "teams": {
      "Detroit Red Wings": [
        {
          "name": "future considerations cash",
        },
      ],
      "Hartford Whalers": [
        {
          "hockeyDBid": "4913",
          "name": "Tim Sheehy",
        },
      ],
    },
  },
  {
    "comment": null,
    "date": "January 29, 1978",
    "teams": {
      "Toronto Maple Leafs": [
        {
          "name": "cash",
        },
      ],
      "Vancouver Canucks": [
        {
          "hockeyDBid": "5962",
          "name": "Claire Alexander",
        },
      ],
    },
  },
  {
    "comment": null,
    "date": "January 27, 1978",
    "teams": {
      "Chicago Blackhawks": [
        {
          "hockeyDBid": "2570",
          "name": "Eddie Johnston",
        },
      ],
      "St. Louis Blues": [
        {
          "name": "cash",
        },
      ],
    },
  },
  {
    "comment": null,
    "date": "January 14, 1978",
    "teams": {
      "Los Angeles Kings": [
        {
          "name": "1980 2nd round pick #33-Greg Terrion",
        },
      ],
      "St. Louis Blues": [
        {
          "hockeyDBid": "2775",
          "name": "Neil Komadoski",
        },
      ],
    },
  },
  {
    "comment": null,
    "date": "January 12, 1978",
    "teams": {
      "Cleveland Barons": [
        {
          "hockeyDBid": "4023",
          "name": "Dennis O\`Brien",
        },
      ],
      "Colorado Rockies": [
        {
          "hockeyDBid": "980",
          "name": "Mike Christie",
        },
      ],
    },
  },
  {
    "comment": null,
    "date": "January 10, 1978",
    "teams": {
      "Cleveland Barons": [
        {
          "hockeyDBid": "4189",
          "name": "Jean-Paul Parise",
        },
        {
          "hockeyDBid": "4357",
          "name": "Jean Potvin",
        },
        {
          "name": "1978 4th round pick not exercised due to Barons-North Stars merger in 1978",
        },
      ],
      "New York Islanders": [
        {
          "hockeyDBid": "3683",
          "name": "Wayne Merrick",
        },
        {
          "name": "1978 4th round pick cancelled by Barons-North Stars merger in 1978",
        },
        {
          "name": "future considerations Darcy Regier",
        },
      ],
    },
  },
  {
    "comment": null,
    "date": "January 9, 1978",
    "teams": {
      "Detroit Red Wings": [
        {
          "name": "1978 3rd round pick #53-Doug Derkson",
        },
        {
          "name": "rights to Barry Long",
        },
      ],
      "Los Angeles Kings": [
        {
          "hockeyDBid": "2001",
          "name": "Danny Grant",
        },
      ],
    },
  },
  {
    "comment": null,
    "date": "January 9, 1978",
    "teams": {
      "Colorado Rockies": [
        {
          "hockeyDBid": "3929",
          "name": "Bob Neely",
        },
      ],
      "Toronto Maple Leafs": [
        {
          "name": "cash",
        },
      ],
    },
  },
  {
    "comment": null,
    "date": "January 9, 1978",
    "teams": {
      "Cleveland Barons": [
        {
          "hockeyDBid": "109",
          "name": "Chuck Arnason",
        },
        {
          "hockeyDBid": "2543",
          "name": "Rick Jodzio",
        },
      ],
      "Colorado Rockies": [
        {
          "hockeyDBid": "5948",
          "name": "Fred Ahern",
        },
        {
          "hockeyDBid": "2742",
          "name": "Ralph Klassen",
        },
      ],
    },
  },
  {
    "comment": null,
    "date": "December 12, 1977",
    "teams": {
      "Atlanta Flames": [
        {
          "hockeyDBid": "293",
          "name": "Yves Belanger",
        },
        {
          "hockeyDBid": "3300",
          "name": "Bob MacMillan",
        },
        {
          "hockeyDBid": "4503",
          "name": "Dick Redmond",
        },
        {
          "name": "1978 2nd round pick #23-Mike Perovich",
        },
      ],
      "St. Louis Blues": [
        {
          "hockeyDBid": "322",
          "name": "Curt Bennett",
        },
        {
          "hockeyDBid": "1893",
          "name": "Barry Gibbs",
        },
        {
          "hockeyDBid": "3884",
          "name": "Phil Myre",
        },
      ],
    },
  },
  {
    "comment": null,
    "date": "December 9, 1977",
    "teams": {
      "Cleveland Barons": [
        {
          "hockeyDBid": "3586",
          "name": "Walt McKechnie",
        },
      ],
      "Washington Capitals": [
        {
          "hockeyDBid": "1919",
          "name": "Bob Girard",
        },
        {
          "name": "1978 2nd round pick #23-Paul McKinnon",
        },
      ],
    },
  },
  {
    "comment": null,
    "date": "December 2, 1977",
    "teams": {
      "Chicago Blackhawks": [
        {
          "name": "1980 4th round pick #67-Carey Wilson",
        },
      ],
      "Detroit Red Wings": [
        {
          "hockeyDBid": "2411",
          "name": "Dennis Hull",
        },
      ],
    },
  },
  {
    "comment": null,
    "date": "December 2, 1977",
    "teams": {
      "Colorado Rockies": [
        {
          "hockeyDBid": "4102",
          "name": "Dennis Owchar",
        },
      ],
      "Pittsburgh Penguins": [
        {
          "hockeyDBid": "1536",
          "name": "Tom Edur",
        },
      ],
    },
  },
  {
    "comment": null,
    "date": "November 29, 1977",
    "teams": {
      "Montreal Canadiens": [
        {
          "hockeyDBid": "2985",
          "name": "Pierre Larouche",
        },
        {
          "name": "future considerations rights to Peter Marsh",
        },
      ],
      "Pittsburgh Penguins": [
        {
          "hockeyDBid": "3069",
          "name": "Peter Lee",
        },
        {
          "hockeyDBid": "3324",
          "name": "Pete Mahovlich",
        },
      ],
    },
  },
  {
    "comment": null,
    "date": "November 23, 1977",
    "teams": {
      "Chicago Blackhawks": [
        {
          "hockeyDBid": "2698",
          "name": "Reg Kerr",
        },
      ],
      "Cleveland Barons": [
        {
          "hockeyDBid": "2345",
          "name": "Randy Holt",
        },
      ],
    },
  },
  {
    "comment": null,
    "date": "November 21, 1977",
    "teams": {
      "Los Angeles Kings": [
        {
          "hockeyDBid": "841",
          "name": "Larry Carriere",
        },
      ],
      "Vancouver Canucks": [
        {
          "hockeyDBid": "2627",
          "name": "Sheldon Kannegiesser",
        },
      ],
    },
  },
]
`);
  });
});

describe("Error Checking", () => {
  test("should throw a checkMaxUserException error when too many requests were submitted (given error page)", async () => {
    const page = readFile(`${DATA_FILEPATH}/max-user-error.html`);
    try {
      await checkMaxUserException(page);
      // should not fire here
    } catch (e) {
      // this should fire
      expect(e.message).toBe("max_user_connections");
    }
  });

  test("should NOT throw a checkMaxUserException error when too many requests were submitted (given normal page)", async () => {
    const page = readFile(`${DATA_FILEPATH}/1977-78-1.html`);
    const result = await checkMaxUserException(page);
    expect(result).toBe(false);
  });
});

describe("getSeasonList function", () => {
  test("should return an array of all of the NHL seasons", async () => {
    const page = readFile(`${DATA_FILEPATH}/1977-78-1.html`);
    const result = await getSeasonList(page);
    expect(result).toMatchInlineSnapshot(`
{
  "seasons": {
    "1918-19": [],
    "1919-20": [],
    "1920-21": [],
    "1921-22": [],
    "1922-23": [],
    "1923-24": [],
    "1924-25": [],
    "1925-26": [],
    "1926-27": [],
    "1927-28": [],
    "1928-29": [],
    "1929-30": [],
    "1930-31": [],
    "1931-32": [],
    "1932-33": [],
    "1933-34": [],
    "1934-35": [],
    "1935-36": [],
    "1936-37": [],
    "1937-38": [],
    "1938-39": [],
    "1939-40": [],
    "1940-41": [],
    "1941-42": [],
    "1942-43": [],
    "1943-44": [],
    "1944-45": [],
    "1945-46": [],
    "1946-47": [],
    "1947-48": [],
    "1948-49": [],
    "1949-50": [],
    "1950-51": [],
    "1951-52": [],
    "1952-53": [],
    "1953-54": [],
    "1954-55": [],
    "1955-56": [],
    "1956-57": [],
    "1957-58": [],
    "1958-59": [],
    "1959-60": [],
    "1960-61": [],
    "1961-62": [],
    "1962-63": [],
    "1963-64": [],
    "1964-65": [],
    "1965-66": [],
    "1966-67": [],
    "1967-68": [],
    "1968-69": [],
    "1969-70": [],
    "1970-71": [],
    "1971-72": [],
    "1972-73": [],
    "1973-74": [],
    "1974-75": [],
    "1975-76": [],
    "1976-77": [],
    "1977-78": [],
    "1978-79": [],
    "1979-80": [],
    "1980-81": [],
    "1981-82": [],
    "1982-83": [],
    "1983-84": [],
    "1984-85": [],
    "1985-86": [],
    "1986-87": [],
    "1987-88": [],
    "1988-89": [],
    "1989-90": [],
    "1990-91": [],
    "1991-92": [],
    "1992-93": [],
    "1993-94": [],
    "1994-95": [],
    "1995-96": [],
    "1996-97": [],
    "1997-98": [],
    "1998-99": [],
    "1999-00": [],
    "2000-01": [],
    "2001-02": [],
    "2002-03": [],
    "2003-04": [],
    "2004-05": [],
    "2005-06": [],
    "2006-07": [],
    "2007-08": [],
    "2008-09": [],
    "2009-10": [],
    "2010-11": [],
    "2011-12": [],
    "2012-13": [],
    "2013-14": [],
    "2014-15": [],
    "2015-16": [],
    "2016-17": [],
    "2017-18": [],
    "2018-19": [],
    "2019-20": [],
    "2020-21": [],
    "2021-22": [],
    "2022-23": [],
  },
}
`);
  });
});

describe("getAllTradesForYear function", () => {
  test(
    "should return an html page when passed a url",
    async () => {
      const year = `1977-78`;
      const url = `https://www.nhltradetracker.com/user/trade_list_by_season`;

      const startTime = new Date();

      const result = await getAllTradesForYear(year, url);
      await expect(result).toMatchSnapshot();

      const endTime = new Date();
      const elapsedTime = (endTime.getTime() - startTime.getTime()) / 1000;
    },
    25 * 1000
  );
});

describe("used to diagnose problems on a temporary basis", () => {
  test.skip("should get a full page", async () => {
    const page = readFile(`${DATA_FILEPATH}/diagnostics.html`);
    const result = await getTradesFromPage(page);
    expect(result).toMatchInlineSnapshot(`
[
  {
    "comment": null,
    "date": "June 23, 2012",
    "teams": {
      "Dallas Stars": [
        {
          "name": "2013 7th round pick",
        },
      ],
      "Florida Panthers": [
        {
          "name": "2012 7th round pick (#194-Jonatan Nielsen)",
        },
      ],
    },
  },
  {
    "comment": null,
    "date": "June 23, 2012",
    "teams": {
      "Nashville Predators": [
        {
          "name": "2013 5th round pick",
        },
      ],
      "New York Rangers": [
        {
          "name": "2012 5th round pick (#142-Thomas Spelling)",
        },
      ],
    },
  },
  {
    "comment": null,
    "date": "June 22, 2012",
    "teams": {
      "Anaheim Ducks": [
        {
          "name": "2013 2nd round pick",
        },
      ],
      "New York Islanders": [
        {
          "hockeyDBid": "51233",
          "name": "Lubomir Visnovsky",
        },
      ],
    },
  },
  {
    "comment": null,
    "date": "June 22, 2012",
    "teams": {
      "Carolina Hurricanes": [
        {
          "hockeyDBid": "80489",
          "name": "Jordan Staal",
        },
      ],
      "Pittsburgh Penguins": [
        {
          "hockeyDBid": "84687",
          "name": "Brandon Sutter",
        },
        {
          "name": "2012 1st round pick (#8-Derrick Pouliot)",
        },
        {
          "hockeyDBid": "120914",
          "name": "Brian Dumoulin",
        },
      ],
    },
  },
  {
    "comment": null,
    "date": "June 22, 2012",
    "teams": {
      "Arizona Coyotes": [
        {
          "hockeyDBid": "55144",
          "name": "Zbynek Michalek",
        },
      ],
      "Pittsburgh Penguins": [
        {
          "hockeyDBid": "95377",
          "name": "Marc Cheverie",
        },
        {
          "hockeyDBid": "123024",
          "name": "Harrison Ruopp",
        },
        {
          "name": "2012 3rd round pick (#81-Oskar Sundqvist)",
        },
      ],
    },
  },
  {
    "comment": null,
    "date": "June 22, 2012",
    "teams": {
      "Dallas Stars": [
        {
          "hockeyDBid": "99396",
          "name": "Cody Eakin",
        },
        {
          "name": "2012 2nd round pick (#54-Mike Winther)",
        },
      ],
      "Washington Capitals": [
        {
          "hockeyDBid": "35733",
          "name": "Mike Ribeiro",
        },
      ],
    },
  },
  {
    "comment": null,
    "date": "June 22, 2012",
    "teams": {
      "Columbus Blue Jackets": [
        {
          "hockeyDBid": "98874",
          "name": "Sergei Bobrovsky",
        },
      ],
      "Philadelphia Flyers": [
        {
          "name": "2012 4th round pick(#117-Taylor Leier)",
        },
        {
          "name": "2012 2nd round pick (#45-Anthony Stolarz)",
        },
        {
          "name": "2013 4th round pcik",
        },
      ],
    },
  },
  {
    "comment": null,
    "date": "June 22, 2012",
    "teams": {
      "Buffalo Sabres": [
        {
          "name": "2012 1st round pick (#14-Zemgus Girgensons)",
        },
      ],
      "Calgary Flames": [
        {
          "name": "2012 1st round pick (#21-Mark Jankowski)",
        },
        {
          "name": "2012 2nd round pick (#42-Patrick Sieloff)",
        },
      ],
    },
  },
  {
    "comment": null,
    "date": "June 22, 2012",
    "teams": {
      "Toronto Maple Leafs": [
        {
          "name": "2013 conditional 7th round pick",
        },
      ],
      "Winnipeg Jets": [
        {
          "hockeyDBid": "0",
          "name": "Jonas Gustavsson",
        },
      ],
    },
  },
  {
    "comment": null,
    "date": "June 15, 2012",
    "teams": {
      "Nashville Predators": [
        {
          "name": "2012 2nd round pick",
        },
        {
          "name": "2012 2nd round pick",
        },
        {
          "name": "2013 3rd round pick",
        },
        {
          "hockeyDBid": "43915",
          "name": "Sebastien Caron",
        },
      ],
      "Tampa Bay Lightning": [
        {
          "hockeyDBid": "94541",
          "name": "Anders Lindback",
        },
        {
          "name": "2012 7th round pick",
        },
        {
          "hockeyDBid": "71378",
          "name": "Kyle Wilson",
        },
      ],
    },
  },
  {
    "comment": null,
    "date": "June 10, 2012",
    "teams": {
      "Detroit Red Wings": [
        {
          "name": "2014 conditionnal pick",
        },
        {
          "hockeyDBid": "56776",
          "name": "Andrew Murray",
        },
      ],
      "San Jose Sharks": [
        {
          "hockeyDBid": "28857",
          "name": "Brad Stuart",
        },
      ],
    },
  },
  {
    "comment": null,
    "date": "June 4, 2012",
    "teams": {
      "Pittsburgh Penguins": [
        {
          "hockeyDBid": "18609",
          "name": "Tomas Vokoun",
        },
      ],
      "Washington Capitals": [
        {
          "name": "2012 7th round pick",
        },
      ],
    },
  },
  {
    "comment": null,
    "date": "May 26, 2012",
    "teams": {
      "Boston Bruins": [
        {
          "hockeyDBid": "78707",
          "name": "Chris Bourque",
        },
      ],
      "Washington Capitals": [
        {
          "hockeyDBid": "73519",
          "name": "Zach Hamill",
        },
      ],
    },
  },
]
`);
  });
});
