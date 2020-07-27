// https://docs.cypress.io/api/introduction/api.html

const $ = Cypress.$;

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.contains('h1', 'Modal Component Test');
  });
});

describe ('Modal Test', () => {
  describe('Normal Modal Test', () => {
    it('Visits the app root url', () => {
      cy.visit('/');
      cy.get('.v-select').eq(0);
      cy.get('.button').eq(0)
        .click();
    });
  });
});

