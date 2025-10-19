/// <reference types="cypress" />

import { navLinks } from "../constants";
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

  it("renders and show navbar options", () => {
    cy.mount(<Navbar />);

    cy.get("[data-cy=dropdown-list]").should("have.class", "hidden");

    cy.get("[data-cy=dropdown]").should("exist").click();

    cy.get("[data-cy=dropdown-list]").should("have.class", "flex");
  });

  navLinks.map(({ id, title }) => {
    it(`renders and click navbar ${title} will have ${id} page`, () => {
      cy.mount(<Navbar />);

      cy.url().should("not.contain", id);

      cy.get("[data-cy=dropdown]").should("exist").click();

      cy.get(`[data-cy=${id}]`).should("have.text", title).click();

      cy.url().should("contains", id);
    });
  });
});
