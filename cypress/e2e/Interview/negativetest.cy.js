/// <reference types="cypress" />

describe("Authentication scenerio", () => {
    beforeEach(() => {
      cy.visit("http://localhost:5173");
      // Load the fixture file and assign an alias
      cy.fixture("example.json").as("userData");
    });
  
    it("validate that when password and confirm password input are entered no error message is displayed", () => {
      cy.get("@userData").then((userData) => {
        cy.get("#firstName").type(userData.firstname);
        cy.get("#lastName").type(userData.lastname);
        cy.get("#email").type(userData.email);
        cy.get(":nth-child(3) > .chakra-input__group > #password").type(
          userData.password
        );
        cy.get(":nth-child(5) > .chakra-input__group > #password").type(
          userData.confirm_password
        );
      });
      cy.get(".css-1lggxi8 > .chakra-button").click();
  
      // Assert that the error message element is not visible or does not exist
      cy.get("#password-feedback").should("not.be.visible");
    });
    
    it("validate correct error message for empty fields", () => {
      cy.get(".css-1lggxi8 > .chakra-button").click();
  
      cy.get("#lastName-feedback")
        .should("be.visible")
        .invoke("text")
        .then((errorMessage) => {
          // Log the error message to the Cypress Command Log
          cy.log("Error message:", errorMessage);
  
          // Perform assertions or further actions based on the error message
          // For example, you can assert that the error message contains certain text
          expect(errorMessage).to.contain("Last name is required");
        });
      cy.get("#email-feedback")
        .should("be.visible")
        .invoke("text")
        .then((errorMessage) => {
          // Log the error message to the Cypress Command Log
          cy.log("Error message:", errorMessage);
  
          // Perform assertions or further actions based on the error message
          // For example, you can assert that the error message contains certain text
          expect(errorMessage).to.contain("Email is required");
        });
      cy.get("#password-feedback")
        .should("be.visible")
        .invoke("text")
        .then((errorMessage) => {
          // Log the error message to the Cypress Command Log
          cy.log("Error message:", errorMessage);
  
          // Perform assertions or further actions based on the error message
          // For example, you can assert that the error message contains certain text
          expect(errorMessage).to.contain("Password Confirmation is required");
        });
      cy.get("#firstName-feedback")
        .should("be.visible")
        .invoke("text")
        .then((errorMessage) => {
          // Log the error message to the Cypress Command Log
          cy.log("Error message:", errorMessage);
  
          // Perform assertions or further actions based on the error message
          // For example, you can assert that the error message contains certain text
          expect(errorMessage).to.contain("First name is required");
        });
      cy.get("#password-feedback")
        .should("be.visible")
        .invoke("text")
        .then((errorMessage) => {
          // Log the error message to the Cypress Command Log
          cy.log("Error message:", errorMessage);
  
          // Perform assertions or further actions based on the error message
          // For example, you can assert that the error message contains certain text
          expect(errorMessage).to.contain("Password is required");
        });
    });
  });
  