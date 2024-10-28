import PhoneApplication from '../../../AdminLogin/Employees/RegApprove/PhoneEditApplication.js';
export default class PhoneApplicationAction {
   
        constructor() {
          globalThis.phoneApplicationAction = new PhoneApplication();
          
        }
      
        performphoneApplicationAction(){
            //Open Application
            phoneApplicationAction.OpenApplication().click();
            phoneApplicationAction.wait1000();
            //Academic History Page
            phoneApplicationAction.Next().click({force: true});
            phoneApplicationAction.wait1000();
            //Professional Experiences Page
            phoneApplicationAction.Next().click({force: true});
            phoneApplicationAction.wait1000();
            //Contract Information Page
            phoneApplicationAction.Next().click({force: true});
            phoneApplicationAction.wait1000();

        }


}
