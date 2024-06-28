/// <reference types='cypress' />
import checkoutPage from "../../support/pages/checkout-page";
import { faker } from "@faker-js/faker";

describe('Funcionalidade: Checkout', () => {
    beforeEach(() => {
        checkoutPage.visitarUrlCheckout()
    });

    it('Deve fazer checkout com sucesso com usuario comum', () => {
        checkoutPage.preencherCheckout('Vinny', 'Felipe', 'Rua sem saida', '404', '12345678', '1234567890', 'vinny@teste.com')
        cy.get('h4').should('contain', 'Obrigado pelo seu pedido')
    });

    it('Deve fazer checkout com sucesso e criar conta do usuário com email dinamico', () => {
        var email = Date.now() + '@teste.com'
        checkoutPage.preencherCheckoutCriarConta('Vinny', 'Felipe', 'Rua sem saida', '404', '12345678', '1234567890', email, 'Teste123#', 'Teste123#')
        cy.get('h4').should('contain', 'Obrigado pelo seu pedido')
    });

    it.only('Deve fazer checkout com sucesso e criar conta do usuário com email faker', () => {
        checkoutPage.preencherCheckoutCriarConta(faker.person.firstName(), faker.person.lastName(), 'Rua sem saida', '404', '12345678', '1234567890', faker.internet.email(), 'Teste123#', 'Teste123#')
        cy.get('h4').should('contain', 'Obrigado pelo seu pedido')
    });
});