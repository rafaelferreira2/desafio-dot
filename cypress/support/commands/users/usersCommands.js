Cypress.Commands.add('visitCreateUser', () => {
  cy.visit('/cadastrarusuarios')
})

Cypress.Commands.add('createUser', (user) => {
  cy.visitCreateUser()

  if (user.nome != '') { cy.get('#nome').type(user.nome) }
  if (user.email != '') { cy.get('#email').type(user.email) }
  if (user.password != '') { cy.get('#password').type(user.password) }
  if (user.administrador == 'true') { cy.get('#administrador').check() }

  cy.submitUser()
})

Cypress.Commands.add('successRegister', () => {
  cy.get('a.alert-link', { timeout: 15000 })
})

Cypress.Commands.add('submitUser', () => {
  cy.get("button[data-testid='cadastrar']").click()
})