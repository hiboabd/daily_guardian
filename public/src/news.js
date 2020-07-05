class News {
  constructor(){
    this.topStories = []
    this.article = []
    this.summary = ""
    this.printer = new Printer()
  }

  retrieveTopStories(apiRequestUrl){
    let self = this;
    // Create a request variable and assign a new XMLHttpRequest object to it.
    var request = new XMLHttpRequest()

    // Open a new connection, using the GET request on the URL endpoint
    request.open('GET', apiRequestUrl, true)

    request.onload = function() {
      // Begin accessing JSON data here
      var data = JSON.parse(this.response)
      self.topStories = data.response.results
      self.printer.generateTitleHTML(self.topStories);
    }

    // Send request
    request.send()
  }

    retrieveArticleID(){
      let self = this;
      let id = window.location.hash.split('#article/')[1]
      self.retrieveArticleSummary(id)
    }

    retrieveArticleSummary(id){
      let self = this;

      self.article = self.topStories[id]

      let apiRequestUrl = 'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=' + self.topStories[id].webUrl

      var request = new XMLHttpRequest()
      request.open('GET', apiRequestUrl, true)

      request.onload = function() {
        var data = JSON.parse(this.response)
        self.summary = data
        self.printer.generateSummaryHTML(self.article, self.summary);
      }
      request.send()
  }

}
