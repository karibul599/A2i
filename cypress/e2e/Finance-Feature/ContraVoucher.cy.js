describe("A2i ContraVoucher", () => {
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
      cy.get('a[href="/finance/contra-voucher"]').click();
    }
    function a2iApplication() {
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-contra-voucher/app-contra-voucher-form-shell/app-contra-voucher-form/div/form/div[1]/div[1]/div[1]/mat-form-field/div[1]/div/div[2]/input"
      )
        .click()
        .xpath("/html/body/div[3]/div/div/div/mat-option[1]")
        .click();
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-contra-voucher/app-contra-voucher-form-shell/app-contra-voucher-form/div/form/div[1]/div[1]/div[2]/mat-form-field/div[1]/div/div[2]/input"
      )
        .click()
        .xpath("/html/body/div[3]/div/div/div/mat-option[1]")
        .click();
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-contra-voucher/app-contra-voucher-form-shell/app-contra-voucher-form/div/form/div[1]/div[1]/div[3]/mat-form-field/div[1]/div/div[2]/input"
      )
        .click()
        .xpath("/html/body/div[3]/div/div/div/mat-option[1]")
        .click();
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-contra-voucher/app-contra-voucher-form-shell/app-contra-voucher-form/div/form/div[1]/div[2]/div[1]/mat-form-field/div[1]/div/div[2]/input"
      )
        .click()
        .xpath("/html/body/div[3]/div/div/div/mat-option[1]")
        .click();
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-contra-voucher/app-contra-voucher-form-shell/app-contra-voucher-form/div/form/div[1]/div[2]/div[2]/mat-form-field/div[1]/div/div[2]/input"
      )
        .click()
        .xpath("/html/body/div[3]/div/div/div/mat-option[1]")
        .click();
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-contra-voucher/app-contra-voucher-form-shell/app-contra-voucher-form/div/form/div[1]/div[2]/div[3]/mat-form-field/div[1]/div/div[2]/input"
      )
        .click()
        .xpath("/html/body/div[3]/div/div/div/mat-option[1]")
        .click();
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-contra-voucher/app-contra-voucher-form-shell/app-contra-voucher-form/div/form/div[2]/mat-form-field/div[1]/div/div[2]/textarea"
      ).type("Write some thing new");

      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-contra-voucher/app-contra-voucher-form-shell/app-contra-voucher-form/div/form/div[3]/div[1]/mat-form-field/div[1]/div/div[3]/input"
      ).type("23000");
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-contra-voucher/app-contra-voucher-form-shell/app-contra-voucher-form/div/form/div[3]/div[2]/mat-form-field/div[1]/div/div[2]/input"
      ).type("Che-ytr3345");
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-contra-voucher/app-contra-voucher-form-shell/app-contra-voucher-form/div/form/div[3]/div[3]/mat-form-field/div[1]/div/div[2]/input"
      )
        .clear()
        .type("02/10/2024");
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-contra-voucher/app-contra-voucher-form-shell/app-contra-voucher-form/div/div/button[1]"
      ).click();
    }
  });
});
