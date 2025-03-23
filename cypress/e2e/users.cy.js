const data = require('../fixtures/users.json')

describe('user registration', () => {

  it('new user', () => {
    const user = data.create

    cy.getUser(user.email)
      .then(response => {
        expect(response.status).to.eq(200)
        if (response.body.quantidade > 0) {
          cy.deleteUser(response.body.usuarios[0]._id)
        }
      })

    cy.createUser(user)
    cy.successUser()
      .should('contain', 'Cadastro realizado com sucesso')
  })

  it('duplicated email', () => {
    const user = data.duplicate

    cy.getUser(user.email)
      .then(response => {
        expect(response.status).to.eq(200)
        if (response.body.quantidade == 0) {
          cy.postUser(user)
            .then(response => {
              expect(response.status).to.eq(201)
            })
        }
      })

    cy.createUser(user)
  })

  it('all required fields', () => {

    const fields = ['Nome', 'Email', 'Password']

    cy.visitCreateUser()
    cy.submitUser()

    fields.forEach(function (field) {
      cy.userRequiredField()
        .contains(field)
        .should('have.text', `${field} é obrigatório`)
    })
  })

  it('empty name', () => {
    const user = data.empty_name

    cy.createUser(user)
    cy.userRequiredField()
      .should('have.text', 'Nome é obrigatório')
  })

  it('empty email', () => {
    const user = data.empty_email

    cy.createUser(user)
    cy.userRequiredField()
      .should('have.text', 'Email é obrigatório')
  })

  it('empty password', () => {
    const user = data.empty_password

    cy.createUser(user)
    cy.userRequiredField()
      .should('have.text', 'Password é obrigatório')
  })
})

