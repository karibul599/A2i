import LoginPageAction from "../../support/page_objects/My DeteilsAction/LoginPageAction";
import AddNewReportAction from "../../support/page_objects/My DeteilsAction/AddNewActivityAction";
import AproveARtAction from "../../support/page_objects/TeamAction/AproveARAction";
import RetainARAction from "../../support/page_objects/TeamAction/RetainARAction";
import RejectARAction from "../../support/page_objects/TeamAction/RejectARAction";
import RejectAndRetainConfirm from "../../support/page_objects/My DeteilsAction/RejectAndRetainConfirmAction";
describe(" Activity Report and Approve ", () => {
  const loginPageAction = new LoginPageAction(); //********/
  const addNewReportAction = new AddNewReportAction(); //********/
  const aproveARtAction = new AproveARtAction(); //********/

  it("Applicant Login and Add new Activity Report", () => {
    // Applicant Login
    const userName = "rakib.younus@a2i.gov.bd";
    const password = "@#$12345Bmail";
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
    const Month=' APR ';
    addNewReportAction.performaddNewReportAction(Title, Duration, Description, Title2, Duration2, Description2, Month);
    
  });
  it("Supervisor Login and Approve Activity Report", () => {
    a2iLogin();
    function a2iLogin() {
      //Login
      const userName = "jalal.ahmed@a2i.gov.bd";
      const password = "@#$12345Bmail";
      loginPageAction.performloginPageAction(userName, password);
      //Approve Report
      aproveARtAction.performaproveARtAction();
    }
  });
});
describe(" Activity Report and Retain ", () => {
  const loginPageAction = new LoginPageAction(); //********/
  const addNewReportAction = new AddNewReportAction(); //********/
  const retainARAction = new RetainARAction(); //********/
  const rejectAndRetainConfirm = new RejectAndRetainConfirm(); //********/

  it("Applicant Login and Add new Activity Report", () => {
    // Applicant Login
    const userName = "rakib.younus@a2i.gov.bd";
    const password = "@#$12345Bmail";
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
    const Month=' MAY ';
    addNewReportAction.performaddNewReportAction(Title, Duration, Description, Title2, Duration2, Description2, Month);
    
  });
  it("Supervisor Login and Retain Activity Report", () => {
    a2iLogin();
    function a2iLogin() {
      //Login
      const userName = "jalal.ahmed@a2i.gov.bd";
      const password = "@#$12345Bmail";
      loginPageAction.performloginPageAction(userName, password);
      //Approve Report
      const Remark='Update This'
      retainARAction.performretainARAction(Remark);
    }
  }); 
});
describe(" Activity Report and Reject ", () => {
  const loginPageAction = new LoginPageAction(); //********/
  const addNewReportAction = new AddNewReportAction(); //********/
  //const aproveARtAction = new AproveARtAction(); //********/
  const rejectARAction = new RejectARAction(); //********/

  it("Applicant Login and Add new Activity Report", () => {
    // Applicant Login
    const userName = "rakib.younus@a2i.gov.bd";
    const password = "@#$12345Bmail";
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
    const Month=' JUN ';
    addNewReportAction.performaddNewReportAction(Title, Duration, Description, Title2, Duration2, Description2, Month);
    
  });
  it("Supervisor Login and Reject Activity Report", () => {
    a2iLogin();
    function a2iLogin() {
      //Login
      const userName = "jalal.ahmed@a2i.gov.bd";
      const password = "@#$12345Bmail";
      loginPageAction.performloginPageAction(userName, password);
      //Reject Application
      rejectARAction.performrejectARAction();
    }
  });
});
