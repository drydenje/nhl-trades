const chalk = require("chalk");
const getPage = require("./utils/utils.js");

// VGK 20232024

const runScrape = async () => {
  let delay = 0;
  const delayIncrement = 1000;
  const startTime = new Date();

  // let results = Promise.all(tasks).then((results) => {
  //   console.log("results: " + results);
  // });

  const endTime = new Date();
  const timeElapsed = (endTime - startTime) / 1000;
  console.log("timeElapsed:", timeElapsed);
};

const getTeamRosters = (teamToScrape, startYear) =>
  async function* () {
    let year = startYear;
    let url = `https://api-web.nhle.com/v1/roster/${teamToScrape}/${year}`;
    console.log(teamToScrape);
    console.log(url);
    while (year) {
      const response = await fetch(url);
      const data = await response.json().then((res) => console.log(res));

      // if there is a '404', set to null
      url = null;
      yield* data.results;
    }
  };

export { runScrape, getTeamRosters };
