describe('Exercício 03', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
    })

    it('Verifica mensagem de texto', () => {
        cy.get('.header__message').click();
        cy.login('ana@email.com', 'Senha123');
    })

    it('Verifica se asimagens dos pets aparecem', () => {
        cy.get('.button').click();
        cy.get('.cards').should('be.visible');
    })
})