describe("A2i Payment application", () => {
  it("Login,FinanceBtn,ReceiveBtn,Receive- Application With no file(Cashbook),Receive- Application With no file(No Cashbook) ,", () => {
    a2iLogin();
    a2iFinanceBtn();
    a2iPaymentBtn();
    a2iPaymentApplication();
    a2iAdjustmentBtn();
    a2iAdjustment();

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
      cy.wait(5000);
    }

    function a2iPaymentBtn() {
      cy.get('a[href="/finance/payment"]').click();
      cy.wait(1000);
    }
    function a2iPaymentApplication() {
      cy.contains("Cashbook");

      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[1]/div[2]/mat-form-field/div[1]/div/div[2]/input"
      ).click();
      cy.xpath("/html/body/div[3]/div/div/div/mat-option[3]").click();
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[1]/div[3]/mat-form-field/div[1]/div/div[2]/input"
      ).type("06/10/2024");
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[1]/div[4]/mat-form-field/div[1]/div/div[2]/input"
      ).click();
      cy.xpath("/html/body/div[3]/div/div/div/mat-option[1]").click();
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[1]/div[5]/mat-form-field/div[1]/div/div[2]/input"
      ).click();
      cy.xpath("/html/body/div[3]/div/div/div/mat-option[1]").click();
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[1]/div[6]/mat-form-field/div[1]/div/div[2]/input"
      ).click();
      cy.xpath("/html/body/div[3]/div/div/div/mat-option[1]").click();
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[1]/div[7]/mat-form-field/div[1]/div/div[2]/input"
      ).type("New Nothi");
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[1]/div[8]/mat-form-field/div[1]/div/div[2]/input"
      ).type("NTI-12345");
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[1]/div[9]/mat-form-field/div[1]/div/div[2]/input"
      ).type("01/10/2024");
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[1]/div[10]/mat-form-field/div[1]/div/div[2]/input"
      ).type("03/10/2024");
      cy.contains("Cheque");
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[1]/div[12]/mat-form-field/div[1]/div/div[2]/input"
      ).type("Ref- Karibul Hasan");
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[1]/div[13]/mat-form-field/div[1]/div/div[2]/textarea"
      ).type("Payment cash");
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[2]/div[1]/mat-form-field/div[1]/div/div[2]/input"
      ).click();
      cy.xpath("/html/body/div[3]/div/div/div/mat-option[2]").click();
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[2]/div[2]/mat-form-field/div[1]/div/div[2]/input"
      ).click();
      cy.xpath("/html/body/div[3]/div/div/div/mat-option[1]").click();
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[3]/div/div[1]/div[1]/mat-form-field/div[1]/div/div[2]/input"
      )
        .clear()
        .click();
      cy.xpath("/html/body/div[3]/div/div/div/mat-option[2]").click();
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[3]/div/div[1]/div[2]/mat-form-field/div[1]/div/div[3]/input"
      ).type("25000");
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[3]/div/div[2]/div[1]/mat-slide-toggle/div/button"
      ).click();
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[3]/div/div[4]/input"
      ).attachFile("download.jpg");
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[4]/button[1]"
      ).click();
    }

    function a2iAdjustmentBtn() {
      cy.get('a[href="/finance/journal-adjustment-list"]').click();
      cy.wait(5000);
    }

    function a2iAdjustment() {
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-journal-adjustment/app-journal-adjustment-form-shell/app-journal-adjustment-form/div/div/div[1]/div[1]/mat-form-field/div[1]/div/div[2]/input"
      ).click();
      cy.xpath("/html/body/div[3]/div/div/div/mat-option[1]").click();

      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-journal-adjustment/app-journal-adjustment-form-shell/app-journal-adjustment-form/div/div/div[1]/div[2]/mat-form-field/div[1]/div/div[2]/input"
      ).click();
      cy.xpath("/html/body/div[3]/div/div/div/mat-option[3]").click();

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
        .type("15750");
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
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-journal-adjustment/app-journal-adjustment-form-shell/app-journal-adjustment-form/div/div/div[4]/div[1]/div/div/div[4]/button"
      ).click();
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-journal-adjustment/app-journal-adjustment-form-shell/app-journal-adjustment-form/div/div/div[4]/div[2]/div/div/div[1]/mat-form-field/div[1]/div/div[2]/input"
      )
        .click()
        .xpath("/html/body/div[3]/div/div/div/mat-option[1]")
        .click();
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-journal-adjustment/app-journal-adjustment-form-shell/app-journal-adjustment-form/div/div/div[4]/div[2]/div/div/div[2]/mat-form-field/div[1]/div/div[2]/input"
      )
        .click()
        .xpath("/html/body/div[3]/div/div/div/mat-option[3]")
        .click();
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-journal-adjustment/app-journal-adjustment-form-shell/app-journal-adjustment-form/div/div/div[4]/div[2]/div/div/div[3]/mat-form-field/div[1]/div/div[2]/input"
      )
        .click()
        .xpath("/html/body/div[3]/div/div/div/mat-option[1]")
        .click();
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-journal-adjustment/app-journal-adjustment-form-shell/app-journal-adjustment-form/div/div/div[4]/div[2]/div/div/div[5]/mat-form-field/div[1]/div/div[2]/input"
      )
        .clear()
        .type("3000");

      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-journal-adjustment/app-journal-adjustment-form-shell/app-journal-adjustment-form/div/div/div[4]/div[2]/div/div/div[6]/mat-form-field/div[1]/div/div[2]/input"
      )
        .click()
        .xpath("/html/body/div[3]/div/div/div/mat-option[1]")
        .click();
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-journal-adjustment/app-journal-adjustment-form-shell/app-journal-adjustment-form/div/div/div[4]/div[2]/div/div/div[7]/mat-form-field/div[1]/div/div[2]/input"
      )
        .click()
        .xpath("/html/body/div[3]/div/div/div/mat-option[1]")
        .click();
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-journal-adjustment/app-journal-adjustment-form-shell/app-journal-adjustment-form/div/div/div[4]/div[2]/div/div/div[8]/mat-form-field/div[1]/div/div[2]/input"
      )
        .click()
        .type("Che-566");
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-journal-adjustment/app-journal-adjustment-form-shell/app-journal-adjustment-form/div/div/div[4]/div[2]/div/div/div[9]/div/div/div/input"
      ).attachFile("download (3).jpg");

      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-journal-adjustment/app-journal-adjustment-form-shell/app-journal-adjustment-form/div/div/div[6]/button[1]"
      ).click();
    }
  });
});

