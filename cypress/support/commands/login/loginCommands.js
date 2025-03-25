Cypress.Commands.add('visitLogin', () => {
  cy.visit('/login')
})

Cypress.Commands.add('login', (email, password) => {
  cy.fillLogin(email, password)
  cy.intercept('GET', '**/usuarios**').as('getUsers')
  cy.submitLogin()
  cy.wait('@getUsers')
})

Cypress.Commands.add('fillLogin', (email, password) => {
  cy.visitLogin()
  if (email != '') { cy.get('#email').type(email) }
  if (password != '') { cy.get('#password').type(password) }
})

Cypress.Commands.add('submitLogin', () => {
  cy.get("button[data-testid='entrar']").click()
})

Cypress.Commands.add('isLoggedIn', (isAdmin, username) => {
  if (isAdmin == 'true') {
    cy.get('div.jumbotron > h1', { timeout: 15000 })
      .should('have.text', `Bem Vindo  ${username}`)
  } else {
    cy.get('div.jumbotron > h1', { timeout: 15000 })
      .should('have.text', 'Serverest Store')
  }
})
