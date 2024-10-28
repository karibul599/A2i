describe("A2i Finance-Feature(VAT/AIT)", () => {
  it("VAT ,", () => {
    //Function create
    a2iLogin();
    a2iFinanceBtn();
    a2iVAT_AIT_Btn();
    a2iVATFilter();

    function a2iLogin() {
      //Login section
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
      //Finance Button
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/aside/nav/div/div/div[2]/mat-nav-list/div[5]/div[1]"
      ).click();
    }

    function a2iVAT_AIT_Btn() {
      //Finance-Feature(VAT/AIT) Button
      cy.get('a[href="/finance/vat-list"]').click();
    }

    function a2iVATFilter() {
      //TYPE
      cy.get('[placeholder="Type"]').click();
      cy.contains(" VAT ").click();
      //Payment Type
      cy.get('[ng-reflect-placeholder="Payment Type"]').click();
      cy.contains(" Individual Payment ").click();
      //Payment Status
      cy.get('[placeholder="Payment Status"]').click();
      cy.contains(" Due ").click();
      //Fund Source
      cy.get('[ng-reflect-placeholder="Fund Source"]').click();
      cy.contains(" UNDP ").click();
      //Payer Type
      cy.get('[ng-reflect-placeholder="Payer Type"]').click();
      cy.contains(" Account ").click();
      //Payer
      cy.get('[ng-reflect-placeholder="Payer"]').click();
      cy.contains(" Cash in Hand - UNDP ").click();
      //Team
      cy.get('[ng-reflect-placeholder="Team"]').click();
      cy.contains(" Finance ").click();
      //Date From - Date To
      cy.get('[formcontrolname="startDate"]')
        .type("10/08/2024")
        .get('[formcontrolname="endDate"]')
        .type("20/10/2024");
      // Filter Data
      cy.contains("button", "Filter Data").click();
      // Reset
      cy.wait(3000);
      cy.contains("button", " Reset ").click();
    }
  });

  it("AIT ,", () => {
    //Function create
    a2iLogin();
    a2iFinanceBtn();
    a2iVAT_AIT_Btn();
    a2iAITFilter();

    //Login section
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
      //Finance Button
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/aside/nav/div/div/div[2]/mat-nav-list/div[5]/div[1]"
      ).click();
    }

    function a2iVAT_AIT_Btn() {
      //Finance-Feature(VAT/AIT) Button
      cy.get('a[href="/finance/vat-list"]').click();
    }

    function a2iAITFilter() {
      //TYPE
      cy.get('[placeholder="Type"]').click();
      cy.contains(" AIT ").click();
      //Payment Type
      cy.get('[ng-reflect-placeholder="Payment Type"]').click();
      cy.contains(" Individual Payment ").click();
      //Payment Status
      cy.get('[placeholder="Payment Status"]').click();
      cy.contains(" Due ").click();
      //Fund Source
      cy.get('[ng-reflect-placeholder="Fund Source"]').click();
      cy.contains(" UNDP ").click();
      //Payer Type
      cy.get('[ng-reflect-placeholder="Payer Type"]').click();
      cy.contains(" Account ").click();
      //Payer
      cy.get('[ng-reflect-placeholder="Payer"]').click();
      cy.contains(" Cash in Hand - UNDP ").click();
      //Team
      cy.get('[ng-reflect-placeholder="Team"]').click();
      cy.contains(" Finance ").click();
      //Date From - Date To
      cy.get('[formcontrolname="startDate"]')
        .type("10/08/2024")
        .get('[formcontrolname="endDate"]')
        .type("20/10/2024");
      // Filter Data
      cy.contains("button", "Filter Data").click();
      // Reset
      cy.wait(3000);
      cy.contains("button", " Reset ").click();
    }
  });
});
