import AcademicHistory from '../Registration/AcademicHistory';

export default class AcademicHistoryAction {
  constructor() {
    globalThis.academicHistoryAction = new AcademicHistory();
    
  }

  performAcademicHistoryAction(Degree, Degree2,Institution, Institution2, ResultType, ResultType2, CGPA, CGPA2 , EducationLevel2, EducationLevel) {
  //Education Level1

    //Education Level
    academicHistoryAction.EducationLevel().click();
    academicHistoryAction.wait500();
    //Select Education Level
    academicHistoryAction.SelectEducationLevel().contains(EducationLevel).wait(700).click();
    academicHistoryAction.wait500();
    //Degree Title
    academicHistoryAction.DegreeTitle().type(Degree);
    academicHistoryAction.wait500();
    //Name of Institution
    academicHistoryAction.NameOfInstitution().type(Institution);
    academicHistoryAction.wait500();
    //Result Type
    academicHistoryAction.ResultType().click();
    academicHistoryAction.wait500();
    academicHistoryAction.SelectResultType().contains(ResultType).click();
    academicHistoryAction.wait500();
    //Result
    academicHistoryAction.Result().type(CGPA);
    academicHistoryAction.wait500();
    //Passing Year
    academicHistoryAction.PassingYear().click();
    academicHistoryAction.wait1000();
    academicHistoryAction.SelectPassingYear().click();
    academicHistoryAction.wait1000();

//Education Level2
    academicHistoryAction.EducationLevel2().first().click({force: true});
    academicHistoryAction.wait1000();
  //Education Level
  academicHistoryAction.EducationLevel3().click({force: true}).click({force: true}).click({force: true});
  academicHistoryAction.wait500();
  //Select Education Level
  academicHistoryAction.SelectEducationLevel2().contains(EducationLevel2).wait(700).click();
  academicHistoryAction.wait500();
  //Degree Title
  academicHistoryAction.DegreeTitle2().type(Degree2);
  academicHistoryAction.wait500();
  //Name of Institution
  academicHistoryAction.NameOfInstitution2().type(Institution2);
  academicHistoryAction.wait500();
  //Result Type
  academicHistoryAction.ResultType2().click();
  academicHistoryAction.wait500();
  academicHistoryAction.SelectResultType2().contains(ResultType2).click();
  academicHistoryAction.wait500();
  //Result
  academicHistoryAction.Result2().type(CGPA2);
  academicHistoryAction.wait500();
  //Passing Year
  academicHistoryAction.PassingYear2().click();
  academicHistoryAction.wait500();
  academicHistoryAction.SelectPassingYear2().click();
  academicHistoryAction.wait500();
  //next Page
  academicHistoryAction.Next().click({force: true});
  academicHistoryAction.wait500();

   }
}
 