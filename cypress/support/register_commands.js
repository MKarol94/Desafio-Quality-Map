/// <reference types="Cypress"/>

Cypress.Commands.add('clicarRegister',()=>{
    cy.visit("https://demo.nopcommerce.com/")
    cy.get('.ico-register').click()
})

