export default class DeleteApplication {
    ClickDeleteBtn(){
        return cy.get('[aria-label="delete"]');
          
    }
    ClickToSureDeleteBtn(){
      return cy.xpath('/html/body/div[3]/div[2]/div/mat-dialog-container/div/div/app-common-delete-confirmation-dialog/div/div[2]/button[1]');
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
