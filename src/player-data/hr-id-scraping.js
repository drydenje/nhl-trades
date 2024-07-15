import { getPage, readFile, writeFile } from "../utils/utils.js";
import { convertArrayToCSV } from "convert-array-to-csv";
import fs from "fs";
import cheerio from "cheerio";
import { existsSync } from "node:fs";
const chalk = require("chalk");
import latinize from "latinize";

// This takes about 8 minutes to finish
// https://www.hockey-reference.com/friv/birthplaces.cgi
const scrapeHRPlayers = async (filePath) => {
  // check if the results file exists
  if (!existsSync(filePath)) {
    console.log("File doesn't exist: creating new file with template");
    // create a new json file using the blank template
    writeFile(filePath, hrEmptyTemplate);
  }

  // load the json file (all place.data arrays should be empty to start with)
  const places = JSON.parse(readFile(filePath));

  // decide which place (province/state/country) to scrape
  const placeToScrape = places.find(
    (place) => place.data === undefined || place.data.length == 0
  );
  // create a list of places that haven't been scraped (for progress indicator)
  const remainingPlaces = places.filter(
    (place) => place.data === undefined || place.data.length == 0
  ).length;

  // when there are no more places to scrape, prepare the data and save
  if (remainingPlaces === 0) {
    console.log(chalk.yellow.bgBlue(`Finished scraping`));
    const res = [];
    places.forEach((place) => {
      res.push(place.data);
    });
    // clean up the hockey-reference id (currently in href form)
    const regex = /\w+(?=.html)/gm;
    const final = res.flat().map((player) => {
      return { ...player, id: player.id.match(regex).toString() };
    });

    // add the returned back into the array
    writeFile(filePath, final);

    // still more data to scrape
  } else {
    // show what the script is trying to do, and give an idea of what remains to be scraped
    console.log(
      chalk.yellow.bgBlue(
        `Trying to scrape: ${placeToScrape.name} (${remainingPlaces}/${places.length})`
      )
    );
    // fetch the actual html to scrape
    const players = await getPage(
      `https://www.hockey-reference.com/${placeToScrape.href}`
    )
      // pull all of the players from the page
      .then((html) => parsePlayersFromHR(html));

    const result = places.map((place) =>
      place.name === placeToScrape.name ? { ...place, data: players } : place
    );
    // write the places array and continue
    writeFile(filePath, result);
  }
};

const headings = ["name", "id", "birthDate"];
const convertToCSV = () => {
  const players = JSON.parse(
    readFile(`./src/player-data/hr-player-id-final.json`)
  );
  const csv = convertArrayToCSV(players, {
    headings,
    separator: ",",
  });

  fs.writeFile(
    "./public/final-csv-files/hr-player-id-final.csv",
    csv,
    (err) => {
      if (err) {
        console.log(err);
      }
      // console.log(`Data written to: ${csvFilePath}`);
    }
  );
};

const parsePlayersFromHR = (html) => {
  // return object with extracted values
  let $ = cheerio.load(html);
  const players = [];
  $("#stats tbody")
    .find("tr")
    .each((index, element) => {
      const regex = /\w+(?=.html)/gm;
      const player = {
        name: latinize($(element).find("td a").text()),
        id: $(element).find("td a").attr("href"), //.match(regex)[0],
        birthDate: $(element).find('td[data-stat="birth_date"]').text(),
        birthCity: $(element).find('td[data-stat="birth_city"]').text(),
      };
      if (player.name && player.id.trim() !== "") {
        players.push(player);
      }
    });
  return players;
};

