/// <reference types = "cypress" />

describe('Tesst mouse actions', () => {
    it('Scroll element into view', () => {
        cy.visit('https://webdriveruniversity.com')
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click()
    });
    it('Should be able drag and drop a draggable item', () => {
        cy.visit('https://webdriveruniversity.com')
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click()
        cy.get('#draggable').trigger('mousedown', {which: 1})
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force: true})
       
    });


    
})