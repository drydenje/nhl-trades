import { fetchDraftYear } from "./nhl-draft-scraping";

fetchDraftYear(`./public/scraped-data/draft-results-test.json`);

// cron.schedule("*/5 * * * * *", fetchDraftYear);

// combining multiple arrays into one for each year of trade data
// const cleanData = () => {
//   const arr = JSON.parse(readFile(`./public/scraped-data/draft-results.json`));
//   let merged = "";
//   let res = "";
//   for (const [key, value] of Object.entries(arr)) {
//     res = jsonToCsv(arr[key]);
// console.log(res[0]);
// let merged = [];
// arr[key].forEach((item) => {
// const lineItem = jsonToCsv(item);
// const lineItem =
//   `${item.playerName}` +
//   ",\n/n" +
//   `${item.draftYear},` +
//   `${item.id},` +
//   `${item.triCode},` +
//   `${item.teamPickHistory},` +
//   `${item.supplementalDraft},` +
//   `${item.overallPickNumber},` +
//   `${item.pickInRound},` +
//   `${item.notes},` +
//   `${item.draftedByTeamId},` +
//   `${item.draftDate}`;
// console.log(lineItem);
// merged = lineItem;
// item.forEach((trade) => {
// merged.push();
// });
// });
// arr[key] = merged;
// }

// writeFile(`./public/scraped-data/draft-results-flat.csv`, res);
// };
// function jsonToCsv(jsonData) {
//   let csv = "";

//   // console.log(jsonData[1]);

//   // Extract headers
//   const headers = Object.keys(jsonData[0]);
//   csv += headers.join(",") + "\n";

//   // Extract values
//   // console.log(jsonData);
//   jsonData.forEach((obj) => {
//     const values = headers.map((header) => obj[header]);
//     csv += values.join(",") + "\n";
//   });

//   return csv;
// }

// cleanData();

// Convert JSON to CSV
// const csvData = jsonToCsv(jsonData);

// console.log(csvData);
