export default class TimeSheetRetain {
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
       return cy.xpath('/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-tm-timesheet/app-tm-timesheet-list-shell/app-tm-timesheet-list/div/div/div/div[2]/mat-table/mat-row[4]/mat-cell[1]/div/mat-checkbox/div/div/input');
       }
   //click Retain Btn
   clickRetainBtn(){
       return cy.xpath('/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-tm-timesheet/app-tm-timesheet-list-shell/app-tm-timesheet-list/div/div/div/div[1]/button[1]/span[2]');
       }

    //Remark
   Remark(){
    return cy.xpath('/html/body/div[3]/div[2]/div/mat-dialog-container/div/div/app-return-remarks-dialog/div[1]/div/mat-form-field/div[1]/div/div[2]/textarea');
    }
    //Submit 
   Submit(){
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