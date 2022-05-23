/// <reference types='cypress' />
// Above line needed as indicator for Cypress

// Import Cucumber prefix
import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';

// Import additional layer for reusing command;
import Common from '../common'



// User logs in with valid email address and correct password 
Given('User is on the KB Dashboard Login page', () => {
    Common.goToLoginPage();
});

When('User enters a valid email address', () => {
    cy.loginWithEmail('hovsqadepartment@gmail.com')

});
And('User clicks the "Continue" button', () => {
    cy.clickContinue()

});

And('User enters correct password', () => {
    cy.loginWithPassword('Password_123')

});
And('User clicks the "Login" button', () => {
    cy.clickLogin()

});
Then('User should be able to login successfully and is redirected to the Dashboard', () => {
    cy.gotoDashboard()

});

// User inputs invalid email

When('User inputs invalid email', () => {
    cy.clearCookies()
    Common.goToLoginPage()
    cy.loginWithEmail('invalidemail@.com')

});

Then('Message "Please enter a valid email address." appears', () => {
    cy.get('#email-feedback').contains('Please enter a valid email address.').should('be.visible')

});

// User clears out the email field

When('User deletes the text in the email field', () => {
    cy.clearCookies()
    Common.goToLoginPage()
    cy.get('#email').type('abcdefgh1234').clear()


});

Then('Message "Email is required." appears', () => {
    cy.get('#email-feedback').contains('Email is required.').should('be.visible')


});

// User inputs valid email but invalid password

When('User inputs "hovsqadepartment@gmail.com" for the email', () => {
    cy.clearCookies()
    Common.goToLoginPage()
    cy.loginWithEmail('hovsqadepartment@gmail.com')


});

And('Inputs "Password" for the password', () => {
    cy.clickContinue()
    cy.loginWithPassword('Password')


});

Then('Message "Invalid email or password." appears', () => {
    cy.clickLogin()
    cy.contains('Invalid email or password.').should('be.visible')


});

// User clears out the password field
When('User clears out the password field', () => {
    cy.clearCookies()
    Common.goToLoginPage()
    cy.loginWithEmail('hovsqadepartment@gmail.com')
    cy.clickContinue()
    cy.get('#password').type('password').clear()


});

Then('Message "Password is required." appears', () => {
    cy.get('#password-feedback').contains('Password is required.').should('be.visible')


});

// User logs out successfully

Given('User is already on the KB Dashboard', () => {
    cy.clearCookies()
    cy.loginToAccount()


});

When('User clicks on the Log out button', () => {
    cy.get('#menu-button-Logout').click()

});

When('User would be redirected to the Login page', () => {
    cy.url().should('eq', 'https://gvv9dp5nt676r.a9ni7d1ff3m0e.ap-southeast-1.cs.amazonlightsail.com/login')

});

// User inputs an unregistered email

When('User inputs unregistered email', () => {
    cy.clearCookies()
    Common.goToLoginPage()
    cy.loginWithEmail('unregistered_email@gmail.com')

});

And ('User clicks the Continue button', () => {
    cy.clickContinue()

});

Then ('Message "Email address not found." would pop up', () => {
    cy.get('#chakra-toast-manager-top').contains('Email address not found.').should('be.visible')

});



