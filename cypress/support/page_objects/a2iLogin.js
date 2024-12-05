export default class a2iLogin {
//Visit URl 
  visitA2iLoginPage() {
  return cy.visit('http://localhost:4200');  
  }
  visitKeycloakOriginToA2iUserLogin(username, password) {
//Login section
  return cy.origin("http://192.168.30.101:9090",{ args: { username, password } }, ({ username, password }) => {
         cy.get('input[name="username"]')
           .should("exist")
           .and("be.visible")
           .type(username);
         cy.get('input[name="password"]')
           .should("exist")
           .and("be.visible")
           .type(password);
         cy.get("#kc-login")
           .should("exist")
           .and("be.visible")
           .click();
    });
      
  }
//Delay time   
  delayMS(x){
  return cy.wait(x);
    
  }
}
  