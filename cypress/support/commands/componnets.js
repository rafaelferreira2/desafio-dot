Cypress.Commands.add('alertError', () => {
  cy.get('div.alert-secondary > span')
})