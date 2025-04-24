import a2iLogin from "../../support/page_objects/a2iLogin";
import financeBtn from "../../support/page_objects/financeBtn";
import jourarAdjustment from "../../support/page_objects/journalAdjustment";
describe("A2i Journal Adjustment", () => {
  const login=new a2iLogin()
  const clickBtn=new financeBtn();
  const newJourarAdjustment=new jourarAdjustment();
  it("Login,FinanceBtn,ReceiveBtn,Receive- Application With no file(Cashbook),Receive- Application With no file(No Cashbook) ,", () => {
    
    login.visitA2iLoginPage();
    const username='jahanger.alam@a2i.gov.bd'
    const password='temp1234'
    login.visitKeycloakOriginToA2iUserLogin(username, password)
    login.delayMS(1000)
    clickBtn.clickA2iFinanceBtn()
    newJourarAdjustment.clickJourarAdjustment()
    newJourarAdjustment.newAdjustment()
    login.delayMS(1000)

    

    function a2iApplication() {
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-journal-adjustment/app-journal-adjustment-form-shell/app-journal-adjustment-form/div/div/div[1]/div[1]/mat-form-field/div[1]/div/div[2]/input"
      ).click();
      cy.xpath("/html/body/div[3]/div/div/div/mat-option[1]").click();

      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-journal-adjustment/app-journal-adjustment-form-shell/app-journal-adjustment-form/div/div/div[1]/div[2]/mat-form-field/div[1]/div/div[2]/input"
      ).click();
      cy.xpath("/html/body/div[3]/div/div/div/mat-option[4]").click();

      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-journal-adjustment/app-journal-adjustment-form-shell/app-journal-adjustment-form/div/div/div[3]/div/div/div/div[1]/mat-form-field/div[1]/div/div[2]/input"
      ).click();
      cy.xpath("/html/body/div[3]/div/div/div/mat-option[1]").click();

      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-journal-adjustment/app-journal-adjustment-form-shell/app-journal-adjustment-form/div/div/div[4]/div/div/div/div[1]/mat-form-field/div[1]/div/div[2]/input"
      )
        .click()
        .xpath("/html/body/div[3]/div/div/div/mat-option[1]")
        .click();
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-journal-adjustment/app-journal-adjustment-form-shell/app-journal-adjustment-form/div/div/div[4]/div/div/div/div[2]/mat-form-field/div[1]/div/div[2]/input"
      )
        .click()
        .xpath("/html/body/div[3]/div/div/div/mat-option[1]")
        .click();
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-journal-adjustment/app-journal-adjustment-form-shell/app-journal-adjustment-form/div/div/div[4]/div/div/div/div[3]/mat-form-field/div[1]/div/div[2]/input"
      )
        .click()
        .xpath("/html/body/div[3]/div/div/div/mat-option[2]")
        .click();
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-journal-adjustment/app-journal-adjustment-form-shell/app-journal-adjustment-form/div/div/div[4]/div/div/div/div[5]/mat-form-field/div[1]/div/div[2]/input"
      )
        .clear()
        .type("40000");
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-journal-adjustment/app-journal-adjustment-form-shell/app-journal-adjustment-form/div/div/div[4]/div/div/div/div[6]/mat-form-field/div[1]/div/div[2]/input"
      )
        .click()
        .xpath("/html/body/div[3]/div/div/div/mat-option[2]")
        .click();
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-journal-adjustment/app-journal-adjustment-form-shell/app-journal-adjustment-form/div/div/div[4]/div/div/div/div[7]/mat-form-field/div[1]/div/div[2]/input"
      )
        .click()
        .xpath("/html/body/div[3]/div/div/div/mat-option[2]")
        .click();
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-journal-adjustment/app-journal-adjustment-form-shell/app-journal-adjustment-form/div/div/div[4]/div/div/div/div[8]/mat-form-field/div[1]/div/div[2]/input"
      )
        .click()
        .type("Che-475")
        .click();

      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-journal-adjustment/app-journal-adjustment-form-shell/app-journal-adjustment-form/div/div/div[4]/div/div/div/div[9]/div/div/div/input"
      ).attachFile("download (3).jpg");
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-journal-adjustment/app-journal-adjustment-form-shell/app-journal-adjustment-form/div/div/div[5]/div[1]/mat-form-field/div[1]/div/div[2]/input"
      ).type("02/10/2024");
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-journal-adjustment/app-journal-adjustment-form-shell/app-journal-adjustment-form/div/div/div[5]/div[2]/mat-form-field/div[1]/div/div[2]/textarea"
      ).type("Write some thing");
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-journal-adjustment/app-journal-adjustment-form-shell/app-journal-adjustment-form/div/div/div[6]/button[1]"
      ).click();
    }
  });
});
