Cypress.Commands.add('apiPostUser', (user) => {
  cy.request({
    url: `${Cypress.env('apiUrl')}/usuarios`,
    method: 'POST',
    body: user,
    failOnStatusCode: false
  }).then(response => { return response })
})

Cypress.Commands.add('apiGetUser', (email) => {
  cy.request({
    url: `${Cypress.env('apiUrl')}/usuarios`,
    method: 'GET',
    qs: { email: email },
    failOnStatusCode: false
  }).then(response => { return response })
})

Cypress.Commands.add('apiDeleteUser', (email) => {
  cy.apiGetUser(email)
    .then(response => {
      expect(response.status).to.eq(200)
      if (response.body.quantidade > 0) {
        cy.request({
          url: `${Cypress.env('apiUrl')}/usuarios/${response.body.usuarios[0]._id}`,
          method: 'DELETE'
        }).then(response => {
          expect(response.status).to.eq(200)
        })
      }
    })
})

Cypress.Commands.add('apiRecreateUser', (user) => {
  cy.apiDeleteUser(user.email)
  cy.apiPostUser(user)
    .then(response => {
      expect(response.status).to.eq(201)
    })
})