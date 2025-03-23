Cypress.Commands.add('postUser', (user) => {
  cy.api({
    url: `${Cypress.config('apiBaseUrl')}/usuarios`,
    method: 'POST',
    body: user,
    failOnStatusCode: false
  }).then(response => { return response })
})

Cypress.Commands.add('getUser', (email) => {
  cy.api({
    url: `${Cypress.config('apiBaseUrl')}/usuarios`,
    method: 'GET',
    qs: { email: email },
    failOnStatusCode: false
  }).then(response => { return response })
})

Cypress.Commands.add('deleteUser', (identify) => {
  cy.api({
    url: `${Cypress.config('apiBaseUrl')}/usuarios/${identify}`,
    method: 'DELETE'
  }).then(response => {
    expect(response.status).to.eq(200)
  })
})