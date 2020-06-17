class GradeTable{
  constructor(tableElement){
    this.tableElement = tableElement
  }
  updateGrades(grades){
    var desiredData =["name", "course", "grade"]
    var tbody = this.tableElement.querySelector("tbody")
    while(tbody.firstElementChild){
      tbody.removeChild(tbody.lastElementChild)
    }
    for(var i = 0; i < grades.length; i++){
      var row = document.createElement("tr")
      for(var j = 0; j < desiredData.length; j++){
        var tData = document.createElement("td")
        tData.textContent = grades[i][desiredData[j]]
        row.append(tData)
      }
      tbody.append(row)
    }

  }
}
