describe('Exercício 01', () => {
  it('Ver perts disponíveis pra adoção', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('.button').click();
  })

  it('Visite a página principal do AdoPet e teste os botões header', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('.header__home').click();
  })

  it('Visite a página de /login do Adopet', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
  })

  it('Visite a páginade /home do Adopet', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/home');
  })

  it('Visite a página de /home do AdoPet e clique no botão “Falar com o responsável”', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/home');
    cy.get('.header__message').click();
  })
})