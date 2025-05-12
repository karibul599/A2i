export default class teamTimesheet{
    TeamTimesheetReportApprove(){
       
        cy.xpath('/html/body/app-root/app-erp-sidenav/div/aside/nav/div/div/div[2]/mat-nav-list/div[7]/div[1]/mat-icon').click();
        cy.get('a[href="/team/team-timesheet"]').click();   
            
        cy.wait(4000)
        cy.get('[type="checkbox"]').eq(0).should('exist').check({ force: true });
        cy.contains(' Approve ').should('be.visible').click()
        cy.contains(' Continue ').should('be.visible').click()
    }
}