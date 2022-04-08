/// <reference types = "cypress" />

describe('Alias and invoke', () => {
    it('Validate a specific hair care product', () => {
        cy.visit('https://automationteststore.com/')
        cy.get('[href *= "product/category&path"]').contains('Hair Care')

        cy.get('.fixed_wrapper  .prdocutname').eq(0).invoke('text').as('productThumbnail')
        cy.get('.info_links_footer [href *= "content"]').eq(0).invoke('text').as('footerLinkText')
    });

    it('challendge', () => {
        cy.visit('https://automationteststore.com/')
        // cy.get('.thumbnail').should('have.length', 16)
        // cy.get('a.productcart').should('have.attr', 'title', 'Add to Cart')
        cy.get('.thumbnail').as('productThumbnail')
        cy.get('@productThumbnail').should('have.length', 16)
        cy.get('@productThumbnail').find('a.productcart').invoke('attr', 'title').should('include', 'Add to Cart')
    });
    it.only('Calculate total of normal and sale products', () => {
        cy.visit('https://automationteststore.com/')
        cy.get('.thumbnail').as('productThumbnail')
        // cy.get('@productThumbnail').find('.oneprice').each(($el, index, $list) => {
        //     cy.log($el.text())
        // });
        cy.get('@productThumbnail').find('.oneprice').invoke('text').as('itemPrice')
        cy.get('@productThumbnail').find('.pricenew').invoke('text').as('saleItemPrice')

        let itemsTotal = 0;
        cy.get('@itemPrice').then($linkText => {
            let itemPrice = $linkText.split('$')
            //cy.log($linkText);
            let itemPriceTotal = 0;
            for(let i = 0; i < itemPrice.length; i++){
                cy.log(itemPrice[i])
                itemPriceTotal += Number(itemPrice[i]);
            }
            itemsTotal += itemPriceTotal
            cy.log(itemPriceTotal)
        })

        cy.get('@saleItemPrice').then($linkText => {
            let saleItemPriceTotal = 0;
            let saleItemPrice = $linkText.split('$')
            for(let i = 0; i < saleItemPrice.length; i++){
                cy.log(saleItemPrice[i])
                saleItemPriceTotal += Number(saleItemPrice[i]);
            }
            itemsTotal += saleItemPriceTotal
            cy.log(saleItemPriceTotal);
        })
        .then(() => {
            cy.log('The total price of all products ' + itemsTotal)
            expect(itemsTotal).to.equal(648.5)
        })
    })
})