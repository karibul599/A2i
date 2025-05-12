import a2iLogin from "../../support/page_objects/a2iLogin";
import financeBtn from "../../support/page_objects/financeBtn";
import mobaileBill from "../../support/page_objects/mobaileBill";
describe("Module: Finance(Mobile Bill)", () => {
  const login=new a2iLogin();
  const clickBtn=new financeBtn();
  const makeMobaileBill=new mobaileBill();
  it("Login,FinanceBtn,Mobile Bill, make Mobile Bill,", () => {
    login.visitA2iLoginPage();
    const username='jahanger.alam@a2i.gov.bd'
    const password='12345#Kmail'
    login.visitKeycloakOriginToA2iUserLogin(username, password)
    login.delayMS(1000)
    clickBtn.clickA2iFinanceBtn()
    login.delayMS(1000)
    makeMobaileBill.clickmobaileBillBtn()
    login.delayMS(1000)
    makeMobaileBill.payMobileBill()
    login.delayMS(2000)
  });
});
