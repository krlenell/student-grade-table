class GradeTable{
  constructor(tableElement, noGradesElement){
    this.tableElement = tableElement
    this.noGradesElement = noGradesElement
  }
  updateGrades(grades, noGradesElement){
    const tbody = this.tableElement.querySelector("tbody")
    while(tbody.firstElementChild){
      tbody.removeChild(tbody.lastElementChild)
    }
    for(let i = 0; i < grades.length; i++){
      let row = this.renderGradeRow(grades[i], this.deleteGrade)
      tbody.append(row)
    }
    if(grades.length === 0){
      this.noGradesElement.className = "d-block"
    } else {
      this.noGradesElement.className = "d-none"
    }
  }
  onDeleteClick(deleteGrade){
    this.deleteGrade = deleteGrade
  }
  renderGradeRow(data, deleteGrade){
    const desiredData = ["name", "course", "grade"]
    const row = document.createElement("tr")
    for (let j = 0; j < desiredData.length; j++) {
      const tData = document.createElement("td")
      tData.textContent = data[desiredData[j]]
      row.append(tData)
    }
    const tDelete = document.createElement("td")
    const deleteButton = document.createElement("button")
    deleteButton.classList.add("btn", "btn-danger", "btn-sm")
    deleteButton.textContent = "Delete"
    deleteButton.addEventListener('click', () => deleteGrade(data.id))
    tDelete.append(deleteButton)
    row.append(tDelete)
    return row
  }
}
