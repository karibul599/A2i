export default class accessManagement{
    AccessManagement(){
        cy.contains('Configuration').should('be.visible').click()
        cy.get('[href="/configuration/access-management"]').should('be.visible').click()
        cy.wait(2000)
        cy.contains(' TRANSPORT AND FOOD ').should('be.visible').click()
        ///
        cy.xpath('/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-access-management/app-access-management-list-shell/app-access-management-list/div/table/tbody/tr[2]/td/div/div/table/tbody/tr[1]/td[2]/button/mat-icon')
          .should('be.visible').eq(0).click()
          //////////////////////////////////////////////
        cy.wait(3000)
        //TEAM
        cy.get('[formcontrolname="team"]').click({force: true})
        cy.xpath('/html/body/div[3]/div[3]/div/div/mat-option[1]').should('be.visible').click()
        //EMPLOYEE
        cy.wait(4000)
        cy.get('[formcontrolname="payee"]').click({force: true})
        cy.xpath('/html/body/div[3]/div[3]/div/div/mat-option[1]').should('be.visible').click()
        //NOTE
        cy.get('[placeholder="Note"]').should('be.visible').type('team')
        cy.contains('Save').should('be.visible').click()
        cy.contains('close').scrollIntoView().should('be.visible').click()
        cy.wait(2000)
        /////////////////////////////////////////////////////
        ///
        cy.xpath('/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-access-management/app-access-management-list-shell/app-access-management-list/div/table/tbody/tr[2]/td/div/div/table/tbody/tr[2]/td[2]/button/mat-icon')
          .should('be.visible').eq(0).click()
          //////////////////////////////////////////////
        cy.wait(3000)
        //TEAM
        cy.get('[formcontrolname="team"]').click({force: true})
        cy.xpath('/html/body/div[3]/div[3]/div/div/mat-option[1]').should('be.visible').click()
        //EMPLOYEE
        cy.wait(4000)
        cy.get('[formcontrolname="payee"]').click({force: true})
        cy.xpath('/html/body/div[3]/div[3]/div/div/mat-option[1]').should('be.visible').click()
        //NOTE
        cy.get('[placeholder="Note"]').should('be.visible').type('team')
        cy.contains('Save').should('be.visible').click()
        cy.contains('close').scrollIntoView().should('be.visible').click()
        cy.wait(2000)
        /////////////////////////////////////////////////////
         ///
         cy.xpath('/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-access-management/app-access-management-list-shell/app-access-management-list/div/table/tbody/tr[2]/td/div/div/table/tbody/tr[3]/td[2]/button/mat-icon')
         .eq(0).click()
         //////////////////////////////////////////////
       cy.wait(3000)
       //TEAM
       cy.get('[formcontrolname="team"]').click({force: true})
       cy.xpath('/html/body/div[3]/div[3]/div/div/mat-option[1]').should('be.visible').click()
       //EMPLOYEE
       cy.wait(4000)
       cy.get('[formcontrolname="payee"]').click({force: true})
       cy.xpath('/html/body/div[3]/div[3]/div/div/mat-option[1]').should('be.visible').click()
       //NOTE
       cy.get('[placeholder="Note"]').should('be.visible').type('team')
       cy.contains('Save').should('be.visible').click()
       cy.contains('close').scrollIntoView().should('be.visible').click()
       cy.wait(2000)
       /////////////////////////////////////////////////////
       // EXIT CLEARANCE 
       cy.contains(' EXIT CLEARANCE ').should('be.visible').click()
       cy.xpath('/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-access-management/app-access-management-list-shell/app-access-management-list/div/table/tbody/tr[4]/td/div/div/table/tbody/tr[1]/td[2]/button/mat-icon')
          .eq(0).click()
          //////////////////////////////////////////////
        cy.wait(3000)
        //TEAM
        cy.get('[formcontrolname="team"]').click({force: true})
        cy.xpath('/html/body/div[3]/div[3]/div/div/mat-option[1]').should('be.visible').click()
        //EMPLOYEE
        cy.wait(4000)
        cy.get('[formcontrolname="payee"]').click({force: true})
        cy.xpath('/html/body/div[3]/div[3]/div/div/mat-option[1]').should('be.visible').click()
        //NOTE
        cy.get('[placeholder="Note"]').should('be.visible').type('team')
        cy.contains('Save').should('be.visible').click()
        cy.contains('close').scrollIntoView().should('be.visible').click()
        cy.wait(2000)
        /////////////////////////////////////////////////////
        ///
        cy.xpath('/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-access-management/app-access-management-list-shell/app-access-management-list/div/table/tbody/tr[4]/td/div/div/table/tbody/tr[2]/td[2]/button/span[3]')
          .eq(0).click({force: true} )
          //////////////////////////////////////////////
        cy.wait(3000)
        //TEAM
        cy.get('[formcontrolname="team"]').click({force: true})
        cy.xpath('/html/body/div[3]/div[3]/div/div/mat-option[1]').should('be.visible').click()
        //EMPLOYEE
        cy.wait(4000)
        cy.get('[formcontrolname="payee"]').click({force: true})
        cy.xpath('/html/body/div[3]/div[3]/div/div/mat-option[1]').should('be.visible').click()
        //NOTE
        cy.get('[placeholder="Note"]').should('be.visible').type('team')
        cy.contains('Save').should('be.visible').click()
        cy.contains('close').scrollIntoView().should('be.visible').click()
        cy.wait(2000)
        /////////////////////////////////////////////////////
         ///
         cy.xpath('/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-access-management/app-access-management-list-shell/app-access-management-list/div/table/tbody/tr[4]/td/div/div/table/tbody/tr[3]/td[2]/button')
         .eq(0).click({force: true} )
         //////////////////////////////////////////////
       cy.wait(3000)
       //TEAM
       cy.get('[formcontrolname="team"]').click({force: true})
       cy.xpath('/html/body/div[3]/div[3]/div/div/mat-option[1]').should('be.visible').click()
       //EMPLOYEE
       cy.wait(4000)
       cy.get('[formcontrolname="payee"]').click({force: true})
       cy.xpath('/html/body/div[3]/div[3]/div/div/mat-option[1]').should('be.visible').click()
       //NOTE
       cy.get('[placeholder="Note"]').should('be.visible').type('team')
       cy.contains('Save').should('be.visible').click()
       cy.contains('close').scrollIntoView().should('be.visible').click()
       cy.wait(2000)
       cy.xpath('/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-access-management/app-access-management-list-shell/app-access-management-list/div/table/tbody/tr[4]/td/div/div/table/tbody/tr[4]/td[2]/button/mat-icon')
          .eq(0).click({force: true} )
          //////////////////////////////////////////////
        cy.wait(3000)
        //TEAM
        cy.get('[formcontrolname="team"]').click({force: true})
        cy.xpath('/html/body/div[3]/div[3]/div/div/mat-option[1]').should('be.visible').click()
        //EMPLOYEE
        cy.wait(4000)
        cy.get('[formcontrolname="payee"]').click({force: true})
        cy.xpath('/html/body/div[3]/div[3]/div/div/mat-option[1]').should('be.visible').click()
        //NOTE
        cy.get('[placeholder="Note"]').should('be.visible').type('team')
        cy.contains('Save').should('be.visible').click()
        cy.contains('close').scrollIntoView().should('be.visible').click()
        cy.wait(2000)
        /////////////////////////////////////////////////////
        ///
        cy.xpath('/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-access-management/app-access-management-list-shell/app-access-management-list/div/table/tbody/tr[4]/td/div/div/table/tbody/tr[5]/td[2]/button')
          .eq(0).click({force: true} )
          //////////////////////////////////////////////
        cy.wait(3000)
        //TEAM
        cy.get('[formcontrolname="team"]').click({force: true})
        cy.xpath('/html/body/div[3]/div[3]/div/div/mat-option[1]').should('be.visible').click()
        //EMPLOYEE
        cy.wait(4000)
        cy.get('[formcontrolname="payee"]').click({force: true})
        cy.xpath('/html/body/div[3]/div[3]/div/div/mat-option[1]').should('be.visible').click()
        //NOTE
        cy.get('[placeholder="Note"]').should('be.visible').type('team')
        cy.contains('Save').should('be.visible').click()
        cy.contains('close').scrollIntoView().should('be.visible').click()
        cy.wait(2000)
        /////////////////////////////////////////////////////
         ///
         cy.xpath('/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-access-management/app-access-management-list-shell/app-access-management-list/div/table/tbody/tr[4]/td/div/div/table/tbody/tr[6]/td[2]/button')
         .eq(0).click({force: true} )
         //////////////////////////////////////////////
       cy.wait(3000)
       //TEAM
       cy.get('[formcontrolname="team"]').click({force: true})
       cy.xpath('/html/body/div[3]/div[3]/div/div/mat-option[1]').should('be.visible').click()
       //EMPLOYEE
       cy.wait(4000)
       cy.get('[formcontrolname="payee"]').click({force: true})
       cy.xpath('/html/body/div[3]/div[3]/div/div/mat-option[1]').should('be.visible').click()
       //NOTE
       cy.get('[placeholder="Note"]').should('be.visible').type('team')
       cy.contains('Save').should('be.visible').click()
       cy.contains('close').scrollIntoView().should('be.visible').click()
       cy.wait(2000)
       cy.xpath('/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-access-management/app-access-management-list-shell/app-access-management-list/div/table/tbody/tr[4]/td/div/div/table/tbody/tr[7]/td[2]/button')
         .eq(0).click({force: true} )
         //////////////////////////////////////////////
       cy.wait(3000)
       //TEAM
       cy.get('[formcontrolname="team"]').click({force: true})
       cy.xpath('/html/body/div[3]/div[3]/div/div/mat-option[1]').should('be.visible').click()
       //EMPLOYEE
       cy.wait(4000)
       cy.get('[formcontrolname="payee"]').click({force: true})
       cy.xpath('/html/body/div[3]/div[3]/div/div/mat-option[1]').should('be.visible').click()
       //NOTE
       cy.get('[placeholder="Note"]').should('be.visible').type('team')
       cy.contains('Save').should('be.visible').click()
       cy.contains('close').scrollIntoView().should('be.visible').click()
       cy.wait(2000)

    }
   

}