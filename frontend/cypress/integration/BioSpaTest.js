// https://github.com/bahmutov/test-material-ui

describe("renders the homepage", () => {
  it("renders correctly", () => {
    cy.visit("/");
    cy.contains("eksklusiivne");
  });
});

describe("finds procedures matching target ID nr.1", () => {
  it("chooses procedures matching target ", () => {
    cy.visit("/");
    cy.get("#procedurePage");
    cy.get("grid.#targetComp").parent;
  });
});
