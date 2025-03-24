const data = require('../fixtures/users.json')

describe('login', () => {

  it('login admin user', () => {
    const user = data.adminUser

    cy.apiRecreateUser(user)
    cy.login(user.email, user.password)
    cy.isLoggedIn(user.administrador, user.nome)
    cy.url().should('include', '/admin/home')
  })

  it('login normal user', () => {
    const user = data.normalUser

    cy.apiRecreateUser(user)
    cy.login(user.email, user.password)
    cy.isLoggedIn(user.administrador, user.nome)
    cy.url().should('include', '/home')
  })

  it('inexistent email', () => {
    const user = data.inexistentEmail

    cy.apiDeleteUser(user.email)
    cy.login(user.email, user.password)
    cy.alertError()
        .should('have.text', 'Email e/ou senha inválidos')
  })

  it('wrong password', () => {
    const user = data.create
    const userWrongPassword = data.wrongPassword

    cy.apiRecreateUser(user)
    cy.login(user.email, userWrongPassword.password)
    cy.alertError()
        .should('have.text', 'Email e/ou senha inválidos')
  })

  context('invalid fields', () => {
    it('empty email', () => {
      const user = data.emptyEmail

      cy.login(user.email, user.password)
      cy.alertError()
        .should('have.text', 'Email é obrigatório')
    })

    it('empty password', () => {
      const user = data.emptyPassword

      cy.login(user.email, user.password)
      cy.alertError()
        .should('have.text', 'Password é obrigatório')
    })

    it('all empty fields', () => {
      const fields = ['Email', 'Password']

      cy.visit('/login')
      cy.submitLogin()

      fields.forEach(function (field) {
        cy.alertError()
          .contains(field)
          .should('have.text', `${field} é obrigatório`)
      })
    })
  })
})