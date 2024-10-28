export default class AcademicHistory{
      //Education Level1

    EducationLevel() {
       //Education Level
      return  cy.get('div>mat-select>div>div[id="mat-select-value-1"]');
      }
    SelectEducationLevel() {
        //Select Education Level
       return  cy.get('div>div>div>div>mat-option[id="mat-option-2"]');
       }
    DegreeTitle() {
         //Degree Title
      return cy.get('[aria-label="eduDegree"]');
    }
    NameOfInstitution() {
        //Name of Institution
      return  cy.get('[aria-label="eduInst"]');
    }
    ResultType() {
      //Result Type
      return cy.get('[aria-label="eduResultType"]');
    }
    SelectResultType() {
        //Select Result Type
       return  cy.get('div>mat-option[id="mat-option-1"]>span[class="mdc-list-item__primary-text"]');
       }
    Result() {
      //Result
      return cy.get('[aria-label="eduResult"]');
    }
    PassingYear() {
      //Passing Year
        return cy.get('[aria-label="eduEnd"]');
      }
    SelectPassingYear() {
        //Passing Year
          return cy.xpath('/html/body/div[2]/div/div/div/mat-option[2]');
        }
      //Education Level2     
    EducationLevel2(){
    return cy.xpath('/html/body/app-root/app-employee/mat-stepper/div/div[2]/div[2]/app-education-form-shell/app-education-form/div/div/div/div/div/div[2]/button');
    }
    
    EducationLevel3() {
      //Education Level
    return  cy.xpath('/html/body/app-root/app-employee/mat-stepper/div/div[2]/div[2]/app-education-form-shell/app-education-form/div/div/div/div[2]/div/div[1]/div/div[1]/mat-form-field/div[1]');
     }
     SelectEducationLevel2() {
      //Education Level
     return  cy.xpath('/html/body/div[2]/div[2]/div/div/mat-option[2]');
     }
    DegreeTitle2() {
      //Degree Title
    return cy.xpath('/html/body/app-root/app-employee/mat-stepper/div/div[2]/div[2]/app-education-form-shell/app-education-form/div/div/div/div[2]/div/div[1]/div/div[2]/mat-form-field/div[1]/div/div[2]/input');
    }
    NameOfInstitution2() {
     //Name of Institution
    return  cy.xpath('/html/body/app-root/app-employee/mat-stepper/div/div[2]/div[2]/app-education-form-shell/app-education-form/div/div/div/div[2]/div/div[1]/div/div[3]/mat-form-field/div[1]/div/div[2]/input');
    }
    ResultType2() {
      //Result Type
      return cy.xpath('/html/body/app-root/app-employee/mat-stepper/div/div[2]/div[2]/app-education-form-shell/app-education-form/div/div/div/div[2]/div/div[1]/div/div[4]/mat-form-field/div[1]/div/div[2]/mat-select/div/div[1]/span');
    }
    SelectResultType2() {
        //Education Level
       return  cy.xpath('/html/body/div[2]/div[2]/div/div/mat-option[2]');
       }
       Result2() {
        //Result
        return cy.xpath('/html/body/app-root/app-employee/mat-stepper/div/div[2]/div[2]/app-education-form-shell/app-education-form/div/div/div/div[2]/div/div[1]/div/div[5]/mat-form-field/div[1]/div/div[2]/input');
      }
      PassingYear2() {
        //Passing Year
          return cy.xpath('/html/body/app-root/app-employee/mat-stepper/div/div[2]/div[2]/app-education-form-shell/app-education-form/div/div/div/div[2]/div/div[1]/div/div[6]/mat-form-field/div[1]/div/div[2]/input');
        }
        SelectPassingYear2() {
          //Passing Year
            return cy.xpath('/html/body/div[2]/div/div/div/mat-option[4]');
          }


    Next() {
        //Next Page
        return  cy.xpath('/html/body/app-root/app-employee/mat-stepper/div/div[2]/div[2]/div/button[2]');
      }
      wait500(){
        const x=500;
        return cy.wait(x);
      }
      wait1000(){
        const y=1000;
        return cy.wait(y);
      }


    
    
   
  }
