export default class EmailEditApplication {
    OpenApplication(){
        //Open Application
        return cy.get('[mattooltip="Open"]');
          
    }
    AddEmail(){
        return cy.get('[aria-label="Email"]');
    }
    Next() {
      //Upload Photo
      return  cy.contains("button", "Next");
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
