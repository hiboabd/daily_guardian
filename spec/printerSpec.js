(function () {
  let printer = new Printer();

  function generateTitleHTMLFunctionReturnsHTMLString(){
    let story = {
      webTitle: "Hottest front-room seats: the best theatre and dance to watch online",
      fields: {thumbnail: "https://media.guim.co.uk/fec27e1399e7c486763a3121ba4f52c6201795f7/0_132_5289_3174/500.jpg"}
    }
    let stories = [story]
    printer.generateTitleHTML(stories)
    expect(printer.htmlString).toEqual('<div class="card"><img src="'
    + 'https://media.guim.co.uk/fec27e1399e7c486763a3121ba4f52c6201795f7/0_132_5289_3174/500.jpg'
    + '"><h4><a id="0" href="#article/0">'
    + "Hottest front-room seats: the best theatre and dance to watch online" + '</a></h4></div>')

  };

  function generateSummaryHTMLFunctionReturnsHTMLString(){
    let article = {
      webUrl: "https://www.theguardian.com/stage/2020/mar/17/hottest-front-room-seats-the-best-theatre-and-dance-to-watch-online"
    }
    let sentences = ["this is the summary"]
    let summary = {
      sentences: sentences}
    printer.generateSummaryHTML(article, summary)
    expect(printer.htmlString).toEqual('<p>' + "this is the summary" + '</br></br>'
    + '</p></br><p><a href="'
    + "https://www.theguardian.com/stage/2020/mar/17/hottest-front-room-seats-the-best-theatre-and-dance-to-watch-online"
    + '"> View the original article here </a></p>')
  };


  generateTitleHTMLFunctionReturnsHTMLString();
  generateSummaryHTMLFunctionReturnsHTMLString();

})(this)
