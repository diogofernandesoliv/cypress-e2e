describe('Página de Login', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="login-button"]').click();        
  })

  it('Deve preencher os campos do login incorretamente e validar as mensagens de erro da página', () => {     
    cy.get('[data-test="input-loginEmail"]').type('email.com');
    cy.get('[data-test="input-loginPassword"]').type('senhaErrada');    
    cy.get('[data-test="submit-button"]').click();
    cy.contains('Por favor, verifique o email digitado').should('be.visible');
    cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible');
  })
})