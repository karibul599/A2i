import EmailBasicInformation from '../Registration/EmailBasicInformation';

export default class EmailBasicInformationAction {
  constructor() {
    globalThis.emailBasicInformationAction = new EmailBasicInformation();
    
  }

  performLoginBasicInformation(fName, lName, birthdate, joindate,PhoneNumber ) {
    //First Name
    emailBasicInformationAction.FirstName().click({ force: true }).type(fName);
    emailBasicInformationAction.wait500();
    //Last Name
    emailBasicInformationAction.LastName().click({ force: true }).type(lName);
    emailBasicInformationAction.wait500();

    //Phone Number== We login with Phone number
    emailBasicInformationAction.PhoneNumber().clear().type(PhoneNumber);
    //Date of Birth
    emailBasicInformationAction.DateOfBirth().clear({force: true}).type(birthdate, { force: true });
    emailBasicInformationAction.wait500();
    //Joining Date
    emailBasicInformationAction.JoiningDate().clear({force: true}).type(joindate, { force: true });
    emailBasicInformationAction.wait500();
    //Gender
    emailBasicInformationAction.Gender().click({ force: true });
    emailBasicInformationAction.wait500();
    //Upload Photo
    emailBasicInformationAction.UploadPhoto().attachFile("download-compresskaru.com (1).png", { force: true });
    emailBasicInformationAction.wait1000();
    //Reload
    emailBasicInformationAction.reload();
    emailBasicInformationAction.wait1000();
    emailBasicInformationAction.Next().invoke("removeAttr", "disabled").click({ force: true });
    emailBasicInformationAction.wait1000();
  }
}







