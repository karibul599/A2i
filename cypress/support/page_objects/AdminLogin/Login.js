export default class LoginPage {
    //Visit URl 
    visit() {
        return cy.visit('http://localhost:4200/');  
      }
   VisitOrigin() {
       //Login section

       return cy.origin("http://192.168.30.123:8080", () => {
 
         cy.get('input[name="username"]').type("jahanger.alam@a2i.gov.bd");
         cy.get('input[name="password"]').type("@#$12345Bmail");
         cy.get("#kc-login").should("exist").and("be.visible").click();
         cy.wait(2000);
         cy.visit("http://localhost:4200/");
         cy.wait(1000);
    });
      
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
  