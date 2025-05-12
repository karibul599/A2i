export default class approveReg{
    regApprovedWithEmail(){
        //Contract Administer
            cy.get('[placeholder="Contract Administer"]').click({ force: true });
            cy.wait(500);
            cy.contains(" Md. Jahanger Alam ").click({ force: true });
            //Field Allowance
            cy.get('[placeholder="Field Allowance"]')
              .click()
              .type('5');
            //Mobile Bill
            cy.get('[placeholder="Mobile Bill"]')
              .click()
              .type('500');
              cy.wait(500);
              //Contract Modality
            cy.get('[placeholder="Contract Modality"]').click({ force: true });
            cy.wait(500);
            cy.contains("eZone - UNDP").click({ force: true }); 
            //Contract Reference
            cy.get('[placeholder="Contract Reference"]')
              .click({ force: true })
              .type('56.83.0000.006.11.001.24.581/8');
            //Contract Administer
             cy.get('[placeholder="Contract Administer"]').click({ force: true });
             cy.wait(500);
             cy.contains(" Md. Jahanger Alam ").click({ force: true });
            //Basic Salary
            cy.get('[placeholder="Basic Salary"]')
              .click()
              .type('67000');
            //Field Allowance
            cy.get('[placeholder="Field Allowance"]')
              .click()
              .type('5');
            //Mobile Bill
            cy.get('[placeholder="Mobile Bill"]')
              .click()
              .type('500');
            //upload file
            //cy.get('[type="file"]').attachFile('5-mb-example-file');
            cy.wait(500)
            cy.get('[aria-label="Remove Attachment"]')
              .first()
              .click().should('be.visible');
              Cypress.on('uncaught:exception', (err, runnable) => {
                // returning false here prevents Cypress from failing the test
                return false;
              });
            cy.wait(2300);
            cy.get('mat-icon') 
              .should('be.visible')
              .first()
              .click({force: true});
            cy.xpath('/html/body/div[3]/div[2]/div/mat-dialog-container/div/div/app-attachment-preview-dialog/div/div[1]/button/mat-icon')
              .click();
            cy.wait(3000);
            cy.contains("button", " Approve ")
              .invoke("removeAttr", "disabled")
              .wait(500)
              .click({ force: true }); 
            cy.wait(500);
            cy.xpath('/html/body/div[3]/div[2]/div/mat-dialog-container/div/div/app-common-approval-confirmation-dialog/div/div[2]/button[1]')
            .should('be.visible')
            .click({force: true});
          
          cy.wait(1000);
    }
}