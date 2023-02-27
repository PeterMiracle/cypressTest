/// <reference types ="cypress"/>
class LoginPage {

    visit()
    {
        cy.visit("https://ecommerce-playground.lambdatest.io/index.php?route=account/login")
    }
    

    enterEmail(value)
    {
        const field = cy.get('#input-email')
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
    
    login()
    {
        const button = cy.get('form > .btn')
        button.click()
    }



}
export default LoginPage