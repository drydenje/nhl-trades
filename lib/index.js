"use strict";

var _nhlDraftScraping = require("./nhl-draft-scraping");
const DRAFT_RESULTS_JSON = `./public/scraped-data/draft-results.json`;
// fetchDraftYear(DRAFT_RESULTS_JSON);
// cron.schedule("*/5 * * * * *", fetchDraftYear);

(0, _nhlDraftScraping.convertToCSV)(DRAFT_RESULTS_JSON);
// writeCSVFile(`./public/scraped-data/draft-results-test.json`);

// combining multiple arrays into one for each year of trade data