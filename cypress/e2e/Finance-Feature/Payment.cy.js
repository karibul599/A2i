import a2iLogin from "../../support/page_objects/a2iLogin";
import financeBtn from "../../support/page_objects/financeBtn";
import payment from "../../support/page_objects/payment";
describe("(Module: Finance(Payment)", () => {
  const login=new a2iLogin();
  const clickBtn=new financeBtn();
  const paymentForm=new payment();
  it("Login,FinanceBtn,PaymentBtn,Payment-(Individual Payment,Vendor Payment)", () => {
    login.visitA2iLoginPage();
    const username='jahanger.alam@a2i.gov.bd'
    const password='@#$12345Bmail'
    login.visitKeycloakOriginToA2iUserLogin(username, password)
    login.delayMS(1000)
    clickBtn.clickA2iFinanceBtn()
    paymentForm.clickA2iPaymentBtn()
    const paymentType = [
      " Non PO Payment ",
      " Individual Payment ",
      " Vendor Payment ",
      " Cash Advance ",
      " VAT ",
      " AIT ",
      " Cost Center "
    ];
    for (let i = 0; i < paymentType.length; i++) {
    const paymentName=paymentType[i]
    paymentForm.payType()
    paymentForm.fillupPaymentForm(paymentName)
    paymentForm.uploadAttachment()
    login.delayMS(1000)
    paymentForm.clickSubmitBtn()
    login.delayMS(2000)
    paymentForm.clickResetBtn()
    }

  });
});
