import RegApprovePage from '../../../../page_objects/AdminLogin/Employees/RegApprove/RegApprovePage.js';
export default class RegApprovePageAction {
   
        constructor() {
          globalThis.regApprovePageAction = new RegApprovePage();
          
        }
      
        performLoginBasicInformation(){
            //Employees Btn
            regApprovePageAction.EmployeesBtn().click();
            regApprovePageAction.wait1000();
            //Reg. Approval Btn
            regApprovePageAction.RegApproveBtn().click();
            regApprovePageAction.wait1000();
        }


}