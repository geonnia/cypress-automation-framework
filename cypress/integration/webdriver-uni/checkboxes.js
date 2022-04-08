/// <reference types = "cypress" />

describe('Verify checkboxes via webdriveruni', () => {
    it('Check and validate checkbox', () => {
        cy.visit('https://webdriveruniversity.com')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()
        cy.get('#checkboxes').as('checkboxGroup')
        //cy.get('@checkboxGroup').find('[value = option-1]').check()
        //cy.get('@checkboxGroup').find('[value = option-1]').check().should('be.checked')

        cy.get('@checkboxGroup').find('[value = option-1]').as('checkbox-1')
        //cy.get('@checkbox-1').check()
        cy.get('@checkbox-1').check().should('be.checked')
    });
    it('Uncheck and validate checkbox', () => {
        cy.visit('https://webdriveruniversity.com')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()
        cy.get('#checkboxes').as('checkboxGroup')
        cy.get('@checkboxGroup').find('[value = option-3]').as('checkbox-3')
        cy.get('@checkbox-3').uncheck().should('not.be.checked')
    });

    it('Check multiple checkbox', () => {
        cy.visit('https://webdriveruniversity.com')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()
        cy.get('#checkboxes').find('[type = checkbox]').check(["option-1", "option-2", "option-3", "option-4"]).should("be.checked")

        // cy.get('@checkbox').each(($el, index, $list) => {
        //     cy.log($el);
        //     cy.wrap($el).check();
        // })   
    });


})