/// <reference types="Cypress"/>

describe('API - Edição de Cadastro de Usuários', () => {
    it('Edição com sucesso', () => {
        cy.request({
            method: 'PUT',
            url: 'https://serverest.dev/usuarios/0uxuPY0cbmQhpEz1',
            body: {
                "nome": "Angelo dos Santos",
                "email": "angelo@qualitymap.com",
                "password": "123qwe",
                "administrador": "true"
              }
        })
    });


});