import a2iLogin from "../../support/page_objects/a2iLogin";
import exitClearance from "../../support/page_objects/exitClearance";
import transportAndFood from "../../support/page_objects/transportAndFood";
import exitClearanceApplication from "../../support/page_objects/exitClearanceApplication";
describe('Event Payment Request', ()=>{
    const login=new a2iLogin();
    const payTransportAndFoodBill=new transportAndFood();
    const ExitClearanceApplication=new exitClearanceApplication();
    it('Add new Event Payment Request', ()=>{
        login.visitA2iLoginPage()
        const username='jahanger.alam@a2i.gov.bd'
        const password='12345#Kmail'
        login.visitKeycloakOriginToA2iUserLogin(username, password)
        payTransportAndFoodBill.clickApplicationBtn()
        ExitClearanceApplication.applicationForExitClearanceApplication()

    })
})
describe(" Exit Clearance ", () => {
  const login = new a2iLogin(); //********/
  const ExitClearance = new exitClearance();
  it('Exit Clearance Approved',()=>{
    login.visitA2iLoginPage()
    const username='jalal.ahmed@a2i.gov.bd'
    const password='12345#Kmail'
    login.visitKeycloakOriginToA2iUserLogin(username, password)
    ExitClearance.clickMyTaskBtn()
    ExitClearance.processapplication()

  })
});
