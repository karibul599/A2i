export default class exitClearanceApplication{
    applicationForExitClearanceApplication(){
        cy.get('[href="/application/exit-clearance-application"]').should('be.visible').click()
        ///Create Exit Clearance Application
        //Type of contract
        //Team
        //Contract Completion Date
        //supervisor
        cy.wait(5000)
        //cy.get('[formcontrolname="supervisorId"]').should('be.visible').type(' Siraz  ')
        //cy.contains(' Siraz Uddin ').should('be.visible').click()
        //Last Active Duty Date
        ///Future Contact details
        //Email 
        cy.get('[formcontrolname="email"]').should('be.visible').type('xyz@gmail.com')
        //Phone Number
        cy.get('[formcontrolname="phoneNo"]').should('be.visible').type('01425896312')
        //Exit Reason
        cy.get('[formcontrolname="exitReason"]').should('be.visible').type('This company HR is bad manner person')
        cy.xpath("/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-exit-clearance-application/app-exit-clearance-application-create-form-shell/app-exit-clearance-application-create-form/div/div[3]/button[1]")
          .should('be.visible').click()
    }

}