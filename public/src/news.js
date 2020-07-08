class News {
  constructor(){
    this.topStories = []
    this.singleArticle = []
    this.articleSummary = ""
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

      self.singleArticle = self.topStories[id]

      let apiRequestUrl = 'https://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=' + self.topStories[id].webUrl

      var request = new XMLHttpRequest()
      request.open('GET', apiRequestUrl, true)

      request.onload = function() {
        var data = JSON.parse(this.response)
        self.articleSummary = data
        self.printer.generateSummaryHTML(self.singleArticle, self.articleSummary);
      }
      request.send()
  }

}
