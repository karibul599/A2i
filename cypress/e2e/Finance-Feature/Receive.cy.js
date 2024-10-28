describe("A2i receive application", () => {
  it("Login,FinanceBtn,ReceiveBtn,Receive- Application With no file(Cashbook),Receive- Application With no file(No Cashbook) ,", () => {
    a2iLogin();
    a2iFinanceBtn();
    a2iReceiveBtn();
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

    function a2iReceiveBtn() {
      cy.get('a[href="/finance/receive"]').click();
    }

    function a2iApplication() {
      for (let i = 0; i <= 1; i++) {
        if (i == 0) {
          cy.contains("Cashbook"); //default

          cy.get('[id="mat-input-20"]').type("20000");

          cy.get('[id="mat-input-21"').clear().type("02/10/2024");

          cy.get('[id="mat-input-22"]')
            .click()
            .xpath("/html/body/div[3]/div/div/div/mat-option[1]")
            .click();

          cy.get('[id="mat-input-23"]')
            .click()
            .xpath("/html/body/div[3]/div/div/div/mat-option[1]")
            .click();

          cy.get('[id="mat-input-24"]')
            .click()
            .xpath("/html/body/div[3]/div/div/div/mat-option[1]")
            .click();

          cy.get('[id="mat-input-25"]')
            .click()
            .xpath("/html/body/div[3]/div/div/div/mat-option[1]")
            .click();

          cy.get('[id="mat-input-26"]')
            .click()
            .xpath("/html/body/div[3]/div/div/div/mat-option[1]")
            .click();

          cy.contains("Cheque"); //default

          cy.get('[id="mat-input-28"]').type("Che-227asd");

          cy.get('[id="mat-input-29"]').type(
            "Write something about your application"
          );

          cy.xpath(
            "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-receive/app-recieve-form-shell/app-recieve-form/div/div[4]/button[1]"
          ).click();
        } else {
          cy.get('[id="mat-input-19"]')
            .click()
            .xpath("/html/body/div[3]/div/div/div/mat-option[2]")
            .click();

          cy.get('[id="mat-input-20"]').type("30000");

          cy.get('[id="mat-input-21"').type("02/10/2024");

          cy.get('[id="mat-input-22"]')
            .click()
            .xpath("/html/body/div[3]/div/div/div/mat-option[1]")
            .click();

          cy.get('[id="mat-input-23"]')
            .click()
            .xpath("/html/body/div[3]/div/div/div/mat-option[1]")
            .click();

          cy.get('[id="mat-input-24"]')
            .click()
            .xpath("/html/body/div[3]/div/div/div/mat-option[1]")
            .click();

          cy.get('[id="mat-input-25"]')
            .click()
            .xpath("/html/body/div[3]/div/div/div/mat-option[1]")
            .click();

          cy.get('[id="mat-input-26"]')
            .click()
            .xpath("/html/body/div[3]/div/div/div/mat-option[1]")
            .click();

          cy.get('[id="mat-input-27"]')
            .click()
            .xpath("/html/body/div[3]/div/div/div/mat-option[3]")
            .click();

          cy.get('[id="mat-input-28"]').type("Che-333asd");

          cy.get('[id="mat-input-29"]').type(
            "Write something about your application"
          );

          cy.xpath(
            "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-receive/app-recieve-form-shell/app-recieve-form/div/div[3]/app-attachment-uploader-v2-shell/app-attachment-uploader-v2/div/div[1]/div/div/input"
          ).attachFile("download.jpg");

          cy.xpath(
            "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-receive/app-recieve-form-shell/app-recieve-form/div/div[4]/button[2]"
          ).click();
        }
      }
    }
  });
});
