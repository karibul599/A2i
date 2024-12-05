export default class adjustment{
    clickA2iAdjustmentBtn() {
        cy.get('a[href="/finance/journal-adjustment-list"]')
          .should('exist')
          .and('be.visible')
          .click()
      }
    fillupA2iAdjustmentform() {
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
}