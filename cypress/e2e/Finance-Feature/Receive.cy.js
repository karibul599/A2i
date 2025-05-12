import a2iLogin from "../../support/page_objects/a2iLogin"
import receive from "../../support/page_objects/receive";
import financeBtn from "../../support/page_objects/financeBtn";
describe("(Module: Finance(Receive)", () => {
  const login=new a2iLogin();
  const createReceive=new receive();
  const clickBtn=new financeBtn();
  it("Login,FinanceBtn,ReceiveBtn,Receive- Application With file(Cashbook),Receive- Application submit ,", () => {
    login.visitA2iLoginPage();
    const username='jahanger.alam@a2i.gov.bd'
    const password='12345#Kmail'
    login.visitKeycloakOriginToA2iUserLogin(username, password)
    login.delayMS(1000)
    clickBtn.clickA2iFinanceBtn()
    createReceive.clickA2iReceiveBtn()
    login.delayMS(1000)
    createReceive.fillupReceiveform()
    createReceive.uploadfile()
    login.delayMS(1000)
    createReceive.clickSubmutReceiveBtn()
    login.delayMS(1000)
  });
  it("Login,FinanceBtn,ReceiveBtn,Receive- Application With no file(Cashbook),Receive- Application Save and Retain ,", () => {
    login.visitA2iLoginPage();
    const username='jahanger.alam@a2i.gov.bd'
    const password='12345#Kmail'
    login.visitKeycloakOriginToA2iUserLogin(username, password)
    login.delayMS(1000)
    clickBtn.clickA2iFinanceBtn()
    createReceive.clickA2iReceiveBtn()
    createReceive.fillupReceiveform()
    createReceive.clickSaveandRetain()
    login.delayMS(1000)
  });
  it("Login,FinanceBtn,ReceiveBtn,Receive- Application With no file(Cashbook),Receive- Application Reset ,", () => {
    login.visitA2iLoginPage();
    const username='jahanger.alam@a2i.gov.bd'
    const password='12345#Kmail'
    login.visitKeycloakOriginToA2iUserLogin(username, password)
    login.delayMS(1000)
    clickBtn.clickA2iFinanceBtn()
    createReceive.clickA2iReceiveBtn()
    createReceive.fillupReceiveform()
    createReceive.clickResetBtn()
  });
});
