class SignUp {

   
        firstName() {
          return cy.get('#firstName');
        }

        firstNamefeedback() {
          return cy.get('#firstName-feedback');
        }

        lastName() {
          return  cy.get('#lastName');
        }
      
        lastNamefeedback() {
          return cy.get('#lastName-feedback');
        }

        email() {
          return  cy.get('#email')
        }

        emailfeedback() {
          return cy.get('#email-feedback')
          }
   
        password() {
          return  cy.get('#password')
        }

        passwordfeedback() {
          return cy.get('#password-feedback')
          }

          
        confirmPassword() {
          return  cy.get('input[name="confirm"]')
        }
        confirmpasswordfeedback() {
          return cy.get('#password-feedback')
          }

        createAccount() {
          return  cy.get('[type="submit"]')
        }

      
       
      }
export default new SignUp() ; 