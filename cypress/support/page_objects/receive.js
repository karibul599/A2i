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
          .should('exist')
          .and('be.visible'); //default
        //Amount
        cy.get('[id="mat-input-20"]').type("20000");
        cy.wait(x)
        //Transaction Date
        cy.get('[id="mat-input-21"').clear().type("02/10/2024");
        cy.wait(x)
        //Fund Source
        cy.get('[id="mat-input-22"]')
          .click()
          .xpath("/html/body/div[3]/div/div/div/mat-option[1]")
          .click();
        cy.wait(x)
        //Deposit Account
        cy.get('[id="mat-input-23"]')
          .click()
          .xpath("/html/body/div[3]/div/div/div/mat-option[1]")
          .click();
        cy.wait(x)
        //Receive From Type (Payer Type) 
        cy.get('[id="mat-input-24"]')
          .click()
          .xpath("/html/body/div[3]/div/div/div/mat-option[1]")
          .click()
        cy.wait(x)
        //Receive From (Payer)
        cy.get('[id="mat-input-25"]')
          .click()
          .xpath("/html/body/div[3]/div/div/div/mat-option[1]")
          .click()
        cy.wait(x)
        //Financial Codes
         cy.get('[id="mat-input-26"]')
           .click()
           .xpath("/html/body/div[3]/div/div/div/mat-option[1]")
           .click();
        cy.wait(x)
        //Payment Method
        cy.contains("Cheque"); //default
        //Ref / Cheque 
        cy.get('[id="mat-input-28"]')
          .type("Che-227asd");
        cy.wait(x)
        //Description
        cy.get('[id="mat-input-29"]')
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