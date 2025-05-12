import a2iLogin from "../../support/page_objects/a2iLogin";
import financeBtn from "../../support/page_objects/financeBtn";
import vatAit from "../../support/page_objects/vatAit";
describe("A2i Finance-Feature(VAT/AIT)", () => {
  const login=new a2iLogin();
  const clickBtn=new financeBtn();
  const makePaymentVatAit=new vatAit();
  it("VAT ,", () => {

    login.visitA2iLoginPage();
    const username='jahanger.alam@a2i.gov.bd'
    const password='12345#Kmail'
    login.visitKeycloakOriginToA2iUserLogin(username, password)
    login.delayMS(1000)
    clickBtn.clickA2iFinanceBtn()
    makePaymentVatAit.clickVatAitBtn()
    const paymentName= [' VAT ',' AIT '];
    for (let i = 0; i < paymentName.length; i++) {
    const a=paymentName[i]
    makePaymentVatAit.vatFilter(a)
    makePaymentVatAit.vatPayment()
    login.delayMS(2000)
    makePaymentVatAit.clickVatAitBtn()
    }
  });
});
