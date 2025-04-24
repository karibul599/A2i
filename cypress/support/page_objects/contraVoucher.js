export default class ContraVoucher{
    clickContraVoucherBtn(){
        cy.get('a[href="/finance/contra-voucher"]')
          .should('exist')
          .and('be.visible')
          .click()
    }
    addContraVoucher(){
        const x=500;
        //Sender Fund Source
        cy.get('[formcontrolname="receiveForm"]')
          .should('exist')
          .and('be.visible')
          .click()
        cy.wait(x)
        cy.contains(' UNDP ')
          .should('exist')
          .and('be.visible')
          .click()
        cy.wait(x)
        cy.wait(x)
        //Send From (Payer)
        cy.get('[formcontrolname="nameOfPayer"]')
          .should('exist')
          .and('be.visible')
          .click().click()
        cy.wait(x)
        cy.contains(' Cash in Hand - UNDP ')
          .should('exist')
          .and('be.visible')
          .click()
        //Receiver Fund Source
        cy.get('[formcontrolname="paymentTo"]')
          .should('exist')
          .and('be.visible')
          .click()
        cy.wait(x)
        cy.contains(' GoB ')
          .should('exist')
          .and('be.visible')
          .click()
         //Receive To (Payee)
        cy.get('[formcontrolname="nameOfPayee"]')
          .should('exist')
          .and('be.visible')
          .click().click().click()
        cy.wait(x)
        cy.contains(' AG Office ')
          .should('exist')
          .and('be.visible')
          .click()
         //Financial Codes 
        cy.get('[formcontrolname="financialCode"]')
          .should('exist')
          .and('be.visible')
          .click()
        cy.wait(x)
        cy.xpath('/html/body/div[3]/div/div/div/mat-option[1]')
          .should('exist')
          .and('be.visible')
          .click()
        //Payment Method
        //Description
        cy.get('[formcontrolname="description"]')
          .should('exist')
          .and('be.visible')
          .type('description')
        cy.wait(x)


        //Amount
        cy.get('[formcontrolname="amount"]')
          .should('exist')
          .and('be.visible')
          .type("5000")
        cy.wait(x)
        //Ref / Cheque 
        cy.get('[formcontrolname="reference"]')
          .should('exist')
          .and('be.visible')
          .type('ref-76789')
        cy.wait(x)
        //Date 

        //submit button
        cy.contains('Submit')
          .should('exist')
          .and('be.visible')
          .click()



    }

}