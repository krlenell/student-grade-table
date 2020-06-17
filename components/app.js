class App{
  constructor(gradeTable, pageHeader, gradeForm){
    this.gradeTable = gradeTable
    this.pageHeader = pageHeader
    this.gradeForm = gradeForm
    this.createGrade = this.createGrade.bind(this)
    this.handleCreateGradeError = this.handleCreateGradeError.bind(this)
    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this)
    this.handleGetGradesError = this.handleGetGradesError.bind(this)
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this)
  }
  handleGetGradesError(error){
    console.error(error)
  }
  handleGetGradesSuccess(grades){
    this.gradeTable.updateGrades(grades)
    var averageGrades = 0
    for(var i = 0; i < grades.length; i++){
      averageGrades += grades[i].grade
    }
    averageGrades = averageGrades / grades.length
    this.pageHeader.updateAverage(averageGrades)
  }
  getGrades(){
    $.ajax({
      url:"https://sgt.lfzprototypes.com/api/grades",
      headers: {
        "X-Access-Token": "f5bYMPNU"
      },
      error: this.handleGetGradesError,
      success: this.handleGetGradesSuccess
    })
  }
  start(){
    this.getGrades()
    this.gradeForm.onSubmit(this.createGrade)
  }
  createGrade(name, course, grade) {
    $.ajax({
      url: "https://sgt.lfzprototypes.com/api/grades",
      method: "POST",
      headers: {
        "X-Access-Token": "f5bYMPNU"
      },
      data:{
        "name": name,
        "course": course,
        "grade": grade
      },
      error: this.handleCreateGradeError,
      success: this.handleCreateGradeSuccess
    })
  }
  handleCreateGradeError(error) {
    console.error(error)
  }
  handleCreateGradeSuccess() {
    this.getGrades()
  }
}
