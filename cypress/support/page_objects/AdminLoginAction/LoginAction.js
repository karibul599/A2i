import LoginPage from '../AdminLogin/Login';

export default class LoginPageAction {
  constructor() {
    globalThis.loginPageAction = new LoginPage();
    
  }

  performloginPageAction() {
    
    
    //Visit URl 
    loginPageAction.visit();
    loginPageAction.wait1000();
    
    //Number/Email
    loginPageAction.VisitOrigin();
    loginPageAction.wait1000();
    
  }
}
