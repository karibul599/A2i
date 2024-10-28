import EmailEditApplication from '../../../AdminLogin/Employees/RegApprove/EmailEditApplication.js';
export default class EmailEditApplicationAction {
   
        constructor() {
          globalThis.emailEditApplication = new EmailEditApplication();
          
        }
      
        performemailEditApplication(randomEmail){
            //Open Application
            emailEditApplication.OpenApplication().click();
            emailEditApplication.wait1000();
            //Add Email
            emailEditApplication.AddEmail().clear({ force: true }).type(randomEmail, { force: true });
            emailEditApplication.wait1000();
            //Academic History Page
            emailEditApplication.Next().click({force: true});
            emailEditApplication.wait1000();
            //Professional Experiences Page
            emailEditApplication.Next().click({force: true});
            emailEditApplication.wait1000();
            //Contract Information Page
            emailEditApplication.Next().click({force: true});
            emailEditApplication.wait1000();

        }


}