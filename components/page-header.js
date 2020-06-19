class PageHeader{
  constructor(headerElement){
    this.headerElement = headerElement
  }
  updateAverage(newAverage){
    const aveBadge = this.headerElement.querySelector("span")
    aveBadge.textContent = newAverage
  }
}
