/// <reference types="Cypress" />
class LoginPage{

// Create variables for element locators
   urlPath = Cypress.env('baseUrl');
   usernameInput = 'input[id="txtUsername"]';
   passwordInput = 'input[id="txtPassword"]';
   loginButton = 'input[id="btnLogin"]';
   emptyUernameErrorLable = 'span[id="spanMessage"]';
   emptyPassowrdErrorLable = 'span[id="spanMessage"]';
   invalidUsernameErrorLable = 'span[id="spanMessage"]';
   invalidPasswordErrorLable = 'span#spanMessage';
   welcomeFirstnameHomescreenLable = 'a.panelTrigger';
   loginPanelLable = '#logInPanelHeading';
   usernamePlaceholerTextLable = '#divUsername span';
   passwordPlaceholderTextLable = '#divPassword span';
   loginButtonTxtLable = 'input[id="btnLogin"]';

    baseUrl(){
      // base url form the cypress.json file 
      cy.visit(this.urlPath);
     }

     // uppercase and lowercase text accept for username
     fillUsername(username){
      cy.get(this.usernameInput).type(username);
     }

     fillPassword(password){
        cy.get(this.passwordInput).type(password);
     }

     clickLoginButton(){
     cy.get(this.loginButton).click();
     }

     emptyUernameError(){
      cy.get(this.emptyUernameErrorLable).should('have.text','Username cannot be empty');
     }
    
     emptyPassowrdError(){
        return cy.get(this.emptyUernameErrorLable).should('have.text','Password cannot be empty'); 
     }

     invalidUsernameError(){
        return cy.get(this.invalidUsernameErrorLable).should('have.text','Invalid credentials');
     }
     invalidPasswordError(){
        return cy.get(this.invalidPasswordErrorLable).should('have.text','Invalid credentials');
     }

     welcomeFirstnameHomescreen(){
      // Get the text on the welcome msg panel
      cy.get(this.welcomeFirstnameHomescreenLable).then(($el)=>{
         const msg = $el.text();  
      // Get the username from the properties file to verfiy with the welcome msg
         cy.fixture('properties.json').then((data)=>{
      //Verfiy welcome msg panel text inclues the username
         expect(msg).to.include(data.EmployeeNameAdmin)
             }) 
         })
     }

      loginPanelTitel(){
         return cy.get(this.loginPanelLable).should('have.text','LOGIN Panel');
      }
      usernamePlaceholerText(){
         return cy.get(this.usernamePlaceholerTextLable).should('have.text','Username');
      }
      passwordPlaceholderText(){
         return cy.get(this.passwordPlaceholderTextLable).should('have.text','Password');
      }
      loginButtonTxt(){
         return cy.get(this.loginButtonTxtLable).should('have.attr','value','LOGIN');
      }

}
export default LoginPage 