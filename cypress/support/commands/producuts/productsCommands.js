Cypress.Commands.add('createProduct', (product) => {
  cy.goFormProduct()
  cy.fillFormProduct(product)
  cy.submitFormProduct()
})

Cypress.Commands.add('goFormProduct', () => {
  cy.get('[data-testid="cadastrar-produtos"]').click()

  cy.get('div.container-fluid > form > h1')
    .should('have.text', 'Cadastro de Produtos')
})

Cypress.Commands.add('fillFormProduct', (product) => {
  if (product.nome != '') { cy.get('#nome').type(product.nome) }
  if (product.preco != '') { cy.get('#price').type(product.preco) }
  if (product.descricao != '') { cy.get('#description').type(product.descricao) }
  if (product.quantidade != '') { cy.get('#quantity').type(product.quantidade) }
  if (product.imagem != undefined) { cy.get('#imagem').selectFile('cypress/fixtures/images/' + product.imagem) }
})

Cypress.Commands.add('submitFormProduct', () => {
  cy.get("button[data-testid='cadastarProdutos']").click()
})

Cypress.Commands.add('listRowtarget', (name) => {
  cy.contains('table.table-striped > tbody > tr', name)
})

Cypress.Commands.add('inProductList', (name) => {
  cy.get('div.jumbotron > h1', { timeout: 15000 })
    .should('have.text', 'Lista dos Produtos')
})