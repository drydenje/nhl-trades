import {
  fetchDraftYear,
  writeCSVFile,
  convertToCSV,
} from "./nhl-draft-scraping";

const DRAFT_RESULTS_JSON = `./public/scraped-data/draft-results-test.json`;
// fetchDraftYear(DRAFT_RESULTS_JSON);
// cron.schedule("*/5 * * * * *", fetchDraftYear);

convertToCSV(DRAFT_RESULTS_JSON);
// writeCSVFile(`./public/scraped-data/draft-results-test.json`);

// combining multiple arrays into one for each year of trade data
