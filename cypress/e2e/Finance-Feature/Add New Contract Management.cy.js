describe("A2i Finance-Feature( Contract Management )", () => {
  it("Contract Management(Consulting Firm) ,", () => {
    //Function create
    a2iLogin();
    a2iFinanceBtn();
    a2iContractManagementBTn();
    a2iAddNewBtn();
    a2iAddNewContract();

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

    function a2iFinanceBtn() {
      //Finance Button
      cy.xpath(
        "/html/body/app-root/app-erp-sidenav/div/aside/nav/div/div/div[2]/mat-nav-list/div[5]/div[1]"
      ).click();
    }

    function a2iContractManagementBTn() {
      //Finance-Feature(Contract Management) Button
      cy.get('a[href="/finance/contract-management"]').click({ force: true });

    }
    function a2iAddNewBtn() {
      //Finance-Feature(Add New) Button
      cy.contains("button", "Add New ").click();
    }

    function a2iAddNewContract() {
      ////Add New Contract Management
      //Consultant Type
      cy.get('[placeholder="Consultant Type"]')
        .click();
      cy.contains('Consulting Firm')
        .click();
      //Fund Source
      cy.get('[placeholder="Fund Source"]')
        .click();
      cy.contains('UNDP')
        .click();
      //Team
      cy.get('[placeholder="Team"]')
        .click();
      cy.contains('Finance')
        .click();
      //Contract Administer
      cy.get('[placeholder="Contract Administer"]')
        .click();
      cy.contains('Mohammed Naser Miah')    ///Name can be change
        .click();
      //Procurement Package Title
      cy.get('[placeholder="Procurement Package Title"]')
        .type('Procurement Package1');
      //Contract Reference No
      cy.get('[placeholder="Contract Reference No"]')
        .type('Ref-1234');
      //Contract Start Date
      cy.get('[formcontrolname="contractStartDate"]')
        .clear().type('14/09/2024');
      //Contract End Date
      cy.get('[formcontrolname="contractEndDate"]')
        .clear().type('14/10/2024');
      //Contract Length(In Month)// == Get value from other place
      //Total Contract Value// == Get value from other place
      //Description
      cy.get('[placeholder="Description"]')
        .type('New Contract management');
      //PO Number 
      cy.get('[placeholder="PO Number"]')
        .type('01243676787');
      ////Payment Schedule
      //Payment Date
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0'); 
    const month = String(now.getMonth() + 1).padStart(2, '0'); 
    const year = now.getFullYear();
    const currentDate = `${day}/${month}/${year}`;

      cy.get('[formcontrolname="paymentDate"]')
        .clear().type(currentDate);
      //Amount
      cy.get('[formcontrolname="amount"]')
        .clear().type('4000');
      ////Vendor Information
      //Name of the organization
      cy.get('[formcontrolname="organizationName"]')
        .click();
      cy.contains('Creative Media Limited')
        .click();
      //Organization Address
      cy.get('[formcontrolname="organizationAddress"]')
        .invoke('removeAttr', 'disabled')
        .clear() 
        .type('Mirpur DOHS, Dhaka');
      ////Select Focal Person
      cy.get('[formcontrolname="selectFocalPerson"]')
        .click();
      cy.contains('Add New Focal')
        .click();
      cy.wait(200);
      //Name of the Focal Person
      cy.get('[aria-label="focalPersonName"]')
        .click()
        .type('Karibul Hasan');
      //Designation
      cy.get('[aria-label="focalPersonDesignation"]')
        .click()
        .type('QA Automation Engineer');
      //mobile
      cy.get('[aria-label="focalPersonMobile"]')
        .click()
        .type('01234554677');
      //email
      cy.get('[aria-label="focalPersonEmail"]')
        .click()
        .type('xyz@gmail.com');
      //project role
      cy.get('[aria-label="focalPersonProjectRole"]')
        .click()
        .type('Project Manager');
      //address
      cy.get('[aria-label="focalPersonAddress"]')
        .click()
        .type('Salikha,Magura');
      ////Select Representative
      cy.get('[formcontrolname="selectRepresentativePerson"]')
        .click();
      cy.contains('Add New Representative')
        .click();
      //Name of the Focal Person
      cy.get('[aria-label="representativePersonName"]')
        .click()
        .type('Damien Hasan');
      //Designation
      cy.get('[aria-label="representativePersonDesignation"]')
        .click()
        .type('QA Automation Engineer');
      //mobile
      cy.get('[aria-label="representativePersonMobile"]')
        .click()
        .type('01234554677');
      //email
      cy.get('[aria-label="representativePersonEmail"]')
        .click()
        .type('abc@gmail.com');
      //project role
      cy.get('[aria-label="representativePersonProjectRole"]')
        .click()
        .type('Manager');
      //address
      cy.get('[aria-label="representativePersonAddress"]')
        .click()
        .type('Salikha,Jhenaida');
      //Add Link
      //Upload Attachment
    }
  });
});
