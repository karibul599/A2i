export default class TimeSheetReject {
    //Click Team Btn 
   ClickTeamBtn(){
   return cy.xpath('/html/body/app-root/app-erp-sidenav/div/aside/nav/div/div/div[2]/mat-nav-list/div[7]/div[1]/mat-icon');
   }
   //Click Team Activity Report Btn
   ClickTimeSheetBtn(){
   return cy.get('a[href="/team/team-timesheet"]');   
   }

   clickReportBtn(){
       return cy.xpath('/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-tm-timesheet/app-tm-timesheet-list-shell/app-tm-timesheet-list/div/div/div/div[2]/mat-table/mat-row[4]/mat-cell[8]/div/button[2]/span[4]');
                       
    }
    //Reject
   Reject(){
        return cy.xpath('/html/body/div[3]/div[2]/div/mat-dialog-container/div/div/app-salary-document-attachment-preview-and-downloader/div/div/button[2]/mat-icon');
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