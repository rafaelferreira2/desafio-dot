Cypress.Commands.add('visitCreateUser', () => {
  cy.visit('/cadastrarusuarios')
})

Cypress.Commands.add('createUser', (user) => {
  cy.visitCreateUser()

  if(user.nome.length > 0) { cy.get('#nome').type(user.nome) }
  if(user.email.length > 0) { cy.get('#email').type(user.email) }
  if(user.password.length > 0) { cy.get('#password').type(user.password) }
  if(user.administrador.length > 0) { cy.get('#administrador').check() }

  cy.submitUser()
})

Cypress.Commands.add('successUser', () => {
  cy.get('.alert-primary')
})

Cypress.Commands.add('submitUser', () => {
  cy.contains('button', 'Cadastrar').click()
})

Cypress.Commands.add('userRequiredField', () => {
  cy.get('div.alert-secondary > span')
})