class PageHeader{
  constructor(headerElement){
    this.headerElement = headerElement
  }
  updateAverage(newAverage){
    var aveBadge = this.headerElement.querySelector("span")
    aveBadge.textContent = newAverage
  }
}
