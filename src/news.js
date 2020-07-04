class News {
  constructor(){
    this.topStories = []
    this.allArticles = []
    this.summary = ""
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
    }

    // Send request
    request.send()
  }

}
