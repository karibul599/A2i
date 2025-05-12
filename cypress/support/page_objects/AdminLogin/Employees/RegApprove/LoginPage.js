class LoginPage {
    // Define the elements
    visit() {
      cy.visit('http://localhost:4200/public/user-registration-entry-point');  // Replace 'xy.com/login' with your actual URL
    }

    getUsernameInput() {
      return cy.get('input[name="username"]');
    }
    
    getPasswordInput() {
      return cy.get('input[name="password"]');
    }

    getLoginButton() {
      return cy.get("#kc-login").should("exist").and("be.visible");
    }
  
   
    enterUsername(username) {
      this.getUsernameInput().type(username);
    }
      enterPassword(password) {
        this.getPasswordInput().type(password);
      }

    clickLogin() {
      this.getLoginButton().click();
    }
  
    // Define a reusable login method
    login(username, password) {
      this.enterUsername(username);
      this.enterPassword(password);
      this.clickLogin();
    }
  }
  
  export default LoginPage;
  