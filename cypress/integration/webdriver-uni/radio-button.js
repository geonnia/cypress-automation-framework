/// <reference types = "cypress" />

describe('Verify radio buttons via webdriveruni', () => {
    it('Check specific radio buttons', () => {
        cy.visit('https://webdriveruniversity.com')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()
        cy.get('#radio-buttons').as('radioGroup')
       
    });
    
})