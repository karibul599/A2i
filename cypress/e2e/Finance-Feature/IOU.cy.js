import a2iLogin from "../../support/page_objects/a2iLogin";
import financeBtn from "../../support/page_objects/financeBtn";
import iOUUserRequest from "../../support/page_objects/iOUUserRequest";
describe("(Module: Finance(IOU)", () => {
  const login=new a2iLogin();
  const clickBtn=new financeBtn();
  const addNewIOURequest=new iOUUserRequest();
  it("Login,FinanceBtn,IOUBtn,IOURequest-(Create IOU Request,Approve IOU Request and view Approved IOU Request )", () => {
    login.visitA2iLoginPage()
    const username = [
      "jalal.ahmed@a2i.gov.bd",
      "jahanger.alam@a2i.gov.bd",
      "jalal.ahmed@a2i.gov.bd"
    ];
    const password='@#$12345Bmail'
    login.visitKeycloakOriginToA2iUserLogin(username[0], password)
    login.delayMS(1000)
    clickBtn.clickA2iFinanceBtn()
    addNewIOURequest.clickIOUHistoryBtn()
    addNewIOURequest.clickAddNewBtnToCreateNewIOURequest()
    addNewIOURequest.createNewIOURequest()
    login.delayMS(1000)
    addNewIOURequest.logoutBtn()
    login.delayMS(1000)
    login.visitKeycloakOriginToA2iUserLogin(username[1], password)
    login.delayMS(1000)
    clickBtn.clickA2iFinanceBtn()
    addNewIOURequest.clickIOURequestBTn()
    addNewIOURequest.clickFaviconToApproveOrRejectIOURequest()
    addNewIOURequest.approveIOURequest()
    login.delayMS(1000)
    addNewIOURequest.logoutBtn()
    login.delayMS(1000)
    login.visitKeycloakOriginToA2iUserLogin(username[2], password)
    login.delayMS(1000)
    clickBtn.clickA2iFinanceBtn()
    addNewIOURequest.clickIOUHistoryBtn()
    login.delayMS(1000)
    addNewIOURequest.viewApprovedOrRejectedFile()
    login.delayMS(2000)


    
  });
  it("Login,FinanceBtn,IOUBtn,IOURequest-(Create IOU Request,Reject IOU Request and view Rejected IOU Request )", () => {
    login.visitA2iLoginPage()
    const username = [
      "jalal.ahmed@a2i.gov.bd",
      "jahanger.alam@a2i.gov.bd",
      "jalal.ahmed@a2i.gov.bd"
    ];
    const password='@#$12345Bmail'
    login.visitKeycloakOriginToA2iUserLogin(username[0], password)
    login.delayMS(1000)
    clickBtn.clickA2iFinanceBtn()
    addNewIOURequest.clickIOUHistoryBtn()
    addNewIOURequest.clickAddNewBtnToCreateNewIOURequest()
    addNewIOURequest.createNewIOURequest()
    login.delayMS(1000)
    addNewIOURequest.logoutBtn()
    login.delayMS(1000)
    login.visitKeycloakOriginToA2iUserLogin(username[1], password)
    login.delayMS(1000)
    clickBtn.clickA2iFinanceBtn()
    addNewIOURequest.clickIOURequestBTn()
    addNewIOURequest.clickFaviconToApproveOrRejectIOURequest()
    login.delayMS(1000)
    addNewIOURequest.rejectIOURequest()
    addNewIOURequest.logoutBtn()
    login.delayMS(1000)
    login.visitKeycloakOriginToA2iUserLogin(username[2], password)
    login.delayMS(1000)
    clickBtn.clickA2iFinanceBtn()
    addNewIOURequest.clickIOUHistoryBtn()
    login.delayMS(1000)
    addNewIOURequest.viewApprovedOrRejectedFile()
    login.delayMS(2000)

  });
});
describe('(Module: Finance(IOU)',()=>{
  const login=new a2iLogin();
  const clickBtn=new financeBtn();
  const addNewIOURequest=new iOUUserRequest();
  it('',()=>{
    login.visitA2iLoginPage()
    const username = [
      "jahanger.alam@a2i.gov.bd",
      "rakib.younus@a2i.gov.bd"
    ];
    const password='@#$12345Bmail'
    login.visitKeycloakOriginToA2iUserLogin(username[0], password)
    login.delayMS(1000)
    clickBtn.clickA2iFinanceBtn()
    addNewIOURequest.clickIOUBtn()
    addNewIOURequest.clickAddNewBtnToCreateNewIOURequest()
    addNewIOURequest.createNewIOURequestWithApproved()
    addNewIOURequest.OpenActionFormAndAdjestmentOfIOURequest()
    addNewIOURequest.DownloadIOURequestFile()
    addNewIOURequest.logoutBtn()
    login.visitKeycloakOriginToA2iUserLogin(username[1], password)
    login.delayMS(1000)
    clickBtn.clickA2iFinanceBtn()
    addNewIOURequest.clickIOUBtn()



  })
})