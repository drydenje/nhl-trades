"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  request: jest.fn(() => Promise.resolve({
    data: {
      name: "test mock axios"
    }
  }))
};
exports.default = _default;