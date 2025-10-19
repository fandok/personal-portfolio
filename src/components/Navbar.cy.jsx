/// <reference types="Cypress" />

import Navbar from "./Navbar";

describe("<Navbar />", () => {
  it("renders", () => {
    cy.mount(<Navbar />);
  });

  it("renders and click image url will redirect to home page", () => {
    cy.mount(<Navbar />);

    cy.get("[data-cy=logo]")
      .should("exist")
      .find("img")
      .should("exist")
      .and("have.attr", "src")
      .and("include", "parth.svg");

    cy.get("[data-cy=logo]")
      .should("exist")
      .then(($anchor) => {
        const href = $anchor.attr("href");

        cy.wrap($anchor).click({ force: true });

        cy.url().should("contains", href);
      });
  });
});
