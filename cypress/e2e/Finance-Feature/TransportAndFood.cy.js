import a2iLogin from "../../support/page_objects/a2iLogin";
import financeBtn from "../../support/page_objects/financeBtn";
import transportAndFood from "../../support/page_objects/transportAndFood";
describe("Module: Finance(Transport And Food)", () => {
  const login=new a2iLogin();
  const clickBtn=new financeBtn();
  const payTransportAndFoodBill=new transportAndFood();
  it("Login,FinanceBtn,Mobile Bill, make Mobile Bill,", () => {
    login.visitA2iLoginPage();
    const username='jahanger.alam@a2i.gov.bd'
    const password='12345#Kmail'
    login.visitKeycloakOriginToA2iUserLogin(username, password)
    // login.delayMS(1000)
    // clickBtn.clickA2iFinanceBtn()
    login.delayMS(1000)
    payTransportAndFoodBill.clickApplicationBtn()
    payTransportAndFoodBill.clickApplicationSectionTransportAndFoodBtn()
    payTransportAndFoodBill.createFoodBill()
    payTransportAndFoodBill.submitbtn()
    login.delayMS(1000)
    clickBtn.clickA2iFinanceBtn()
    login.delayMS(1000)
    payTransportAndFoodBill.clickFianceSectionTransportAndFoodBtn()
    payTransportAndFoodBill.approveTransportAndFoodRecieved()

  })
})