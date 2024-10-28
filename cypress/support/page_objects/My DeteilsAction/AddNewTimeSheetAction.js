import AddNewTimeSheet from '../My Deteils/AddNewTimeSheet';

export default class AddNewTimeSheetAction {
  constructor() {
    globalThis.addNewTimeSheet = new AddNewTimeSheet();
    
  }

  performaddNewTimeSheet(Month) {
    
    
    //Click My Details Btn 
    addNewTimeSheet.ClickMyDetailsBtn().click();
    addNewTimeSheet.wait1000();
    //Click Activity Report Btn
    addNewTimeSheet.ClickTimeSheetBtn().click();
    addNewTimeSheet.wait1000();
    //Click Calender 
    addNewTimeSheet.ClickCalenderBtn().click();
    addNewTimeSheet.wait1000();
    //Click Year 
    addNewTimeSheet.clickYearBtn().click({force: true});
    addNewTimeSheet.wait1000();
    //Click Month Btn
    addNewTimeSheet.clickMonthBtn(Month).click({force: true});
    addNewTimeSheet.wait1000();
    //Click Add New Btn
    addNewTimeSheet.clickAddNewBtn().click();
    addNewTimeSheet.wait1000();

    
//Create Monthly Activity Report
    //Select Month===
    // //Supervisor 
    // addNewReportAction.Supervisor().click().clear().type(SupervisorShortName);
    // addNewReportAction.wait1000();
    // //Select Supervisor 
    // addNewReportAction.SelectSupervisor().click();
    // addNewReportAction.wait1000();
    
//Leave Plan
    //04/01/2024
    addNewTimeSheet.Leave1().click({force: true});
    addNewTimeSheet.wait1000();
    addNewTimeSheet.LeaveType1().click({force: true});
    addNewTimeSheet.wait1000();
    addNewTimeSheet.SelectLeaveType().click({force: true});
    addNewTimeSheet.wait1000();
    //11/01/2024 
    addNewTimeSheet.Leave2().click({force: true});
    addNewTimeSheet.wait1000();
    addNewTimeSheet.LeaveType2().click({force: true});
    addNewTimeSheet.wait1000();
    addNewTimeSheet.SelectLeaveType().click({force: true});
    addNewTimeSheet.wait1000();
    //18/01/2024
    addNewTimeSheet.Leave3().click({force: true});
    addNewTimeSheet.wait1000();
    addNewTimeSheet.LeaveType3().click({force: true});
    addNewTimeSheet.wait1000();
    addNewTimeSheet.SelectLeaveType().click({force: true});
    addNewTimeSheet.wait1000();


// Add next Create Monthly Activity Report 
    //14/01/2024
    addNewTimeSheet.Attendance1().click({force: true});
    addNewTimeSheet.wait1000();
    //25/01/2024
    addNewTimeSheet.Attendance2().click({force: true});
    addNewTimeSheet.wait1000();
    //28/01/2024
    addNewTimeSheet.Attendance3().click({force: true});
    addNewTimeSheet.wait1000();



    //Application Submit Btn
    addNewTimeSheet.SubmitBtn().click();
    addNewTimeSheet.wait1000();


    
    
    
  }
}