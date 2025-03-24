Cypress.Commands.add('visitLogin', () => {
  cy.visit('/login')
})

Cypress.Commands.add('login', (email, password) => {
  cy.visitLogin()

  if (email != '') { cy.get('#email').type(email) }
  if (password != '') { cy.get('#password').type(password) }

  cy.submitLogin()
})

Cypress.Commands.add('submitLogin', () => {
  cy.get("button[data-testid='entrar']").click()
})

Cypress.Commands.add('isLoggedIn', (isAdmin, username) => {
  cy.intercept('GET', `${Cypress.env('apiUrl')}/usuarios`).as('getUsers')
  cy.wait('@getUsers')

  if (isAdmin == 'true') {
    cy.get('div.jumbotron > h1')
      .should('have.text', `Bem Vindo  ${username}`)
  } else {
    cy.get('div.jumbotron > h1')
      .should('have.text', 'Serverest Store')
  }
})
