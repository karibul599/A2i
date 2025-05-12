export default class contractInformation{
    addMissingContractInformation(){
        cy.get('[href="/personal-details/contract-information"]').should('be.visible').click()
        cy.wait(2000)
        cy.contains('Add Missing Contract Information ').should('be.visible').click()
        cy.wait(4000)
        ///Add A Missing Contract Information
        //CONTRACT MODALITY
        cy.get('[formcontrolname="contractModality"]').should('be.visible').click()
        cy.xpath('/html/body/div[3]/div/div/div/mat-option[1]').click()
        //TEAM
        cy.get('[formcontrolname="team"]').should('be.visible').click()
        cy.xpath('/html/body/div[3]/div/div/div/mat-option[1]').click()
        //DESIGNATION
        cy.get('[placeholder="Designation"]').should('be.visible').click()
        cy.xpath('/html/body/div[3]/div/div/div/mat-option[1]').click()
        //START DATE
        cy.get('[formcontrolname="startDate"]').should('be.visible').type('11/02/2039')
        //END DATE 
        cy.get('[formcontrolname="endDate"]').should('be.visible').type('13/02/2039')
        //FileUpload
        cy.get('[id="contractInformation"]').attachFile('1mb.pdf')
        cy.wait(6000)
        // once submit the contact we should need to change contact slote
        cy.xpath('/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-contract-information-edit-shell/app-contract-information-edit/div/div[2]/div[3]/button[1]/span[2]/div').should('be.visible').click()
    }
}