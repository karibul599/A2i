describe("A2i Journal Adjustment", () => {
  it("Login,FinanceBtn,ReceiveBtn,Receive- Application With no file(Cashbook),Receive- Application With no file(No Cashbook) ,", () => {
    a2iLogin();
    a2iFinanceBtn();
    a2iPaymentBtn();
    a2iApplication();

    function a2iLogin() {
      cy.visit("http://localhost:4200/");
      cy.origin("http://192.168.30.123:8080", () => {
        cy.get('input[name="username"]').type("jahanger.alam@a2i.gov.bd");
        cy.get('input[name="password"]').type("@#$12345Bmail");
        cy.get("#kc-login").should("exist").and("be.visible").click();
      });
      cy.wait(5000);
      cy.visit("http://localhost:4200/");
      cy.wait(1000);
    }

    function a2iFinanceBtn() {
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/aside/nav/div/div/div[2]/mat-nav-list/div[5]/div[1]"
      ).click();
    }

    function a2iPaymentBtn() {
      cy.get('a[href="/finance/journal-adjustment-list"]').click();
    }

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
