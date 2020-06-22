const table = document.querySelector("table")
const header = document.querySelector("header")
const formEl = document.querySelector("form")
const noGradeEl = document.querySelector("#no-grades")

const gradeForm = new GradeForm(formEl)
const pageHeader = new PageHeader(header)
const gradeTable = new GradeTable(table, noGradeEl)
const app = new App(gradeTable, pageHeader, gradeForm)

app.start()
