export default class RegApprovePage {
    EmployeesBtn(){
        return cy.xpath( "/html/body/app-root/app-erp-sidenav/div/aside/nav/div/div/div[2]/mat-nav-list/div[2]/div[1]/mat-icon");
          
    }
    RegApproveBtn(){
      return cy.get('a[href="/hr/registration-approval"]');
    }
    wait500(){
        const x=500;
        return cy.wait(x);
      }
      wait1000(){
        const x=1000;
        return cy.wait(x);
      }
}