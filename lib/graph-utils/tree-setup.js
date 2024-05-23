"use strict";

var _cytoscape = _interopRequireDefault(require("cytoscape"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let cy = (0, _cytoscape.default)();
cy.add([{
  group: "nodes",
  data: {
    weight: 75
  },
  position: {
    x: 100,
    y: 200
  }
}, {
  group: "nodes",
  data: {
    weight: 75
  },
  position: {
    x: 200,
    y: 200
  }
}, {
  group: "edges",
  data: {
    id: "e0",
    source: "n0",
    target: "n1"
  }
}]);