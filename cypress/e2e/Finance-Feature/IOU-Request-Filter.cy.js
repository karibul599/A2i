describe("A2i IOU-Request-Filter", () => {
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
      cy.get('a[href="/finance/iou-request"]').click();
    }
    function a2iApplication() {
      //   cy.xpath('/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-iou-request/app-iou-request-list-shell/app-iou-request-filter-shell/app-iou-request-filter/div/div[1]/div[1]/mat-form-field/div[1]/div/div[2]/input')
      //     .click();
      //   cy.xpath('/html/body/div[3]/div/div/div/mat-option[1]')
      //     .click();
      //   cy.xpath('/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-iou-request/app-iou-request-list-shell/app-iou-request-filter-shell/app-iou-request-filter/div/div[1]/div[2]/mat-form-field/div[1]/div/div[2]/input')
      //     .click();
      //   cy.xpath('/html/body/div[3]/div/div/div/mat-option[1]')
      //     .click();
      //   cy.xpath('/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-iou-request/app-iou-request-list-shell/app-iou-request-filter-shell/app-iou-request-filter/div/div[1]/div[4]/mat-form-field/div[1]/div/div[2]/input')
      //     .click();
      //   cy.xpath('/html/body/div[3]/div/div/div/mat-option[1]')
      //     .click();
      //   cy.xpath('/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-iou-history/app-iou-history-list-shell/app-iou-history-filter-form-shell/app-iou-history-filter-form/div/div[1]/div[1]/mat-form-field/div[1]/div/div[2]/input')
      //     .click();
      //   cy.xpath('/html/body/div[3]/div/div/div/mat-option[1]')
      //     .click();
      //     cy.xpath('/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-iou-history/app-iou-history-list-shell/app-iou-history-filter-form-shell/app-iou-history-filter-form/div/div[2]/button[1]')
      //     .click();
    }
  });
});
