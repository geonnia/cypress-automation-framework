/// <reference types = "cypress" />

describe('Interact with dropdown lists via webdriveruni', () => {
    it.only('Select specific values via select dropdown lists', () => {
        cy.visit('https://webdriveruniversity.com')
        cy.get('#dropdown-checkboxes-radio buttons').invoke('removeAttr', 'target').click()
        cy.get('#dropdown-menu-1').select('c#')
        cy.get('#dropdown-menu-2').select('testng').should('have.value', 'testng')
        cy.get('#dropdown-menu-3').select('jquery').contains('JQuery')

        cy.get('#dropdown-menu-2').select('maven').should('have.value', 'maven')
        cy.get('#dropdown-menu-2').select('Maven').contains('Maven')
       
    });


    
})