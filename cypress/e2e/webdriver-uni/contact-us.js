/ <reference types = "Cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
    it("Should be able to submit a succesful submission via contact us form", () => {
        cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
        cy.document().should('have.property','charset').and('eq','UTF-8')
        cy.title().should('include', 'WebDriver | Contact Us')
        cy.url().should('include', 'contactus');
        //cy.get('#contact-us').click({force: true})
        cy.get('[name="first_name"]').type("Joe")
        cy.get('[name="last_name"]').type("Biden")
        cy.get('[name="email"]').type("Joe_Biden@gmail.com")
        cy.get('textarea.feedback-input').type("I am a happy path comment")
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')


    });

    it("Should not be able to submit a succesful submission via contact us form as all fieds are required", () => {
        cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type("Moe")
        cy.get('[name="last_name"]').type("Biden")
        cy.get('textarea.feedback-input').type("I am a sad path comment")
        cy.get('[type="submit"]').click()
        cy.get('body').contains('Error: all fields are required')
    });
})

// describe('Test login page', () => {
//     it('User should be able to login with valid creds', () => {
//         cy.visit("url")
//         cy.get('#username').type("Joe Biden")
//         cy.get('#password').type("a1b1c1d1")
//         cy.get('#button').click()
//         cy.url().should('include','/dashboard')
//     });
// });

// describe('', ()=>{
//     it("xyz", () =>{

//     })
// })

// pm.test("Response code is 200", function() {
//     pm.response.to.have.status(200);
// })


// var expectedUser = {
//     name: "John",
//     id: 201993,
//     age: 27
// }

// var responseData = pm.response.json()

// pm.test("Username is correct", function () {
//     pm.expect(responseData.name).to.eql(expectedUser.name);
// })

// pm.test("id is correct", function () {
//     pm.expect(responseData.id).to.eql(expectedUser.id);
// })