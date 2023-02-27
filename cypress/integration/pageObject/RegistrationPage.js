/// <reference types ="cypress"/>
class RegistrationPage {

    visit()
    {
        cy.visit("https://ecommerce-playground.lambdatest.io/index.php?route=account/register")
    }
    

    enterFirstname(value)
    {
        const field = cy.get('#input-firstname')
        field.clear()
        field.type(value)
        return this
    }

    enterLastname(value)
    {
        const field = cy.get('#input-lastname')
        field.clear()
        field.type(value)
        return this
    }

    enterEmail(value)
    {
        const field = cy.get('#input-email')
        field.clear()
        field.type(value)
        return this
    }

    enterTelephone(value)
    {
        const field = cy.get('#input-telephone')
        field.clear()
        field.type(value)
        return this
    }

    enterPassword(value)
    {
        const field = cy.get('#input-password')
        field.clear()
        field.type(value)
        return this
    }

    enterConfirmpassword(value)
    {
        const field = cy.get('#input-confirm')
        field.clear()
        field.type(value)
        return this
    }

    PrivacyCheckbox()
    {
        const field = cy.get('.float-right > .custom-control > .custom-control-label')
       field.click()
        
    }

    Register()
    {
        const button = cy.get('.float-right > .btn')
        button.click()
    }
   



}
export default RegistrationPage