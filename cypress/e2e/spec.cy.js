describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a', 'Cadastrar').click();
    cy.get('input[name="nome"]').type('Ana de Jesus');
    cy.get('input[name="email"]').type('anadejesus01@email.com');
    cy.get('input[name="password"]').type('Senha123');
    cy.get('input[name="confirm_password"]').type('Senha123');
    cy.contains('button', 'Cadastrar').click();

  })

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