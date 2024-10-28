export default class RejectAR {
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
       return cy.xpath('/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-team-activity-report/app-team-activity-report-list-shell/app-team-activity-report-list/div/div/mat-table/mat-row/mat-cell[1]/mat-checkbox/div/div/input');
       }
   //click Approve Btn 
   clickApplicationViewBtn(){
       return cy.xpath('/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-team-activity-report/app-team-activity-report-list-shell/app-team-activity-report-list/div/div/mat-table/mat-row[2]/mat-cell[8]/div/section/button[1]/span[4]');
       }
//click Reject Btn
    ClickRejectBtn(){
        return cy.xpath('/html/body/div[3]/div[2]/div/mat-dialog-container/div/div/app-team-activity-report-approval-dialog/app-ic-gob-approval-form/div/div[2]/button[2]/span[2]');
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