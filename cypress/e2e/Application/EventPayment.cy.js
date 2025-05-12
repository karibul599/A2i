import a2iLogin from "../../support/page_objects/a2iLogin";
import transportAndFood from "../../support/page_objects/transportAndFood";
import evenPaymentRequest from "../../support/page_objects/evenPaymentRequest";
describe('Event Payment Request', ()=>{
    const login=new a2iLogin();
    const payTransportAndFoodBill=new transportAndFood();
    const EvenPaymentRequest=new evenPaymentRequest();
    it('Add new Event Payment Request', ()=>{
        login.visitA2iLoginPage()
        const username='jahanger.alam@a2i.gov.bd'
        const password='12345#Kmail'
        login.visitKeycloakOriginToA2iUserLogin(username, password)
        payTransportAndFoodBill.clickApplicationBtn()
        EvenPaymentRequest.addNewEvenPaymentRequest()

    })
})