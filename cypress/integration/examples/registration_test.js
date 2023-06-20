/// <reference types ="cypress"/>
import RegistrationPage from '../pageObject/RegistrationPage'
let userDetails
const rp =new RegistrationPage()
describe('Registration tests', function() {

    beforeEach(() => {
        rp.visit()
    
        
        //to go to fixture file to get data parameter
        cy.fixture('example').then((data) =>{
            userDetails =data
            })
    })
    
    it('Register without filling firstname field', function() {
    
    
    rp.enterLastname(userDetails.lastName)
    rp.enterEmail(userDetails.email)
    rp.enterTelephone(userDetails.phoneNumber)
    rp.enterPassword(userDetails.password)
    rp.enterConfirmpassword(userDetails.correctPassword)
    rp.PrivacyCheckbox()
    rp.Register()
    
    cy.get('.text-danger').should('contain','First Name must be between 1 and 32 characters!')
    }) 

    it('Register with invalid email', function() {
    
       
        rp.enterFirstname(userDetails.firstName)
        rp.enterLastname(userDetails.lastName)
        rp.enterEmail(userDetails.incorrectEmail)
        rp.enterTelephone(userDetails.phoneNumber)
        rp.enterPassword(userDetails.password)
        rp.enterConfirmpassword(userDetails.correctPassword)
        rp.PrivacyCheckbox()
        rp.Register()
    
    
    })
    it('Register with unmatching passwords', function() {
    
   
    rp.enterFirstname(userDetails.firstName)
    rp.enterLastname(userDetails.lastName)
    rp.enterEmail(userDetails.email)
    rp.enterTelephone(userDetails.phoneNumber)
    rp.enterPassword(userDetails.password)
    rp.enterConfirmpassword(userDetails.correctPassword)
    rp.PrivacyCheckbox()
    rp.Register()

    cy.get('.text-danger').should('contain','Password confirmation does not match password!')
    })
    
 it('Registration without phone number', function() {
    
        
    rp.enterFirstname(userDetails.firstName)
    rp.enterLastname(userDetails.lastName)
    rp.enterEmail(userDetails.email)
    rp.enterPassword(userDetails.password)
    rp.enterConfirmpassword(userDetails.correctPassword)
    rp.PrivacyCheckbox()
    rp.Register()
        
        cy.get('.text-danger').should('contain','Telephone must be between 3 and 32 characters!')
    
    })
    it('Registration without Privacy agreement checkbox', function() {
    
      
        rp.enterFirstname(userDetails.firstName)
        rp.enterLastname(userDetails.lastName)
        rp.enterEmail(userDetails.email)
        rp.enterTelephone(userDetails.phoneNumber)
        rp.enterPassword(userDetails.password)
        rp.enterConfirmpassword(userDetails.correctPassword)
        rp.Register()

        cy.get('#account-register > .alert').should('contain',' Warning: You must agree to the Privacy Policy!')
    
    }) 
    
    it('Register with already registered details', function() {
    
          
        rp.enterFirstname(userDetails.firstName)
        rp.enterLastname(userDetails.lastName)
        rp.enterEmail(userDetails.usedEmail)
        rp.enterTelephone(userDetails.phoneNumber)
        rp.enterPassword(userDetails.password)
        rp.enterConfirmpassword(userDetails.correctPassword)
        rp.PrivacyCheckbox()
        rp.Register()
            cy.get('#account-register > .alert').should('contain',' Warning: E-Mail Address is already registered!')
        
    }) 

    it('Register with valid details', function() {
    
          
        rp.enterFirstname(userDetails.firstName)
        rp.enterLastname(userDetails.lastName)
        rp.enterEmail(userDetails.freshEmail)
        rp.enterTelephone(userDetails.phoneNumber)
        rp.enterPassword(userDetails.password)
        rp.enterConfirmpassword(userDetails.correctPassword)
        rp.PrivacyCheckbox()
        rp.Register()
    cy.title().should('contain','Your Account Has Been Created!')

    assert.exists('created!', 'Congratulations! Your new account has been successfully created!')
    
})
                    
    
})