import BasicInformation from '../Registration/BasicInformationPage';

export default class BasicInformationPageAction {
  constructor() {
    globalThis.basicInformationPageAction = new BasicInformation();
    
  }

  performLoginBasicInformation(fName, lName, birthdate, joindate ) {
    //First Name
    basicInformationPageAction.FirstName().click({ force: true }).type(fName);
    basicInformationPageAction.wait500();
    //Last Name
    basicInformationPageAction.LastName().click({ force: true }).type(lName);
    basicInformationPageAction.wait500();

    //Phone Number== We login with Phone number

    //Date of Birth
    basicInformationPageAction.DateOfBirth().clear({force: true}).type(birthdate, { force: true });
    basicInformationPageAction.wait500();
    //Joining Date
    basicInformationPageAction.JoiningDate().clear({force: true}).type(joindate, { force: true });
    basicInformationPageAction.wait500();
    //Gender
    basicInformationPageAction.Gender().click({ force: true });
    basicInformationPageAction.wait500();
    //Upload Photo
    basicInformationPageAction.UploadPhoto().attachFile("download-compresskaru.com (1).png", { force: true });
    basicInformationPageAction.wait1000();
    //Reload
    basicInformationPageAction.reload();
    basicInformationPageAction.wait1000();
    basicInformationPageAction.Next().invoke("removeAttr", "disabled").click({ force: true });
    basicInformationPageAction.wait1000();
  }
}








//  cy.reload();