// This is used to create an empty JSON file if none exists
const hrEmptyTemplate = [
  {
    name: "Alberta",
    href: "/friv/birthplaces.cgi?country=CA&province=AB&state=",
    data: [],
  },
  {
    name: "British Columbia",
    href: "/friv/birthplaces.cgi?country=CA&province=BC&state=",
    data: [],
  },
  {
    name: "Manitoba",
    href: "/friv/birthplaces.cgi?country=CA&province=MB&state=",
    data: [],
  },
  {
    name: "New Brunswick",
    href: "/friv/birthplaces.cgi?country=CA&province=NB&state=",
    data: [],
  },
  {
    name: "Newfoundland and Labrador",
    href: "/friv/birthplaces.cgi?country=CA&province=NL&state=",
    data: [],
  },
  {
    name: "Northwest Territories",
    href: "/friv/birthplaces.cgi?country=CA&province=NT&state=",
    data: [],
  },
  {
    name: "Nova Scotia",
    href: "/friv/birthplaces.cgi?country=CA&province=NS&state=",
    data: [],
  },
  {
    name: "Ontario",
    href: "/friv/birthplaces.cgi?country=CA&province=ON&state=",
    data: [],
  },
  {
    name: "Prince Edward Island",
    href: "/friv/birthplaces.cgi?country=CA&province=PE&state=",
    data: [],
  },
  {
    name: "Quebec",
    href: "/friv/birthplaces.cgi?country=CA&province=QC&state=",
    data: [],
  },
  {
    name: "Saskatchewan",
    href: "/friv/birthplaces.cgi?country=CA&province=SK&state=",
    data: [],
  },
  {
    name: "Yukon",
    href: "/friv/birthplaces.cgi?country=CA&province=YT&state=",
    data: [],
  },
  {
    name: "",
    href: "/friv/birthplaces.cgi?country=US&province=&state=AB",
    data: [],
  },
  {
    name: "",
    href: "/friv/birthplaces.cgi?country=US&province=&state=BC",
    data: [],
  },
  {
    name: "Alabama",
    href: "/friv/birthplaces.cgi?country=US&province=&state=AL",
    data: [],
  },
  {
    name: "Alaska",
    href: "/friv/birthplaces.cgi?country=US&province=&state=AK",
    data: [],
  },
  {
    name: "Arizona",
    href: "/friv/birthplaces.cgi?country=US&province=&state=AZ",
    data: [],
  },
  {
    name: "California",
    href: "/friv/birthplaces.cgi?country=US&province=&state=CA",
    data: [],
  },
  {
    name: "Colorado",
    href: "/friv/birthplaces.cgi?country=US&province=&state=CO",
    data: [],
  },
  {
    name: "Connecticut",
    href: "/friv/birthplaces.cgi?country=US&province=&state=CT",
    data: [],
  },
  {
    name: "Delaware",
    href: "/friv/birthplaces.cgi?country=US&province=&state=DE",
    data: [],
  },
  {
    name: "District of Columbia",
    href: "/friv/birthplaces.cgi?country=US&province=&state=DC",
    data: [],
  },
  {
    name: "Florida",
    href: "/friv/birthplaces.cgi?country=US&province=&state=FL",
    data: [],
  },
  {
    name: "Georgia",
    href: "/friv/birthplaces.cgi?country=US&province=&state=GA",
    data: [],
  },
  {
    name: "Idaho",
    href: "/friv/birthplaces.cgi?country=US&province=&state=ID",
    data: [],
  },
  {
    name: "Illinois",
    href: "/friv/birthplaces.cgi?country=US&province=&state=IL",
    data: [],
  },
  {
    name: "Indiana",
    href: "/friv/birthplaces.cgi?country=US&province=&state=IN",
    data: [],
  },
  {
    name: "Iowa",
    href: "/friv/birthplaces.cgi?country=US&province=&state=IA",
    data: [],
  },
  {
    name: "Louisiana",
    href: "/friv/birthplaces.cgi?country=US&province=&state=LA",
    data: [],
  },
  {
    name: "Maine",
    href: "/friv/birthplaces.cgi?country=US&province=&state=ME",
    data: [],
  },
  {
    name: "Maryland",
    href: "/friv/birthplaces.cgi?country=US&province=&state=MD",
    data: [],
  },
  {
    name: "Massachusetts",
    href: "/friv/birthplaces.cgi?country=US&province=&state=MA",
    data: [],
  },
  {
    name: "Michigan",
    href: "/friv/birthplaces.cgi?country=US&province=&state=MI",
    data: [],
  },
  {
    name: "Minnesota",
    href: "/friv/birthplaces.cgi?country=US&province=&state=MN",
    data: [],
  },
  {
    name: "Mississippi",
    href: "/friv/birthplaces.cgi?country=US&province=&state=MS",
    data: [],
  },
  {
    name: "Missouri",
    href: "/friv/birthplaces.cgi?country=US&province=&state=MO",
    data: [],
  },
  {
    name: "Montana",
    href: "/friv/birthplaces.cgi?country=US&province=&state=MT",
    data: [],
  },
  {
    name: "Nebraska",
    href: "/friv/birthplaces.cgi?country=US&province=&state=NE",
    data: [],
  },
  {
    name: "Nevada",
    href: "/friv/birthplaces.cgi?country=US&province=&state=NV",
    data: [],
  },
  {
    name: "New Hampshire",
    href: "/friv/birthplaces.cgi?country=US&province=&state=NH",
    data: [],
  },
  {
    name: "New Jersey",
    href: "/friv/birthplaces.cgi?country=US&province=&state=NJ",
    data: [],
  },
  {
    name: "New York",
    href: "/friv/birthplaces.cgi?country=US&province=&state=NY",
    data: [],
  },
  {
    name: "North Carolina",
    href: "/friv/birthplaces.cgi?country=US&province=&state=NC",
    data: [],
  },
  {
    name: "North Dakota",
    href: "/friv/birthplaces.cgi?country=US&province=&state=ND",
    data: [],
  },
  {
    name: "Ohio",
    href: "/friv/birthplaces.cgi?country=US&province=&state=OH",
    data: [],
  },
  {
    name: "Oklahoma",
    href: "/friv/birthplaces.cgi?country=US&province=&state=OK",
    data: [],
  },
  {
    name: "Oregon",
    href: "/friv/birthplaces.cgi?country=US&province=&state=OR",
    data: [],
  },
  {
    name: "Pennsylvania",
    href: "/friv/birthplaces.cgi?country=US&province=&state=PA",
    data: [],
  },
  {
    name: "Rhode Island",
    href: "/friv/birthplaces.cgi?country=US&province=&state=RI",
    data: [],
  },
  {
    name: "South Carolina",
    href: "/friv/birthplaces.cgi?country=US&province=&state=SC",
    data: [],
  },
  {
    name: "South Dakota",
    href: "/friv/birthplaces.cgi?country=US&province=&state=SD",
    data: [],
  },
  {
    name: "Texas",
    href: "/friv/birthplaces.cgi?country=US&province=&state=TX",
    data: [],
  },
  {
    name: "Utah",
    href: "/friv/birthplaces.cgi?country=US&province=&state=UT",
    data: [],
  },
  {
    name: "Vermont",
    href: "/friv/birthplaces.cgi?country=US&province=&state=VT",
    data: [],
  },
  {
    name: "Virginia",
    href: "/friv/birthplaces.cgi?country=US&province=&state=VA",
    data: [],
  },
  {
    name: "Washington",
    href: "/friv/birthplaces.cgi?country=US&province=&state=WA",
    data: [],
  },
  {
    name: "Wisconsin",
    href: "/friv/birthplaces.cgi?country=US&province=&state=WI",
    data: [],
  },
  {
    name: "Australia",
    href: "/friv/birthplaces.cgi?country=AU&province=&state=",
    data: [],
  },
  {
    name: "Austria",
    href: "/friv/birthplaces.cgi?country=AT&province=&state=",
    data: [],
  },
  {
    name: "Bahamas",
    href: "/friv/birthplaces.cgi?country=BS&province=&state=",
    data: [],
  },
  {
    name: "Belarus",
    href: "/friv/birthplaces.cgi?country=BY&province=&state=",
    data: [],
  },
  {
    name: "Belgium",
    href: "/friv/birthplaces.cgi?country=BE&province=&state=",
    data: [],
  },
  {
    name: "Brazil",
    href: "/friv/birthplaces.cgi?country=BR&province=&state=",
    data: [],
  },
  {
    name: "Brunei Darussalam",
    href: "/friv/birthplaces.cgi?country=BN&province=&state=",
    data: [],
  },
  {
    name: "Bulgaria",
    href: "/friv/birthplaces.cgi?country=BG&province=&state=",
    data: [],
  },
  {
    name: "Croatia",
    href: "/friv/birthplaces.cgi?country=HR&province=&state=",
    data: [],
  },
  {
    name: "Czech Republic",
    href: "/friv/birthplaces.cgi?country=CZ&province=&state=",
    data: [],
  },
  {
    name: "Czechoslovakia",
    href: "/friv/birthplaces.cgi?country=CS&province=&state=",
    data: [],
  },
  {
    name: "Denmark",
    href: "/friv/birthplaces.cgi?country=DK&province=&state=",
    data: [],
  },
  {
    name: "East Germany",
    href: "/friv/birthplaces.cgi?country=DD&province=&state=",
    data: [],
  },
  {
    name: "Finland",
    href: "/friv/birthplaces.cgi?country=FI&province=&state=",
    data: [],
  },
  {
    name: "France",
    href: "/friv/birthplaces.cgi?country=FR&province=&state=",
    data: [],
  },
  {
    name: "Germany",
    href: "/friv/birthplaces.cgi?country=DE&province=&state=",
    data: [],
  },
  {
    name: "Haiti",
    href: "/friv/birthplaces.cgi?country=HT&province=&state=",
    data: [],
  },
  {
    name: "Indonesia",
    href: "/friv/birthplaces.cgi?country=ID&province=&state=",
    data: [],
  },
  {
    name: "Ireland",
    href: "/friv/birthplaces.cgi?country=IE&province=&state=",
    data: [],
  },
  {
    name: "Italy",
    href: "/friv/birthplaces.cgi?country=IT&province=&state=",
    data: [],
  },
  {
    name: "Jamaica",
    href: "/friv/birthplaces.cgi?country=JM&province=&state=",
    data: [],
  },
  {
    name: "Japan",
    href: "/friv/birthplaces.cgi?country=JP&province=&state=",
    data: [],
  },
  {
    name: "Kazakhstan",
    href: "/friv/birthplaces.cgi?country=KZ&province=&state=",
    data: [],
  },
  {
    name: "Latvia",
    href: "/friv/birthplaces.cgi?country=LV&province=&state=",
    data: [],
  },
  {
    name: "Lebanon",
    href: "/friv/birthplaces.cgi?country=LB&province=&state=",
    data: [],
  },
  {
    name: "Lithuania",
    href: "/friv/birthplaces.cgi?country=LT&province=&state=",
    data: [],
  },
  {
    name: "Netherlands",
    href: "/friv/birthplaces.cgi?country=NL&province=&state=",
    data: [],
  },
  {
    name: "Nigeria",
    href: "/friv/birthplaces.cgi?country=NG&province=&state=",
    data: [],
  },
  {
    name: "Norway",
    href: "/friv/birthplaces.cgi?country=NO&province=&state=",
    data: [],
  },
  {
    name: "Paraguay",
    href: "/friv/birthplaces.cgi?country=PY&province=&state=",
    data: [],
  },
  {
    name: "Poland",
    href: "/friv/birthplaces.cgi?country=PL&province=&state=",
    data: [],
  },
  {
    name: "Republic of Korea",
    href: "/friv/birthplaces.cgi?country=KR&province=&state=",
    data: [],
  },
  {
    name: "Russia",
    href: "/friv/birthplaces.cgi?country=RU&province=&state=",
    data: [],
  },
  {
    name: "Slovakia",
    href: "/friv/birthplaces.cgi?country=SK&province=&state=",
    data: [],
  },
  {
    name: "Slovenia",
    href: "/friv/birthplaces.cgi?country=SI&province=&state=",
    data: [],
  },
  {
    name: "South Africa",
    href: "/friv/birthplaces.cgi?country=ZA&province=&state=",
    data: [],
  },
  {
    name: "Sweden",
    href: "/friv/birthplaces.cgi?country=SE&province=&state=",
    data: [],
  },
  {
    name: "Switzerland",
    href: "/friv/birthplaces.cgi?country=CH&province=&state=",
    data: [],
  },
  {
    name: "Taiwan",
    href: "/friv/birthplaces.cgi?country=TW&province=&state=",
    data: [],
  },
  {
    name: "Ukraine",
    href: "/friv/birthplaces.cgi?country=UA&province=&state=",
    data: [],
  },
  {
    name: "Union of Soviet Socialist Republics",
    href: "/friv/birthplaces.cgi?country=SU&province=&state=",
    data: [],
  },
  {
    name: "United Kingdom",
    href: "/friv/birthplaces.cgi?country=GB&province=&state=",
    data: [],
  },
  {
    name: "United Republic of Tanzania",
    href: "/friv/birthplaces.cgi?country=TZ&province=&state=",
    data: [],
  },
  {
    name: "Uzbekistan",
    href: "/friv/birthplaces.cgi?country=UZ&province=&state=",
    data: [],
  },
  {
    name: "Venezuela",
    href: "/friv/birthplaces.cgi?country=VE&province=&state=",
    data: [],
  },
  {
    name: "Yugoslavia",
    href: "/friv/birthplaces.cgi?country=YU&province=&state=",
    data: [],
  },
];

export { scrapeHRPlayers, convertToCSV };