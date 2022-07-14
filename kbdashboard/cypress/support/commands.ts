// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/// <reference types='cypress' />
// Above line needed as indicator for Cypress

// Import Cucumber prefix

declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      loginWithEmail(email: string): void;
    }
    interface Chainable<Subject> {
      loginWithPassword(password: string): void;
    }
    interface Chainable<Subject> {
      clickContinue(): void;
    }

    interface Chainable<Subject> {
      clickLogin(): void;
    }
    interface Chainable<Subject> {
      gotoDashboard(): void;
    }

    interface Chainable<Subject> {
      loginToAccount(): void;
    }
    interface Chainable<Subject> {
      logoutFromAccount(): void;
    }
    interface Chainable<Subject> {
      viewCategories(): void;
    }
    interface Chainable<Subject> {
      clickBackend(): void;
    }
    interface Chainable<Subject> {
      clickCreators(): void;
    }
    interface Chainable<Subject> {
      clickCryptocurrency(): void;
    }
    interface Chainable<Subject> {
      clickDesign(): void;
    }
    interface Chainable<Subject> {
      clickDevOps(): void;
    }
    interface Chainable<Subject> {
      clickEngineering(): void;
    }
    interface Chainable<Subject> {
      clickFinance(): void;
    }
    interface Chainable<Subject> {
      clickFrontend(): void;
    }
    interface Chainable<Subject> {
      clickGrowth(): void;
    }
    interface Chainable<Subject> {
      clickHiring(): void;
    }
    interface Chainable<Subject> {
      clickLeadership(): void;
    }
    interface Chainable<Subject> {
      clickManagement(): void;
    }
    interface Chainable<Subject> {
      clickMarketing(): void;
    }
    interface Chainable<Subject> {
      clickOthers(): void;
    }
    interface Chainable<Subject> {
      clickProductManagement(): void;
    }
    interface Chainable<Subject> {
      clickProductivity(): void;
    }
    interface Chainable<Subject> {
      clickPsychology(): void;
    }
    interface Chainable<Subject> {
      clickQualityAssurance(): void;
    }
    interface Chainable<Subject> {
      clickRemote(): void;
    }
    interface Chainable<Subject> {
      clickSales(): void;
    }
    interface Chainable<Subject> {
      clickStartups(): void;
    }
    interface Chainable<Subject> {
      clickStrategy(): void;
    }
    interface Chainable<Subject> {
      clickToolsandSoftware(): void;
    }
  }
}

export default global;

Cypress.Commands.add("loginWithEmail", (email) => {
  cy.clearCookies();
  cy.clearLocalStorage();
  cy.get("#email").type(email);
});

Cypress.Commands.add("clickContinue", () => {
  cy.get(".chakra-button").should("contain", "Continue").click();
});

Cypress.Commands.add("loginWithPassword", (password) => {
  cy.get(".chakra-button").click();
  cy.get("#password").type(password);
});

Cypress.Commands.add("clickLogin", () => {
  cy.contains("Login").click();
});

Cypress.Commands.add("gotoDashboard", () => {
  cy.get(".chakra-text.css-gpycir").should("be.visible");
});

Cypress.Commands.add("loginToAccount", () => {
  cy.clearCookies();
  cy.visit(Cypress.env("baseUrl") + "/login");
  cy.loginWithEmail("hovsqadepartment@gmail.com");
  cy.clickContinue();
  cy.loginWithPassword("Password_123");
  cy.clickLogin();
  cy.gotoDashboard();
});

Cypress.Commands.add("logoutFromAccount", () => {
  cy.loginToAccount();
  cy.wait(1000);
  cy.get("#menu-button-Logout").click();
  cy.url().should(
    "eq",
    "https://gvv9dp5nt676r.a9ni7d1ff3m0e.ap-southeast-1.cs.amazonlightsail.com/login"
  );
});

