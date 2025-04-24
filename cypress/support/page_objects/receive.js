export default class receive{
    clickA2iReceiveBtn() {
        cy.get('a[href="/finance/receive"]')
          .should('exist')
          .and('be.visible')
          .click();
      }
    fillupReceiveform() {
        const x=1000;
        //Cashbook Type 
        cy.contains("Cashbook")
         
        //Amount
        cy.get('[formcontrolname="amount"]')
          .should('exist')
          .and('be.visible').type("20000");
        cy.wait(x)
        //Transaction Date
        cy.get('[formcontrolname="transactionDate"]').clear().type("02/10/2024");
        cy.wait(x)
        //Fund Source
        cy.get('[formcontrolname="fundSource"]')
          .click()
          .xpath("/html/body/div[3]/div/div/div/mat-option[1]")
          .click();
        cy.wait(x)
        //Deposit Account
        cy.get('[formcontrolname="depositAccount"]')
          .click()
          .xpath("/html/body/div[3]/div/div/div/mat-option[1]")
          .click();
        cy.wait(x)
        //Receive From Type (Payer Type) 
        cy.get('[formcontrolname="payerType"]')
          .click()
          .xpath("/html/body/div[3]/div/div/div/mat-option[1]")
          .click()
        cy.wait(x)
        //Receive From (Payer)
        cy.get('[formcontrolname="payer"]')
          .click()
          .xpath("/html/body/div[3]/div/div/div/mat-option[1]")
          .click()
        cy.wait(x)
        //Financial Codes
         cy.get('[formcontrolname="financialCodes"]')
           .click()
           .xpath("/html/body/div[3]/div/div/div/mat-option[1]")
           .click();
        cy.wait(x)
        //Payment Method
        cy.contains("Cheque"); //default
        //Ref / Cheque 
        cy.get('[formcontrolname="reference"]')
          .type("Che-227asd");
        cy.wait(x)
        //Description
        cy.get('[formcontrolname="description"]')
          .type("Write something about your application")
        cy.wait(x)
        
    }
    uploadfile(){
        cy.get('[type="file"]')
          .attachFile('5-mb-example-file_11zon.pdf')
    }
    clickSubmutReceiveBtn(){
        cy.contains('Submit')
          .should('exist')
          .and('be.visible')
          .click()
    }
    clickSaveandRetain(){
        cy.contains('Save and Retain')
          .should('exist')
          .and('be.visible')
          .click() 
    }
    clickResetBtn(){
        cy.contains('Reset')
          .should('exist')
          .and('be.visible')
          .click()

    }

    
}