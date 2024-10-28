export default class ContractInformation {
    //Contract Information
  
Designation() {
     //Designation
    return cy.xpath('/html/body/app-root/app-employee/mat-stepper/div/div[2]/div[4]/app-contract-info-form-shell/app-contract-info/div/div/div/div[1]/mat-form-field/div[1]/div/div[2]/input');
       
    }
    DesignationType() {
      //Designation Type
      return cy.xpath("/html/body/div[2]/div/div/div/mat-option[1]");
    }
  
    Team() {
       //Team
    return  cy.xpath("/html/body/app-root/app-employee/mat-stepper/div/div[2]/div[4]/app-contract-info-form-shell/app-contract-info/div/div/div/div[2]/mat-form-field/div[1]/div/div[2]/input");
    }
    TeamType() {
        //Team Type
    return  cy.xpath("/html/body/div[2]/div/div/div/mat-option[2]");
     }
     ContractModality() {
      //Contract Modality
    return cy.xpath("/html/body/app-root/app-employee/mat-stepper/div/div[2]/div[4]/app-contract-info-form-shell/app-contract-info/div/div/div/div[3]/mat-form-field/div[1]/div/div[2]/input");
    }
    ContractModalityType() {
        //Contract Modality Type
    return cy.xpath("/html/body/div[2]/div/div/div/mat-option[1]");
      }
  
    ContractStartDate() {
      //Contract Start Date
    return cy.xpath("/html/body/app-root/app-employee/mat-stepper/div/div[2]/div[4]/app-contract-info-form-shell/app-contract-info/div/div/div/div[4]/mat-form-field/div[1]/div/div[2]/input");
    }
  
    ContractEndDate() {
        //Contract Start Date
    return cy.xpath( "/html/body/app-root/app-employee/mat-stepper/div/div[2]/div[4]/app-contract-info-form-shell/app-contract-info/div/div/div/div[5]/mat-form-field/div[1]/div/div[2]/input");
      }
    UploadPDF() {
        //
      //Upload PDF
      return  cy.xpath("/html/body/app-root/app-employee/mat-stepper/div/div[2]/div[4]/app-contract-info-form-shell/app-contract-info/div/div/div/div[6]/div/div[1]/div/input");
    }
    
    NextToSubmit() {
      //Next Page
      return cy.contains("button", " Submit ");
    }
    wait500() {
      const x = 500;
      return cy.wait(x);
    }
    wait1000() {
      const y = 1000;
      return cy.wait(y);
    }
  }
  
     
     
       
       
        

        
        