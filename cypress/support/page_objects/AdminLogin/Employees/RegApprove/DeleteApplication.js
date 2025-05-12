export default class DeleteApplication {
    ClickDeleteBtn(){
        return cy.xpath('/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-registration-approval/app-registration-approval-list-shell/app-registration-approval-list/div/div/mat-table/mat-row[1]/mat-cell[7]/div/section/button[2]/span[4]');
          
    }
    ClickToSureDeleteBtn(){
      return cy.contains(' Continue ').should('be.visible');
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
