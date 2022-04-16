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
    it('Should be able to perform double click', () => {
        cy.visit('https://webdriveruniversity.com')
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click()
        cy.get('#double-click').dblclick()  
    });
    it.only('Should be able to hold down the left mouse click button on a given element', () => {
        cy.visit('https://webdriveruniversity.com')
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click()
        cy.get('#click-box').trigger('mousedown', {which: 1}).then(($element) => {
            expect($element).to.have.css('background-color', 'rgb(0, 255, 0)')
        })  
    });


    
})