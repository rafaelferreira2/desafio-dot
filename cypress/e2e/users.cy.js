const data = require('../fixtures/users.json')

describe('user registration', () => {

  it('register a admin new user', () => {
    const user = data.adminUser

    cy.apiDeleteUser(user.email)
    cy.createUser(user)
    cy.successRegister()
      .should('have.text', 'Cadastro realizado com sucesso')
  })

  it('register a normal user', () => {
    const user = data.normalUser

    cy.apiDeleteUser(user.email)
    cy.createUser(user)
    cy.successRegister()
      .should('have.text', 'Cadastro realizado com sucesso')
  })

  it('duplicated email', () => {
    const user = data.duplicate

    cy.apiRecreateUser(user)

    cy.createUser(user)
    cy.alertError()
      .should('have.text', 'Este email já está sendo usado')
  })

  context('required fields', () => {
    it('empty name', () => {
      const user = data.emptyName

      cy.createUser(user)
      cy.alertError()
        .should('have.text', 'Nome é obrigatório')
    })

    it('empty email', () => {
      const user = data.emptyEmail

      cy.createUser(user)
      cy.alertError()
        .should('have.text', 'Email é obrigatório')
    })

    it('empty password', () => {
      const user = data.emptyPassword

      cy.createUser(user)
      cy.alertError()
        .should('have.text', 'Password é obrigatório')
    })

    it('all required fields', () => {
      const fields = ['Nome', 'Email', 'Password']

      cy.visitCreateUser()
      cy.submitUser()

      fields.forEach(function (field) {
        cy.alertError()
          .contains(field)
          .should('have.text', `${field} é obrigatório`)
      })
    })
  })
})

