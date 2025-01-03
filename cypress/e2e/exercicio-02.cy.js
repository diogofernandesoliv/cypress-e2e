describe('Exercício 02', () => {
    beforeEach(() => {
      cy.visit('https://adopet-frontend-cypress.vercel.app/');
    })
    
    it('Visite a página principal do AdoPet e verifique se o título "AdoPet" está presente', () => {
      cy.title().should('eq','AdoPet');
    })

    it('Visite a página principal do AdoPet e verifique se o texto "Quem ama adota!" está presente', () => {
      cy.contains('.footer > p', 'Quem ama adota!').should('be.visible');
    })

    it('Visite a página principal do AdoPet e verifique se o texto "Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!" está presente', () => {
      cy.contains('.initial > p', 'Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible');      
    })

    it('Login com um fluxo diferente. Visite a página principal do AdoPet, clique no botão de ícone de mensagem no header e escreva o nomee senha válidos', () => {
      cy.get('.header__message').click();
      cy.get('[data-test="input-loginEmail"]').type('ana@email.com');
      cy.get('[data-test="input-loginPassword"]').type('Senha123');    
      cy.get('[data-test="submit-button"]').click();
    })
})