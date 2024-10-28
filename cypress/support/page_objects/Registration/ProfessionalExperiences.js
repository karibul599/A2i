export default class ProfessionalExperiences1 {
  //Professional Experiences1

  Experiences() {
    //Experiences
    return cy
      .contains("Total Number of Experiences in Year(s)")
      .then(($text) => {
        if ($text.length > 0) {
          cy.log("The text is present, not clicking the button.");
        } else {
          cy.get('[name="hasExperience"]').should("be.visible").click();
        }
      });
  }
  ExperiencesYear() {
    //Total Number of Experiences in Year(s)
    return cy.get('[placeholder="Experience Count"]');
  }

  ExperiencesYearNumber() {
    //Total Number of Experiences in Year(s) select
    return cy.xpath("/html/body/div[2]/div[2]/div/div/mat-option[3]");
  }
  OrganizationName() {
    //Organization Name
    return cy.get('[placeholder="Organization Name"]');
  }
  Designation() {
    //Designation
    return cy.xpath(
      "/html/body/app-root/app-employee/mat-stepper/div/div[2]/div[3]/app-employee-history-form-shell/app-employee-history-form/div/div/div/div[3]/div/div[2]/mat-form-field/div[1]/div/div[2]/input"
    );
  }
  FromDate() {
    //From
    return cy.xpath(
      "/html/body/app-root/app-employee/mat-stepper/div/div[2]/div[3]/app-employee-history-form-shell/app-employee-history-form/div/div/div/div[3]/div/div[3]/mat-form-field/div[1]/div/div[2]/input"
    );
  }

  ToDate() {
    //To
    return cy.xpath(
      "/html/body/app-root/app-employee/mat-stepper/div/div[2]/div[3]/app-employee-history-form-shell/app-employee-history-form/div/div/div/div[3]/div/div[4]/mat-form-field/div[1]/div/div[2]/input"
    );
  }

  //Professional Experiences2
  ProfessionalExperiences2() {
    //Professional Experiences2
    return cy.xpath(
      "/html/body/app-root/app-employee/mat-stepper/div/div[2]/div[3]/app-employee-history-form-shell/app-employee-history-form/div/div/div/div[3]/div/div[5]/button"
    );
  }
  OrganizationName2() {
    //Organization Name
    return cy.xpath(
      "/html/body/app-root/app-employee/mat-stepper/div/div[2]/div[3]/app-employee-history-form-shell/app-employee-history-form/div/div/div/div[4]/div/div[1]/mat-form-field/div[1]/div/div[2]/input"
    );
  }
  Designation2() {
    //Designation
    return cy.xpath(
      "/html/body/app-root/app-employee/mat-stepper/div/div[2]/div[3]/app-employee-history-form-shell/app-employee-history-form/div/div/div/div[4]/div/div[2]/mat-form-field/div[1]/div/div[2]/input"
    );
  }
  FromDate2() {
    //From
    return cy.xpath(
      "/html/body/app-root/app-employee/mat-stepper/div/div[2]/div[3]/app-employee-history-form-shell/app-employee-history-form/div/div/div/div[4]/div/div[3]/mat-form-field/div[1]/div/div[2]/input"
    );
  }

  ToDate2() {
    //To
    return cy.xpath(
      "/html/body/app-root/app-employee/mat-stepper/div/div[2]/div[3]/app-employee-history-form-shell/app-employee-history-form/div/div/div/div[4]/div/div[4]/mat-form-field/div[1]/div/div[2]/input"
    );
  }

  Next() {
    //Next Page
    return cy.xpath(
      "/html/body/app-root/app-employee/mat-stepper/div/div[2]/div[2]/div/button[2]"
    );
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
