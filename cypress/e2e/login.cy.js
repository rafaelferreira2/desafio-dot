const data = require('../fixtures/users.json')

describe('template spec', () => {
  it('passes', () => {
    const user = data.create

    cy.getUserByEmail(user.email)
    // cy.postUser(user)

    cy.visit('/login')
  })
})