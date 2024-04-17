/// <reference types="cypress" />

describe("Authentication scenerio", () => {
  const validEmailAddress = [
    "test@example.com",
    "user123@gmail.com",
    "john.doe123@sub.domain.co",
  ];
  beforeEach(() => {
    cy.visit("http://localhost:5173");
    // Load the fixture file and assign an alias
    cy.fixture("example.json").as("userData");
  });

  it("validate sign up with google button is visible and not disabled", () => {
    // Find the "Sign Up with Google" button element by its selector
    cy.get(".css-5kt1vw > .chakra-button")
      .should("be.visible")
      .and("not.be.disabled");

    // Click the "Sign Up with Google" button
    cy.get(".css-5kt1vw > .chakra-button").click();

    // Check if the pop-up is visible
    // cy.get('.google-signup-popup').should('be.visible')
  });

  it("validate log in button is visible and not disabled", () => {
    cy.get(".chakra-link").should("be.visible").and("not.be.disabled");

    cy.get(".chakra-link").click();
  });

  it("validate create account button is active and not disabled", () => {
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
    cy.get(".css-1lggxi8 > .chakra-button")
      .should("be.visible")
      .and("not.be.disabled");
    cy.get(".css-1lggxi8 > .chakra-button").click();
  });

  it("Ensure email field accept valid email addresses", () => {
    // Iterate through each valid email address
    validEmailAddress.forEach((email) => {
      // Type the email address into the email field
      cy.get("#email").type(email);

      // Verify if the email field contains the expected value using regex pattern
      cy.get("#email")
        .invoke("val")
        .should("match", /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

      // Clear the email field for the next iteration
      cy.get("#email").clear();
    });
  });

  it("validate create account button is active and not disabled", () => {
    
    // Type a valid password into the password field
    cy.get("@userData").then((userData) => {
      cy.get(":nth-child(3) > .chakra-input__group > #password").type(userData.password);
    })

    // Assert that the password meets the criteria
    cy.get(":nth-child(3) > .chakra-input__group > #password")
      .invoke("val")
      .then((password) => {
        expect(password).to.have.length.of.at.least(8); // Check length
        expect(password).to.match(/[A-Z]/); // Check for at least one uppercase letter
        expect(password).to.match(/[a-z]/); // Check for at least one lowercase letter
        expect(password).to.match(/[0-9]/); // Check for at least one number
        expect(password).to.match(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\|=\/-]/); // Check for at least one symbol
      });
  });
});
