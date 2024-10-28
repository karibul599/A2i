import TimeSheetApprove from '../Team/TimeSheetApprove';

export default class TimeSheetApproveAction {
  constructor() {
    globalThis.timeSheetApproveAction = new TimeSheetApprove();
    
  }

  performtimeSheetApproveAction() {
    
    //Click My Details Btn 
    timeSheetApproveAction.ClickTeamBtn().click();
    timeSheetApproveAction.wait1000();
    //Click Activity Report Btn
    timeSheetApproveAction.ClickTimeSheetBtn().click();
    timeSheetApproveAction.wait1000();
    //Click Application Select Btn 
    timeSheetApproveAction.ClickApplicationSelectBtn().click();
    timeSheetApproveAction.wait1000();
    //click ApproveBtn
    timeSheetApproveAction.clickApproveBtn().click();
    timeSheetApproveAction.wait1000();
    //click Confirm Approve Btn
    timeSheetApproveAction.clickConfirmApproveBtn().click({force: true});
    timeSheetApproveAction.wait1000();
    
  }
}