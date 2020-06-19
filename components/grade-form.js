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
    const formData = new FormData(event.target)
    const formName = formData.get("name")
    const formCourse = formData.get("course")
    const formGrade = formData.get("grade")
    this.createGrade(formName, formCourse, formGrade)
    this.formElement.reset()
  }
}
