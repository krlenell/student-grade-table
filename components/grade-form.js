class GradeForm{
  constructor(formElement){
    this.formElement = formElement
    this.createGrade = null
    this.handleSubmit = this.handleSubmit.bind(this)
    this.formElement.addEventListener('submit', this.handleSubmit)
  }
  onSubmit(createGrade){
    this.createGrade = createGrade
  }
  handleSubmit(event){
    event.preventDefault()
    var formData = new FormData(event.target)
    var formName = formData.get("name")
    var formCourse = formData.get("course")
    var formGrade = formData.get("grade")
    console.log("handle submit this", this)
    this.createGrade(formName, formCourse, formGrade)
    this.formElement.reset()
  }
}
