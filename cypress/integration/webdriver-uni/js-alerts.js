/// <reference types = "cypress" />

describe('Handle js alerts', () => {
    it('Confirm js alert contains the correct text', () => {
        cy.visit('https://webdriveruniversity.com')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click()
        cy.get('#button1').click()

        cy.on('window:alert', (str) => {
            expect(str).to.equal('I am an alert box!')
        })

    });
    it('Validate js confirm alert box works correcty when clicking ok', () => {
        cy.visit('https://webdriveruniversity.com')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click()
        cy.get('#button4').click()

        cy.on('window:confirm', (str) => {
            return true;
        })
        cy.get('#confirm-alert-text').contains('You pressed OK!')
    });

    it('Validate js confirm alert box works correcty when clicking cancel', () => {
        cy.visit('https://webdriveruniversity.com')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click()
        cy.get('#button4').click()

        cy.on('window:confirm', (str) => {
            return false;
        })
        cy.get('#confirm-alert-text').contains('You pressed Cancel!')
    });
    it('Validate js confirm alert box Using a stub', () => {
        cy.visit('https://webdriveruniversity.com')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click()
        cy.get('#button4').click()

        cy.on('window:confirm', (str) => {
            return false;
        })
        cy.get('#confirm-alert-text').contains('You pressed Cancel!')
    })

})