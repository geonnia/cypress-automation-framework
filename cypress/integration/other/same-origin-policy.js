/// <reference types = "cypress" />

describe('Cypress web security', () => {
    it('VALIDATE VISITING TWO DIFFERENT DOMAINS ', () =>{
        // cy.visit('https://webdriveruniversity.com')
        // cy.visit('https://automationteststore.com/')
    });
    //worked with chromeWebSecurity: false
    it('VALIDATE VISITING TWO DIFFERENT DOMAINS via user actions', () =>{
        //cy.visit('https://automationteststore.com/')
        // cy.visit('https://webdriveruniversity.com')
        // cy.get('#automation-test-store').invoke('removeAttr', 'target').click()
    });
})