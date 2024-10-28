import LoginPage from '../My Deteils/Loginpage';

export default class LoginPageAction {
  constructor() {
    globalThis.loginPageAction = new LoginPage();
    
  }

  performloginPageAction(userName, password) {
    
    
    //Visit URl 
    loginPageAction.visit();
    loginPageAction.wait1000();
    
    //Number/Email
    loginPageAction.VisitOrigin(userName, password);
    loginPageAction.wait1000();
    
  }
}
