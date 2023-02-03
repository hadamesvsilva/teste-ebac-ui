/// <reference types="cypress" />

beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/' )
});

afterEach(() => {
    cy.screenshot()
});

context ('Funcionalidade Login', () =>{
    it('Deve fazer login com sucesso', () => {
    
        cy.get('#username').type ('aluno_ebac@teste.com')
        cy.get('#password').type ('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain' , 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, aluno_ebac (não é aluno_ebac? Sair)')
    })

    it('Deve exibir uma mensagem de erro ao inserir usuario invalido', () => {
        cy.get('#username').type ('ebactestecom')
        cy.get('#password').type ('teste@teste')
        cy.get('.woocommerce-form > .button').click()
        
        cy.get('.woocommerce-error > li').should('contain', ' não está cadastrado neste site. Se você não está certo de seu nome de usuário, experimente o endereço de e-mail.')
    })

    it('Deve exibir uma mensagem de erro ao inserir senha invalida', () => {
        cy.get('#username').type ('aluno_ebac@teste.com')
        cy.get('#password').type ('teste@teste')
        cy.get('.woocommerce-form > .button').click()
        
        cy.get('.woocommerce-error > li').should('contain', 'Erro: a senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')
    })
})