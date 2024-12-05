import a2iLogin from "../../support/page_objects/a2iLogin"
import personalInfo from "../../support/page_objects/personalInfo";
describe('Module name: My Account',()=>{
    const login=new a2iLogin();
    const profile= new personalInfo();
    it('A2i user existing profile Update',()=>{
        login.visitA2iLoginPage()
        const username='jalal.ahmed@a2i.gov.bd'
        const password='@#$12345Bmail'
        login.visitKeycloakOriginToA2iUserLogin(username, password)
        login.delayMS(1000)
        profile.clickMyAccountbtn()
        profile.clickPersonalInfobtn()
        profile.updateEditAbleForm()
        profile.checkBoxValodation()
        profile.uploadProfilePictureAndSignature()
        profile.clickUpdateBtn()

    })
})