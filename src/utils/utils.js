const fs = require("fs");
// import fs from "fs";

// checks to see if an array exists and is empty.
// Returns 0 if empty, 1 if the array has data, and 'false' if it's not an array
const checkArray = (arr) => {
  return Array.isArray(arr) && arr.length;
};

// Returns the next year to scrape
const getNextYear = (obj) => {
  const yearToScrape = Object.entries(obj).filter((year) => {
    if (checkArray(year[1]) === 0) {
      return year;
    }
  });

  if (yearToScrape.length > 0) {
    // return the year of the first object of the array
    return yearToScrape[0][0];
  } else {
    return false;
  }
};

// Returns a single html page from the given url
const getPage = async (url) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Request failed with status code ${result.status}`);
    }
    const data = await res.text();
    return data;
  } catch (error) {
    console.error(`Could not fetch page: ${error}`);
  }
};

// reads the file from disk
const readFile = (filePath) => {
  try {
    const data = fs.readFileSync(filePath, "utf8");

    return data;
  } catch (error) {
    console.error(error);
  }
};

// writes the file to disk
const writeFile = (filePath, data) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data));
  } catch (error) {
    console.error(error);
  }
};

async function convert(base, destination) {
  const result = await fetch(
    `https://api.exchangeratesapi.io/latest?base=${base}`
  );
  if (!result.ok) {
    throw new Error(`Request failed with status code ${result.status}`);
  }
  const data = await result.json();
  return data.rates[destination];
}

export { checkArray, getNextYear, getPage, readFile, writeFile, convert };
