/// <reference types = "cypress" />


describe("Inspect Automation Test Store items using chaing of commands", () => {
    it("Click on the first item using the item header", () => {
        cy.visit("https://automationteststore.com/")
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click()
       
    });
    it("Click on the first item using the item text", () => {
        cy.visit("https://automationteststore.com/")
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click()
       
    });
    it.only("Click on the first item using the index", () => {
        cy.visit("https://automationteststore.com/")
        cy.get('.fixed_wrapper').find('.prdocutname').eq(1).click()
       
    });


})




