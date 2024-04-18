describe('SignUpPage', () => {
    it('should load the sign up page', () => {
      cy.visit('/');
      cy.get('<p class="chakra-text css-1vg6q84">Logo</p>'); //Verify sign-up page loads
    });
  });
  
  describe('Sign Up Page Elements', () => {
    it('should display all required elements', () => {
      cy.visit('/');
      cy.contains('#firstName').should('be.visible')
      cy.get('"#lastName"]').should('be.visible')
      cy.get('"#email"]').should('be.visible')
      cy.get('"#password"]').should('be.visible')
      cy.get('input[name="confirm"]').should('be.visible')
                });
  });
  
  describe('Sign Up Form Submission', () => {
    it('should sign up successfully with valid input', () => {
      cy.visit('/');
      cy.get('//*[@id="firstName"]').type('Kevin');
      cy.get('//*[@id="lastName"]').type('Olaniyan');
      cy.get('//*[@id="email"]').type('kevinolaniyan@gmail.com');
      cy.get('//*[@id="password"]').type('password@123');
      cy.get('input[name="confirm"]').type('password123');
      cy.get('button[type="submit"]').click(); //click on create account
         });
  });
  
  describe('Sign Up Form Validation', () => {
    it('should display validation errors for empty input', () => {
      cy.visit('/');
      cy.get('input[type="submit"]').click();
      cy.contains('Please enter a username').should('exist');
      cy.contains('Please enter an email').should('exist');
      cy.contains('Please enter a password').should('exist');
    });
  });