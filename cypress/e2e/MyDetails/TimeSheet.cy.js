import LoginPageAction from "../../support/page_objects/My DeteilsAction/LoginPageAction";
import AddNewTimeSheetAction from "../../support/page_objects/My DeteilsAction/AddNewTimeSheetAction";
import AproveARtAction from "../../support/page_objects/TeamAction/AproveARAction";
import TimeSheetApproveAction from "../../support/page_objects/TeamAction/TimeSheetApproveAction";
import TimeSheetRetainAction from "../../support/page_objects/TeamAction/TimeSheetRetainAction";
import TimeSheetRejectAction from "../../support/page_objects/TeamAction/TimeSheedRejectAction";

describe("Time Sheet and Approve ", () => {
  const loginPageAction = new LoginPageAction(); //********/
  const addNewTimeSheetAction = new AddNewTimeSheetAction(); //********/
  const timeSheetApproveAction = new TimeSheetApproveAction(); //********/
it("Applicant Login and Add new Attendance", () => {
    // Applicant Login
    const userName = "rakib.younus@a2i.gov.bd";
    const password = "12345#Kmail";
    loginPageAction.performloginPageAction(userName, password);
    //Add New Activity
    
    //Create Monthly Activity Report
    //const SupervisorShortName='Jalal Uddin';
    const Title='Titel1';
    const Duration= 'one Month';
    const Description='This is My activity Report';

   // Add next Create Monthly Activity Report
    const Title2='Titel2';
    const Duration2= 'two Month';
    const Description2='This is My activity Report version Two';
    const Month=' JAN ';
    addNewTimeSheetAction.performaddNewTimeSheet(Month);
    
  });
it("Supervisor Login and Approve Attendance", () => {
    a2iLogin();
    function a2iLogin() {
      //Login
      const userName = "jalal.ahmed@a2i.gov.bd";
      const password = "12345#Kmail";
      loginPageAction.performloginPageAction(userName, password);
      //Approve TimeSheet
      timeSheetApproveAction.performtimeSheetApproveAction();
    }
  });
});
describe("Time Sheet and Retain  ", () => {
    const loginPageAction = new LoginPageAction(); //********/
    const addNewTimeSheetAction = new AddNewTimeSheetAction(); //********/
    const timeSheetRetainAction = new TimeSheetRetainAction(); //********/
it("Applicant Login and Add new Attendance", () => {
      // Applicant Login
      const userName = "rakib.younus@a2i.gov.bd";
      const password = "12345#Kmail";
      loginPageAction.performloginPageAction(userName, password);
      //Add New Activity
      
      //Create Monthly Activity Report
      //const SupervisorShortName='Jalal Uddin';
      const Title='Titel1';
      const Duration= 'one Month';
      const Description='This is My activity Report';
  
     // Add next Create Monthly Activity Report
      const Title2='Titel2';
      const Duration2= 'two Month';
      const Description2='This is My activity Report version Two';
      const Month=' FEB ';
      addNewTimeSheetAction.performaddNewTimeSheet(Month);
      
    });
it("Supervisor Login and Retain Attendance", () => {
      a2iLogin();
      function a2iLogin() {
        //Login
        const userName = "jalal.ahmed@a2i.gov.bd";
        const password = "12345#Kmail";
        loginPageAction.performloginPageAction(userName, password);
        //Retain TimeSheet
        const Status='Fail';
        timeSheetRetainAction.performtimeSheetRetainAction(Status);
      }
    });
  });
describe("Time Sheet and Reject  ", () => {
    const loginPageAction = new LoginPageAction(); //********/
    const addNewTimeSheetAction = new AddNewTimeSheetAction(); //********/
    const timeSheetRejectAction = new TimeSheetRejectAction(); //********/
it("Applicant Login and Add new Attendance", () => {
      // Applicant Login
      const userName = "rakib.younus@a2i.gov.bd";
      const password = "12345#Kmail";
      loginPageAction.performloginPageAction(userName, password);
      //Add New Activity
      
      //Create Monthly Activity Report
      //const SupervisorShortName='Jalal Uddin';
      const Title='Titel1';
      const Duration= 'one Month';
      const Description='This is My activity Report';
  
     // Add next Create Monthly Activity Report
      const Title2='Titel2';
      const Duration2= 'two Month';
      const Description2='This is My activity Report version Two';
      const Month=' MAR ';
      addNewTimeSheetAction.performaddNewTimeSheet(Month);
      
    });
it("Supervisor Login and Reject Attendance", () => {
      a2iLogin();
      function a2iLogin() {
        //Login
        const userName = "jalal.ahmed@a2i.gov.bd";
        const password = "12345#Kmail";
        loginPageAction.performloginPageAction(userName, password);
        //Reject Attendance
        timeSheetRejectAction.performtimeSheetRejectAction();
      }
    });
  });