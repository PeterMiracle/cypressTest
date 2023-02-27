
import LoginPage from '../pageObject/LoginPage'
let userDetails
const lp =new LoginPage()
describe('Log in tests', function() {
          
    beforeEach(() => {
        lp.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/login')

      cy.fixture('example').then((data) =>{
        userDetails =data
        })
    })
      
    it('Test for correct email and incorrect Password', function() {
    
    
    lp.enterEmail(userDetails.correctEmail)
    lp.enterPassword(userDetails.incorrectPassword)
    lp.login()

    cy.get('#account-login > .alert').should('contain',' Warning: No match for E-Mail Address and/or Password.')
   
    }) 
    
    it('Test for Incorrect email and correct Password', function() {
    
        
        lp.enterEmail(userDetails.incorrectEmail)
        lp.enterPassword(userDetails.correctPassword)
        lp.login()
        cy.get('#account-login > .alert').should('contain',' Warning: No match for E-Mail Address and/or Password.')
   
    
    })
    
    it('Attempt Login without email and password', function() {
    
        
        
        lp.login()

        cy.get('#account-login > .alert').should('contain',' Warning: No match for E-Mail Address and/or Password.')
   
    
    
    })

    it('Test for correct credentials', function() {
    
        
        lp.enterEmail(userDetails.correctEmail)
        lp.enterPassword(userDetails.correctPassword)
        lp.login()
    
        cy.get(':nth-child(1) > .card-header').should('contain','My Account')
    })
  })