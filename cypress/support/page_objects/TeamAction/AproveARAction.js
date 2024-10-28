import AproveAR from '../Team/AproveAR';

export default class AproveARtAction {
  constructor() {
    globalThis.aproveARtAction = new AproveAR();
    
  }

  performaproveARtAction() {
    
    //Click My Details Btn 
    aproveARtAction.ClickTeamBtn().click();
    aproveARtAction.wait1000();
    //Click Activity Report Btn
    aproveARtAction.ClickTeamActivityReportBtn().click();
    aproveARtAction.wait1000();
    //Click Application Select Btn 
    aproveARtAction.ClickApplicationSelectBtn().click();
    aproveARtAction.wait1000();
    //click ApproveBtn
    aproveARtAction.clickApproveBtn().click();
    aproveARtAction.wait1000();
    //click Confirm Approve Btn
    aproveARtAction.clickConfirmApproveBtn().click({force: true});
    aproveARtAction.wait1000();
    
  }
}