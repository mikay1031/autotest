/// <reference types='cypress' />
// Above line needed as indicator for Cypress

// Import Cucumber prefix
//import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';

class Common {

    // Function need to be called by Step definition files
    static goToLoginPage() {
        cy.visit(Cypress.env('baseUrl'))
    }

    static inputEmail(email:string) {
        cy.get('#email').type(email)

    }
    // static loginToAccount() {

    //     // User logs in with valid email address and correct password 
    //     Given('User is on the KB Dashboard Login page', () => {
    //         cy.clearCookies()
    //         cy.visit(Cypress.env('baseUrl') +'/login')
    //     });

    //     When('User enters a valid email address', () => {
    //         cy.loginWithEmail('hovsqadepartment@gmail.com')

    //     });
    //     And('User clicks the "Continue" button', () => {
    //         cy.clickContinue()

    //     });

    //     And('User enters correct password', () => {
    //         cy.loginWithPassword('Password_123')

    //     });
    //     And('User clicks the "Login" button', () => {
    //         cy.clickLogin()

    //     });
    //     Then('User should be able to login successfully and is redirected to the Dashboard', () => {
    //         cy.gotoDashboard()

    //     }); 

    //  return 'loginToAccount'

    }


// Export as Module for re-usability
export default Common