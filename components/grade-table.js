class GradeTable{
  constructor(tableElement, noGradesElement){
    this.tableElement = tableElement
    this.noGradesElement = noGradesElement
  }
  updateGrades(grades){
    var tbody = this.tableElement.querySelector("tbody")
    while(tbody.firstElementChild){
      tbody.removeChild(tbody.lastElementChild)
    }
    for(var i = 0; i < grades.length; i++){
      var row = this.renderGradeRow(grades[i], this.deleteGrade)
      tbody.append(row)
    }
    if(grades.length === 0){
      this.noGradesElement.className = ""
    } else {
      this.noGradesElement.className = "d-none"
    }
  }
  onDeleteClick(deleteGrade){
    this.deleteGrade = deleteGrade
  }
  renderGradeRow(data, deleteGrade){
    var desiredData = ["name", "course", "grade"]
    var row = document.createElement("tr")
    for (var j = 0; j < desiredData.length; j++) {
      var tData = document.createElement("td")
      tData.textContent = data[desiredData[j]]
      row.append(tData)
    }
    var tDelete = document.createElement("td")
    var deleteButton = document.createElement("button")
    deleteButton.classList.add("btn", "btn-danger", "btn-sm")
    deleteButton.textContent = "Delete"
    deleteButton.addEventListener('click',function(){
      deleteGrade(data.id)
    })
    tDelete.append(deleteButton)
    row.append(tDelete)
    return row
  }
}
