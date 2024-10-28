import RetainAR from '../Team/RetainAR';

export default class RetainARAction {
  constructor() {
    globalThis.retainARAction = new RetainAR();
    
  }

  performretainARAction(Remark) {
    
    //Click My Details Btn 
    retainARAction.ClickTeamBtn().click();
    retainARAction.wait1000();
    //Click Activity Report Btn
    retainARAction.ClickTeamActivityReportBtn().click();
    retainARAction.wait1000();
    //Click Application Select Btn 
    retainARAction.ClickApplicationSelectBtn().click();
    retainARAction.wait1000();
    //click ApproveBtn
    retainARAction.clickRetainBtn().click();
    retainARAction.wait1000();
     //Remark
     retainARAction.Remark().type(Remark);
     retainARAction.wait1000();
    //click Confirm Approve Btn
    retainARAction.clickSubmitBtn().click({force: true});
    retainARAction.wait1000();
    
  }
}