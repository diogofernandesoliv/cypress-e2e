describe('Exercício 04', () => {

    it('Nome do perfil', () => {
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/adotante/perfil/11643cd6-7112-415b-95d2-07904b0d1a1c',
            headers: Cypress.env()
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('perfil')
            expect(res.body.perfil.nome).to.be.equal('Ana de Jesus')
        })
    })

    it('Consegue deletar todas as tarefas', () => {
        cy.visit('https://example.cypress.io/todo#/');
        cy.get('[for="toggle-all"]').click();      
        cy.contains('Clear completed').click();
        cy.get('.todo-list li')
          .should('have.length', 1)
          .should('not.have.text', 'Pay electric bsill');
         cy.contains('Clear completed').should('not.exist');
      })

      it('Para filtrar tarefas completas', () => {
        cy.visit('https://example.cypress.io/todo#/');
        cy.contains('Completed').click();
       cy.get('.todo-list li')
         .should('have.length', 0)
       cy.contains('Walk the dog').should('not.exist');
     })
})