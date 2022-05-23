/// <reference types='cypress' />
// Above line needed as indicator for Cypress

// Import Cucumber prefix
import {Then, When } from 'cypress-cucumber-preprocessor/steps';

// Import additional layer for reusing command;
//import Common from '../common'

// KB Dashboard has a Search option

beforeEach(() => {
    cy.loginToAccount()

});

Then ('User would see the Search bar', () => {
    cy.get('input[placeholder="Search a keyword"]').should('exist')
    
});

When ('User types ex. "Sales"', () => {
    cy.get('input[placeholder="Search a keyword"]').type('sales')
    
});

Then ('KB link ex. "Endgame | Welcome to product-led sales" would be displayed', () => {
    cy.contains('Endgame | Welcome to product-led sales').scrollIntoView().should('exist')
    
});

// User searches KB links by letter
When ('User types ex. "e"', () => {
    cy.get('input[placeholder="Search a keyword"]').type('e')
    
});

Then ('User would see result example "tamagui.dev"', () => {
    cy.contains('tamagui.dev').scrollIntoView().should('exist')
    
});

//  User searches KB links by number
When ('User types ex. "20"', () => {
    cy.get('input[placeholder="Search a keyword"]').type('20')
    
});

Then ('Kb link ex. "20 Soft Skills for Better Engineering Leaders | Productboard" would be seen', () => {
    cy.contains('20 Soft Skills for Better Engineering Leaders | Productboard').should('exist')
    
    
});

//   Selected KB link should redirect to the site
When ('User clicks on a link ex. "https://www.designbetter.co/design-leadership-handbook/becoming-a-design-leader"', () => {
    cy.get('body > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(3) > a:nth-child(1)')
    .click()
    
});

Then ('Kb link ex. "20 Soft Skills for Better Engineering Leaders | Productboard" would be seen', () => {
    cy.visit('https://www.designbetter.co/design-leadership-handbook/becoming-a-design-leader')
    
    
});

// User searches a keyword But with no result
When ('User types ex. "demotivate"', () => {
    cy.get('input[placeholder="Search a keyword"]').type('demotivates')
});

Then ('It would return an empty page', () => {
    cy.get('body').should('have.value', '')

    
})

// Search field has an empty default value
When ('User inspects the Search field', () => {
    cy.get('input[placeholder="Search a keyword"]').should('exist')
});

Then ('User would see Search field having empty value', () => {
    cy.get('input[placeholder="Search a keyword"]').should('have.value', '')

    
})