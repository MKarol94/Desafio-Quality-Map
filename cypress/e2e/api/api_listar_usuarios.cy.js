/// <reference types="Cypress"/>

describe('API - Listar Usuários Cadastrados', () => {
    it('Listar com sucesso', () => {
        cy.request({
            method:'GET',
            url: 'https://serverest.dev/usuarios',
             
        }).then((response)=> {
                expect(response.status).to.equal(200)
                
            })
    });


});