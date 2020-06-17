var table = document.querySelector("table")
var header = document.querySelector("header")
var formEl = document.querySelector("form")

var gradeForm = new GradeForm(formEl)
var pageHeader = new PageHeader(header)
var gradeTable = new GradeTable(table)
var app = new App(gradeTable, pageHeader, gradeForm)

app.start()