Cypress.Commands.add("viewCategories", () => {
  cy.get("#menu-button-Backend").scrollIntoView().should("be.visible");
  cy.get("#menu-button-Creators").should("be.visible");
  cy.get("#menu-button-Cryptocurrency").should("be.visible");
  cy.get("#menu-button-Design").should("be.visible");
  cy.get("#menu-button-DevOps").should("be.visible");
  cy.get("#menu-button-Engineering").should("be.visible");
  cy.get("#menu-button-Finance").should("be.visible");
  cy.get("#menu-button-Frontend").scrollIntoView().should("be.visible");
  cy.get("#menu-button-Growth").scrollIntoView().should("be.visible");
  cy.get("#menu-button-Hiring").scrollIntoView().should("be.visible");
  cy.get("#menu-button-Leadership").scrollIntoView().should("be.visible");
  cy.get("#menu-button-Management").scrollIntoView().should("be.visible");
  cy.get("#menu-button-Marketing").scrollIntoView().should("be.visible");
  cy.get("#menu-button-Others").scrollIntoView().should("be.visible");
  cy.get(
    "body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(15) > button:nth-child(1)"
  )
    .scrollIntoView()
    .should("be.visible");
  cy.get("#menu-button-Productivity").scrollIntoView().should("be.visible");
  cy.get("#menu-button-Psychology").scrollIntoView().should("be.visible");
  cy.get(
    "body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(18) > button:nth-child(1)"
  )
    .scrollIntoView()
    .should("be.visible");
  cy.get("#menu-button-Remote").scrollIntoView().should("be.visible");
  cy.get("#menu-button-Sales").scrollIntoView().should("be.visible");
  cy.get("#menu-button-Startups").scrollIntoView().should("be.visible");
  cy.get("#menu-button-Strategy").scrollIntoView().should("be.visible");
  cy.get(
    "body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(23) > button:nth-child(1)"
  )
    .scrollIntoView()
    .should("be.visible");
});

Cypress.Commands.add("clickBackend", () => {
  cy.get("#menu-button-Backend").should("be.visible").click();
});

Cypress.Commands.add("clickCreators", () => {
  cy.get("#menu-button-Creators").scrollIntoView().should("be.visible").click();
});

Cypress.Commands.add("clickCryptocurrency", () => {
  cy.get("#menu-button-Cryptocurrency")
    .scrollIntoView()
    .should("be.visible")
    .click();
});

Cypress.Commands.add("clickDesign", () => {
  cy.get("#menu-button-Design").scrollIntoView().should("be.visible").click();
});

Cypress.Commands.add("clickDevOps", () => {
  cy.wait(2000);
  cy.get("#menu-button-DevOps").scrollIntoView().should("be.visible").click();
});

Cypress.Commands.add("clickEngineering", () => {
  cy.get("#menu-button-Engineering")
    .scrollIntoView()
    .should("be.visible")
    .click();
});

Cypress.Commands.add("clickFinance", () => {
  cy.get("#menu-button-Finance").scrollIntoView().should("be.visible").click();
});

Cypress.Commands.add("clickFrontend", () => {
  cy.get("#menu-button-Frontend").scrollIntoView().should("be.visible").click();
});

Cypress.Commands.add("clickGrowth", () => {
  cy.get("#menu-button-Growth").scrollIntoView().should("be.visible").click();
});

Cypress.Commands.add("clickHiring", () => {
  cy.get("#menu-button-Hiring").scrollIntoView().should("be.visible").click();
});

Cypress.Commands.add("clickLeadership", () => {
  cy.get("#menu-button-Leadership")
    .scrollIntoView()
    .should("be.visible")
    .click();
});

Cypress.Commands.add("clickManagement", () => {
  cy.get("#menu-button-Management")
    .scrollIntoView()
    .should("be.visible")
    .click();
});

Cypress.Commands.add("clickMarketing", () => {
  cy.wait(2000);
  cy.get("#menu-button-Marketing")
    .scrollIntoView()
    .should("be.visible")
    .click();
});

Cypress.Commands.add("clickOthers", () => {
  cy.get("#menu-button-Others").scrollIntoView().should("be.visible").click();
});

Cypress.Commands.add("clickProductManagement", () => {
  cy.get(
    "body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(15) > button:nth-child(1)"
  )
    .scrollIntoView()
    .should("be.visible")
    .click();
});

Cypress.Commands.add("clickProductivity", () => {
  cy.get("#menu-button-Productivity")
    .scrollIntoView()
    .should("be.visible")
    .click();
});

Cypress.Commands.add("clickPsychology", () => {
  cy.get("#menu-button-Psychology")
    .scrollIntoView()
    .should("be.visible")
    .click();
});

Cypress.Commands.add("clickQualityAssurance", () => {
  cy.get(
    "body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(18) > button:nth-child(1)"
  )
    .scrollIntoView()
    .should("be.visible")
    .click();
});

Cypress.Commands.add("clickRemote", () => {
  cy.get("#menu-button-Remote").click();
});

Cypress.Commands.add("clickSales", () => {
  cy.get("#menu-button-Sales").click();
});

Cypress.Commands.add("clickStartups", () => {
  cy.get("#menu-button-Startups").click();
});

Cypress.Commands.add("clickStrategy", () => {
  cy.get("#menu-button-Strategy").click();
});

Cypress.Commands.add("clickToolsandSoftware", () => {
  cy.get(
    "body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(23) > button:nth-child(1)"
  ).click();
});
