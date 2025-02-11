export default class contractManagement{
    clickContractManagmentBtn(){
        cy.get('a[href="/finance/contract-management"]')
          .should('exist')
          .and('be.visible')
          .click()
    }
    clickAddNewBtn(){
        cy.contains('Add New ')
          .should('exist')
          .and('be.visible')
          .click()
    }
    addNewContractManagement(randomName){
        const x=500;
        //Consultant Type
        cy.get('[formcontrolname="consultantType"]')
          .should('exist')
          .and('be.visible')
          .click()
        cy.wait(x)
        cy.contains(' Consulting Firm ')
          .should('exist')
          .and('be.visible')
          .click()
        //Fund Source
        cy.get('[formcontrolname="fundSource"]')
          .should('exist')
          .and('be.visible')
          .click()
        cy.wait(x)
        cy.contains(' UNDP ')
          .should('exist')
          .and('be.visible')
          .click()
        //Team
        cy.get('[formcontrolname="team"]')
          .should('exist')
          .and('be.visible')
          .click()
        cy.wait(x)
        cy.contains(' Finance ')
          .should('exist')
          .and('be.visible')
          .click()
        //Contract Administer
        cy.get('[formcontrolname="contractAdminister"]')
          .should('exist')
          .and('be.visible')
          .click()
        cy.wait(x)
        cy.xpath('/html/body/div[3]/div/div/div/mat-option[1]/span')
          .should('exist')
          .and('be.visible')
          .click()
        //Procurement Package Title
        cy.get('[formcontrolname="procurementTitle"]')
          .should('exist')
          .and('be.visible')
          .type('Title-1')
        cy.wait(x)
        //Contract Reference No
        cy.get('[formcontrolname="contractReferenceNo"]')
          .should('exist')
          .and('be.visible')
          .type('Reference-WE4567')
        cy.wait(x)
        //Contract Start Date
        cy.get('[formcontrolname="contractStartDate"]')
          .clear()
          .should('exist')
          .and('be.visible')
          .type('01/01/2024')
        cy.wait(x)
        //Contract End Date
        cy.get('[formcontrolname="contractEndDate"]')
          .clear()
          .should('exist')
          .and('be.visible')
          .type('31/12/2024')
        cy.wait(x)
        //Contract Length(In Month)= 1 year
        //Total Contract Value= 50000 per month
        //Description
        cy.get('[formcontrolname="description"]')
          .clear()
          .should('exist')
          .and('be.visible')
          .type('description')
        cy.wait(x)
        //PO Number
        cy.get('[formcontrolname="poNumber"]')
          .clear()
          .should('exist')
          .and('be.visible')
          .type('PO-WER342563')
        cy.wait(x)
        //Payment Schedule
        //Payment Date
        cy.get('[formcontrolname="paymentDate"]')
          .clear()
          .should('exist')
          .and('be.visible')
          .type('31/12/2024')
        cy.wait(x)
        //AMOUNT
        cy.get('[formcontrolname="amount"]')
          .clear()
          .should('exist')
          .and('be.visible')
          .type('50000')
        cy.wait(x)
        //Join Venture Firm(s)
        cy.get('[formcontrolname="joinVentureFirm"]')
          .should('exist')
          .and('be.visible')
          .click()
        cy.wait(x)
        cy.xpath('/html/body/div[3]/div/div/div/mat-option[1]/span')
          .should('exist')
          .and('be.visible')
          .click()
        //Contract Holder Details
        //Name of the organization
        cy.get('[formcontrolname="organizationName"]')
          .should('exist')
          .and('be.visible')
          .click()
        cy.wait(x)
        cy.xpath('/html/body/div[3]/div/div/div/mat-option[1]')
          .should('exist')
          .and('be.visible')
          .click()
        //Organization Address
        //Select Focal Person
        cy.get('[formcontrolname="selectFocalPerson"]')
          .clear()
          .should('exist')
          .and('be.visible')
          .click()
        cy.xpath('/html/body/div[3]/div/div/div/mat-option/span')
          .should('exist')
          .and('be.visible')
          .click()
        cy.wait(x)
        //Name of the Focal Person
        cy.get('[formcontrolname="focalPersonName"]')
          .clear()
          .should('exist')
          .and('be.visible')
          .type(randomName)
        cy.wait(x)
        //Designation
        cy.get('[formcontrolname="focalPersonDesignation"]')
          .clear()
          .should('exist')
          .and('be.visible')
          .type('QA Automation Engineer')
        cy.wait(x)
        //mobile
        cy.get('[formcontrolname="focalPersonMobile"]')
          .clear()
          .should('exist')
          .and('be.visible')
          .type('01401444599')
        cy.wait(x)
        //email
        cy.get('[formcontrolname="focalPersonEmail"]')
          .clear()
          .should('exist')
          .and('be.visible')
          .type('karibulhasan4@gmail.com')
        cy.wait(x)
        //project role
        cy.get('[formcontrolname="focalPersonProjectRole"]')
          .clear()
          .should('exist')
          .and('be.visible')
          .type('Tester')
        cy.wait(x)
        //address
        cy.get('[formcontrolname="focalPersonAddress"]')
          .clear()
          .should('exist')
          .and('be.visible')
          .type('Mirpur,DOHS')
        cy.wait(x)
        cy.get('[type="file"]')
          .attachFile('5-mb-example-file_11zon.pdf')
        cy.wait(x)
        cy.wait(x)
        cy.wait(x)
        //submitBtn
        cy.contains(' Save ')
          .should('exist')
          .and('be.visible').click()
          

        






    }
     


}