describe("A2i Journal Adjustment", () => {
  it("Login,FinanceBtn,ReceiveBtn,Receive- Application With no file(Cashbook),Receive- Application With no file(No Cashbook) ,", () => {
    a2iLogin();
    a2iPaytoll();
    a2iYpBtn();
    a2iYpFilter();
    a2iMakePayment();

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

    function a2iPaytoll() {
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/aside/nav/div/div/div[2]/mat-nav-list/div[9]/div[1]"
      ).click();
    }

    function a2iYpBtn() {
      cy.get('a[href="/payroll/yp"]').click();
    }
    function a2iYpFilter() {
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-yp-list-shell/app-yp-filter-form-shell/app-yp-filter-form/div/div[2]/div[1]/mat-form-field/div[1]/div/div[2]/input"
      )
        .clear()
        .type("10/2024");
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-yp-list-shell/app-yp-filter-form-shell/app-yp-filter-form/div/div[2]/div[2]/mat-form-field/div[1]/div/div[2]/input"
      ).click();
      cy.xpath("/html/body/div[3]/div/div/div/mat-option[2]").click();
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-yp-list-shell/app-yp-filter-form-shell/app-yp-filter-form/div/div[3]/button"
      ).click();
    }
    function a2iMakePayment() {
      //check box1
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-yp-list-shell/app-yp-list/div/div/div[3]/mat-table/mat-row[1]/mat-cell[1]/mat-checkbox/div/div/input"
      ).click();
      //check box2
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-yp-list-shell/app-yp-list/div/div/div[3]/mat-table/mat-row[2]/mat-cell[1]/mat-checkbox/div/div/input"
      ).click();
    }
  });
});
