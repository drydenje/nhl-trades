"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "HttpResponse", {
  enumerable: true,
  get: function () {
    return _msw.HttpResponse;
  }
});
Object.defineProperty(exports, "http", {
  enumerable: true,
  get: function () {
    return _msw.http;
  }
});
exports.server = void 0;
var _msw = require("msw");
var _node = require("msw/node");
var _utils = require("../utils/utils.js");
const DATA_FILEPATH = `./public/raw-mock-data`;
const server = (0, _node.setupServer)(_msw.http.get(`https://api.exchangeratesapi.io/latest`, (req, res, context) => {
  return _msw.HttpResponse.json({
    rates: {
      CAD: 1.42
    }
  });
}), _msw.http.get(`https://www.nhltradetracker.com/user/trade_list_by_season/1977-78/1`, ({
  request,
  response,
  context
}) => {
  const page = (0, _utils.readFile)(`${DATA_FILEPATH}/1977-78-1.html`);
  return _msw.HttpResponse.text(page);
}), _msw.http.get(`https://www.nhltradetracker.com/user/trade_list_by_season/1977-78/2`, ({
  request,
  response,
  context
}) => {
  const page = (0, _utils.readFile)(`${DATA_FILEPATH}/1977-78-2.html`);
  return _msw.HttpResponse.text(page);
}), _msw.http.get(`https://www.nhltradetracker.com/user/trade_list_by_season/1977-78/3`, ({
  request,
  response,
  context
}) => {
  const page = (0, _utils.readFile)(`${DATA_FILEPATH}/1977-78-3.html`);
  return _msw.HttpResponse.text(page);
}), _msw.http.get(`https://www.nhltradetracker.com/user/trade_list_by_season/diagnostics`, ({
  request,
  response,
  context
}) => {
  const page = (0, _utils.readFile)(`${DATA_FILEPATH}/diagnostics.html`);
  return _msw.HttpResponse.text(page);
}), _msw.http.get(`https://www.nhltradetracker.com/user/trade_list_by_season/missing-bracket-error`, ({
  request,
  response,
  context
}) => {
  const page = (0, _utils.readFile)(`${DATA_FILEPATH}/missing-bracket-error.html`);
  return _msw.HttpResponse.text(page);
}), _msw.http.get(`*`, ({
  request
}) => {
  console.error(`Please add request handler for: ${request.url}`);
  return new _msw.HttpResponse("Not found", {
    status: 500,
    headers: {
      "Content-Type": "text/plain"
    }
  });
}));
exports.server = server;
beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());