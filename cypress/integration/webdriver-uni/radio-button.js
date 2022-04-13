/// <reference types = "cypress" />

describe('Verify radio buttons via webdriveruni', () => {
    it('Check specific radio buttons', () => {
        cy.visit('https://webdriveruniversity.com')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()
        cy.get('#radio-buttons').as('radioGroup')
        cy.get('@radioGroup').find('[type = radio]').first().check()
        cy.get('@radioGroup').find('[type = radio]').eq(1).check()
       
    });

    it('Validate states of specific radio button', () => {
        cy.visit('https://webdriveruniversity.com')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()
        cy.get('#radio-buttons-selected-disabled').as('radioGroup')

        cy.get('[value = lettuce]').should('not.be.checked')
        cy.get('[value = cabbage]').should('be.disabled')
        cy.get('[value = pumpkin]').should('be.checked')

       
    });
    
})