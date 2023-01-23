describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })
    
  it('arimetical operations show reult on display', () => {
    cy.get('#number1').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should chain aritmetical operations', () => {
    cy.get('#number5').click();
    cy.get('#operator_add').click();
    cy.get('#number5').click();
    cy.get('#operator-subtract').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '7')
  })

  it('should show expected output for large numbers', () => {
  
    cy.get('#number5').click();
    cy.get('#operator_add').click();
    cy.get('#number3').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '3005')
  })

  it('should show expected output for decimal numbers', () => {
  
    cy.get('#number5').click();
    cy.get('#number5').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '27.5')
  })
  
  it('should show expected output for negative numbers', () => {
  
    cy.get('#number5').click();
    cy.get('#operator-subtract').click();
    cy.get('#number9').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-4')
  })

  it('should return \'err\' when runing in exceptional circumstances like dividing by 0', () => {
    cy.get('#number2').click();
    cy.get('#number5').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('.display').should('contain', 'err')

  })
  

})

// What does the code do in exceptional circumstances? Specifically, if you divide by zero, what is the effect? Write a test to describe what you'd prefer to happen, and then correct the code to make that test pass (you will need to modify the Calculator model to meet this requirement).
// will be returning the string error