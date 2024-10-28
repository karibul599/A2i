export default class RejectAndRetainConfirm {
    //Click My Details Btn 
   ClickMyDetailsBtn(){
   return cy.xpath('/html/body/app-root/app-erp-sidenav/div/aside/nav/div/div/div[2]/mat-nav-list/div[7]/div[1]/mat-icon');
   }
   //Click Activity Report Btn
   ClickActivityReportBtn(){
   return cy.get('a[href="/salary-documents/monthly-activity-report"]');   
   }
//    Scrollview(){
//     cy.get('#submit-button').scrollIntoView();
//    }

   wait500(){
       const x=500;
       return cy.wait(x);
     }
   wait1000(){
       const y=1000;
       return cy.wait(y);
     }
}