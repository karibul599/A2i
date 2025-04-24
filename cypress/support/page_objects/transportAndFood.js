export default class transportAndFood{
clickApplicationBtn(){
   cy.contains('Application')
      .scrollIntoView()
      .should('exist')
      .and('be.visible')
      .click()
}
clickApplicationSectionTransportAndFoodBtn(){
   cy.get('a[href="/application/transport-and-food"]')
     .scrollIntoView()
     .should('exist')
     .and('be.visible')
     .click()
  }
createFoodBill(){
   const x=500;
   //Type
   cy.get('[formcontrolname="type"]') 
     .should('exist')
     .and('be.visible')
     .click()
   cy.wait(x)
   cy.xpath('/html/body/div[3]/div/div/div/mat-option[1]')
     .should('exist')
     .and('be.visible')
     .click()
   cy.wait(x)
   //Programme Title
   cy.get('[formcontrolname="programmeTitle"]') 
     .should('exist')
     .and('be.visible')
     .click()
   cy.wait(x)
   cy.contains(' Title-1 ')
     .should('exist')
     .and('be.visible')
     .click()

   //Programme Start/End Date
   cy.get('[formcontrolname="programmeDateStart"]') 
     .should('exist')
     .and('be.visible')
     .clear()
     .type('10/12/2024')
   cy.wait(x)
   cy.get('[formcontrolname="programmeDateEnd"]') 
     .should('exist')
     .and('be.visible')
     .clear()
     .type('11/12/2024')
   cy.wait(x)
   //Programme Extension Date
   cy.get('[formcontrolname="programmeExtensionDate"]') 
     .should('exist')
     .and('be.visible')
     .clear()
     .type('11/12/2024')
   cy.wait(x)
   //Event Location
   cy.get('[formcontrolname="eventLocation"]') 
     .should('exist')
     .and('be.visible')
     .type('KB-office')
   cy.wait(x)
   //Note Approval Status
   //Note Approval Date 
   cy.get('[formcontrolname="noteApprovalDate"]') 
     .should('exist')
     .and('be.visible')
     .clear()
     .type('11/12/2024')
   cy.wait(x)
   //Budget (per person) 
   cy.get('[formcontrolname="budget"]') 
     .should('exist')
     .and('be.visible')
     .clear()
     .type('500')
   cy.wait(x)
   //Number Of Person
   cy.get('[formcontrolname="personNumber"]') 
     .should('exist')
     .and('be.visible')
     .clear()
     .type('5')
   cy.wait(x) 
   //Total Budget Amount
   //No. of Service
   cy.get('[formcontrolname="numberOfService"]') 
     .should('exist')
     .and('be.visible')
     .type('6 itams')
   cy.wait(x)
   //Description 
   cy.get('[formcontrolname="description"]') 
     .should('exist')
     .and('be.visible')
     .type('Very good meal')
   cy.wait(x)

}
submitbtn(){
   cy.contains('Submit')
     .should('exist')
     .and('be.visible')
     .click()
}
clickFianceSectionTransportAndFoodBtn(){
    cy.get('a[href="/finance/transport-and-food-approval"]')
      .scrollIntoView()
      .should('exist')
      .and('be.visible')
      .click()
   }

approveTransportAndFoodRecieved(){
  const x=500;
  cy.xpath('/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-transport-and-food-approval/app-transport-and-food-approval-list-shell/app-transport-and-food-approval-list/div/div/mat-table/mat-row[1]/mat-cell[10]/div/button/span[4]')
    .first()
    .should('exist')
    .and('be.visible')
    .click()
  //Vendor Name
  cy.get('[formcontrolname="vendorName"]')
    .should('exist')
    .and('be.visible')
    .click().click().click()
  cy.wait(x)
  cy.xpath('/html/body/div[3]/div/div/div/mat-option[2]')
    .should('exist')
    .and('be.visible')
    .click()
  //Vendor (Mobile Number)
  cy.get('[formcontrolname="vendorMobileNumber"]')
    .should('exist')
    .and('be.visible')
    .type("01367893452")
  cy.wait(x)
  //Remark
  cy.get('[formcontrolname="remark"]')
    .should('exist')
    .and('be.visible')
    .type("approved")
  cy.wait(x)
  //click approve btn
  cy.contains('Approve')
    .should('exist')
    .and('be.visible')
    .click()


}
}