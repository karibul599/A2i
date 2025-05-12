import a2iLogin from "../../support/page_objects/a2iLogin"
import personalInfo from "../../support/page_objects/personalInfo";
import contractInformation from "../../support/page_objects/contractInformation";
import employeeList from "../../support/page_objects/employeeList";
describe('Module name: My Account>>Contract Info Reg',()=>{
    const login = new a2iLogin();
    const profile = new personalInfo();
    const ContractInformation = new contractInformation();
    it('Add Missing Contract Information',()=>{
        login.visitA2iLoginPage()
        const username='jahanger.alam@a2i.gov.bd'
        const password='12345#Kmail'
        login.visitKeycloakOriginToA2iUserLogin(username, password)
        login.delayMS(1000)
        profile.clickMyAccountbtn()
        ContractInformation.addMissingContractInformation()
    })
})

describe('Module name: Employees>> Contract Information',()=>{
    const login=new a2iLogin();
    const EmployeeList = new employeeList();
    it('Contract Information Approve',()=>{
        login.visitA2iLoginPage()
        const username='jahanger.alam@a2i.gov.bd'
        const password='12345#Kmail'
        login.visitKeycloakOriginToA2iUserLogin(username, password)
        EmployeeList.ContractInfoReg()
    })
})