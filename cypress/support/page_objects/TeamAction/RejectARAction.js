import RejectAR from '../Team/RejectAR';

export default class RejectARAction {
  constructor() {
    globalThis.rejectARAction = new RejectAR();
    
  }

  performrejectARAction() {
    
    //Click My Details Btn 
    rejectARAction.ClickTeamBtn().click();
    rejectARAction.wait1000();
    //Click Activity Report Btn
    rejectARAction.ClickTeamActivityReportBtn().click();
    rejectARAction.wait1000();
    //Click Application Select Btn 
    rejectARAction.ClickApplicationSelectBtn().click();
    rejectARAction.wait1000();
    //click ApproveBtn
    rejectARAction.clickApplicationViewBtn().click();
    rejectARAction.wait1000();
    rejectARAction.wait1000();
     //Remark
    rejectARAction.ClickRejectBtn().click();
    rejectARAction.wait1000();
    rejectARAction.wait1000();
    
    
  }
}