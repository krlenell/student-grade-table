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
    console.log("hi")
  }
}
