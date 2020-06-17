class GradeForm{
  constructor(formElement){
    this.formElement = formElement
    this.createGrade = null
  }
  onSubmit(createGrade){
    this.createGrade = createGrade
  }
  handleSubmit(event){
    event.preventDefault()
    console.log("hi")
  }
}
