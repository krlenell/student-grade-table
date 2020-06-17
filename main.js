var table = document.querySelector("table")
var header = document.querySelector("header")
var formEl = document.querySelector("form")
var noGradeEl = document.querySelector("no-grades")


var gradeForm = new GradeForm(formEl)
var pageHeader = new PageHeader(header)
var gradeTable = new GradeTable(table, noGradeEl)
var app = new App(gradeTable, pageHeader, gradeForm)

app.start()
