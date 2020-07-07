class Printer{
  constructor(){
    this.htmlString = ""
  }

  displayHTML(){
    let element = document.getElementById('news')
    element.innerHTML = this.htmlString;
  }

  generateTitleHTML(stories){
    let htmlString = ''

    stories.forEach((item, i) => {
      htmlString += '<div class="card"><img id="image" src="' + stories[i].fields.thumbnail
      + '"><h4><a id="' + stories.indexOf(item)
      + '" href="#article/' + stories.indexOf(item) + '">'
      + item.webTitle + '</a></h4></div>'
    });

    this.htmlString = htmlString
    this.displayHTML();
  }

  generateSummaryHTML(article, summary){
    let htmlString = '<p>'

    summary.sentences.forEach((item, i) => {
      htmlString += item + '</br></br>'
    });

    htmlString += '</p></br><p><a href="' + article.webUrl + '"> View the original article here </a></p>'

    this.htmlString = htmlString;
    this.displayHTML();
  }

}
