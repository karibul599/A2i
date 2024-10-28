export default class BasicInformation{
    
    FirstName() {
        //First Name
      return  cy.get('div>input[placeholder="First Name"]'); 
      }
    LastName() {
        //Last Name
      return cy.get('div>input[placeholder="Last Name"]');
    }
//Phone Number== We login with Phone number

    DateOfBirth() {
       //Date of Birth
      return  cy.get('div>input[aria-label="dob"]');
    }
    JoiningDate() {
       //Joining Date
      return cy.get('div>input[id="mat-input-6"]');
    }
    Gender() {
      //Gender
      return cy.get('div>div>input[type="radio"][id="mat-radio-2-input"]');
    }
    UploadPhoto() {
        //Upload Photo
        return cy.get('div>input[type="file"][id="file-photo"]');
      }
      Next() {
        //Upload Photo
        return  cy.contains("button", "Next");
      }
      reload() {
        //reload
        return cy.reload();
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

