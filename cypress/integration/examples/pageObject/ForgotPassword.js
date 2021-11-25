/// <reference types="Cypress" />

class ForgotPassword{

    // Creating variables for element locators
    forgotPasswordLink = '#forgotPasswordLink a';
    forgotPasswordHeader = '.head h1';
    forgotPasswordSubHeader = '.inner div:nth-child(1)';
    usernameLabale = 'li label';
    forgotPasswordUsername = 'input[id="securityAuthentication_userName"]';
    resetPasswordButton = 'input[id="btnSearchValues"]';

    clickForgotPasswordLink(){
        return cy.get(this.forgotPasswordLink).should('have.attr','href','/index.php/auth/requestPasswordResetCode').click();
     }
    getForgotPasswordHeader(){
        return cy.get(this.forgotPasswordHeader).should('have.text','Forgot Your Password?');
    }
    getForgotPasswordSubHeader(){
        return cy.get(this.forgotPasswordSubHeader).contains('Please enter your username to identify your account to reset your password.');
    }
    getUsernameLable(){
        return cy.get(this.usernameLabale).should('have.text','OrangeHRM Username');
    }
    enterForgotPasswordUsername(forgotpasswordusername){
       cy.get(this.forgotPasswordUsername).type(forgotpasswordusername);
    }
    clickResetPasswordButton(){
        return cy.get(this.resetPasswordButton).click();
    }

    getResetPassworddMessage(){
        cy.fixture('properties.json').then((data)=>{
            if(data.username == "DinukaK") {
                cy.get('div.message.warning.fadable').contains('Instructions for resetting your password have been sent to orangehrm1@dispostable.com');
            }
    
             else {
            cy.get('div.message.warning.fadable').contains('There is a password reset request already in the system.');
        }     
        })
       
    }
//new folder
}

export default ForgotPassword