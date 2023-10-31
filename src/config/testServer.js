import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { readFile } from "../utils/utils.mjs";
const DATA_FILEPATH = `./public/raw-mock-data`;

const server = setupServer(
  http.get(`https://api.exchangeratesapi.io/latest`, (req, res, context) => {
    return HttpResponse.json({ rates: { CAD: 1.42 } });
  }),
  http.get(
    `https://www.nhltradetracker.com/user/trade_list_by_season/1977-78/1`,
    ({ request, response, context }) => {
      const page = readFile(`${DATA_FILEPATH}/1977-78-1.html`);
      return HttpResponse.text(page);
    }
  ),
  http.get(
    `https://www.nhltradetracker.com/user/trade_list_by_season/1977-78/2`,
    ({ request, response, context }) => {
      const page = readFile(`${DATA_FILEPATH}/1977-78-2.html`);
      return HttpResponse.text(page);
    }
  ),
  http.get(
    `https://www.nhltradetracker.com/user/trade_list_by_season/1977-78/3`,
    ({ request, response, context }) => {
      const page = readFile(`${DATA_FILEPATH}/1977-78-3.html`);
      return HttpResponse.text(page);
    }
  ),
  http.get(`*`, ({ request }) => {
    console.error(`Please add request handler for: ${request.url}`);
    return new HttpResponse("Not found", {
      status: 500,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  })
);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

export { server, http, HttpResponse };
