export default class RegistrationLoginPage {
    //Visit URl 
    visit() {
        cy.visit('http://localhost:4200/public/user-registration-entry-point');  
      }

    //Number/Email
    getUserNameInput() {
      return cy.get('input[aria-label="Enter Phone/Email"]');
    }
    clickToSentOPT() {
      return cy.get('div>button>span[class="mat-mdc-button-touch-target"]');
    }

    //OTP
    getOTP() {
      return cy.get('input[aria-label="Enter OTP"]');
    }
    clickToVerifyOTP() {
      return cy.get('div>button>span[class="mat-mdc-button-touch-target"]');
    }
    wait500(){
      const x=500;
      return cy.wait(x);
    }
    wait1000(){
      const y=1000;
      return cy.wait(y);
    }
  }
  