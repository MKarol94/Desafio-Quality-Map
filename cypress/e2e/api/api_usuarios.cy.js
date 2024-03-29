/// <reference types="Cypress"/>

describe('API - Teste Funcional de Cadastro de Usuário', () => {
    it('Cadastro de usuário', () => {
        cy.request({
            method: 'POST',
            url: 'https://serverest.dev/usuarios',
            body: {
                "nome": "Carmela Silva",
                "email": "carmela@qualitymap.com",
                "password": "123asb",
                "administrador": "true"
              }
        }).then((response)=> {
                expect(response.status).to.equal(201)
                expect(response.body.message).to.equal('Cadastro realizado com sucesso')
            })
    });


});