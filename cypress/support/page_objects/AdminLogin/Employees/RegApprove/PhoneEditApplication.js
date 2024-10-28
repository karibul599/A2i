export default class PhoneApplication {
    OpenApplication(){
        //Open Application
        return cy.get('[mattooltip="Open"]');
          
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
