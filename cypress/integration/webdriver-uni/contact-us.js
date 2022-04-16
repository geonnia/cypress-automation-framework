/// <reference types="cypress" />
describe("Test Contact Us Form via WebdriverUni", () => {
    before (() => {
        cy.fixture('example').then( data => {
           // this.data = data
           globalThis.data = data
        })
    })
    it("Should be able to submit succesfull submission via contact us form", () =>{
        //cypress code
        //cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit('https://webdriveruniversity.com')
        cy.get('#contact-us').invoke('removeAttr', 'target').click();
        cy.document().should('have.a.property', 'charset').and('eq', 'UTF-8');
        cy.url().should('include', 'contactus');
        cy.title().should('include', 'WebDriver | Contact Us');
        cy.get('[name = "first_name"]').type(data.first_name);
        cy.get('[name = "last_name"]').type(data.last_name);
        cy.get('[name="email"]').type(data.email);
        cy.get('textarea.feedback-input').type("Some message");
        cy.get('[type="submit"]').click();
        cy.get('#contact_reply  h1').should('have.text', 'Thank You for your Message!');
    });
    it("Should not be able to submit succesfull submission via contact us form as all fields are required", () =>{
        //cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
        cy.visit('https://webdriveruniversity.com');
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force: true});
        cy.get('[name = "first_name"]').type(data.first_name);
        cy.get('[name = "last_name"]').type(data.last_name);
        cy.get('textarea.feedback-input').type("Give me apple");
        cy.get('[type="submit"]').click();
        cy.get('body').contains('Error: all fields are required');
        
    });
})