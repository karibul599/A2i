import a2iLogin from "../../support/page_objects/a2iLogin";
import financeBtn from "../../support/page_objects/financeBtn";
import ContraVoucher from "../../support/page_objects/contraVoucher";
describe("A2i ContraVoucher", () => {
  const login=new a2iLogin()
  const clickBtn=new financeBtn();
  const createContraVoucher=new ContraVoucher();
  it("Login,FinanceBtn,ContraVoucher,make ContraVoucher ,", () => {
    login.visitA2iLoginPage();
    const username='jahanger.alam@a2i.gov.bd'
    const password='temp1234'
    login.visitKeycloakOriginToA2iUserLogin(username, password)
    login.delayMS(1000)
    clickBtn.clickA2iFinanceBtn()
    createContraVoucher.clickContraVoucherBtn()
    login.delayMS(1000)
    createContraVoucher.addContraVoucher()
  
  });
});