describe("A2i Payment application", () => {
  it("Login,FinanceBtn,ReceiveBtn,Receive- Application With no file(Cashbook),Receive- Application With no file(No Cashbook) ,", () => {
    a2iLogin();
    a2iFinanceBtn();
    a2iPaymentBtn();
    a2iPaymentApplication();
    a2iAdjustmentBtn();
    a2iAdjustment();

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
      cy.wait(5000);
    }

    function a2iPaymentBtn() {
      cy.get('a[href="/finance/payment"]').click();
      cy.wait(1000);
    }
    function a2iPaymentApplication() {
      cy.contains("Cashbook");

      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[1]/div[2]/mat-form-field/div[1]/div/div[2]/input"
      ).click();
      cy.xpath("/html/body/div[3]/div/div/div/mat-option[6]").click();
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[1]/div[3]/mat-form-field/div[1]/div/div[2]/input"
      ).type("06/10/2024");
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[1]/div[4]/mat-form-field/div[1]/div/div[2]/input"
      ).click();
      cy.xpath("/html/body/div[3]/div/div/div/mat-option[1]").click();
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[1]/div[5]/mat-form-field/div[1]/div/div[2]/input"
      ).click();
      cy.xpath("/html/body/div[3]/div/div/div/mat-option[1]").click();
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[1]/div[6]/mat-form-field/div[1]/div/div[2]/input"
      ).click();
      cy.xpath("/html/body/div[3]/div/div/div/mat-option[1]").click();
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[1]/div[7]/mat-form-field/div[1]/div/div[2]/input"
      ).type("New Nothi");
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[1]/div[8]/mat-form-field/div[1]/div/div[2]/input"
      ).type("NTI-12345");
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[1]/div[9]/mat-form-field/div[1]/div/div[2]/input"
      ).type("01/10/2024");
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[1]/div[10]/mat-form-field/div[1]/div/div[2]/input"
      ).type("03/10/2024");
      cy.contains("Cheque");
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[1]/div[12]/mat-form-field/div[1]/div/div[2]/input"
      ).type("Ref- Karibul Hasan");
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[1]/div[13]/mat-form-field/div[1]/div/div[2]/textarea"
      ).type("Payment cash");
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[2]/div[1]/mat-form-field/div[1]/div/div[2]/input"
      ).click();
      cy.xpath("/html/body/div[3]/div/div/div/mat-option[1]").click();
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[2]/div[2]/mat-form-field/div[1]/div/div[2]/input"
      ).click();
      cy.xpath("/html/body/div[3]/div/div/div/mat-option[1]").click();
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[3]/div/div[1]/div[1]/mat-form-field/div[1]/div/div[2]/input"
      )
        .clear()
        .click();
      cy.xpath("/html/body/div[3]/div/div/div/mat-option[20]").click();
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[3]/div/div[1]/div[2]/mat-form-field/div[1]/div/div[3]/input"
      ).type("25000");
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[3]/div/div[2]/div[1]/mat-slide-toggle/div/button"
      ).click();
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[3]/div/div[4]/input"
      ).attachFile("download.jpg");
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[4]/button[1]"
      ).click();
    }

    function a2iAdjustmentBtn() {
      cy.get('a[href="/finance/journal-adjustment-list"]').click();
      cy.wait(5000);
    }

    function a2iAdjustment() {
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-journal-adjustment/app-journal-adjustment-form-shell/app-journal-adjustment-form/div/div/div[1]/div[1]/mat-form-field/div[1]/div/div[2]/input"
      ).click();
      cy.xpath("/html/body/div[3]/div/div/div/mat-option[2]").click();

      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-journal-adjustment/app-journal-adjustment-form-shell/app-journal-adjustment-form/div/div/div[1]/div[2]/mat-form-field/div[1]/div/div[2]/input"
      ).click();
      cy.xpath("/html/body/div[3]/div/div/div/mat-option[1]").click();

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
        .type("15750");
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
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-journal-adjustment/app-journal-adjustment-form-shell/app-journal-adjustment-form/div/div/div[4]/div[1]/div/div/div[4]/button"
      ).click();
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-journal-adjustment/app-journal-adjustment-form-shell/app-journal-adjustment-form/div/div/div[4]/div[2]/div/div/div[1]/mat-form-field/div[1]/div/div[2]/input"
      )
        .click()
        .xpath("/html/body/div[3]/div/div/div/mat-option[1]")
        .click();
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-journal-adjustment/app-journal-adjustment-form-shell/app-journal-adjustment-form/div/div/div[4]/div[2]/div/div/div[2]/mat-form-field/div[1]/div/div[2]/input"
      )
        .click()
        .xpath("/html/body/div[3]/div/div/div/mat-option[3]")
        .click();
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-journal-adjustment/app-journal-adjustment-form-shell/app-journal-adjustment-form/div/div/div[4]/div[2]/div/div/div[3]/mat-form-field/div[1]/div/div[2]/input"
      )
        .click()
        .xpath("/html/body/div[3]/div/div/div/mat-option[1]")
        .click();
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-journal-adjustment/app-journal-adjustment-form-shell/app-journal-adjustment-form/div/div/div[4]/div[2]/div/div/div[5]/mat-form-field/div[1]/div/div[2]/input"
      )
        .clear()
        .type("3000");

      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-journal-adjustment/app-journal-adjustment-form-shell/app-journal-adjustment-form/div/div/div[4]/div[2]/div/div/div[6]/mat-form-field/div[1]/div/div[2]/input"
      )
        .click()
        .xpath("/html/body/div[3]/div/div/div/mat-option[1]")
        .click();
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-journal-adjustment/app-journal-adjustment-form-shell/app-journal-adjustment-form/div/div/div[4]/div[2]/div/div/div[7]/mat-form-field/div[1]/div/div[2]/input"
      )
        .click()
        .xpath("/html/body/div[3]/div/div/div/mat-option[1]")
        .click();
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-journal-adjustment/app-journal-adjustment-form-shell/app-journal-adjustment-form/div/div/div[4]/div[2]/div/div/div[8]/mat-form-field/div[1]/div/div[2]/input"
      )
        .click()
        .type("Che-566");
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-journal-adjustment/app-journal-adjustment-form-shell/app-journal-adjustment-form/div/div/div[4]/div[2]/div/div/div[9]/div/div/div/input"
      ).attachFile("download (3).jpg");

      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-journal-adjustment/app-journal-adjustment-form-shell/app-journal-adjustment-form/div/div/div[6]/button[1]"
      ).click();
    }
  });
});
