export default class AddNewTimeSheet {
    //Click My Details Btn 
   ClickMyDetailsBtn(){
   return cy.xpath('/html/body/app-root/app-erp-sidenav/div/aside/nav/div/div/div[2]/mat-nav-list/div[7]/div[1]/mat-icon');
   }
   //Click Activity Report Btn
   ClickTimeSheetBtn(){
   return cy.get('a[href="/salary-documents/timesheet"]');   
   }
   //Click Calender
   ClickCalenderBtn(){
       return cy.xpath('/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-timesheet-history-list-shell/app-timesheet-history-list/div[1]/div/div/div/mat-form-field/div[1]/div/div[3]/mat-datepicker-toggle/button/span[3]');
       }
   //Click Year 
   clickYearBtn(){
       return cy.xpath('/html/body/div[3]/div[2]/div/mat-datepicker-content/div[2]/mat-calendar/div/mat-multi-year-view/table/tbody/tr[3]/td[1]/button/span[1]');
       }
   //Click Month Btn
  
   clickMonthBtn(Month){
       //let Month;
       return cy.contains(Month);
       }
   //Click Add New Btn
   clickAddNewBtn(){
   return cy.xpath('/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-timesheet-history-list-shell/app-timesheet-history-list/div[1]/button/span[2]');
   }
//Create Monthly Activity Report
   //Select Month===
   
   //Supervisor 
   // Supervisor(){
   // return cy.xpath('/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-monthly-activity-report/div/app-monthly-activity-reprt-form-shell/app-monthly-activity-reprt-form/div/form/div[1]/div[2]/mat-form-field/div[1]/div/div[2]/input');
   // }
   // // Select Supervisor 
   // SelectSupervisor(){
   //     return cy.xpath('/html/body/div[3]/div/div/div/mat-option/span');
   //     }
  
   //Leave1 
   Leave1(){
   return cy.xpath('/html/body/div[3]/div[2]/div/mat-dialog-container/div/div/app-timesheet-history-dialog/app-timesheet-history-form-shell/app-timesheet-history-form/div/div/form/div[3]/table/tbody[4]/tr/td[3]/div/mat-slide-toggle/div/button/span[2]/span/span[2]');
   }
   LeaveType1(){
    return cy.xpath('/html/body/div[3]/div[2]/div/mat-dialog-container/div/div/app-timesheet-history-dialog/app-timesheet-history-form-shell/app-timesheet-history-form/div/div/form/div[3]/table/tbody[4]/tr/td[3]/div/div/mat-form-field/div[1]/div/div[2]/mat-select');
   }
   SelectLeaveType(){
    return cy.xpath('/html/body/div[3]/div[4]/div/div/mat-option[1]/span');
   }
   //Leave2 
   Leave2()
   {
   return cy.xpath('/html/body/div[3]/div[2]/div/mat-dialog-container/div/div/app-timesheet-history-dialog/app-timesheet-history-form-shell/app-timesheet-history-form/div/div/form/div[3]/table/tbody[11]/tr/td[3]/div/mat-slide-toggle/div/button/span[2]/span/span[3]');
   }
   LeaveType2(){
    return cy.xpath('/html/body/div[3]/div[2]/div/mat-dialog-container/div/div/app-timesheet-history-dialog/app-timesheet-history-form-shell/app-timesheet-history-form/div/div/form/div[3]/table/tbody[11]/tr/td[3]/div/div/mat-form-field/div[1]/div/div[2]/mat-select');
   }
   //Leave3
   Leave3(){
   return cy.xpath('/html/body/div[3]/div[2]/div/mat-dialog-container/div/div/app-timesheet-history-dialog/app-timesheet-history-form-shell/app-timesheet-history-form/div/div/form/div[3]/table/tbody[18]/tr/td[3]/div/mat-slide-toggle/div/button/span[2]/span/span[3]');
   }
   LeaveType3(){
    return cy.xpath('/html/body/div[3]/div[2]/div/mat-dialog-container/div/div/app-timesheet-history-dialog/app-timesheet-history-form-shell/app-timesheet-history-form/div/div/form/div[3]/table/tbody[18]/tr/td[3]/div/div/mat-form-field/div[1]/div/div[2]/mat-select');
   }
   //Attendance1
   Attendance1(){
   return cy.xpath('/html/body/div[3]/div[2]/div/mat-dialog-container/div/div/app-timesheet-history-dialog/app-timesheet-history-form-shell/app-timesheet-history-form/div/div/form/div[3]/table/tbody[14]/tr/td[2]/div/mat-slide-toggle/div/button/span[2]/span/span[3]');
  }
   
   //Attendance2 
   Attendance2(){
   return cy.xpath('/html/body/div[3]/div[2]/div/mat-dialog-container/div/div/app-timesheet-history-dialog/app-timesheet-history-form-shell/app-timesheet-history-form/div/div/form/div[3]/table/tbody[25]/tr/td[2]/div/mat-slide-toggle/div/button/span[2]/span/span[3]');
   }
   //Attendance3 
   Attendance3()
   {
   return cy.xpath('/html/body/div[3]/div[2]/div/mat-dialog-container/div/div/app-timesheet-history-dialog/app-timesheet-history-form-shell/app-timesheet-history-form/div/div/form/div[3]/table/tbody[28]/tr/td[2]/div/mat-slide-toggle/div/button/span[2]/span/span[3]');
   }

   SubmitBtn(){
       return cy.xpath('/html/body/div[3]/div[2]/div/mat-dialog-container/div/div/app-timesheet-history-dialog/app-timesheet-history-form-shell/app-timesheet-history-form/div/div/form/div[5]/button[1]/span[2]')
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