describe("A2i IOU-Filter", () => {
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
      cy.get('a[href="/finance/iou-v2"]').click();
    }

    function a2iApplication() {
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-iou-v2/div/app-iou-v2-list-shell/app-iou-v2-filter-form-shell/app-iou-v2-filter-form/div/div[1]/div[1]/mat-form-field/div[1]/div/div[2]/input"
      ).click();
      cy.xpath("/html/body/div[3]/div/div/div/mat-option[1]").click();
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-iou-v2/div/app-iou-v2-list-shell/app-iou-v2-filter-form-shell/app-iou-v2-filter-form/div/div[1]/div[2]/mat-form-field/div[1]/div/div[2]/input"
      ).click();
      cy.xpath("/html/body/div[3]/div/div/div/mat-option[1]").click();
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-iou-v2/div/app-iou-v2-list-shell/app-iou-v2-filter-form-shell/app-iou-v2-filter-form/div/div[1]/div[3]/mat-form-field/div[1]/div/div[2]/input"
      ).click();
      cy.xpath("/html/body/div[3]/div/div/div/mat-option[1]").click();

      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-iou-v2/div/app-iou-v2-list-shell/app-iou-v2-filter-form-shell/app-iou-v2-filter-form/div/div[1]/div[4]/mat-form-field/div[1]/div/div[2]/mat-date-range-input/div/div[1]/input"
      ).type("07/04/2024");
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-iou-v2/div/app-iou-v2-list-shell/app-iou-v2-filter-form-shell/app-iou-v2-filter-form/div/div[1]/div[4]/mat-form-field/div[1]/div/div[2]/mat-date-range-input/div/div[2]/input"
      ).type("10/04/2024");

      //   cy.xpath('/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-iou-v2/div/app-iou-v2-list-shell/app-iou-v2-filter-form-shell/app-iou-v2-filter-form/div/div[1]/div[4]/mat-form-field/div[1]/div/div[2]/mat-date-range-input/div/div[1]/input')
      //     .type("07/05/2024");
      //   cy.xpath('/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-iou-v2/div/app-iou-v2-list-shell/app-iou-v2-filter-form-shell/app-iou-v2-filter-form/div/div[1]/div[4]/mat-form-field/div[1]/div/div[2]/mat-date-range-input/div/div[2]')
      //     .type("10/05/2024");
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-iou-v2/div/app-iou-v2-list-shell/app-iou-v2-filter-form-shell/app-iou-v2-filter-form/div/div[1]/div[6]/mat-form-field/div[1]/div/div[2]/input"
      ).type("Pass");
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-iou-v2/div/app-iou-v2-list-shell/app-iou-v2-filter-form-shell/app-iou-v2-filter-form/div/div[2]/button[1]"
      ).click();
    }
  });
});
