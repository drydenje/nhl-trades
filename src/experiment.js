const chalk = require("chalk");

// VGK 20232024

// const runScrape = async () => {
//   let delay = 0;
//   const delayIncrement = 1000;
//   const startTime = new Date();

//   // let results = Promise.all(tasks).then((results) => {
//   //   console.log("results: " + results);
//   // });

//   const endTime = new Date();
//   const timeElapsed = (endTime - startTime) / 1000;
//   console.log("timeElapsed:", timeElapsed);
// };
const notUsedDeleteLater = true;

// Star Wars characters example
// for await (const page of starWarsCharacters()) {
//   for (const char of page) {
//     console.log(char.name);
//   }
// }

(async function () {
  for await (const roster of nhlTeamRosters("SEA", "20232025")) {
    console.log(roster[0]);
  }
})();

async function* nhlTeamRosters(teamToScrape, startYear) {
  let year = startYear;
  let url = `https://api-web.nhle.com/v1/roster/${teamToScrape}/${year}`;
  while (year) {
    console.log(
      chalk.yellow.bgBlue(`Trying to scrape: [${teamToScrape}] -> ${year}`)
    );

    try {
      const response = await fetch(url);
      if (!response.ok) {
        year = null;
        console.log("NOPE");
        // throw new Error(`Response status: ${response.status}`);
      } else {
        year = year - 10001;
      }

      const data = await response
        .json()
        .then((res) => [...res.forwards, ...res.defensemen, ...res.goalies])
        .then((res) =>
          res.map((player) => {
            return {
              ...player,
              hrID: null,
              hdbID: null,
              verified: false,
            };
          })
        );

      await delay(3);
      yield data;
    } catch (error) {
      console.error(error.message);
    }

    // if there is a '404', set to null
  }
}

const delay = (seconds) =>
  new Promise((resolve) => setTimeout(resolve, seconds * 1000));

async function* starWarsCharacters() {
  let nextUrl = `https://swapi.dev/api/people`;
  while (nextUrl) {
    const response = await fetch(nextUrl);
    const data = await response.json(); //.then((res) => console.log(res));

    // console.log("resp:", response.json());
    nextUrl = data.next;
    console.log("NEXT:", nextUrl);
    await delay(5);
    yield data.results;
  }
}
