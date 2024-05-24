import { convertArrayToCSV } from "convert-array-to-csv";
import { writeFile } from "fs";
const header = ["id", "name", "age", "department"];

const jsonData = [
  {
    id: 1,
    name: "John Doe",
    age: 300,
    department: "Engineering",
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 28,
    department: "Marketing",
  },
];

// const csvData = jsonToCsv(jsonData);

const test = convertArrayToCSV(jsonData, {
  header,
  separator: ",",
});

writeFile("./public/scraped-data/draft-results-flat.csv", test, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("worked");
});
