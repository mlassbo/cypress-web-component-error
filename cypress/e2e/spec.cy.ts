import cypress from "cypress";

describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000');
    // cy.get("#root");
    cy.get("#my-web-component");
  })
})