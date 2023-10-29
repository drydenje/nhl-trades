const chalk = require("chalk");
const getPage = require("./utils/utils");

const runScrape = async () => {
  // try {
  let delay = 0;
  const delayIncrement = 1000;
  const numOfPages = 3;
  const pages = ["2022-23"];

  const startTime = new Date();

  // Promise.all() with delays for each promise
  let tasks = [];
  // for (let i = 0; i < 10; i++) {
  pages.forEach((page, i) => {
    const delay = 1000 * i;
    tasks.push(
      new Promise(async function (resolve) {
        // the timer/delay
        await new Promise((res) => setTimeout(res, delay));

        // the promise you want delayed
        // (for example):
        // let result = await axios.get(...);
        let result = await new Promise((r) => {
          // console.log("I'm the delayed promise...maybe an API call!");
          r(getPage(page)); //result is delay ms for demo purposes
        });

        //resolve outer/original promise with result
        resolve(result);
      })
    );
  });
  let results = Promise.all(tasks).then((results) => {
    console.log("results: " + results);
  });

  const endTime = new Date();
  const timeElapsed = (endTime - startTime) / 1000;
  console.log("timeElapsed:", timeElapsed);
};

// };

runScrape();
// export { runScrape };
