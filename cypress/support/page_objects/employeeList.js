export default class employeeList{
    employList(){
        cy.contains('Employees').should('be.visible').click();
        cy.get('[href="/hr/employee-list"]').should('be.visible').click();
        //Employee List
        cy.wait(4000)
        cy.get('[formcontrolname="employeeName"]').should('be.visible').click();
        cy.contains(' A.K. Sabbir Mahbub ').should('be.visible').click()
        cy.contains(' Filter Data ').should('be.visible').click()
        cy.contains('Download').should('be.visible').click()
        cy.get('[value="pdf"]').should('be.visible').click();
        cy.wait(10000)
        
     }
     ContractInfoReg(){
        cy.contains('Employees').should('be.visible').click();
        cy.get('[href="/hr/contract-info-req"]').should('be.visible').click();
        cy.wait(4000)
        //Team
        cy.get('[formcontrolname="team"]').should('be.visible').click();
        cy.xpath('/html/body/div[3]/div/div/div/mat-option[1]').should('be.visible').click()
        cy.wait(4000)
        cy.get('[formcontrolname="employeeName"]').should('be.visible').click();
        cy.contains(' Md. Jahanger Alam ').should('be.visible').click()
        cy.wait(4000)
        cy.get('[formcontrolname="contractModality"]').should('be.visible').click();
        cy.xpath('/html/body/div[3]/div/div/div/mat-option[1]/span').should('be.visible').click()
        cy.contains(' Filter Data ').should('be.visible').click();
        cy.wait(3000)
        cy.xpath('/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-contract-info-req/app-contract-info-req-list-shell/app-contract-info-req-list/div/div/mat-table/mat-row/mat-cell[6]/div/section/button[1]')
          .should('be.visible').eq(0).click()
          //Contract Administer
        cy.wait(7000)
        cy.get('[formcontrolname="contractAdminister"]').should('be.visible').click();
        cy.contains(' Md. Jahanger Alam ').should('be.visible').click()
       // cy.get('[formcontrolname="dailyRates"]').should('be.visible').type('10');
        cy.contains('Approve').should('be.visible').click()
        cy.wait(4000)
        
     }

}
