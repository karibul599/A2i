import a2iLogin from "../../support/page_objects/a2iLogin";
import employeeList from "../../support/page_objects/employeeList";
describe('',()=>{
    const login=new a2iLogin();
    const EmployeeList = new employeeList();
    it('',()=>{
        login.visitA2iLoginPage()
        const username='jahanger.alam@a2i.gov.bd'
        const password='12345#Kmail'
        login.visitKeycloakOriginToA2iUserLogin(username, password)
        EmployeeList.employList()
        
        
    })
})