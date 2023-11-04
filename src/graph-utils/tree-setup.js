import cytoscape from "cytoscape";

let cy = cytoscape();

cy.add([
  { group: "nodes", data: { weight: 75 }, position: { x: 100, y: 200 } },
  { group: "nodes", data: { weight: 75 }, position: { x: 200, y: 200 } },
  { group: "edges", data: { id: "e0", source: "n0", target: "n1" } },
]);
