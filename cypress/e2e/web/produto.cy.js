/// <reference types='cypress' />

describe('Funcionalidade: Produto', () => {
    
    beforeEach(() => {
        cy.visit('')
        //cy.limparCarrinho()

    });
    
    
    it('Deve visitar a página do produto pelo nome', () => {
        cy.contains('Produto 6').click()
        cy.url().should('include', 'product.html')
    });

    it('Deve visitar a página do produto pela imagem', () => {
        cy.get('.card-img-top').eq(2).click()
        cy.url().should('include', 'product.html')
    });

    it('Deve adicionar ao carrinho pela página de produto', () => {
        cy.get('.card-img-top').last().click()
        cy.get('#product-quantity').clear().type(10)
        cy.get('#add-to-cart').click()
        cy.get('#cart-count').should('have.text', '10')
    });

});