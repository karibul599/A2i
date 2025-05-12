export default class exitClearance{
    clickMyTaskBtn(){
        cy.contains('My Task').should('be.visible').click()
    }
    processapplication(){
        cy.contains(' Exit Clearance ').should('be.visible').click()
        cy.xpath('/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-my-task-exit-clearance-approval/app-my-task-exit-clearance-approval-list-shell/app-my-task-exit-clearance-approval-list/div/div/mat-table/mat-row[1]/mat-cell[9]/div/section/button')
          .should('be.visible').eq(0).click()
        //Supervisor
        cy.xpath('/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-my-task-exit-clearance-approval-form-shell/app-my-task-exit-clearance-approval-form/div[2]/div[1]/table/tbody/tr[1]/td[4]/input').check()
        cy.xpath('/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-my-task-exit-clearance-approval-form-shell/app-my-task-exit-clearance-approval-form/div[2]/div[1]/table/tbody/tr[2]/td[4]/input').check()
        //IT
        cy.xpath('/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-my-task-exit-clearance-approval-form-shell/app-my-task-exit-clearance-approval-form/div[2]/div[2]/table/tbody/tr[1]/td[4]/input').check()
        cy.xpath('/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-my-task-exit-clearance-approval-form-shell/app-my-task-exit-clearance-approval-form/div[2]/div[2]/table/tbody/tr[2]/td[4]/input').check()
        //HR
        cy.xpath('/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-my-task-exit-clearance-approval-form-shell/app-my-task-exit-clearance-approval-form/div[2]/div[3]/table/tbody/tr[1]/td[4]/input').check()
        cy.xpath('/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-my-task-exit-clearance-approval-form-shell/app-my-task-exit-clearance-approval-form/div[2]/div[3]/table/tbody/tr[2]/td[4]/input').check()
        //Admin and Logistics
        // cy.xpath('').check()
        // cy.xpath('').check()
        //Finance
        cy.xpath('/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-my-task-exit-clearance-approval-form-shell/app-my-task-exit-clearance-approval-form/div[2]/div[5]/table/tbody/tr[1]/td[4]/input').check()
        cy.xpath('/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-my-task-exit-clearance-approval-form-shell/app-my-task-exit-clearance-approval-form/div[2]/div[5]/table/tbody/tr[2]/td[4]/input').check()
        cy.contains(' Confirmed/Approved').scrollIntoView().should('be.visible').click()
        cy.get('[formcontrolname="remarks"]').should('be.visible').type('Pass')
        cy.contains(' Submit').should('be.visible').click()
    }
}