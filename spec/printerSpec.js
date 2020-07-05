(function () {
  let printer = new Printer();

  function generateTitleHTMLFunctionReturnsHTMLString(){
    story = {
      webTitle: "Hottest front-room seats: the best theatre and dance to watch online",
      fields: {thumbnail: "https://media.guim.co.uk/fec27e1399e7c486763a3121ba4f52c6201795f7/0_132_5289_3174/500.jpg"}
    }
    stories = [story]
    printer.generateTitleHTML(stories)
    expect(printer.htmlString).toEqual('<div class="card"><img src="'
    + 'https://media.guim.co.uk/fec27e1399e7c486763a3121ba4f52c6201795f7/0_132_5289_3174/500.jpg'
    + '"><h4><a id="0" href="#article/0">'
    + "Hottest front-room seats: the best theatre and dance to watch online" + '</a></h4></div>')

  };


  generateTitleHTMLFunctionReturnsHTMLString();

})(this)
