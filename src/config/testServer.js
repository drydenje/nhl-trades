import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { readFile } from "../utils/utils.js";
import { playerDetails } from "../../public/raw-mock-data/nhl-player-details.js";
const DATA_FILEPATH = `./public/raw-mock-data`;

const server = setupServer(
  http.get(`https://localhost/ace`, (req, res, context) => {
    return HttpResponse.json({ rates: { CAD: 1.42 } });
  }),
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
  http.get(
    `https://www.nhltradetracker.com/user/trade_list_by_season/diagnostics`,
    ({ request, response, context }) => {
      const page = readFile(`${DATA_FILEPATH}/diagnostics.html`);
      return HttpResponse.text(page);
    }
  ),
  http.get(
    `https://www.nhltradetracker.com/user/trade_list_by_season/missing-bracket-error`,
    ({ request, response, context }) => {
      const page = readFile(`${DATA_FILEPATH}/missing-bracket-error.html`);
      return HttpResponse.text(page);
    }
  ),
  http.get(
    `https://www.hockey-reference.com/players/a/`,
    ({ request, response, context }) => {
      const page = readFile(`${DATA_FILEPATH}/hr-players-a.html`);
      return HttpResponse.text(page);
    }
  ),
  // Alain Cote
  http.get(
    `https://api-web.nhle.com/v1/player/8446178/landing`,
    ({ request, response, context }) => {
      const playerInfo = playerDetails["8446178"];
      return HttpResponse.json(playerInfo);
      // return HttpResponse.text("ACE");
      // const page = readFile(`${DATA_FILEPATH}/hr-players-a.html`);
      // return HttpResponse.text(page);
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
