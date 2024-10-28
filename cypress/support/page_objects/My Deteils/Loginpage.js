export default class LoginPage {
    //Visit URl 
    visit() {
        return cy.visit('http://localhost:4200/');  
      }
      
   VisitOrigin(userName,password) {
       //Login section
       
       return cy.origin("http://192.168.30.123:8080", { args: { userName, password } }, ({ userName, password }) => {
 
         cy.get('input[name="username"]').type(userName);
         cy.get('input[name="password"]').type(password);
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
  