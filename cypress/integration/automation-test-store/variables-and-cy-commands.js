/// <reference types = "cypress" />

describe('Verify variables commands, cypress commands, jQuery commands', () => {
    it('Navigating to specific product pages', () => {
        cy.visit('https://automationteststore.com/')
        cy.get('[href *= "path"]').contains('Makeup').click();
        cy.get('h1 .maintext').then(($header) => {
            const headerText = $header.text();
            expect(headerText).is.eq('Makeup');
        });
        
        //cy.get('[href *= "path"]').contains('Skincare');


    });
    it.only('Validate property of contact us page', () => {
        cy.visit('https://automationteststore.com/index.php?rt=content/contact')

        cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name')
    });
})