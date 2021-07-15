/// <reference types="Cypress" />

class ForgotPassword{
    forgotPwLink(){
        return cy.get('#forgotPasswordLink a').should('have.attr','href','/index.php/auth/requestPasswordResetCode');
     }
    forgotPwHeader(){
        return cy.get('.head h1').should('have.text','Forgot Your Password?');
    }
    forgotPwSubheader(){
        return cy.get('.inner div:nth-child(1)').contains('Please enter your username to identify your account to reset your password.');
    }
    forgotPwLabel(){
        return cy.get('li label').should('have.text','OrangeHRM Username');
    }
    enterForgotPwUsername(fpwdusername){
        const forgotpwusername = cy.get('input[id="securityAuthentication_userName"]');
        forgotpwusername.clear();
        return forgotpwusername.type(fpwdusername);
    }
    clickResetPasswordBtn(){
        return cy.get('input[id="btnSearchValues"]');
    }

    resetPwdMessage(){
        cy.fixture('properties.json').then((data)=>{
            if(data.Username == 'Admin'){
                cy.get('div.message.warning.fadable').contains('Password reset email could not be sent');
            }
            else{
                cy.get('div.message.warning.fadable').contains('Please contact HR admin in order to reset the password');
            }
        })
       
    }
//new folder
}

export default ForgotPassword