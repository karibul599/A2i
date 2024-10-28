import TimeSheetRetain from '../Team/TimeSheetRetain';

export default class TimeSheetRetainAction {
  constructor() {
    globalThis.timeSheetRetainAction = new TimeSheetRetain();
    
  }

  performtimeSheetRetainAction(Status) {
    
    //Click My Details Btn 
    timeSheetRetainAction.ClickTeamBtn().click();
    timeSheetRetainAction.wait1000();
    //Click Activity Report Btn
    timeSheetRetainAction.ClickTimeSheetBtn().click();
    timeSheetRetainAction.wait1000();
    //Click Application Select Btn 
    timeSheetRetainAction.ClickApplicationSelectBtn().click({force: true});
    timeSheetRetainAction.wait1000();
    //click Retain Btn
    timeSheetRetainAction.clickRetainBtn().click({force: true});
    timeSheetRetainAction.wait1000();
    //Remark
    timeSheetRetainAction.Remark().click({force: true}).type(Status);
    timeSheetRetainAction.wait1000();
    //Submit
    timeSheetRetainAction.Submit().click({force: true});
    timeSheetRetainAction.wait1000();
    
  }
}