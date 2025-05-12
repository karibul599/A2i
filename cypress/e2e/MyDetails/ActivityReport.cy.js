import a2iLogin from "../../support/page_objects/a2iLogin";
import AddNewReportAction from "../../support/page_objects/My DeteilsAction/AddNewActivityAction";
import AproveARtAction from "../../support/page_objects/TeamAction/AproveARAction";
import RetainARAction from "../../support/page_objects/TeamAction/RetainARAction";
import RejectARAction from "../../support/page_objects/TeamAction/RejectARAction";
import RejectAndRetainConfirm from "../../support/page_objects/My DeteilsAction/RejectAndRetainConfirmAction";
import teamTimesheet from "../../support/page_objects/teamTimesheet";
describe.only(" Activity Report and Approve ", () => {
  const login = new a2iLogin(); //********/
  const addNewReportAction = new AddNewReportAction(); //********/
  const aproveARtAction = new AproveARtAction(); //********/
  const TeamTimesheet = new teamTimesheet(); //********/

  it("Applicant Login and Add new Activity Report", () => {
    // Applicant Login
  
    login.visitA2iLoginPage();
    const username='rakib.younus@a2i.gov.bd'
    const password='12345#Kmail'
    login.visitKeycloakOriginToA2iUserLogin(username, password)
    login.delayMS(1000)
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
    const Month=' JUL ';
    addNewReportAction.performaddNewReportAction(Title, Duration, Description, Title2, Duration2, Description2, Month);
    
  });
  it.only("Supervisor Login and Approve Activity Report", () => {
    a2iLogin();
    function a2iLogin() {
      //Login
      login.visitA2iLoginPage();
      const username='jalal.ahmed@a2i.gov.bd'
      const password='12345#Kmail'
      login.visitKeycloakOriginToA2iUserLogin(username, password)
      login.delayMS(1000)
      //Approve Report
      //aproveARtAction.performaproveARtAction();
      //approve Timesheet
      TeamTimesheet.TeamTimesheetReportApprove()
    }
  });
});
describe("Activity Report and Retain ", () => {
  const login = new a2iLogin(); //********/
  const addNewReportAction = new AddNewReportAction(); //********/
  const retainARAction = new RetainARAction(); //********/
  const rejectAndRetainConfirm = new RejectAndRetainConfirm(); //********/

  it("Applicant Login and Add new Activity Report", () => {
    // Applicant Login
     
    login.visitA2iLoginPage();
    const username='rakib.younus@a2i.gov.bd'
    const password='12345#Kmail'
    login.visitKeycloakOriginToA2iUserLogin(username, password)
    login.delayMS(1000)
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
    const Month=' AUG ';
    addNewReportAction.performaddNewReportAction(Title, Duration, Description, Title2, Duration2, Description2, Month);
    
  });
  it("Supervisor Login and Retain Activity Report", () => {
    a2iLogin();
    function a2iLogin() {
      //Login
      login.visitA2iLoginPage();
      const username='jalal.ahmed@a2i.gov.bd'
      const password='12345#Kmail'
      login.visitKeycloakOriginToA2iUserLogin(username, password)
      login.delayMS(1000)
      //Approve Report
      const Remark='Update This'
      retainARAction.performretainARAction(Remark);
    }
  }); 
});
describe(" Activity Report and Reject ", () => {
  const login = new a2iLogin(); //********/
  const addNewReportAction = new AddNewReportAction(); //********/
  //const aproveARtAction = new AproveARtAction(); //********/
  const rejectARAction = new RejectARAction(); //********/

  it("Applicant Login and Add new Activity Report", () => {
    // Applicant Login
    login.visitA2iLoginPage();
    const username='rakib.younus@a2i.gov.bd'
    const password='12345#Kmail'
    login.visitKeycloakOriginToA2iUserLogin(username, password)
    login.delayMS(1000)
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
    const Month=' SEP ';
    addNewReportAction.performaddNewReportAction(Title, Duration, Description, Title2, Duration2, Description2, Month);
    
  });
  it("Supervisor Login and Reject Activity Report", () => {
    a2iLogin();
    function a2iLogin() {
      //Login
    login.visitA2iLoginPage();
    const username='jalal.ahmed@a2i.gov.bd'
    const password='12345#Kmail'
    login.visitKeycloakOriginToA2iUserLogin(username, password)
    login.delayMS(1000)
      //Reject Application
    rejectARAction.performrejectARAction();
    }
  });
});
