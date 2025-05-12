export default class TimeSheetApprove {
    //Click Team Btn 
   ClickTeamBtn(){
   return cy.xpath('/html/body/app-root/app-erp-sidenav/div/aside/nav/div/div/div[2]/mat-nav-list/div[7]/div[1]/mat-icon');
   }
   //Click Team Activity Report Btn
   ClickTimeSheetBtn(){
   return cy.get('a[href="/team/team-timesheet"]');   
   }
   //Click Application Select Btn
   ClickApplicationSelectBtn(){
       return cy.get('[type="checkbox"]').eq(0).should('exist').check({ force: true });
       }               
   //click Approve Btn 
   clickApproveBtn(){
       return cy.xpath('/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-tm-timesheet/app-tm-timesheet-list-shell/app-tm-timesheet-list/div/div/div/div[1]/button[2]/span[2]');
       }
   //click Confirm Approve Btn
   clickConfirmApproveBtn(){
       return cy.xpath('/html/body/div[3]/div[2]/div/mat-dialog-container/div/div/app-team-timesheet-approval-dialog/div/div[2]/button[1]');
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