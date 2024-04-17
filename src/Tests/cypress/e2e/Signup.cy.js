import SignUp from "../Pages/Signup.js"; 

describe("Sign up scenarios", () => {

  it("verify that the user is unable to sign up with an invalid email", () => {

    //visit log in page
    cy.visit("/");
    //input name and surname
    SignUp.firstName().type("michael")
    SignUp.lastName().type("Adeoye")
    // verify that the email field validation is not triggered before entering email
    SignUp.email().invoke('attr', 'aria-invalid')
    .should("not.exist")
    SignUp.email().invoke('attr', 'aria-describedby')
    .should("not.exist")
    SignUp.emailfeedback().should("not.exist")

    //enter email
    SignUp.email().type("invalid email")
    //enter password
    SignUp.password().type("V@l1dpassword")
    //confirm password 
    SignUp.confirmPassword().type("V@l1dpassword")
    //click on create account
    SignUp.createAccount().click()
    // verify that the email validation is triggered
    SignUp.email().invoke('attr', 'aria-invalid')
    .should('equal', 'true')
    SignUp.email().invoke('attr', 'aria-describedby')
    .should('equal', 'email-feedback')
    SignUp.emailfeedback().should("have.text", "Must be a valid email address")

  });

  it("verify that the user is unable proceede from the sign up without filling all fields", () => {
     //visit log in page
     cy.visit("/");
  
     // verify that no field validation is triggered before clicking on create account
     SignUp.email().invoke('attr', 'aria-invalid')
     .should("not.exist")
     SignUp.email().invoke('attr', 'aria-describedby')
     .should("not.exist")
     SignUp.emailfeedback().should("not.exist")

     SignUp.firstName().invoke('attr', 'aria-invalid')
     .should("not.exist")
     SignUp.firstName().invoke('attr', 'aria-describedby')
     .should("not.exist")
     SignUp.firstNamefeedback().should("not.exist")

     SignUp.lastName().invoke('attr', 'aria-invalid')
     .should("not.exist")
     SignUp.lastName().invoke('attr', 'aria-describedby')
     .should("not.exist")
     SignUp.lastNamefeedback().should("not.exist")

     SignUp.password().invoke('attr', 'aria-invalid')
     .should("not.exist")
     SignUp.password().invoke('attr', 'aria-describedby')
     .should("not.exist")

     SignUp.confirmPassword().invoke('attr', 'aria-invalid')
     .should("not.exist")
     SignUp.confirmPassword().invoke('attr', 'aria-describedby')
     .should("not.exist")
     SignUp.confirmpasswordfeedback().should("not.exist")

     
     //click on create account
     SignUp.createAccount().click()
     // verify that the validation for all fields is triggered

     SignUp.email().invoke('attr', 'aria-invalid')
     .should("exist")
     SignUp.email().invoke('attr', 'aria-describedby')
     .should("exist")
     SignUp.emailfeedback().should("have.text","Email is required")

     SignUp.firstName().invoke('attr', 'aria-invalid')
     .should("exist")
     SignUp.firstName().invoke('attr', 'aria-describedby')
     .should("exist")
     SignUp.firstNamefeedback().should("have.text","Firs name is required")

     SignUp.lastName().invoke('attr', 'aria-invalid')
     .should("exist")
     SignUp.lastName().invoke('attr', 'aria-describedby')
     .should("exist")
     SignUp.lastNamefeedback().should("have.text","Last name is required")

     SignUp.password().invoke('attr', 'aria-invalid')
     .should("exist")
     SignUp.password().invoke('attr', 'aria-describedby')
     .should("not.exist")

     SignUp.confirmPassword().invoke('attr', 'aria-invalid')
     .should("exist")
     SignUp.confirmPassword().invoke('attr', 'aria-describedby')
     .should("exist")
     SignUp.confirmpasswordfeedback().should("have.text","Password Confirmation is required")
  });

  it("verify that the user is unable to sign up without firstname", () => {
    //visit log in page
    cy.visit("/");
    //input surname and skip first name
    SignUp.lastName().type("Adeoye")
    // verify that the firstname field validation is not triggered before
    SignUp.firstName().invoke('attr', 'aria-invalid')
    .should("not.exist")
    SignUp.firstName().invoke('attr', 'aria-describedby')
    .should("not.exist")
    SignUp.firstNamefeedback().should("not.exist")

    //enter email
    SignUp.email().type("valid@email.com")
    //enter password
    SignUp.password().type("V@l1dpassword")
    //confirm password 
    SignUp.confirmPassword().type("V@l1dpassword")
    //click on create account
    SignUp.createAccount().click()
    // verify that the first name validation is triggered
    SignUp.firstName().invoke('attr', 'aria-invalid')
    .should("exist")
    SignUp.firstName().invoke('attr', 'aria-describedby')
    .should("exist")
    SignUp.firstNamefeedback().should("have.text","Firs name is required")
  
  });

  it("verify that the user is unable to sign up without surname", () => {
  //visit log in page
  cy.visit("/");
  //input firstname and skip surname
  SignUp.firstName().type("Adeoye")
  // verify that the last name field validation is not triggered before
  SignUp.lastName().invoke('attr', 'aria-invalid')
  .should("not.exist")
  SignUp.lastName().invoke('attr', 'aria-describedby')
  .should("not.exist")
  SignUp.lastNamefeedback().should("not.exist")

  //enter email
  SignUp.email().type("valid@email.com")
  //enter password
  SignUp.password().type("V@l1dpassword")
  //confirm password 
  SignUp.confirmPassword().type("V@l1dpassword")
  //click on create account
  SignUp.createAccount().click()
  // verify that the lastname validation is triggered
  SignUp.lastName().invoke('attr', 'aria-invalid')
  .should("exist")
  SignUp.lastName().invoke('attr', 'aria-describedby')
  .should("exist")
  SignUp.lastNamefeedback().should("have.text","Last name is required")
  });

  it("verify that the user is unable to sign up without email", () => {
      //visit log in page
      cy.visit("/");
      //input name and surname
      SignUp.firstName().type("michael")
      SignUp.lastName().type("Adeoye")
      // verify that the email field validation is not triggered before
      SignUp.email().invoke('attr', 'aria-invalid')
      .should("not.exist")
      SignUp.email().invoke('attr', 'aria-describedby')
      .should("not.exist")
      SignUp.emailfeedback().should("not.exist")
  
      //skip email
      //enter password
      SignUp.password().type("V@l1dpassword")
      //confirm password 
      SignUp.confirmPassword().type("V@l1dpassword")
      //click on create account
      SignUp.createAccount().click()
      // verify that the email validation is triggered
      SignUp.email().invoke('attr', 'aria-invalid')
      .should("exist")
      SignUp.email().invoke('attr', 'aria-describedby')
      .should("exist")
      SignUp.emailfeedback().should("have.text","Email is required")
  });

  it("verify that the user is unable to sign up without password", () => {
       //visit log in page
       cy.visit("/");
       //input name and surname
       SignUp.firstName().type("michael")
       SignUp.lastName().type("Adeoye")
       // verify that the password fields validation is not triggered before
       
     SignUp.password().invoke('attr', 'aria-invalid')
     .should("not.exist")
     SignUp.password().invoke('attr', 'aria-describedby')
     .should("not.exist")

     SignUp.confirmPassword().invoke('attr', 'aria-invalid')
     .should("not.exist")
     SignUp.confirmPassword().invoke('attr', 'aria-describedby')
     .should("not.exist")
     SignUp.confirmpasswordfeedback().should("not.exist")
   
       //enter email
       SignUp.email().type("valid@email.com")
       //skip password
       
       //confirm password 
       SignUp.confirmPassword().type("V@l1dpassword")
       //click on create account
       SignUp.createAccount().click()
       // verify that the email validation is triggered
       SignUp.password().invoke('attr', 'aria-invalid')
     .should("exist")
     SignUp.password().invoke('attr', 'aria-describedby')
     .should("not.exist")
  
  });

  it("Password Format validations", () => {
       //visit log in page
       cy.visit("/");
       //input name and surname
       SignUp.firstName().type("michael")
       SignUp.lastName().type("Adeoye")
       //enter email
       SignUp.email().type("valid@email.com")

       //input password step by stem to check for the format validations
       //
       //testing for lowercase by inputing lowercase letter into the field
       //validations should not exist before input of text
       cy.contains("At least 1 Symbol").should('not.exist')
       cy.contains("Must Contain 8 Characters").should('not.exist')
       cy.contains("One Uppercase").should('not.exist')
       cy.contains("One Number").should('not.exist')
       cy.contains("One Lowercase").should('not.exist')
       SignUp.password().type("p")   //inputing text
       cy.contains("One Lowercase").invoke('attr', 'class')
       .should('equal', 'chakra-text css-yp60yo')    //lowercase validation should apear and be highlited
       
       //testing for special character
       //special character validation should be highlighted before the input of special character
       cy.contains("At least 1 Symbol").invoke('attr', 'class')
       .should('equal', 'chakra-text css-qw53tf') 
       SignUp.password().type("@")   //inputing text
       cy.contains("At least 1 Symbol").invoke('attr', 'class')
       .should('equal', 'chakra-text css-yp60yo')    //special character validation should apear and be highlited
       
       //testing for number
       //number validation should be highlighted before the input of number
       cy.contains("One Number").invoke('attr', 'class')
       .should('equal', 'chakra-text css-qw53tf') 
       SignUp.password().type("5")   //inputing text
       cy.contains("One Number").invoke('attr', 'class')
       .should('equal', 'chakra-text css-yp60yo')    //special character validation should apear and be highlited

       //testing for uppercase
       //uppercase validation should be highlighted before the input of special character
       cy.contains("One Uppercase").invoke('attr', 'class')
       .should('equal', 'chakra-text css-qw53tf') 
       SignUp.password().type("S")   //inputing text
       cy.contains("One Uppercase").invoke('attr', 'class')
       .should('equal', 'chakra-text css-yp60yo')    //special character validation should apear and be highlited

       //testing for count
       //count validation should be highlighted before we have 8 characters
       SignUp.password().type("wor")   //inputing text to make it 7 characters
       cy.contains("Must Contain 8 Characters").invoke('attr', 'class')
       .should('equal', 'chakra-text css-qw53tf')     //testing that 7 doesnt trigger the validation
       SignUp.password().type("d")   //inputing text inputing text to make it 8 characters
       cy.contains("Must Contain 8 Characters").invoke('attr', 'class')
       .should('equal', 'chakra-text css-yp60yo')    //count validation should apear and be highlited 



       //confirm password 
       SignUp.confirmPassword().type("V@l1dpassword")
       //click on create account
       SignUp.createAccount().click()
       // verify that the email validation is triggered
       SignUp.password().invoke('attr', 'aria-invalid')
     .should("exist")
     SignUp.password().invoke('attr', 'aria-describedby')
     .should("not.exist")
   
  
  });

  it("verify that the user is unable to sign up without confirming password", () => {
      //visit log in page
      cy.visit("/");
      //input name and surname
      SignUp.firstName().type("michael")
      SignUp.lastName().type("Adeoye")
    // verify that the confirm password field validation is not triggered before
    SignUp.confirmPassword().invoke('attr', 'aria-invalid')
    .should("not.exist")
    SignUp.confirmPassword().invoke('attr', 'aria-describedby')
    .should("not.exist")
    SignUp.confirmpasswordfeedback().should("not.exist")
  
    //enter email
    SignUp.email().type("valid@email.com")
    //enter password
    SignUp.password().type("V@l1dpassword")
    //skip confirm password 
    
    //click on create account
    SignUp.createAccount().click()
    // verify that theconfirm password validation is triggered
    SignUp.confirmPassword().invoke('attr', 'aria-invalid')
    .should("exist")
    SignUp.confirmPassword().invoke('attr', 'aria-describedby')
    .should("exist")
    SignUp.confirmpasswordfeedback().should("have.text","Password Confirmation is required")
   
  
  });

  it("verify that the user is unable to sign up with mis-matching passwords", () => {
       //visit log in page
       cy.visit("/");
       //input name and surname
       SignUp.firstName().type("michael")
       SignUp.lastName().type("Adeoye")
     // verify that the password fields validation is not triggered before
     SignUp.password().invoke('attr', 'aria-invalid')
     .should("not.exist")
     SignUp.password().invoke('attr', 'aria-describedby')
     .should("not.exist")

     SignUp.confirmPassword().invoke('attr', 'aria-invalid')
     .should("not.exist")
     SignUp.confirmPassword().invoke('attr', 'aria-describedby')
     .should("not.exist")
     SignUp.confirmpasswordfeedback().should("not.exist")
   
     //enter email
     SignUp.email().type("valid@email.com")
     //enter password
     SignUp.password().type("V@l1dpassword")
     //confirm password 
     SignUp.confirmPassword().type("V@l1dpassword222")
     //click on create account
     SignUp.createAccount().click()
     // verify that the passwords field validation is triggered
    
     SignUp.password().invoke('attr', 'aria-invalid')
     .should("exist")
     SignUp.confirmPassword().invoke('attr', 'aria-invalid')
     .should("exist")
     SignUp.confirmPassword().invoke('attr', 'aria-describedby')
     .should("exist")
     SignUp.confirmpasswordfeedback().should("have.text","Passwords must match")
    
  });
  it("verify that the user is able to sign up with valid credentials", () => {

    //visit log in page
    cy.visit("/");
    //input name and surname
    SignUp.firstName().type("michael")
    SignUp.lastName().type("Adeoye")

    //enter email
    SignUp.email().type("valid@email.com")
    //enter password
    SignUp.password().type("V@l1dpassword")
    //confirm password 
    SignUp.confirmPassword().type("V@l1dpassword")
    //click on create account
    SignUp.createAccount().click()
    // verify that the account is successfully created by successmessage
    cy.contains("Sign up successful").should("Exist")

  });

});