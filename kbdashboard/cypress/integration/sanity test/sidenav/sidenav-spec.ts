/// <reference types='cypress' />
// Above line needed as indicator for Cypress

// Import Cucumber prefix
import { When, Then } from 'cypress-cucumber-preprocessor/steps';

beforeEach(() => {
    cy.loginToAccount()

});

after(() => {
    cy.logoutFromAccount()
});


// User sees the Sidenav Categories
When('User navigates to Dashboard', () => {
    cy.visit('https://gvv9dp5nt676r.a9ni7d1ff3m0e.ap-southeast-1.cs.amazonlightsail.com/')


});

Then('User would see the Categories in the Sidenav', () => {
    cy.viewCategories()

});

//User views the Install KB Extension button
When('User inspects the Sidenav', () => {
    cy.wait(2000)
    cy.get('.chakra-text.css-gpycir').should('be.visible')

});

Then('User would see the Install KB Extension button', () => {
    cy.get('body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > button:nth-child(1)').should('be.visible')


});

//User selects Backend category
When('User selects Backend category in Sidenav', () => {
    cy.clickBackend()

});

Then('User would see "Missing HTTP Security Headers - Bug Bounty Tips" shared link', () => {
    cy.contains('Missing HTTP Security Headers - Bug Bounty Tips').scrollIntoView()
        .should('exist')
});

//User selects Creators category
When('User selects Creators category in Sidenav', () => {
    cy.clickCreators()

});

Then('User would see "Afterparty" shared link', () => {
    cy.contains('Afterparty').scrollIntoView()
        .should('exist')
});

//User selects Cryptocurrency category
When('User selects Cryptocurrency category in Sidenav', () => {
    cy.clickCryptocurrency()

});

Then('User would see "Blockchain & Crypto 101: Guide for Beginners | Binance Academy" shared link', () => {
    cy.contains('Blockchain & Crypto 101: Guide for Beginners | Binance Academy').scrollIntoView()
        .should('exist')
});

//User selects Design category
When('User selects Design category in Sidenav', () => {
    cy.clickDesign()

});

Then('User would see "How to improve your design when user testing is not viable" shared link', () => {
    cy.contains('How to improve your design when user testing is not viable').scrollIntoView()
        .should('exist')
});

//User selects DevOps category
When('User selects DevOps category in Sidenav', () => {
    cy.clickDevOps()

});

Then('User would see "Terraform AWS modules" shared link', () => {
    cy.contains('Terraform AWS modules').scrollIntoView()
        .should('exist')
});

//User selects Engineering category
When('User selects Engineering category in Sidenav', () => {
    cy.clickEngineering()

});

Then('User would see "Activation Functions in Neural Networks" shared link', () => {
    cy.contains('Activation Functions in Neural Networks').scrollIntoView()
        .should('exist')
});

//User selects Finance category
When('User selects Finance category in Sidenav', () => {
    cy.clickFinance()

});

Then('User would see "How Ramp’s early adoption of stablecoins increased our Corporate Treasury returns" shared link', () => {
    cy.contains('How Ramp’s early adoption of stablecoins increased our Corporate Treasury returns').scrollIntoView()
        .should('exist')
});

//User selects Frontend category
When('User selects Frontend category in Sidenav', () => {
    cy.clickFrontend()

});

Then('User would see "This will really add value to efficiency when doing FE dev." shared link', () => {
    cy.contains('This will really add value to efficiency when doing FE dev.').scrollIntoView()
        .should('exist')
});

//User selects Growth category
When('User selects Growth category in Sidenav', () => {
    cy.clickGrowth()

});

Then('User would see "The Growth Mindset - What is Growth Mindset - Mindset Works" shared link', () => {
    cy.contains('The Growth Mindset - What is Growth Mindset - Mindset Works').scrollIntoView()
        .should('exist')
});

//User selects Hiring category
When('User selects Hiring category in Sidenav', () => {
    cy.clickHiring()

});

