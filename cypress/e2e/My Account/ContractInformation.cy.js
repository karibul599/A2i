import a2iLogin from "../../support/page_objects/a2iLogin"
import personalInfo from "../../support/page_objects/personalInfo";
import contractInformation from "../../support/page_objects/contractInformation";
describe('Module name: My Account',()=>{
    const login = new a2iLogin();
    const profile = new personalInfo();
    const ContractInformation = new contractInformation();
    it('A2i user existing profile Update',()=>{
        login.visitA2iLoginPage()
        const username='jalal.ahmed@a2i.gov.bd'
        const password='12345#Kmail'
        login.visitKeycloakOriginToA2iUserLogin(username, password)
        login.delayMS(1000)
        profile.clickMyAccountbtn()
        ContractInformation.addMissingContractInformation()
        

    })
})