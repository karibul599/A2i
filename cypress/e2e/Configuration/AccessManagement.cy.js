import a2iLogin from "../../support/page_objects/a2iLogin"
import accessManagement from "../../support/page_objects/accessManagement";
describe('Module name: Access Management',()=>{
    const login = new a2iLogin();
    const AccessManagement = new accessManagement();
    
    it('All type of access',()=>{
        login.visitA2iLoginPage()
        const username='jahanger.alam@a2i.gov.bd'
        const password='12345#Kmail'
        login.visitKeycloakOriginToA2iUserLogin(username, password)
        login.delayMS(1000)
        AccessManagement.AccessManagement()

    })
})