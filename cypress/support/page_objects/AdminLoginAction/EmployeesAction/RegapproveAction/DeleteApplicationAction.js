import DeleteApplication from '../../../../page_objects/AdminLogin/Employees/RegApprove/DeleteApplication.js';
export default class DeleteApplicationAction {
   
        constructor() {
          globalThis.deleteApplicationAction = new DeleteApplication();
          
        }
      
        performdeleteApplicationAction(){
            //Employees Btn
            deleteApplicationAction.ClickDeleteBtn().click();
            deleteApplicationAction.wait1000();
            //Reg. Approval Btn
            deleteApplicationAction.ClickToSureDeleteBtn().should('be.visible').click({force: true});
            deleteApplicationAction.wait1000();
        }


}