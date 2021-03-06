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
    this.deleteGrade = this.deleteGrade.bind(this)
    this.handleDeleteGradeError = this.handleDeleteGradeError.bind(this)
    this.handleDeleteGradeSuccess = this.handleDeleteGradeSuccess.bind(this)
  }
  handleGetGradesError(error){
    console.error(error)
  }
  handleGetGradesSuccess(grades){
    this.gradeTable.updateGrades(grades)
    let averageGrades = 0
    for(let i = 0; i < grades.length; i++){
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
    this.gradeTable.onDeleteClick(this.deleteGrade)
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
  deleteGrade(id){
    $.ajax({
      url: "https://sgt.lfzprototypes.com/api/grades/" + id,
      method: "DELETE",
      headers: {
        "X-Access-Token": "f5bYMPNU"
      },
      error: this.handleDeleteGradeError,
      success: this.handleDeleteGradeSuccess
    })
  }
  handleDeleteGradeError(error){
    console.error(error)
  }
  handleDeleteGradeSuccess(){
    this.getGrades()
  }
}
