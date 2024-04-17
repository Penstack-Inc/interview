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

Cypress.Commands.add("Login", () => {
    cy.visit("/");
    cy.get("#callToActionBtn")
      .should(() => {})
      .then(($dash) => {
        if (!$dash.length) {
          cy.log("user already logged in");
          cy.visit("/admin/timeAndAttendanceApp#");
          return;
        }
        cy.get("#callToActionBtn").click({ force: true });
        cy.get("#username").type("azeez@email.com");
        cy.get("#password").type("Password1.");
        cy.get("#login-btn").click();
        cy.wait(1000);
        cy.get(".btn").click();
        cy.get("#admin-dash-btn").click({ force: true });
  
        ///verifying that the user is logged in as an admin
        cy.get(".btn").contains("Admin");
        ///heading to T and A
        cy.visit("/admin/timeAndAttendanceApp#");
      });
  });
  