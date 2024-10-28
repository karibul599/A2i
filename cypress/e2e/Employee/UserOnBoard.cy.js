import RegistrationLoginPageAction from '../../support/page_objects/RegistrationAction/LoginPageAction.js'
import BasicInformationPageAction from '../../support/page_objects/RegistrationAction/BasicInformationPageAction'
import AcademicHistoryAction from '../../support/page_objects/RegistrationAction/AcademicHistoryAction.js'
import ProfessionalExperiencesAction from '../../support/page_objects/RegistrationAction/ProfessionalExperiencesAction.js'
import ContractInformationAction from '../../support/page_objects/RegistrationAction/ContractInformationAction.js'
import EmailBasicInformationAction from '../../support/page_objects/RegistrationAction/EmailBasicInformationAction.js'
import LoginAction from '../../support/page_objects/AdminLoginAction/LoginAction.js'
import RegApprovePageAction from '../../support/page_objects/AdminLoginAction/EmployeesAction/RegapproveAction/RegApprovePageAction.js'
import DeleteApplicationAction from '../../support/page_objects/AdminLoginAction/EmployeesAction/RegapproveAction/DeleteApplicationAction.js'
import PhoneApplicationAction from '../../support/page_objects/AdminLoginAction/EmployeesAction/RegapproveAction/PhoneEditApplicationAction.js'
import EmailEditApplicationAction from '../../support/page_objects/AdminLoginAction/EmployeesAction/RegapproveAction/EmailEditApplicationAction.js'


