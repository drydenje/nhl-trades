"use strict";

var _convertArrayToCsv = require("convert-array-to-csv");
var _fs = require("fs");
// import { getNextYear, readFile, writeFile } from "./utils/utils.js";

const header = ["id", "name", "age", "department"];
const jsonData = [{
  id: 1,
  name: "John Doe",
  age: 300,
  department: "Engineering"
}, {
  id: 2,
  name: "Jane Smith",
  age: 28,
  department: "Marketing"
}];

// const csvData = jsonToCsv(jsonData);

const test = (0, _convertArrayToCsv.convertArrayToCSV)(jsonData, {
  header,
  separator: ","
});
(0, _fs.writeFile)("./public/scraped-data/draft-results-flat.csv", test, err => {
  if (err) {
    console.log(err);
  }
  console.log("worked");
});