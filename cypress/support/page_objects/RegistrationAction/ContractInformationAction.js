import ContractInformation from "../Registration/ContractInformation"

export default class ContractInformationAction {
  constructor() {
    globalThis.contractInformationAction = new ContractInformation();
  }

  performProfessionalExperiencesAction( UploadPDF, FromDate, ToDate) {
   //Contract Information

    //Designation
    contractInformationAction.Designation().click({ force: true });
    contractInformationAction.wait500();

    //Designation Type
    contractInformationAction.DesignationType().click({ force: true });
    contractInformationAction.wait500();

    //Team
    contractInformationAction.Team().click({ force: true });
    contractInformationAction.wait500();

    //Team type
    contractInformationAction.TeamType().click({ force: true });
    contractInformationAction.wait500();

    //Contract Modality
    contractInformationAction.ContractModality().click({ force: true });
    contractInformationAction.wait500();

    //Contract Modality Type
    contractInformationAction.ContractModalityType().click({ force: true });
    contractInformationAction.wait500();

    //Contract Start Date
    contractInformationAction.ContractStartDate().type(FromDate, { force: true });
    contractInformationAction.wait500();
    
        //Contract End Date
    contractInformationAction.ContractEndDate().type(ToDate, { force: true });
    contractInformationAction.wait500();

    contractInformationAction.UploadPDF().attachFile(UploadPDF);
    contractInformationAction.wait1000();
    contractInformationAction.wait1000();

    //Next Page
    contractInformationAction.NextToSubmit().scrollIntoView().click({ force: true });
    contractInformationAction.wait1000();
  }
}

      
        
       

    //     //Contract Start Date
    //     cy.xpath(
    //       "/html/body/app-root/app-employee/mat-stepper/div/div[2]/div[4]/app-contract-info-form-shell/app-contract-info/div/div/div/div[4]/mat-form-field/div[1]/div/div[2]/input"
    //     ).type("12/04/2022", { force: true });

    //     //Contract End Date
    //     cy.xpath(
    //       "/html/body/app-root/app-employee/mat-stepper/div/div[2]/div[4]/app-contract-info-form-shell/app-contract-info/div/div/div/div[5]/mat-form-field/div[1]/div/div[2]/input"
    //     ).type("12/04/2023", { force: true });
    //     cy.wait(500);
    //     cy.xpath(
    //       "/html/body/app-root/app-employee/mat-stepper/div/div[2]/div[4]/app-contract-info-form-shell/app-contract-info/div/div/div/div[6]/div/div[1]/div/input"
    //     ).attachFile("5-mb-example-file_11zon.pdf");
    //     cy.wait(2000);
    //     cy.contains("button", " Submit ").click({ force: true });
    //   }