describe("With Phone number and delete application", () => {
  const registrationLoginPageAction = new RegistrationLoginPageAction(); //********/
  const basicInformationPageAction = new BasicInformationPageAction(); //********/
  const academicHistoryAction = new AcademicHistoryAction(); //********/
  const professionalExperiencesAction = new ProfessionalExperiencesAction(); //********/
  const contractInformationAction = new ContractInformationAction(); //********/
  const loginAction = new LoginAction(); //********/
  const regApprovePageAction = new RegApprovePageAction(); //********/
  const deleteApplicationAction = new DeleteApplicationAction(); //********/
  function generateRandomBDPhoneNumber() {
    const prefixes = ['013', '014', '015', '016', '017', '018', '019']; 
    const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const randomNumber = Math.floor(10000000 + Math.random() * 90000000); 
    return randomPrefix + randomNumber.toString();
  }


  it("Registration with Phone number ", () => {
    
    visitWebPageVery();
    registration();

    function visitWebPageVery() {

      const randomPhoneNumber = generateRandomBDPhoneNumber();
      const userName = randomPhoneNumber;//User Name Using Phone Number Generated Randomly
      const OTP = '912673';//OTP --Here We Using Constant
      registrationLoginPageAction.performLogin(userName, OTP);//Visit Registration Page And Give UserName And OTP
    
    }
    function registration() {

      //a2i ERP User Registration
      BasicInformation();
      AcademicHistory();
      ProfessionalExperiences();
      ContractInformation();

      function BasicInformation() {

        const fName='Karibul';
        const lName='Hasan';
        const birthdate='18/04/1998'
        const joindate='18/04/2024'
        
        basicInformationPageAction.performLoginBasicInformation(fName, lName, birthdate, joindate );

      }

      function AcademicHistory() {
        //Education Level1 
        const EducationLevel='HSC / A Levels';
        const Degree='Science';
        const Institution='DCMC,collage';
        const ResultType='CGPA';
        const CGPA='5.00';
       
        //Education Level2
        const EducationLevel2='SSC / O Levels';
        const Degree2='Science';
        const Institution2='DCMC,collage';
        const ResultType2='CGPA';
        const CGPA2='5.00';
        academicHistoryAction.performAcademicHistoryAction(Degree, Degree2,Institution, Institution2, ResultType, ResultType2, CGPA, CGPA2 , EducationLevel2, EducationLevel);
        
      }

       function ProfessionalExperiences() {
       //Professional Experiences1
        const Year='3';
        const OrgName='BA';
        const Designation='YP';
        const FromDate='01/01/2022';
        const ToDate='01/01/2023';
        //Professional Experiences2
       
        const OrgName2='BAT';
        const Designation2='Intern';
        const FromDate2='01/01/2023';
        const ToDate2='01/01/2024';
        professionalExperiencesAction.performProfessionalExperiencesAction(Year, OrgName,Designation, FromDate, ToDate, OrgName2,Designation2, FromDate2, ToDate2)
}

       function ContractInformation() {
       //ContractInformation
        const UploadPDF='5-mb-example-file_11zon.pdf';
        const FromDate='01/01/2023';
        const ToDate='01/01/2024';
        contractInformationAction.performProfessionalExperiencesAction( UploadPDF, FromDate, ToDate);
       }
      
    }
  });
  it("Delete Application which Registration with Phone number", () => {
    a2iLogin();
    function a2iLogin() {
      //Login
      loginAction.performloginPageAction();
      
    }
    //EmployeesBtn and Reg.ApproveBtn Click and Move to Reg.approve Page
    regApprovePageAction.performLoginBasicInformation();

    //Delete Application
    deleteApplicationAction.performdeleteApplicationAction();
    
  });
});
describe("With Email and delete application", () => {
  const registrationLoginPageAction = new RegistrationLoginPageAction(); //********/
  const emailBasicInformationAction = new EmailBasicInformationAction(); //********/
  const academicHistoryAction = new AcademicHistoryAction(); //********/
  const professionalExperiencesAction = new ProfessionalExperiencesAction(); //********/
  const contractInformationAction = new ContractInformationAction(); //********/
  const loginAction = new LoginAction(); //********/
  const regApprovePageAction = new RegApprovePageAction(); //********/
  const deleteApplicationAction = new DeleteApplicationAction(); //********/
  function generateRandomEmail() {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789'; // Lowercase letters and digits only
    let randomString = '';
    for (let i = 0; i < 8; i++) {
      randomString += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return randomString + '@a2i.gov.bd';
  }
  function generateRandomBDPhoneNumber() {
    const prefixes = ['013', '014', '015', '016', '017', '018', '019']; // Valid Bangladeshi prefixes
    const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const randomNumber = Math.floor(10000000 + Math.random() * 90000000); // Generate 8 random digits
    return randomPrefix + randomNumber.toString();
  }
  it("Registration with Email", () => {
    visitWebPageveryfication();
    registration();

    function visitWebPageveryfication() {

      const randomEmail = generateRandomEmail();
      const userName = randomEmail;//User Name Using Phone Number Generated Randomly
      const OTP = '912673';//OTP --Here We Using Constant
      registrationLoginPageAction.performLogin(userName, OTP);//Visit Registration Page And Give UserName And OTP
      
    }

    function registration() {
      ////a2i ERP User Registration
      BasicInformation();
      AcademicHistory();
      ProfessionalExperiences();
      ContractInformation();
      function BasicInformation() {

        const randomPhoneNumber = generateRandomBDPhoneNumber();
        const fName='Karibul';
        const lName='Hasan';
        const PhoneNumber=randomPhoneNumber;
        const birthdate='18/04/1998'
        const joindate='18/04/2024'
        
        emailBasicInformationAction.performLoginBasicInformation(fName, lName, birthdate, joindate, PhoneNumber );
       
      }

      function AcademicHistory() {
        //Education Level1 
        const EducationLevel='HSC / A Levels';
        const Degree='Science';
        const Institution='DCMC,collage';
        const ResultType='CGPA';
        const CGPA='5.00';
       
        //Education Level2
        const EducationLevel2='SSC / O Levels';
        const Degree2='Science';
        const Institution2='DCMC,collage';
        const ResultType2='CGPA';
        const CGPA2='5.00';
        academicHistoryAction.performAcademicHistoryAction(Degree, Degree2,Institution, Institution2, ResultType, ResultType2, CGPA, CGPA2 , EducationLevel2, EducationLevel);
      }

      function ProfessionalExperiences() {
         //Professional Experiences1
         const Year='3';
         const OrgName='BA';
         const Designation='YP';
         const FromDate='01/01/2022';
         const ToDate='01/01/2023';
         //Professional Experiences2
        
         const OrgName2='BAT';
         const Designation2='Intern';
         const FromDate2='01/01/2023';
         const ToDate2='01/01/2024';
         professionalExperiencesAction.performProfessionalExperiencesAction(Year, OrgName,Designation, FromDate, ToDate, OrgName2,Designation2, FromDate2, ToDate2)
      }

      function ContractInformation() {
        //ContractInformation
        const UploadPDF='5-mb-example-file_11zon.pdf';
        const FromDate='01/01/2023';
        const ToDate='01/01/2024';
        contractInformationAction.performProfessionalExperiencesAction( UploadPDF, FromDate, ToDate);
      }
    }
  });
  it("Delete Application which Registration with Email", () => {
    a2iLogin();
    function a2iLogin() {
      //Login
      loginAction.performloginPageAction();
      
    }
    //EmployeesBtn and Reg.ApproveBtn Click and Move to Reg.approve Page
    regApprovePageAction.performLoginBasicInformation();

    //Delete Application
    deleteApplicationAction.performdeleteApplicationAction();
  });
});
describe("Approval with Email", () => {
  const registrationLoginPageAction = new RegistrationLoginPageAction(); //********/
  const emailBasicInformationAction = new EmailBasicInformationAction(); //********/
  const academicHistoryAction = new AcademicHistoryAction(); //********/
  const professionalExperiencesAction = new ProfessionalExperiencesAction(); //********/
  const contractInformationAction = new ContractInformationAction(); //********/
  const loginAction = new LoginAction(); //********/
  const regApprovePageAction = new RegApprovePageAction(); //********/
  const phoneApplicationAction = new PhoneApplicationAction(); //********/
  function generateRandomEmail() {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789'; // Lowercase letters and digits only
    let randomString = '';
    for (let i = 0; i < 8; i++) {
      randomString += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return randomString + '@a2i.gov.bd';
  }
  function generateRandomBDPhoneNumber() {
    const prefixes = ['013', '014', '015', '016', '017', '018', '019']; // Valid Bangladeshi prefixes
    const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const randomNumber = Math.floor(10000000 + Math.random() * 90000000); // Generate 8 random digits
    return randomPrefix + randomNumber.toString();
  }
  
  it("Registration With Email", () => {
    visitWebPageveryfication();
    registration();

    function visitWebPageveryfication() {

      const randomEmail = generateRandomEmail();
      const userName = randomEmail;//User Name Using Phone Number Generated Randomly
      const OTP = '912673';//OTP --Here We Using Constant
      registrationLoginPageAction.performLogin(userName, OTP);//Visit Registration Page And Give UserName And OTP
      
    }

    function registration() {
      ////a2i ERP User Registration
      BasicInformation();
      AcademicHistory();
      ProfessionalExperiences();
      ContractInformation();
      function BasicInformation() {

        const randomPhoneNumber = generateRandomBDPhoneNumber();
        const fName='Karibul';
        const lName='Hasan';
        const PhoneNumber=randomPhoneNumber;
        const birthdate='18/04/1998'
        const joindate='18/04/2024'
        
        emailBasicInformationAction.performLoginBasicInformation(fName, lName, birthdate, joindate, PhoneNumber );
       
      }

      function AcademicHistory() {
        //Education Level1 
        const EducationLevel='HSC / A Levels';
        const Degree='Science';
        const Institution='DCMC,collage';
        const ResultType='CGPA';
        const CGPA='5.00';
       
        //Education Level2
        const EducationLevel2='SSC / O Levels';
        const Degree2='Science';
        const Institution2='DCMC,collage';
        const ResultType2='CGPA';
        const CGPA2='5.00';
        academicHistoryAction.performAcademicHistoryAction(Degree, Degree2,Institution, Institution2, ResultType, ResultType2, CGPA, CGPA2 , EducationLevel2, EducationLevel);
      }

      function ProfessionalExperiences() {
         //Professional Experiences1
         const Year='3';
         const OrgName='BA';
         const Designation='YP';
         const FromDate='01/01/2022';
         const ToDate='01/01/2023';
         //Professional Experiences2
        
         const OrgName2='BAT';
         const Designation2='Intern';
         const FromDate2='01/01/2023';
         const ToDate2='01/01/2024';
         professionalExperiencesAction.performProfessionalExperiencesAction(Year, OrgName,Designation, FromDate, ToDate, OrgName2,Designation2, FromDate2, ToDate2)
      }

      function ContractInformation() {
        //ContractInformation
        const UploadPDF='5-mb-example-file_11zon.pdf';
        const FromDate='01/01/2023';
        const ToDate='01/01/2024';
        contractInformationAction.performProfessionalExperiencesAction( UploadPDF, FromDate, ToDate);
      }
    }
  });
  it("Approval with Email", () => {

    a2iLogin();

    function a2iLogin() {
      loginAction.performloginPageAction();
  
    }
    //EmployeesBtn and Reg.ApproveBtn Click and Move to Reg.approve Page
    regApprovePageAction.performLoginBasicInformation();

    //Open Application
    phoneApplicationAction.performphoneApplicationAction();
    
    //Contract Administer
    cy.get('[placeholder="Contract Administer"]').click({ force: true });
    cy.wait(500);
    cy.contains("Mohammed Naser Miah").click({ force: true });
    //Field Allowance
    cy.get('[placeholder="Field Allowance"]')
      .click()
      .type('5');
    //Mobile Bill
    cy.get('[placeholder="Mobile Bill"]')
      .click()
      .type('500');
      cy.wait(500);
      //Contract Modality
    cy.get('[placeholder="Contract Modality"]').click({ force: true });
    cy.wait(500);
    cy.contains("eZone - UNDP").click({ force: true }); 
    //Contract Reference
    cy.get('[placeholder="Contract Reference"]')
      .click({ force: true })
      .type('56.83.0000.006.11.001.24.581/8');
    //Contract Administer
     cy.get('[placeholder="Contract Administer"]').click({ force: true });
     cy.wait(500);
     cy.contains("Mohammed Naser Miah").click({ force: true });
    //Basic Salary
    cy.get('[placeholder="Basic Salary"]')
      .click()
      .type('67000');
    //Field Allowance
    cy.get('[placeholder="Field Allowance"]')
      .click()
      .type('5');
    //Mobile Bill
    cy.get('[placeholder="Mobile Bill"]')
      .click()
      .type('500');
    //upload file
    //cy.get('[type="file"]').attachFile('5-mb-example-file');
    cy.wait(500)
    cy.get('[aria-label="Remove Attachment"]')
      .first()
      .click().should('be.visible');
    cy.wait(2300);
    cy.get('mat-icon') 
      .should('be.visible')
      .first()
      .click({force: true});
    cy.xpath('/html/body/div[3]/div[2]/div/mat-dialog-container/div/div/app-attachment-preview-dialog/div/div[1]/button/mat-icon')
      .click();
    cy.wait(3000);
    cy.contains("button", " Approve ")
      .invoke("removeAttr", "disabled")
      .wait(500)
      .click({ force: true }); 
    cy.wait(500);
    cy.xpath('/html/body/div[3]/div[2]/div/mat-dialog-container/div/div/app-common-approval-confirmation-dialog/div/div[2]/button[1]')
    .should('be.visible')
    .click({force: true});
  
  cy.wait(1000);

  });
});
describe("Approval with phone Number", () => {
  const registrationLoginPageAction = new RegistrationLoginPageAction(); //********/
  const basicInformationPageAction = new BasicInformationPageAction(); //********/
  const academicHistoryAction = new AcademicHistoryAction(); //********/
  const professionalExperiencesAction = new ProfessionalExperiencesAction(); //********/
  const contractInformationAction = new ContractInformationAction(); //********/
  const loginAction = new LoginAction(); //********/
  const regApprovePageAction = new RegApprovePageAction(); //********/
  const emailEditApplicationAction = new EmailEditApplicationAction(); //********/

  function generateRandomEmail() {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789'; // Lowercase letters and digits only
    let randomString = '';
    for (let i = 0; i < 8; i++) {
      randomString += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return randomString + '@a2i.gov.bd';
  }
  function generateRandomBDPhoneNumber() {
    const prefixes = ['013', '014', '015', '016', '017', '018', '019']; // Valid Bangladeshi prefixes
    const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const randomNumber = Math.floor(10000000 + Math.random() * 90000000); // Generate 8 random digits
    return randomPrefix + randomNumber.toString();
  }
  it("", () => {
    
    visitWebPageVery();
    registration();

    function visitWebPageVery() {

      const randomPhoneNumber = generateRandomBDPhoneNumber();
      const userName = randomPhoneNumber;//User Name Using Phone Number Generated Randomly
      const OTP = '912673';//OTP --Here We Using Constant
      registrationLoginPageAction.performLogin(userName, OTP);//Visit Registration Page And Give UserName And OTP
    
    }
    function registration() {

      //a2i ERP User Registration
      BasicInformation();
      AcademicHistory();
      ProfessionalExperiences();
      ContractInformation();

      function BasicInformation() {

        const fName='Karibul';
        const lName='Hasan';
        const birthdate='18/04/1998'
        const joindate='18/04/2024'
        
        basicInformationPageAction.performLoginBasicInformation(fName, lName, birthdate, joindate );

      }

      function AcademicHistory() {
        //Education Level1 
        const EducationLevel='HSC / A Levels';
        const Degree='Science';
        const Institution='DCMC,collage';
        const ResultType='CGPA';
        const CGPA='5.00';
       
        //Education Level2
        const EducationLevel2='SSC / O Levels';
        const Degree2='Science';
        const Institution2='DCMC,collage';
        const ResultType2='CGPA';
        const CGPA2='5.00';
        academicHistoryAction.performAcademicHistoryAction(Degree, Degree2,Institution, Institution2, ResultType, ResultType2, CGPA, CGPA2 , EducationLevel2, EducationLevel);
        
      }

       function ProfessionalExperiences() {
       //Professional Experiences1
        const Year='3';
        const OrgName='BA';
        const Designation='YP';
        const FromDate='01/01/2022';
        const ToDate='01/01/2023';
        //Professional Experiences2
       
        const OrgName2='BAT';
        const Designation2='Intern';
        const FromDate2='01/01/2023';
        const ToDate2='01/01/2024';
        professionalExperiencesAction.performProfessionalExperiencesAction(Year, OrgName,Designation, FromDate, ToDate, OrgName2,Designation2, FromDate2, ToDate2)
}

       function ContractInformation() {
       //ContractInformation
        const UploadPDF='5-mb-example-file_11zon.pdf';
        const FromDate='01/01/2023';
        const ToDate='01/01/2024';
        contractInformationAction.performProfessionalExperiencesAction( UploadPDF, FromDate, ToDate)
       }
      
    }
  });
  it("", () => {
    a2iLogin();
    function a2iLogin() {
      loginAction.performloginPageAction();
      
    }
    //EmployeesBtn and Reg.ApproveBtn Click and Move to Reg.approve Page
    regApprovePageAction.performLoginBasicInformation();
     //Open Application
    const randomEmail = generateRandomEmail();
   
    emailEditApplicationAction.performemailEditApplication(randomEmail);
   
    
    //Contract Administer
    cy.get('[placeholder="Contract Administer"]').click({ force: true });
    cy.wait(500);
    cy.contains("Mohammed Naser Miah").click({ force: true });
    //Field Allowance
    cy.get('[placeholder="Field Allowance"]')
      .click()
      .type('5');
    //Mobile Bill
    cy.get('[placeholder="Mobile Bill"]')
      .click()
      .type('500');
      cy.get('[placeholder="Contract Modality"]').click({ force: true });
      cy.wait(500);
      cy.contains("Individual Contract - UNDP").click({ force: true }); 
      //Contract Reference
      cy.get('[placeholder="Contract Reference"]')
        .click({ force: true })
        .type('56.83.0000.006.11.001.24.581/8');
      // Procurement Title 
      cy.get('[placeholder="Procurement Title"]')
        .click({ force: true })
        .type('Individual Consultant - Jr. Consultant (Communication)');
      //Contract Administer
       cy.get('[placeholder="Contract Administer"]').click({ force: true });
       cy.wait(500);
       cy.contains("Mohammed Naser Miah").click({ force: true });
      //Field Allowance
      cy.get('[placeholder="Field Allowance"]')
        .click()
        .type('5');
      //Mobile Bill
      cy.get('[placeholder="Mobile Bill"]')
        .click()
        .type('500');
    //upload file
    //cy.get('[type="file"]').attachFile('5-mb-example-file');
    cy.wait(500)
    cy.get('[aria-label="Remove Attachment"]')
      .first()
      .click().should('be.visible');
    cy.wait(2300);
    cy.get('mat-icon') 
      .should('be.visible')
      .first()
      .click({force: true});
    cy.xpath('/html/body/div[3]/div[2]/div/mat-dialog-container/div/div/app-attachment-preview-dialog/div/div[1]/button/mat-icon')
      .click();
    cy.wait(3000);
    cy.contains("button", " Approve ")
      .invoke("removeAttr", "disabled")
      .wait(500)
      .click({ force: true }); 
    cy.wait(500);
    cy.xpath('/html/body/div[3]/div[2]/div/mat-dialog-container/div/div/app-common-approval-confirmation-dialog/div/div[2]/button[1]')
    .should('be.visible')
    .click({force: true});
    cy.wait(2000);
  });
});
describe("Approval with Email and update", () => {
  const registrationLoginPageAction = new RegistrationLoginPageAction(); //********/
  const emailBasicInformationAction = new EmailBasicInformationAction(); //********/
  const academicHistoryAction = new AcademicHistoryAction(); //********/
  const professionalExperiencesAction = new ProfessionalExperiencesAction(); //********/
  const contractInformationAction = new ContractInformationAction(); //********/
  const loginAction = new LoginAction(); //********/
  const regApprovePageAction = new RegApprovePageAction(); //********/
  const phoneApplicationAction = new PhoneApplicationAction(); //********/
  function generateRandomEmail() {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789'; // Lowercase letters and digits only
    let randomString = '';
    for (let i = 0; i < 8; i++) {
      randomString += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return randomString + '@a2i.gov.bd';
  }
  function generateRandomBDPhoneNumber() {
    const prefixes = ['013', '014', '015', '016', '017', '018', '019']; // Valid Bangladeshi prefixes
    const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const randomNumber = Math.floor(10000000 + Math.random() * 90000000); // Generate 8 random digits
    return randomPrefix + randomNumber.toString();
  }
  
  it("Approval with Email and update", () => {
    visitWebPageveryfication();
    registration();

    function visitWebPageveryfication() {

      const randomEmail = generateRandomEmail();
      const userName = randomEmail;//User Name Using Phone Number Generated Randomly
      const OTP = '912673';//OTP --Here We Using Constant
      registrationLoginPageAction.performLogin(userName, OTP);//Visit Registration Page And Give UserName And OTP
      
    }

    function registration() {
      ////a2i ERP User Registration
      BasicInformation();
      AcademicHistory();
      ProfessionalExperiences();
      ContractInformation();
      function BasicInformation() {

        const randomPhoneNumber = generateRandomBDPhoneNumber();
        const fName='Karibul';
        const lName='Hasan';
        const PhoneNumber=randomPhoneNumber;
        const birthdate='18/04/1998'
        const joindate='18/04/2024'
        
        emailBasicInformationAction.performLoginBasicInformation(fName, lName, birthdate, joindate, PhoneNumber );
       
      }

      function AcademicHistory() {
        //Education Level1 
        const EducationLevel='HSC / A Levels';
        const Degree='Science';
        const Institution='DCMC,collage';
        const ResultType='CGPA';
        const CGPA='5.00';
       
        //Education Level2
        const EducationLevel2='SSC / O Levels';
        const Degree2='Science';
        const Institution2='DCMC,collage';
        const ResultType2='CGPA';
        const CGPA2='5.00';
        academicHistoryAction.performAcademicHistoryAction(Degree, Degree2,Institution, Institution2, ResultType, ResultType2, CGPA, CGPA2 , EducationLevel2, EducationLevel);
      }

      function ProfessionalExperiences() {
         //Professional Experiences1
         const Year='3';
         const OrgName='BA';
         const Designation='YP';
         const FromDate='01/01/2022';
         const ToDate='01/01/2023';
         //Professional Experiences2
        
         const OrgName2='BAT';
         const Designation2='Intern';
         const FromDate2='01/01/2023';
         const ToDate2='01/01/2024';
         professionalExperiencesAction.performProfessionalExperiencesAction(Year, OrgName,Designation, FromDate, ToDate, OrgName2,Designation2, FromDate2, ToDate2)
      }

      function ContractInformation() {
        //ContractInformation
        const UploadPDF='5-mb-example-file_11zon.pdf';
        const FromDate='01/01/2023';
        const ToDate='01/01/2024';
        contractInformationAction.performProfessionalExperiencesAction( UploadPDF, FromDate, ToDate);
      }
    }
  });
  it("", () => {
    a2iLogin();
    function a2iLogin() {
      //Login section
      cy.visit("http://localhost:4200/");
      cy.origin("http://192.168.30.123:8080", () => {
        cy.get('input[name="username"]').type("jahanger.alam@a2i.gov.bd");
        cy.get('input[name="password"]').type("@#$12345Bmail");
        cy.get("#kc-login").should("exist").and("be.visible").click();
      });
      cy.wait(5000);
      cy.visit("http://localhost:4200/");
      cy.wait(1000);
    }
    //EmployeesBtn and Reg.ApproveBtn Click and Move to Reg.approve Page
    regApprovePageAction.performLoginBasicInformation();

    //Open Application
    //Open Application
    phoneApplicationAction.performphoneApplicationAction();
    //Contract Administer
    cy.get('[placeholder="Contract Administer"]').click({ force: true });
    cy.wait(500);
    cy.contains("Mohammed Naser Miah").click({ force: true });
    //Field Allowance
    cy.get('[placeholder="Field Allowance"]')
      .click()
      .type('5');
    //Mobile Bill
    cy.get('[placeholder="Mobile Bill"]')
      .click()
      .type('500');

    //Contract Modality
    cy.get('[placeholder="Contract Modality"]')
      .click()
    cy.wait(500);
    cy.contains('Individual Contract - GoB')
      .click();
    cy.wait(1000);
    //Contract Reference
    cy.get('[placeholder="Contract Reference"]')
      .click()
      .type('56.83.0000.006.11.001.24.581/8');
    //Procurement Title
    cy.get('[placeholder="Procurement Title"]')
    .click()
    .type('Individual Consultant - Jr. Consultant (Communication)');
    //Contract Administer
    cy.get('[placeholder="Contract Administer"]').click({ force: true });
    cy.wait(500);
    cy.contains("Mohammed Naser Miah").click({ force: true });
    //Field Allowance
    cy.get('[placeholder="Field Allowance"]')
    .click()
    .type('5');
    //Mobile Bill
    cy.get('[placeholder="Mobile Bill"]')
      .click()
      .type('500');
    //upload file
    //cy.get('[type="file"]').attachFile('5-mb-example-file');
    cy.wait(500)
    cy.get('[aria-label="Remove Attachment"]')
      .first()
      .click().should('be.visible');
    cy.wait(2300);
    cy.get('mat-icon') 
      .should('be.visible')
      .first()
      .click({force: true});
    cy.xpath('/html/body/div[3]/div[2]/div/mat-dialog-container/div/div/app-attachment-preview-dialog/div/div[1]/button/mat-icon')
      .click();
    cy.wait(3000);
    cy.contains("button", " Approve ")
      .invoke("removeAttr", "disabled")
      .wait(500)
      .click({ force: true }); 
    cy.wait(500);
    cy.xpath('/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-registration-approval-edit-shell/app-registration-approval-edit/app-update-employee/mat-stepper/div/div[2]/div[4]/div/div/button[3]')
    .should('be.visible')
    .click({force: true});
    cy.wait(2000);
    cy.contains("button", " Send and approve ")
      .invoke("removeAttr", "disabled")
      .wait(500)
      .click({ force: true });
    cy.wait(1000);
    cy.xpath('/html/body/div[3]/div[2]/div/mat-dialog-container/div/div/app-common-approval-confirmation-dialog/div/div[2]/button[1]')
    .should('be.visible')
    .click({force: true});
    cy.wait(1000);

  });
});

describe("Approval with phone Number and update", () => {
  const registrationLoginPageAction = new RegistrationLoginPageAction(); //********/
  const basicInformationPageAction = new BasicInformationPageAction(); //********/
  const academicHistoryAction = new AcademicHistoryAction(); //********/
  const professionalExperiencesAction = new ProfessionalExperiencesAction(); //********/
  const contractInformationAction = new ContractInformationAction(); //********/
  const loginAction = new LoginAction(); //********/
  const regApprovePageAction = new RegApprovePageAction(); //********/
  const emailEditApplicationAction = new EmailEditApplicationAction(); //********/
  function generateRandomEmail() {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789'; // Lowercase letters and digits only
    let randomString = '';
    for (let i = 0; i < 8; i++) {
      randomString += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return randomString + '@a2i.gov.bd';
  }
  function generateRandomBDPhoneNumber() {
    const prefixes = ['013', '014', '015', '016', '017', '018', '019']; // Valid Bangladeshi prefixes
    const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const randomNumber = Math.floor(10000000 + Math.random() * 90000000); // Generate 8 random digits
    return randomPrefix + randomNumber.toString();
  }
  it("", () => {
    
    visitWebPageVery();
    registration();

    function visitWebPageVery() {

      const randomPhoneNumber = generateRandomBDPhoneNumber();
      const userName = randomPhoneNumber;//User Name Using Phone Number Generated Randomly
      const OTP = '912673';//OTP --Here We Using Constant
      registrationLoginPageAction.performLogin(userName, OTP);//Visit Registration Page And Give UserName And OTP
    
    }
    function registration() {

      //a2i ERP User Registration
      BasicInformation();
      AcademicHistory();
      ProfessionalExperiences();
      ContractInformation();

      function BasicInformation() {

        const fName='Karibul';
        const lName='Hasan';
        const birthdate='18/04/1998'
        const joindate='18/04/2024'
        
        basicInformationPageAction.performLoginBasicInformation(fName, lName, birthdate, joindate );

      }

      function AcademicHistory() {
        //Education Level1 
        const EducationLevel='HSC / A Levels';
        const Degree='Science';
        const Institution='DCMC,collage';
        const ResultType='CGPA';
        const CGPA='5.00';
       
        //Education Level2
        const EducationLevel2='SSC / O Levels';
        const Degree2='Science';
        const Institution2='DCMC,collage';
        const ResultType2='CGPA';
        const CGPA2='5.00';
        academicHistoryAction.performAcademicHistoryAction(Degree, Degree2,Institution, Institution2, ResultType, ResultType2, CGPA, CGPA2 , EducationLevel2, EducationLevel);
        
      }

       function ProfessionalExperiences() {
       //Professional Experiences1
        const Year='3';
        const OrgName='BA';
        const Designation='YP';
        const FromDate='01/01/2022';
        const ToDate='01/01/2023';
        //Professional Experiences2
       
        const OrgName2='BAT';
        const Designation2='Intern';
        const FromDate2='01/01/2023';
        const ToDate2='01/01/2024';
        professionalExperiencesAction.performProfessionalExperiencesAction(Year, OrgName,Designation, FromDate, ToDate, OrgName2,Designation2, FromDate2, ToDate2)
}

       function ContractInformation() {
       //ContractInformation
        const UploadPDF='5-mb-example-file_11zon.pdf';
        const FromDate='01/01/2023';
        const ToDate='01/01/2024';
        contractInformationAction.performProfessionalExperiencesAction( UploadPDF, FromDate, ToDate)
       }
      
    }
  });
  it("", () => {
    a2iLogin();
    function a2iLogin() {
      loginAction.performloginPageAction();
      
    }
    //EmployeesBtn and Reg.ApproveBtn Click and Move to Reg.approve Page
    regApprovePageAction.performLoginBasicInformation();

    //Open Application
    const randomEmail = generateRandomEmail();
   
    emailEditApplicationAction.performemailEditApplication(randomEmail);

    //Contract Administer
    cy.get('[placeholder="Contract Administer"]').click({ force: true });
    cy.wait(500);
    cy.contains("Mohammed Naser Miah").click({ force: true });
    //Field Allowance
    cy.get('[placeholder="Field Allowance"]')
      .click()
      .type('5');
    //Mobile Bill
    cy.get('[placeholder="Mobile Bill"]')
      .click()
      .type('500');
    //Contract Modality
    cy.get('[placeholder="Contract Modality"]').click({ force: true });
    cy.wait(500);
    cy.contains("Young Professional").click({ force: true }); 
    //Contract Administer
    cy.get('[placeholder="Contract Administer"]').click({ force: true });
    cy.wait(500);
    cy.contains("Mohammed Naser Miah").click({ force: true });
    //Daily Rate
    cy.get('[placeholder="Daily Rate"]')
      .click()
      .type('67');
    //Field Allowance
    cy.get('[placeholder="Field Allowance"]')
      .click()
      .type('5');
    //Mobile Bill
    cy.get('[placeholder="Mobile Bill"]')
      .click()
      .type('500');
    //upload file
    //cy.get('[type="file"]').attachFile('5-mb-example-file');
    cy.wait(500)
    cy.get('[aria-label="Remove Attachment"]')
      .first()
      .click().should('be.visible');
    cy.wait(2300);
    cy.get('mat-icon') 
      .should('be.visible')
      .first()
      .click({force: true});
    cy.xpath('/html/body/div[3]/div[2]/div/mat-dialog-container/div/div/app-attachment-preview-dialog/div/div[1]/button/mat-icon')
      .click();
    cy.wait(2000);
    cy.contains("button", " Approve ")
      .invoke("removeAttr", "disabled")
      .wait(500)
      .click({ force: true }); 
    cy.wait(500);
    cy.xpath('/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-registration-approval-edit-shell/app-registration-approval-edit/app-update-employee/mat-stepper/div/div[2]/div[4]/div/div/button[3]')
    .should('be.visible')
    .click({force: true});
    cy.wait(2000);
    cy.contains("button", " Send and approve ")
      .invoke("removeAttr", "disabled")
      .wait(500)
      .click({ force: true });
    cy.wait(1000);
    cy.xpath('/html/body/div[3]/div[2]/div/mat-dialog-container/div/div/app-common-approval-confirmation-dialog/div/div[2]/button[1]')
    .should('be.visible')
    .click({force: true});
    cy.wait(1000);
  });
});

describe("Approval with phone Number and update", () => {
  const registrationLoginPageAction = new RegistrationLoginPageAction(); //********/
  const basicInformationPageAction = new BasicInformationPageAction(); //********/
  const academicHistoryAction = new AcademicHistoryAction(); //********/
  const professionalExperiencesAction = new ProfessionalExperiencesAction(); //********/
  const contractInformationAction = new ContractInformationAction(); //********/
  const loginAction = new LoginAction(); //********/
  const regApprovePageAction = new RegApprovePageAction(); //********/
  
  function generateRandomEmail() {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789'; // Lowercase letters and digits only
    let randomString = '';
    for (let i = 0; i < 8; i++) {
      randomString += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return randomString + '@a2i.gov.bd';
  }
  function generateRandomBDPhoneNumber() {
    const prefixes = ['013', '014', '015', '016', '017', '018', '019']; // Valid Bangladeshi prefixes
    const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const randomNumber = Math.floor(10000000 + Math.random() * 90000000); // Generate 8 random digits
    return randomPrefix + randomNumber.toString();
  }
  it("", () => {
    
    visitWebPageVery();
    registration();

    function visitWebPageVery() {

      const randomPhoneNumber = generateRandomBDPhoneNumber();
      const userName = randomPhoneNumber;//User Name Using Phone Number Generated Randomly
      const OTP = '912673';//OTP --Here We Using Constant
      registrationLoginPageAction.performLogin(userName, OTP);//Visit Registration Page And Give UserName And OTP
    
    }
    function registration() {

      //a2i ERP User Registration
      BasicInformation();
      AcademicHistory();
      ProfessionalExperiences();
      ContractInformation();

      function BasicInformation() {

        const fName='Karibul';
        const lName='Hasan';
        const birthdate='18/04/1998'
        const joindate='18/04/2024'
        
        basicInformationPageAction.performLoginBasicInformation(fName, lName, birthdate, joindate );

      }

      function AcademicHistory() {
        //Education Level1 
        const EducationLevel='HSC / A Levels';
        const Degree='Science';
        const Institution='DCMC,collage';
        const ResultType='CGPA';
        const CGPA='5.00';
       
        //Education Level2
        const EducationLevel2='SSC / O Levels';
        const Degree2='Science';
        const Institution2='DCMC,collage';
        const ResultType2='CGPA';
        const CGPA2='5.00';
        academicHistoryAction.performAcademicHistoryAction(Degree, Degree2,Institution, Institution2, ResultType, ResultType2, CGPA, CGPA2 , EducationLevel2, EducationLevel);
        
      }

       function ProfessionalExperiences() {
       //Professional Experiences1
        const Year='3';
        const OrgName='BA';
        const Designation='YP';
        const FromDate='01/01/2022';
        const ToDate='01/01/2023';
        //Professional Experiences2
       
        const OrgName2='BAT';
        const Designation2='Intern';
        const FromDate2='01/01/2023';
        const ToDate2='01/01/2024';
        professionalExperiencesAction.performProfessionalExperiencesAction(Year, OrgName,Designation, FromDate, ToDate, OrgName2,Designation2, FromDate2, ToDate2)
}

       function ContractInformation() {
       //ContractInformation
        const UploadPDF='5-mb-example-file_11zon.pdf';
        const FromDate='01/01/2023';
        const ToDate='01/01/2024';
        contractInformationAction.performProfessionalExperiencesAction( UploadPDF, FromDate, ToDate)
       }
      
    }
  });
  it("", () => {
    a2iLogin();
    function a2iLogin() {
      loginAction.performloginPageAction();
    }
    //EmployeesBtn and Reg.ApproveBtn Click and Move to Reg.approve Page
    regApprovePageAction.performLoginBasicInformation();

    //Open Application
    cy.get('[mattooltip="Open"]').first().click();
    //Email
    const randomEmail = generateRandomEmail();
    cy.get('[aria-label="Email"]')
       .clear({ force: true })
       .type(randomEmail, { force: true });
    cy.wait(500);
    cy.contains("button", "Next")
      .invoke("removeAttr", "disabled")
      .wait(500)
      .click({ force: true });
    cy.wait(300);
    //Education Level3
        //Education Level
        cy.get('[aria-label="Example icon button with a plus one icon"]')
          .first()
          .click();
        cy.get('[aria-label="eduLevel"]').eq(2).click();
        cy.contains("Diploma").click();
        //Degree Title
        cy.get('[aria-label="eduDegree"]').eq(2).type("Science");
        //Name of Institution
        cy.get('[aria-label="eduInst"]').eq(2).type("DMDC, School");
        //Result Type
        cy.get('[aria-label="eduResultType"]').eq(2).click();
        cy.wait(500);
        cy.xpath('/html/body/div[3]/div[2]/div/div/mat-option[2]').click();
        //Result
        cy.get('[aria-label="eduResult"]').eq(2).type("4.00");
        //Passing Year
        cy.get('[aria-label="eduEnd"]').eq(2).type("2017");
        cy.contains("2017").click();
      
      cy.wait(1000)
    cy.contains("button", "Next")
      .invoke("removeAttr", "disabled")
      .wait(500)
      .click({ force: true });
   
    cy.wait(2000);
     // //Professional Experiences2
     cy.xpath("/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-registration-approval-edit-shell/app-registration-approval-edit/app-update-employee/mat-stepper/div/div[2]/div[3]/app-update-employee-history-form-shell/app-update-employee-history-form/div/div/div/div[4]/div/div[5]/button[1]/mat-icon")
     .first()
     .click({ force: true });
     cy.wait(1000);
   //Organization Name
   cy.get('[placeholder="Organization Name"]').eq(2).type("BA");
   //Designation
   cy.get('[placeholder="Designation"]').eq(2).type("YP");
   //From
   cy.get('[placeholder="dd/mm/yyyy"]')
     .eq(4)
     .type("02/01/2020", { force: true });
   //To
   cy.get('[placeholder="dd/mm/yyyy"]')
     .eq(5)
     .type("01/01/2021", { force: true });
    cy.contains("button", "Next")
      .invoke("removeAttr", "disabled")
      .wait(500)
      .click({ force: true });
    cy.wait(1000);
    //Contract Administer
    cy.get('[placeholder="Contract Administer"]').click({ force: true });
    cy.wait(500);
    cy.contains("Mohammed Naser Miah").click({ force: true });
    //Field Allowance
    cy.get('[placeholder="Field Allowance"]')
      .click()
      .type('5');
    //Mobile Bill
    cy.get('[placeholder="Mobile Bill"]')
      .click()
      .type('500');
      cy.wait(1000);
    //Contract Modality
    cy.get('[placeholder="Contract Modality"]').click({ force: true });
    cy.wait(500);
    cy.contains("eZone - GoB").click({ force: true }); 
    //Contract Reference
    cy.get('[placeholder="Contract Reference"]')
      .click({ force: true })
      .type('56.83.0000.006.11.001.24.581/8');
    //Contract Administer
     cy.get('[placeholder="Contract Administer"]').click({ force: true });
     cy.wait(500);
     cy.contains("Mohammed Naser Miah").click({ force: true });
    //Basic Salary
    cy.get('[placeholder="Basic Salary"]')
      .click()
      .type('67000');
    //Field Allowance
    cy.get('[placeholder="Field Allowance"]')
      .click()
      .type('5');
    //Mobile Bill
    cy.get('[placeholder="Mobile Bill"]')
      .click()
      .type('500');
    //upload file
    //cy.get('[type="file"]').attachFile('5-mb-example-file');
    cy.wait(500)
    cy.get('[aria-label="Remove Attachment"]')
      .first()
      .click().should('be.visible');
    cy.wait(2300);
    cy.get('mat-icon') 
      .should('be.visible')
      .first()
      .click({force: true});
    cy.xpath('/html/body/div[3]/div[2]/div/mat-dialog-container/div/div/app-attachment-preview-dialog/div/div[1]/button/mat-icon')
      .click();
    cy.wait(2000);
    cy.contains("button", " Approve ")
      .invoke("removeAttr", "disabled")
      .wait(500)
      .click({ force: true }); 
    cy.wait(500);
    cy.xpath('/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-registration-approval-edit-shell/app-registration-approval-edit/app-update-employee/mat-stepper/div/div[2]/div[4]/div/div/button[3]')
    .should('be.visible')
    .click({force: true});
    cy.wait(2000);
    cy.contains("button", " Send and approve ")
      .invoke("removeAttr", "disabled")
      .wait(500)
      .click({ force: true });
    cy.wait(1000);
    cy.xpath('/html/body/div[3]/div[2]/div/mat-dialog-container/div/div/app-common-approval-confirmation-dialog/div/div[2]/button[1]')
    .should('be.visible')
    .click({force: true});
    cy.wait(1000);
  });
});

