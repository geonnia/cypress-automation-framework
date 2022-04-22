/// <reference types = "cypress" />

describe("Test Contact us form via Automation Test Form", () => {
    before(() => {
        cy.fixture('userDetails').as('user')
    });
    it("Should be able to submit a successful submission via contact us form", ()=>{
        cy.visit("https://automationteststore.com/");
        cy.get('a[href$="contact"]').click().then(($a) => {
            cy.log($a.text())
        });
        //alternative using of fixture
        cy.get('@user').then((user) => {
            cy.get('#ContactUsFrm_first_name').type(user.first_name);
            cy.get('#ContactUsFrm_email').type(user.email);
        })

        cy.get('#ContactUsFrm_enquiry').type("text");
        cy.get('button[title="Submit"]').click();
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!');

    });
})
