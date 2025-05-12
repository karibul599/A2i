//import LoginPage from '../AdminLogin/Login';
import LoginPage from '../AdminLogin/Employees/RegApprove/LoginPage';
export default class LoginPageAction {
  constructor() {
    globalThis.loginPageAction = new LoginPage();
    
  }

  performloginPageAction() {
    
    
    //Visit URl 
    loginPageAction.visit();
    cy.wait(1000)
    //loginPageAction.wait1000();
    
    //Number/Email
   // loginPageAction.VisitOrigin();
    cy.wait(1000)
    //loginPageAction.wait1000();
    
  }
}
