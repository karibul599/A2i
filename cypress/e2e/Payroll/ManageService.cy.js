describe("A2i Journal Adjustment", () => {
  it("Login,FinanceBtn,ReceiveBtn,Receive- Application With no file(Cashbook),Receive- Application With no file(No Cashbook) ,", () => {
    a2iLogin();
    a2iPayrollBtn();
    a2iManageServiceBtn();
    a2iManageServiceFilter();

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

    function a2iPayrollBtn() {
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/aside/nav/div/div/div[2]/mat-nav-list/div[9]/div[1]"
      ).click();
    }

    function a2iManageServiceBtn() {
      cy.get('a[href="/payroll/ms"]').click();
    }
    function a2iManageServiceFilter() {
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-ms-payroll-list-shell/app-ms-payroll-filter-shell/app-ms-payroll-filter/div/div[2]/div[1]/mat-form-field/div[1]/div/div[2]/input"
      )
        .clear()
        .type("08/2024");
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-ms-payroll-list-shell/app-ms-payroll-filter-shell/app-ms-payroll-filter/div/div[2]/div[2]/mat-form-field/div[1]/div/div[2]/input"
      ).click();
      cy.xpath("/html/body/div[3]/div/div/div/mat-option[1]").click();
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-ms-payroll-list-shell/app-ms-payroll-filter-shell/app-ms-payroll-filter/div/div[2]/div[3]/mat-form-field/div[1]/div/div[2]/input"
      ).click();
      cy.xpath("/html/body/div[3]/div/div/div/mat-option[2]").click();
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-ms-payroll-list-shell/app-ms-payroll-filter-shell/app-ms-payroll-filter/div/div[3]/button"
      ).click();
    }
  });
});