Then('User would see "Startup Engineering Hiring Anti-Patterns" shared link', () => {
    cy.contains('Startup Engineering Hiring Anti-Patterns').scrollIntoView()
        .should('exist')
});

//User selects Leadership category
When('User selects Leadership category in Sidenav', () => {
    cy.clickLeadership()

});

Then('User would see "20 Soft Skills for Better Engineering Leaders | Productboard" shared link', () => {
    cy.contains('20 Soft Skills for Better Engineering Leaders | Productboard').scrollIntoView()
        .should('exist')
});

//User selects Management category
When('User selects Management category in Sidenav', () => {
    cy.clickManagement()

});

Then('User would see "Managers should ask for feedback" shared link', () => {
    cy.contains('Managers should ask for feedback').scrollIntoView()
        .should('exist')
});

//User selects Marketing category
When('User selects Marketing category in Sidenav', () => {
    cy.clickMarketing()

});

Then('User would see "4 Email Marketing Strategies for Your App Launch - Messapps" shared link', () => {
    cy.contains('4 Email Marketing Strategies for Your App Launch - Messapps').scrollIntoView()
        .should('exist')
});

//User selects Others category
When('User selects Others category in Sidenav', () => {
    cy.clickOthers()

});

Then('User would see "Advanced Remix" shared link', () => {
    cy.contains('Advanced Remix').scrollIntoView()
        .should('exist')
});

//User selects Product Management category
When('User selects Product Management category in Sidenav', () => {
    cy.clickProductManagement()

});

Then('User would see "How to develop product sense" shared link', () => {
    cy.contains('How to develop product sense').scrollIntoView()
        .should('exist')
});

//User selects Productivity category
When('User selects Productivity category in Sidenav', () => {
    cy.clickProductivity()

});

Then('User would see "9 Habits Of Productive People" shared link', () => {
    cy.contains('9 Habits Of Productive People').scrollIntoView()
        .should('exist')
});

//User selects Psychology category
When('User selects Psychology category in Sidenav', () => {
    cy.clickPsychology()

});

Then('User would see "Positive Thinking Mind" shared link', () => {
    cy.contains('Positive Thinking Mind').scrollIntoView()
        .should('exist')
});

//User selects Quality Assurance category
When('User selects Quality Assurance category in Sidenav', () => {
    cy.clickQualityAssurance()

});

Then('User would see "QA trends in 2022 to prioritize" shared link', () => {
    cy.contains('QA trends in 2022 to prioritize').scrollIntoView()
        .should('exist')
});

//User selects Remote category
When('User selects Remote category in Sidenav', () => {
    cy.clickRemote()

});

Then('User would see "The art of remote communication - Remote Work" shared link', () => {
    cy.contains('The art of remote communication - Remote Work').scrollIntoView()
        .should('exist')
});

// User selects Sales category
When('User selects Sales category in Sidenav', () => {
    cy.clickSales()

});

Then('User would see "Endgame | Welcome to product-led sales" shared link', () => {
    cy.contains('Endgame | Welcome to product-led sales').scrollIntoView()
        .should('exist')
});

// User selects Startups category
When('User selects Startups category in Sidenav', () => {
    cy.clickStartups()

});

Then('User would see "Fiat Republic" shared link', () => {
    cy.contains('Fiat Republic').scrollIntoView()
        .should('exist')
});

//User selects Strategy category
When('User selects Strategy category in Sidenav', () => {
    cy.clickStrategy()

});

Then('User would see "A Taxonomy of Moats" shared link', () => {
    cy.contains('A Taxonomy of Moats').scrollIntoView()
        .should('exist')
});

//User selects Tools & Software category
When('User selects Tools & Software category in Sidenav', () => {
    cy.clickToolsandSoftware()

});

Then('User would see "Visual Studio Code for the Web" shared link', () => {
    cy.contains('Visual Studio Code for the Web').scrollIntoView()
        .should('exist')
});




