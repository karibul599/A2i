export default class RetainAR {
    //Click Team Btn 
   ClickTeamBtn(){
   return cy.xpath('/html/body/app-root/app-erp-sidenav/div/aside/nav/div/div/div[2]/mat-nav-list/div[7]/div[1]/mat-icon');
   }
   //Click Team Activity Report Btn
   ClickTeamActivityReportBtn(){
   return cy.get('a[href="/team/team-activity-report"]');   
   }
   //Click Application Select Btn
   ClickApplicationSelectBtn(){
        cy.get('[type="checkbox"]').eq(0).then(($checkbox) => {
        if ($checkbox.length > 0) {
          cy.wrap($checkbox).check({ force: true });
        } else {
          cy.get('[formcontrolname="month"]').should('be.visible').clear().type('05/2025');
          cy.contains(' Filter Data ').should('be.visible').click();
          
          cy.get('[type="checkbox"]').eq(0).then(($checkbox) => {
            if ($checkbox.length > 0) {
              cy.wrap($checkbox).check({ force: true });
            } else {
              cy.get('[formcontrolname="month"]').should('be.visible').clear().type('06/2025');
              cy.contains(' Filter Data ').should('be.visible').click();
              
              
              cy.get('[type="checkbox"]').eq(0).then(($checkbox) => {
                if ($checkbox.length > 0) {
                  cy.wrap($checkbox).check({ force: true });
                } else {
                  
                  cy.log('Checkbox still not found after trying multiple months.');
                }
              });
              
            }
          });
        }
      });
      
       ;
       }
   //click Approve Btn 
   clickRetainBtn(){
       return cy.xpath('/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-team-activity-report/app-team-activity-report-list-shell/app-team-activity-report-list/div/div/div/div/button[1]/span[2]');
       }
    Remark(){
        return cy.xpath('/html/body/div[3]/div[2]/div/mat-dialog-container/div/div/app-return-remarks-dialog/div[1]/div/mat-form-field/div[1]/div/div[2]/textarea');
    }
   //click Confirm Approve Btn
   clickSubmitBtn(){
       return cy.xpath('/html/body/div[3]/div[2]/div/mat-dialog-container/div/div/app-return-remarks-dialog/div[1]/div/button');
       }

   wait500(){
       const x=500;
       return cy.wait(x);
     }
   wait1000(){
       const y=1000;
       return cy.wait(y);
     }
}