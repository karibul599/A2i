export default class personalInfo{
    clickMyAccountbtn(){
        cy.contains('My Account')
          .should('exist')
          .and('be.visible')
          .click()
    }
    clickPersonalInfobtn(){
        cy.get('a[href="/personal-details/personal-info"]')
          .should('exist')
          .and('be.visible')
          .click()
    }
    updateEditAbleForm(){
        //IN No
        cy.get('[aria-label="TIN No"]')
          .should('exist')
          .and('be.visible')
          .clear()
          .type('34456668931')
        //Passport Number
        cy.get('[placeholder="Passport Number"]')
          .should('exist')
          .and('be.visible')
          .clear()
          .type('BA0123456')
        //Marital Status
        cy.get('[aria-label="maritalStatus"]')
          .should('be.visible')
          .clear()
          .click()
        cy.contains(' Single ')
          .should('be.visible')
          .click()
        //Blood Group
        cy.get('[aria-label="Blood Group"]')
          .should('exist')
          .and('be.visible')
          .clear()
          .click()
        cy.contains(' B+ ')
          .should('be.visible')
          .click()
        //Religion
        cy.get('[aria-label="Religion"]')
          .should('exist')
          .and('be.visible')
          .clear()
          .click()
        cy.contains(' Islam ').scrollIntoView()
          .should('be.visible')
          .click()                                    
    }
    checkBoxValodation(){
        cy.get('[id="mat-mdc-checkbox-1-input"]')
          .uncheck()
          .type('01402345678')
        cy.get('[ng-reflect-name="contactNumber2"]')
          .type('01402345678')  
    }
    uploadProfilePictureAndSignature(){
        cy.get('[type="file"]')
         .first()
         .attachFile('360x360.png')
        cy.get('[type="file"]')
         .eq(1)
         .attachFile('signature.jpg') 
        cy.get('[class="mat-icon-button mat-primary text-white mdc-button mat-mdc-button mat-unthemed mat-mdc-button-base"]').should('be.visible')
        .click({ multiple: true })          
       
    }
    clickUpdateBtn(){
        cy.contains('Update')
          .screenshot()
          .and('be.visible')
          .click()
    }
}