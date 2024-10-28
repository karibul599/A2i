import AddNewReport from '../My Deteils/AddNewActivity';

export default class AddNewReportAction {
  constructor() {
    globalThis.addNewReportAction = new AddNewReport();
    
  }

  performaddNewReportAction(Title, Duration, Description, Title2, Duration2, Description2, Month ) {
    
    
    //Click My Details Btn 
    addNewReportAction.ClickMyDetailsBtn().click();
    addNewReportAction.wait1000();
    //Click Activity Report Btn
    addNewReportAction.ClickActivityReportBtn().click();
    addNewReportAction.wait1000();
    //Click Calender 
    addNewReportAction.ClickCalenderBtn().click();
    addNewReportAction.wait1000();
    //Click Year 
    addNewReportAction.clickYearBtn().click();
    addNewReportAction.wait1000();
    //Click Month Btn
    addNewReportAction.clickMonthBtn(Month).click();
    addNewReportAction.wait1000();
    //Click Add New Btn
    addNewReportAction.clickAddNewBtn().click();
    addNewReportAction.wait1000();

    
//Create Monthly Activity Report
    //Select Month===
    // //Supervisor 
    // addNewReportAction.Supervisor().click().clear().type(SupervisorShortName);
    // addNewReportAction.wait1000();
    // //Select Supervisor 
    // addNewReportAction.SelectSupervisor().click();
    // addNewReportAction.wait1000();
    //Title 
    addNewReportAction.Title().type(Title);
    addNewReportAction.wait1000();
    //Duration 
    addNewReportAction.Duration().type(Duration);
    addNewReportAction.wait1000();
    //Description
    addNewReportAction.Description().type(Description);
    addNewReportAction.wait1000();


// Add next Create Monthly Activity Report 
    addNewReportAction.ClickPlashBtn().click();
    addNewReportAction.wait1000();
    //Title
    addNewReportAction.Title2().type(Title2);
    addNewReportAction.wait1000();
    //Duration 
    addNewReportAction.Duration2().type(Duration2);
    addNewReportAction.wait1000();
    //Description
    addNewReportAction.Description2().type(Description2);
    addNewReportAction.wait1000();


    //Application Submit Btn
    addNewReportAction.SubmitBtn().click();
    addNewReportAction.wait1000();


    
    
    
  }
}