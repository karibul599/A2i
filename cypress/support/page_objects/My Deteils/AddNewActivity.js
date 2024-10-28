export default class AddNewReport {
     //Click My Details Btn 
    ClickMyDetailsBtn(){
    return cy.xpath('/html/body/app-root/app-erp-sidenav/div/aside/nav/div/div/div[2]/mat-nav-list/div[7]/div[1]/mat-icon');
    }
    //Click Activity Report Btn
    ClickActivityReportBtn(){
    return cy.get('a[href="/salary-documents/monthly-activity-report"]');   
    }
    //Click Calender
    ClickCalenderBtn(){
        return cy.xpath('/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-monthly-activity-report/div/app-monthly-activity-reprt-list-shell/app-monthly-activity-reprt-list/div[1]/div/div[1]/div/mat-form-field/div[1]/div/div[3]/mat-datepicker-toggle/button/span[3]');
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
    return cy.xpath('/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-monthly-activity-report/div/app-monthly-activity-reprt-list-shell/app-monthly-activity-reprt-list/div[1]/div/div[2]/button');
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
   
    //Title 
    Title(){
    return cy.xpath('/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-monthly-activity-report/div/app-monthly-activity-reprt-form-shell/app-monthly-activity-reprt-form/div/form/div[1]/div[3]/div/div/div/div[1]/div[1]/mat-form-field/div[1]/div/div[2]/input');
    }
    //Duration 
    Duration()
    {
    return cy.xpath('/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-monthly-activity-report/div/app-monthly-activity-reprt-form-shell/app-monthly-activity-reprt-form/div/form/div[1]/div[3]/div/div/div/div[1]/div[2]/mat-form-field/div[1]/div/div[2]/input');
    }
    //Description
    Description(){
    return cy.xpath('/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-monthly-activity-report/div/app-monthly-activity-reprt-form-shell/app-monthly-activity-reprt-form/div/form/div[1]/div[3]/div/div/div/div[1]/div[3]/mat-form-field/div[1]/div/div[2]/textarea');
    }
// Add next Create Monthly Activity Report 

    ClickPlashBtn(){
    return cy.xpath('/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-monthly-activity-report/div/app-monthly-activity-reprt-form-shell/app-monthly-activity-reprt-form/div/form/div[1]/div[3]/div/div/div/div[2]/button');
   }
    
    //Title 
    Title2(){
    return cy.xpath('/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-monthly-activity-report/div/app-monthly-activity-reprt-form-shell/app-monthly-activity-reprt-form/div/form/div[1]/div[3]/div[2]/div/div/div[1]/div[1]/mat-form-field/div[1]/div/div[2]/input');
    }
    //Duration 
    Duration2()
    {
    return cy.xpath('/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-monthly-activity-report/div/app-monthly-activity-reprt-form-shell/app-monthly-activity-reprt-form/div/form/div[1]/div[3]/div[2]/div/div/div[1]/div[2]/mat-form-field/div[1]/div/div[2]/input');
    }
    //Description
    Description2(){
    return cy.xpath('/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-monthly-activity-report/div/app-monthly-activity-reprt-form-shell/app-monthly-activity-reprt-form/div/form/div[1]/div[3]/div[2]/div/div/div[1]/div[3]/mat-form-field/div[1]/div/div[2]/textarea');
    }

    SubmitBtn(){
        return cy.xpath('/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-monthly-activity-report/div/app-monthly-activity-reprt-form-shell/app-monthly-activity-reprt-form/div/form/div[2]/button[1]/span[2]')
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