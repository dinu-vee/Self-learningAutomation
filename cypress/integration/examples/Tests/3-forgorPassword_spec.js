/// <reference types="Cypress" />
import LoginPage from '../pageObject/LoginPage'
import ForgotPassword from '../pageObject/ForgotPassword'

describe('orange hrm forgot password page',function(){
    const loginpage = new LoginPage;
    const forgotpwd = new ForgotPassword;

    beforeEach(function(){
        loginpage.baseUrl();
        cy.fixture('properties').then(function(data){
            this.data = data;
        })
    })

    it('forgpt password link',function(){
        forgotpwd.clickForgotPasswordLink();
        forgotpwd.getForgotPasswordHeader();
        forgotpwd.getForgotPasswordSubHeader();
        forgotpwd.getUsernameLable();
        forgotpwd.enterForgotPasswordUsername(this.data.Username);
        forgotpwd.clickResetPasswordButton();
        forgotpwd.getResetPassworddMessage();
        //new
        
    })
})

