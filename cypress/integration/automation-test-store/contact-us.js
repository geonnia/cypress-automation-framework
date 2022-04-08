/// <reference types = "cypress" />

describe("Test Contact us form via Automation Test Form", () => {
    it("Should be able to submit a succesful submission via contact us form", ()=>{
        cy.visit("https://automationteststore.com/");
        cy.get('a[href$="contact"]').click().then(($a) => {
            cy.log($a.text())
        });
        cy.get('#ContactUsFrm_first_name').type("John");
        cy.get('#ContactUsFrm_email').type("johm@email.com");
        cy.get('#ContactUsFrm_enquiry').type("text");
        cy.get('button[title="Submit"]').click();
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!');

    });
})
