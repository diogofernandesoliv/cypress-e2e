describe('Página de Login', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="login-button"]').click();        
  })

  it('Deve preencher os campos do login incorretamente e validar as mensagens de erro da página', () => {     
      cy.login_incorreto('email.com','senhaErrada');    
    })
})