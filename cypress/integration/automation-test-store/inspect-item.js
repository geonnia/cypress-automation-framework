///<reference types = 'cypress' />
describe('Inspect Automation Test Store Items using chain of commands', () =>{
    it('Click on the First Item using click', () => {
        cy.visit("https://automationteststore.com/");
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click();

    });
    it('Click on the item using text', () => {
        cy.visit("https://automationteststore.com/");
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click();
    });
    it.only('Click on the item using index', () => {
        cy.visit("https://automationteststore.com/");
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click();
    });
})