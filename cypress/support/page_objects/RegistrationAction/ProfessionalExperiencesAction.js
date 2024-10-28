import ProfessionalExperiences from "../Registration/ProfessionalExperiences";

export default class ProfessionalExperiencesAction {
  constructor() {
    globalThis.professionalExperiencesAction = new ProfessionalExperiences();
  }

  performProfessionalExperiencesAction(
    Year,
    OrgName,
    Designation,
    FromDate,
    ToDate,
    OrgName2,
    Designation2,
    FromDate2,
    ToDate2
  ) {
    //Professional Experiences1

    //Experiences
    professionalExperiencesAction.Experiences();
    professionalExperiencesAction.wait500();

    //Total Number of Experiences in Year(s)
    professionalExperiencesAction.ExperiencesYear().click();
    professionalExperiencesAction.wait500();

    //Total Number of Experiences in Year(s)
    professionalExperiencesAction.ExperiencesYearNumber().type(Year);
    professionalExperiencesAction.wait500();

    //Organization Name
    professionalExperiencesAction.OrganizationName().click().type(OrgName);
    professionalExperiencesAction.wait500();

    //Designation
    professionalExperiencesAction.Designation().type(Designation);
    professionalExperiencesAction.wait500();

    //Result
    professionalExperiencesAction.FromDate().type(FromDate, { force: true });
    professionalExperiencesAction.wait500();
    //Passing Year

    professionalExperiencesAction.ToDate().type(ToDate, { force: true });
    professionalExperiencesAction.wait500();
    //Professional Experiences2
    professionalExperiencesAction
      .ProfessionalExperiences2()
      .click({ force: true });
    professionalExperiencesAction.wait1000();

    //Organization Name
    professionalExperiencesAction.OrganizationName2().click().type(OrgName2);
    professionalExperiencesAction.wait500();

    //Designation
    professionalExperiencesAction.Designation2().type(Designation2);
    professionalExperiencesAction.wait500();

    //Result
    professionalExperiencesAction.FromDate2().type(FromDate2, { force: true });
    professionalExperiencesAction.wait500();

    //Passing Year
    professionalExperiencesAction.ToDate2().type(ToDate2, { force: true });
    professionalExperiencesAction.wait500();

    //Next Page
    professionalExperiencesAction.Next().click({ force: true });
    professionalExperiencesAction.wait500();
  }
}
