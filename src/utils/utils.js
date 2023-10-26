const fs = require("fs");

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
  const res = await fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }
      return response;
    })
    .catch((error) => {
      console.error(`Could not fetch page: ${error}`);
    });

  console.log("res:", res);
  return res;
};

const readFile = (filePath) => {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    return data;
  } catch (error) {
    console.error(error);
  }
};

export { checkArray, getNextYear, getPage, readFile };
