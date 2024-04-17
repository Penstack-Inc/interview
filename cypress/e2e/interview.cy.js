describe('interview test case', () => {
  beforeEach('verify user is able to fill all fields', () => {
      cy.visit("http://localhost:5173/")
  })

  it('verify user is able to filling all input fields', () => {
      cy.get("#firstName").type("Temiloluwa")
      cy.get("#lastName").type("Sanyaolu")
      cy.get("#email").type("stemtol@gmail.com")
      cy.get("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(3) > div:nth-child(2) > input:nth-child(1)").type("Penstack1@")
      cy.get("input[name='confirm']").type("Penstack1@")
      cy.get("button[type='submit']").click()
  })

  it('verify user is told to enter valid email upon wrong input', () => {
      cy.get('input[name="email"]').type('penstack')
      cy.contains("Must be a valid email address\n").should('be.visible')

  })
  it('match password and confirm password field', () => {
      // Get the password input fields
      const passwordField1 = "body > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(3) > div:nth-child(2) > input:nth-child(1)"
      const passwordField2 = "input[name='confirm']"

      // valid password
      cy.get(passwordField1).type('ValidPass1$');

      // Type the same password in the confirm password field
      cy.get(passwordField2).type('ValidPass1$');

      // Get the values of the input fields and compare
      cy.get(passwordField1).invoke('val').then((passwordValue1) => {
          cy.get(passwordField2).invoke('val').then((passwordValue2) => {
              // Compare the values of the input fields
              expect(passwordValue1).to.equal(passwordValue2);
          })
      })
  })

})