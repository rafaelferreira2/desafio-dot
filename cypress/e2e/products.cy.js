const products = require('../fixtures/products.json')
const users = require('../fixtures/users.json')
const user = users.adminToken

describe('Products', () => {
  beforeEach(() => {
    cy.apiRecreateUser(user)
    cy.login(user.email, user.password)
    cy.isLoggedIn(user.administrador, user.nome)
  })

  it('register a new product', () => {
    const product = products.completed

    cy.apiDeleteProduct(product.nome)
    cy.createProduct(product)

    cy.inProductList()
    cy.listRowtarget(product.nome)
      .within(() => {
        for (let field in product) {
          cy.contains(product[field])
        }
      })
  })

  it('register a new product whithou image', () => {
    const product = products.emptyImage
    delete product.imagem

    cy.apiDeleteProduct(product.nome)
    cy.createProduct(product)

    cy.inProductList()
    cy.listRowtarget(product.nome)
      .within(() => {
        for (let field in product) {
          cy.get('td').contains(product[field])
        }
      })
  })

  it('duplicated product', () => {
    const product = products.duplicate
    cy.apiRecreateProduct(product)

    cy.createProduct(product)
    cy.alertError()
      .should('have.text', 'Já existe produto com esse nome')
  })

  context('required filds', () => {
    it('empty name', () => {
      const product = products.emptyName

      cy.createProduct(product)
      cy.alertError()
        .should('have.text', 'Nome é obrigatório')
    })

    it('empty price', () => {
      const product = products.emptyPrice

      cy.createProduct(product)
      cy.alertError()
        .should('have.text', 'Preco é obrigatório')
    })

    it('empty description', () => {
      const product = products.emptyDescription

      cy.createProduct(product)
      cy.alertError()
        .should('have.text', 'Descricao é obrigatório')
    })

    it('empty quantity', () => {
      const product = products.emptyQuantity

      cy.createProduct(product)
      cy.alertError()
        .should('have.text', 'Quantidade é obrigatório')
    })

    it('all required fields', () => {
      const fields = ['Nome', 'Preco', 'Descricao', 'Quantidade']

      cy.goFormProduct()
      cy.submitFormProduct()
      fields.forEach(function (field) {
        cy.alertError()
          .contains(field)
          .should('have.text', `${field} é obrigatório`)
      })
    })
  })
})