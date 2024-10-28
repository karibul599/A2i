import RegistrationLoginPage from '../Registration/LoginPage';

export default class RegistrationLoginPageAction {
  constructor() {
    globalThis.registrationLoginPage = new RegistrationLoginPage();
    
  }

  performLogin(userName, OTP) {
    
    
    //Visit URl 
    registrationLoginPage.visit();
    registrationLoginPage.wait1000();
    
    //Number/Email
    registrationLoginPage.getUserNameInput().click().type(userName);
    registrationLoginPage.clickToSentOPT().should('be.visible').click({ force: true });
    registrationLoginPage.wait1000();

    //OTP
    registrationLoginPage.getOTP().click().type(OTP);
    registrationLoginPage.clickToVerifyOTP().should('be.visible').click({ force: true });
    registrationLoginPage.wait1000();
  }
}
