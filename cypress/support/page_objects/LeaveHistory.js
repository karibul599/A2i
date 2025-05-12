export default class leaveHistory{
    ClickMyDetailsBtn(){
           cy.xpath('/html/body/app-root/app-erp-sidenav/div/aside/nav/div/div/div[2]/mat-nav-list/div[7]/div[1]/mat-icon').should('be.visible').click();
        }
        //Click Activity Report Btn
        ClickActivityReportBtn(){
            cy.get('a[href="/salary-documents/leave-history"]').should('be.visible').click();
            cy.wait(3000)
            cy.get('[formcontrolname="startDate"]').should('be.visible').type('26/01/2017')
            cy.get('[formcontrolname="endDate"]').should('be.visible').type('26/04/2025')
            cy.contains(' Filter Data ').should('be.visible').click();
        }
}