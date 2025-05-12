import a2iLogin from "../../support/page_objects/a2iLogin";
import leaveHistory from "../../support/page_objects/LeaveHistory";
describe('Event Payment Request', ()=>{
    const login=new a2iLogin();
    const LeaveHistorygin=new leaveHistory();
    
    it('Add new Event Payment Request', ()=>{
        login.visitA2iLoginPage()
        const username='jahanger.alam@a2i.gov.bd'
        const password='12345#Kmail'
        login.visitKeycloakOriginToA2iUserLogin(username, password)
        LeaveHistorygin.ClickMyDetailsBtn()
        LeaveHistorygin.ClickActivityReportBtn()
        

    })
})