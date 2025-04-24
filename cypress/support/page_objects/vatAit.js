export default class vatAit{
    clickVatAitBtn() {
        //Finance-Feature(VAT/AIT) Button
        cy.get('a[href="/finance/vat-list"]')
          //.scrollIntoView()
          .should('exist')
          .and('be.visible')
          .click( {force: true});
      }
      vatFilter(a) {
        //TYPE
        cy.get('[formcontrolname="transactionType"]')
          .should('exist')
          .and('be.visible')
          .click();
        cy.contains(a)
          .should('exist')
          .and('be.visible')
          .click();
        // //Payment Type
        // cy.get('[ng-reflect-placeholder="Payment Type"]').click();
        // cy.contains(" Vendor Payment ").click();
        //Payment Status
        cy.get('[placeholder="Payment Status"]').click();
        cy.contains(" Due ").click();
        //Fund Source
        cy.get('[ng-reflect-placeholder="Fund Source"]').click();
        cy.contains(" UNDP ").click();
        //Payer Type
        cy.get('[ng-reflect-placeholder="Payer Type"]').click();
        cy.contains(" Organization ").click();
        //Payer
        cy.get('[ng-reflect-placeholder="Payer"]').click().click().click();
        cy.contains(" Business Automation Ltd. ").click();
        // //Team
        // cy.get('[ng-reflect-placeholder="Team"]').click();
        // cy.contains(" Finance ").click();
        //Date From - Date To
        cy.get('[formcontrolname="startDate"]')
          .type("01/01/2024")
          .get('[formcontrolname="endDate"]')
          .type("31/12/2025");
        // Filter Data
        cy.contains("button", "Filter Data").click();
        // Reset
        cy.wait(3000);
      }
      vatPayment(){
        const x=500;
        cy.get('[type="checkbox"]')
          .check({force: true})
        cy.wait(x)
        cy.contains(' Make Payment ')
          .should('exist')
          .and('be.visible')
          .click()
        //Cashbook Type
        
        cy.wait(x)
        cy.get('[formcontrolname="cashbookType"]')
          .should('exist')
          .and('be.visible')
          .click()
        cy.wait(x)
        cy.contains(' Cashbook ')
          .click({force: true})
        
        //Fund Source
        cy.xpath('/html/body/div[3]/div[2]/div/mat-dialog-container/div/div/app-vat-payment-dialog/app-vat-form-shell/app-vat-form/div/div[1]/div[3]/mat-form-field/div[1]/div/div[2]/input')
          .should('exist')
          .and('be.visible')
          .click()
        cy.wait(x)
        cy.contains(' UNDP ')
          .should('exist')
          .and('be.visible')
          .click()
        //Charged Account 
        cy.get('[formcontrolname="chargedAccount"]')
          .should('exist')
          .and('be.visible')
          .click()
        cy.wait(x)
        cy.contains(' Cash in Hand - UNDP ')
          .should('exist')
          .and('be.visible')
          .click()
        //Payment To (Payee)
        cy.xpath('/html/body/div[3]/div[2]/div/mat-dialog-container/div/div/app-vat-payment-dialog/app-vat-form-shell/app-vat-form/div/div[1]/div[5]/mat-form-field/div[1]/div/div[2]/input')
          .should('exist')
          .and('be.visible')
          .click().click()
        cy.wait(x)
        cy.contains(' Business Automation Ltd. ')
          .scrollIntoView()
          .should('exist')
          .and('be.visible')
          .click()
        //Financial Codes
        cy.get('[formcontrolname="financialCode"]')
          .should('exist')
          .and('be.visible')
          .click()
        cy.wait(x)
        cy.xpath('/html/body/div[3]/div[3]/div/div/mat-option[1]/span')
          .should('exist')
          .and('be.visible')
          .click()
        //Payment Method
        // cy.wait(x)
        // cy.get('[formcontrolname="paymentMethod"]')
        //   .should('exist')
        //   .and('be.visible')
        //   .type('Cash')
        //Ref / Chequ
        cy.wait(x)
        cy.get('[formcontrolname="reference"]')
          .should('exist')
          .and('be.visible')
          .type('ref-542345')
        cy.wait(x)
        //Description
        cy.get('[formcontrolname="description"]')
          .should('exist')
          .and('be.visible')
          .type('description')
        cy.wait(x)
        cy.wait(x)
        cy.xpath('/html/body/div[3]/div[2]/div/mat-dialog-container/div/div/app-vat-payment-dialog/app-vat-form-shell/app-vat-form/div/div[2]/button[1]/span[2]')
          .should('exist')
          .and('be.visible')
          .click()



      }
}