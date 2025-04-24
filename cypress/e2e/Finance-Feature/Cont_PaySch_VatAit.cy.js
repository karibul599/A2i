import a2iLogin from "../../support/page_objects/a2iLogin";
import financeBtn from "../../support/page_objects/financeBtn";
import contractManagement from "../../support/page_objects/contractManagement";
import paymentSchedules from "../../support/page_objects/Team/paymentSchedules";
import vatAit from "../../support/page_objects/vatAit";
describe('(Module: Finance(Contract Management,Payment Schedules, VAT, AIT)',()=>{
    const login=new a2iLogin();
    const clickBtn=new financeBtn();
    const addContractManagement =new contractManagement();
    const addPaymentSchedules=new paymentSchedules();
    const makePaymentVatAit=new vatAit();
    it('Process flow of Agreement an contract, payment of this contract and VAT, AIT',()=>{
   
    const firstNames = ["Alice", "Bob", "Charlie", "Diana", "Ethan", "Fiona"];
    const lastNames = ["Smith", "Johnson", "Brown", "Williams", "Jones", "Davis"];
    function generateRandomName() {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    return `${firstName} ${lastName}`;
    }
    const randomName = generateRandomName()

    function generatePackageTitle() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let title = '';
        for (let i = 0; i < 5; i++) {
            title += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return title;
    }
    const packageTitle = generatePackageTitle()
    function generateReferenceNo() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let refNo = '';
        for (let i = 0; i < 5; i++) {
            refNo += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return refNo;
    }
    const referenceNo = generateReferenceNo()
    login.visitA2iLoginPage()
    const username ="jahanger.alam@a2i.gov.bd";
    const password='temp1234';
    login.visitKeycloakOriginToA2iUserLogin(username, password)
    login.delayMS(1000)
    clickBtn.clickA2iFinanceBtn()
    addContractManagement.clickContractManagmentBtn();
    addContractManagement.clickAddNewBtn()
    addContractManagement.addNewContractManagement(randomName,packageTitle,referenceNo)
    login.delayMS(2000)
    addPaymentSchedules.clickPaymentSchedulesBtn()
    addPaymentSchedules.filterPaymentSchedules()
    login.delayMS(2000)
    makePaymentVatAit.clickVatAitBtn()
    const paymentName= [' VAT ',' AIT '];
    for (let i = 0; i < paymentName.length; i++) {
    const a=paymentName[i]
    makePaymentVatAit.vatFilter(a)
    makePaymentVatAit.vatPayment()
    login.delayMS(2000)
    makePaymentVatAit.clickVatAitBtn()
    }
    login.delayMS(2000)


    })
})