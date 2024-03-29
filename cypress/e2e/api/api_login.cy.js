/// <reference types="Cypress"/>

describe('API - Teste Funcional de Login', () => {
    it('Login com sucesso', () => {
        cy.request({
            method: 'POST', 
            url: 'https://serverest.dev/login',
            body: {
                    "email": "fulano@qa.com",
                    "password": "teste"     
                 }
        }).then((response)=> {
                expect(response.status).to.equal(200)
                expect(response.body.message).to.equal('Login realizado com sucesso')
            })
    });


});


