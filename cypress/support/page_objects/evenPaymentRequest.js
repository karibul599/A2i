export default class evenPaymentRequest{
    addNewEvenPaymentRequest(){
        cy.get('[href="/application/event-payment-request"]').should('be.visible').click()
        cy.xpath('/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-event-payment-request/app-event-payment-request-list-shell/app-event-payment-request-list/div/div/div/button/span[2]').should('be.visible').click()
       // //Event Payment Request
        //Payment Purpose
        cy.wait(2000)
        cy.get('[formcontrolname="paymentPurpose"]').should('be.visible').click()
        cy.xpath('/html/body/div[3]/div/div/div/mat-option[3]').should('be.visible').click()
        //Event Title
        cy.get('[formcontrolname="eventTitle"]').should('be.visible').click()
        cy.xpath('/html/body/div[3]/div/div/div/mat-option[1]').should('be.visible').click()
        //Event Date From - Date To
        cy.get('[formcontrolname="startDate"]').should('be.visible').type('01/04/2025')
        cy.get('[formcontrolname="endDate"]').should('be.visible').type('30/04/2025')
        //Location
        cy.get('[formcontrolname="location"]').should('be.visible').type('Mirpur, DOHS')
       // //click + icon
       cy.xpath('/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-event-payment-request-form-shell/app-event-payment-request-form/div/div[2]/div[2]/div/button').should('be.visible').click()
        //Participant Type
        cy.get('[formcontrolname="participantType"]').should('be.visible').click()
        cy.xpath('/html/body/div[3]/div[3]/div/div/mat-option[1]').should('be.visible').click()
        cy.wait(5000)
        //Name
        cy.get('[formcontrolname="participantName"]').should('be.visible').click()
        cy.xpath('/html/body/div[3]/div[3]/div/div/mat-option[1]').should('be.visible').click()
        //Gender
        //Designation
        //Organization
        //Phone Number
        //Email
        //Organization Web URL
        //Mode of Payment
        cy.get('[formcontrolname="personModeOfPayment"]').should('be.visible').click()
        cy.xpath('/html/body/div[3]/div[3]/div/div/mat-option[1]').should('be.visible').click()
        //Same as primary
        cy.get('[id="mat-mdc-checkbox-0-input"]').check()
        ///Number of Sessions
        cy.get('[formcontrolname="personSessionNum"]').should('be.visible').type('20')
        //Total Payable Amount
        cy.get('[formcontrolname="totalPayableAmount"]').should('be.visible').type('5000')
        //Revenue Stamp Amount
        cy.get('[formcontrolname="revenueStampAmount"]').should('be.visible').type('400')
        //Vat Amount
        cy.get('[formcontrolname="vatAmount"]').should('be.visible').type('100')
        //Tax Amount
        cy.get('[formcontrolname="taxAmount"]').should('be.visible').type('50')
        //Net Payable
        //click Add button
        cy.xpath('/html/body/div[3]/div[2]/div/mat-dialog-container/div/div/app-participant-details-form-shell/app-participant-details-form/div/div[3]/button[1]').should('be.visible').type('50')
        cy.get('[id="attachment"]').eq(0).attachFile('1mb.pdf')
        cy.xpath('/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-event-payment-request-form-shell/app-event-payment-request-form/div/div[2]/div[4]/button[1]/span[2]').should('be.visible').click()

    }
}