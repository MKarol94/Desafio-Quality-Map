/// <reference types="Cypress"/>

describe('API - Deletar Usuários', () => {
    it('Remoção com sucesso', () => {
        cy.request({
            method: 'DELETE',
            url: 'https://serverest.dev/usuarios/w0Wc0gehWGGnUvRb',
            
            
        }).then((response)=> {
            expect(response.status).to.equal(200)
            expect(response.body.message).to.equal('Registro excluído com sucesso')
        })
    });


});