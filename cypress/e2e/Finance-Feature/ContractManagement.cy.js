import a2iLogin from "../../support/page_objects/a2iLogin";
import financeBtn from "../../support/page_objects/financeBtn";
import contractManagement from "../../support/page_objects/contractManagement";
describe('(Module: Finance(Contract Management)',()=>{
    const login=new a2iLogin();
    const clickBtn=new financeBtn();
    const addContractManagement =new contractManagement();
    it('',()=>{
   
    const firstNames = ["Alice", "Bob", "Charlie", "Diana", "Ethan", "Fiona"];
    const lastNames = ["Smith", "Johnson", "Brown", "Williams", "Jones", "Davis"];
    function generateRandomName() {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    return `${firstName} ${lastName}`;
    }
    const randomName = generateRandomName()
    login.visitA2iLoginPage()
    const username ="jahanger.alam@a2i.gov.bd";
    const password='@#$12345Bmail';
    login.visitKeycloakOriginToA2iUserLogin(username, password)
    login.delayMS(1000)
    clickBtn.clickA2iFinanceBtn()
    addContractManagement.clickContractManagmentBtn();
    addContractManagement.clickAddNewBtn()
    addContractManagement.addNewContractManagement(randomName)
    login.delayMS(1000)
    })
})
