import RejectAndRetainConfirm from '../My Deteils/RejectAndRetainConfirm';

export default class RejectAndRetainConfirmAction {
  constructor() {
    globalThis.rejectAndRetainConfirm = new RejectAndRetainConfirm();
    
  }

  performrejectAndRetainConfirm() {
    
    
    //Click My Details Btn 
    rejectAndRetainConfirm.ClickMyDetailsBtn().click();
    rejectAndRetainConfirm.wait1000();
    //Click Activity Report Btn
    rejectAndRetainConfirm.ClickActivityReportBtn().click().scrollIntoView();
    rejectAndRetainConfirm.wait1000();
    


    
    
    
  }
}