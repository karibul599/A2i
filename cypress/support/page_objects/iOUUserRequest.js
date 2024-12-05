export default class iOUUserRequest{
    clickIOUHistoryBtn(){
        cy.get('a[href="/finance/iou-history"]')
          .should('exist')
          .and('be.visible')
          .click()
    }
    clickAddNewBtnToCreateNewIOURequest(){
        cy.contains('Add New ')
          .should('exist')
          .and('be.visible')
          .click()
    }
    createNewIOURequest(){
        const x=500;
        //Team= Operations (Admin)
        //Forwarded by= Jalal Uddin Ahmed
        //Requested Amount
        cy.get('[formcontrolname="requestedAmount"]')
          .should('exist')
          .and('be.visible')
          .type('5000')
        cy.wait(x)
        //EVENT DATE
        cy.get('[formcontrolname="issuerEventDate"]')
          .should('exist')
          .and('be.visible')
          .type('12/04/2024')
        cy.wait(x)
        //Expected Adjustment Date
        cy.get('[formcontrolname="expectedAdjustmentDate"]')
          .should('exist')
          .and('be.visible')
          .type('17/04/2024')
        cy.wait(x)
        //PURPOSE
        cy.get('[formcontrolname="purpose"]')
          .should('exist')
          .and('be.visible')
          .type('A financial record for the customer to verify charges.')
        cy.wait(x)
        //Add link
        // cy.get('[id="mat-input-10"]')
        //   .should('exist')
        //   .and('be.visible')
        //   .type('http://example.com')
        // cy.wait(x)
        //Upload Attachment
        cy.get('[type="file"]')
          .attachFile('5-mb-example-file_11zon.pdf')
        cy.wait(3000)
        //click submit btn
        cy.contains(' Submit ')
          .should('exist')
          .and('be.visible')
          .click()

    }
    createNewIOURequestWithApproved(){
      const x=1000;
      //Fund Source
      cy.get('[formcontrolname="fundSource"]')
        .should('exist')
        .and('be.visible')
        .click()
      cy.wait(x)
      cy.contains(' UNDP ')
        .should('exist')
        .and('be.visible')
        .click()
      //Team
      cy.get('[formcontrolname="team"]')
        .should('exist')
        .and('be.visible')
        .click()
      cy.wait(x)
      cy.contains(' Finance ')
        .should('exist')
        .and('be.visible')
        .click()
      //Payee
      cy.get('[formcontrolname="payee"]')
        .should('exist')
        .and('be.visible')
        .click()
      cy.wait(x)
      cy.xpath('/html/body/div[3]/div/div/div/mat-option[5]/span')
        .should('exist')
        .and('be.visible')
        .click()
      //Forwarded by
      cy.get('[formcontrolname="forwarder"]')
        .should('exist')
        .and('be.visible')
        .click()
      cy.wait(x)
      cy.xpath('/html/body/div[3]/div/div/div/mat-option[3]/span')
        .should('exist')
        .and('be.visible')
        .click()
      //Amount
      cy.get('[formcontrolname="amount"]')
        .should('exist')
        .and('be.visible')
        .type('5000') 
      cy.wait(x)
      //PAYMENT DATE
      cy.get('[formcontrolname="paymentDate"]')
        .should('exist')
        .and('be.visible')
        .clear()
        .type('12/03/2024') 
      cy.wait(x)
      //EVENT DATE
      cy.get('[formcontrolname="issuerEventDate"]')
        .should('exist')
        .and('be.visible')
        .clear()
        .type('18/03/2024') 
      cy.wait(x)
      //Expected Adjustment Date
      cy.get('[formcontrolname="expectedAdjustmentDate"]')
        .should('exist')
        .and('be.visible')
        .clear()
        .type('21/03/2024') 
      cy.wait(x)
      //purpose
      cy.get('[formcontrolname="purpose"]')
        .should('exist')
        .and('be.visible')
        .type('Expected Adjustment Date') 
      cy.wait(x)
      cy.contains(' Save ')
        .should('exist')
        .and('be.visible')
        .click()


    }
    logoutBtn(){
        cy.get('div>div>div>div>div>button>span[class="mat-mdc-button-touch-target"]')
          .click()
        cy.contains('Logout')
          .should('exist')
          .and('be.visible')
          .click()
    }
    clickIOURequestBTn(){
        cy.get('a[href="/finance/iou-request"]')
          .should('exist')
          .and('be.visible')
          .click()
    }
    clickFaviconToApproveOrRejectIOURequest(){
        cy.xpath('//*[@id="sidenav-container"]/app-iou-request/app-iou-request-list-shell/app-iou-request-list/div/div/mat-table/mat-row[1]/mat-cell[9]/div/section[2]/button/span[4]')
          .first()
          .should('exist')
          .and('be.visible')
          .click()
    }
    approveIOURequest(){
        cy.get('[formcontrolname="fundSource"]')
          .should('exist')
          .and('be.visible')
          .click()
        cy.contains(' UNDP ')
          .should('exist')
          .and('be.visible')
          .click()
        cy.contains(' Approve ')
          .should('exist')
          .and('be.visible')
          .click()
    }
    rejectIOURequest(){
        cy.contains(' Reject ')
        .should('exist')
        .and('be.visible')
        .click() 
    }
    viewApprovedOrRejectedFile(){
        cy.xpath('/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-iou-history/app-iou-history-list-shell/app-iou-history-list/div/div/mat-table/mat-row[1]/mat-cell[10]/div/section/button[1]/span[4]')
          .first()
          .should('exist')
          .and('be.visible')
          .click()
    }
    clickIOUBtn(){
      cy.get('a[href="/finance/iou-v2"]').should('exist').and("be.visible").click()
    }
    OpenActionFormAndAdjestmentOfIOURequest(){
      cy.xpath('/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-iou-v2/div/app-iou-v2-list-shell/div/app-iou-v2-list/div/div/mat-table/mat-row[1]/mat-cell[12]/div/section/button[1]/span[4]')
        .first()
        .should('exist')
        .and('be.visible')
        .click()
      //Adjustment Amount 
      cy.get('[formcontrolname="adjustmentAmount"]')
        .should('exist')
        .and('be.visible')
        .type('3000')
      cy.xpath('/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-iou-v2-form-add-shell/app-iou-v2-form-add/div/form/div[2]/button[1]/span[2]/div/span')
        .should('exist')
        .and('be.visible')
        .click()
    }
    DownloadIOURequestFile(){
      cy.xpath('/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-iou-v2/div/app-iou-v2-list-shell/div/app-iou-v2-list/div/div/mat-table/mat-row[1]/mat-cell[12]/div/section/button[2]/span[4]')
        .first()
        .should('exist')
        .and('be.visible')
        .click()
      cy.wait(4000)
    }
     
}