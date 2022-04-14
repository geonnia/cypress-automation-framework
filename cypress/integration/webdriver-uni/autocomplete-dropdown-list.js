/// <reference types = "cypress" />

describe('Verify autocomplete dropdown list via webdriveruni', () => {
    it.only('Select specific value product  via selectdropdown lists', () => {
        cy.visit('https://webdriveruniversity.com')
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click()

        cy.get('#myInput').type('A')
        cy.get('#myInputautocomplete-list div').each(($el, index, $list) => {
            const products = $el.text()
            const productsToSelect = 'Avacado'
            
            if(products == productsToSelect){
                //$el.click()
                cy.trigger(click)
                cy.get('#submit-button').click()
                cy.url().should('include', productsToSelect)
            }
        }).then( () => {
            cy.get('#myInput').type('G')
            cy.get('#myInputautocomplete-list > div ').each(($el, index, $list) => {
                const products = $el.text()
                const productsToSelect = 'Grapes'

                if(products === productsToSelect){
                    //$el.click()
                    $el.trigger(click)
                    cy.get('#submit-button').click()
                    cy.url().should('include', productsToSelect)
                }
            })
        })
    });


    
})