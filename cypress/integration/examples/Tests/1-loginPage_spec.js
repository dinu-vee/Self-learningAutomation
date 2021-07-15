/// <reference types="Cypress" />
import LoginPage from '../pageObject/LoginPage'


describe('orange hrm login page', function() {
    const loginpage = new LoginPage;

    beforeEach(function(){
        loginpage.baseUrl();
        cy.fixture('properties').then(function(data){
            this.data = data;
        })
    })
    it('login page UI',function(){
        loginpage.loginPanelTitel();
        loginpage.usernamePlaceholerText();
        loginpage.passwordPlaceholderText();
        loginpage.loginButtonTxt();
        
    })
    it('when the username and password field both are empty',function(){
        loginpage.clickLoginButton();
        loginpage.emptyUernameError();
    })

    it('empty username field',function(){
        loginpage.fillPassword(this.data.Password);
        loginpage.clickLoginButton();
        loginpage.emptyUernameError();
    })

    it('empty passowrd field verification',function(){
        loginpage.fillUsername(this.data.Username);
        loginpage.clickLoginButton();
        loginpage.emptyPassowrdError();
    })

   it('invlaid password verification',function(){
        loginpage.fillUsername(this.data.Username);
        loginpage.fillPassword(this.data.InvalidPassword);
        loginpage.clickLoginButton();
        loginpage.invalidPasswordError();
    })

    it('invalid username verification',function(){
        loginpage.fillUsername(this.data.InvalidUsername);
        loginpage.fillPassword(this.data.Password);
        loginpage.clickLoginButton();
        loginpage.invalidUsernameError();
    })

    it('sucessfull login', function() {
      loginpage.fillUsername(this.data.Username);
      loginpage.fillPassword(this.data.Password);
      loginpage.clickLoginButton();
      loginpage.welcomeFirstnameHomescreen();
    
    })
  })