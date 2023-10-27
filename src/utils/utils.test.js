import { checkArray, getNextYear, getPage, readFile, convert } from "./utils";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
const DATA_FILEPATH = `./public/raw-mock-data/`;

const server = setupServer(
  http.get(`https://api.exchangeratesapi.io/latest`, (req, res, context) => {
    // return res(context.status(200), context.json({ rates: { CAD: 1.43 } }));
    return HttpResponse.json({ rates: { CAD: 1.42 } });
  })
);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

// describe("checkArray function", () => {
//   test("should return 1 if an array contains data", () => {
//     const seasons = {
//       "2022-23": [],
//       "2021-22": [{ data: true }],
//       "2020-21": [],
//     };

//     const yearToCheck = "2021-22";
//     const result = checkArray(seasons[yearToCheck]);
//     expect(result).toEqual(1);
//   });

//   test("should return 0 if an array doesn't contain data", () => {
//     const seasons = {
//       "2022-23": [],
//       "2021-22": [],
//       "2020-21": [],
//     };

//     const yearToCheck = "2021-22";
//     const result = checkArray(seasons[yearToCheck]);
//     expect(result).toEqual(0);
//   });

//   test("should return 'false' if there is no array", () => {
//     const seasons = {
//       "2022-23": [],
//       "2021-22": "",
//       "2020-21": [],
//     };

//     const yearToCheck = "2021-22";
//     const result = checkArray(seasons[yearToCheck]);
//     expect(result).toEqual(false);
//   });
// });

// describe("getNextYear function", () => {
//   test("should return the most recent year that doesn't contain any data", () => {
//     const seasons = {
//       "2022-23": [{ data: false }],
//       "2021-22": [],
//       "2020-21": [],
//     };

//     const result = getNextYear(seasons);

//     expect(result).toEqual("2021-22");
//   });

//   test("should return 'false' when all years contain data", () => {
//     const seasons = {
//       "2022-23": [{ data: false }],
//       "2021-22": [{ data: false }],
//       "2020-21": [{ data: false }],
//     };

//     const result = getNextYear(seasons);

//     expect(result).toEqual(false);
//   });
// });

describe("getPage function", () => {
  // test("should return an html page when passed a url", async () => {
  //   // const fetch =
  //   // fetch.mockResponseOnce(JSON.stringify({ data: "12345" }));
  //   // fetch.mockResponseOnce(JSON.stringify("test"));
  //   fetch.mockResponseOnce("test");

  //   const url = `${DATA_FILEPATH}/1977-78-1.html`;
  //   const result = await getPage(url);
  //   // const result = await fetch(url).then((res) => {
  //   // console.log(res.data);
  //   // });
  //   // console.log(fetch(url));
  //   console.log("result:", result);
  // });

  test.only("finds exchange", async () => {
    // fetch.mockResponseOnce(JSON.stringify({ rates: { CAD: 1.42 } }));

    const rate = await convert("USD", "CAD");

    expect(rate).toEqual(1.42);
    // expect(fetch).toHaveBeenCalledTimes(1);
  });
});
