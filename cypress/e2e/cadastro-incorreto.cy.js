describe('Página de Cadastro', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
  })

  it('Preencher os campos doformulário incorretamente exibir mensganes ao usuário', () => { 
    cy.cadastro_incorreto();
  })
})