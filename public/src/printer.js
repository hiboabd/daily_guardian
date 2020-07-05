class Printer{
  constructor(){
    this.htmlString = ""
  }

  generateTitleHTML(stories){
    let htmlString = ''

    stories.forEach((item, i) => {
      htmlString += '<div class="card"><img src="' + stories[i].fields.thumbnail
      + '"><h4><a id="' + stories.indexOf(item)
      + '" href="#article/' + stories.indexOf(item) + '">'
      + item.webTitle + '</a></h4></div>'
    });

    this.htmlString = htmlString;
  }

}
