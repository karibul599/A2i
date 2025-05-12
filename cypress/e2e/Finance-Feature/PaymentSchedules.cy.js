import a2iLogin from "../../support/page_objects/a2iLogin";
import financeBtn from "../../support/page_objects/financeBtn";
import paymentSchedules from "../../support/page_objects/Team/paymentSchedules";
describe("Module: Finance (Payment Schedules)", () => {
  const login=new a2iLogin();
  const clickBtn=new financeBtn();
  const addPaymentSchedules=new paymentSchedules();
  it("Login,FinanceBtn,ReceiveBtn,Receive- Application With no file(Cashbook),Receive- Application With no file(No Cashbook) ,", () => {
    login.visitA2iLoginPage();
    const username='jahanger.alam@a2i.gov.bd'
    const password='12345#Kmail'
    login.visitKeycloakOriginToA2iUserLogin(username, password)
    login.delayMS(1000)
    clickBtn.clickA2iFinanceBtn()
    addPaymentSchedules.clickPaymentSchedulesBtn()
    addPaymentSchedules.filterPaymentSchedules()
    
  });
});
