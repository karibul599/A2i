import TimeSheetReject from '../Team/TimeSheedReject';

export default class TimeSheetRejectAction {
  constructor() {
    globalThis.timeSheetRejectAction = new TimeSheetReject();
    
  }

  performtimeSheetRejectAction() {
    
    //Click My Details Btn 
    timeSheetRejectAction.ClickTeamBtn().click();
    timeSheetRejectAction.wait1000();
    //Click TimeSheet Btn
    timeSheetRejectAction.ClickTimeSheetBtn().click({force: true});
    timeSheetRejectAction.wait1000();
    //click reject btn
    timeSheetRejectAction.clickReportBtn().click({force: true});
    timeSheetRejectAction.wait1000();
    //click reject btn
    timeSheetRejectAction.Reject().click({force: true});
    //timeSheetRejectAction.wait1000();
    
  }
}