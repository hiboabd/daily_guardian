(function () {
  let news = new News();

  function newsObjectStartsWithEmptyTopStoriesArray(){
    if(news.topStories.length !== 0){
      throw new Error('News object should start with empty top stories array by default')
    }
  };

  function newsObjectStartsWithEmptyArticlesArray(){
    if(news.allArticles.length !== 0){
      throw new Error('News object should start with empty articles array by default')
    }
  };

  function newsObjectStartsWithEmptySummaryString(){
    if(news.summary !== ""){
      throw new Error('News object should start with empty summary string by default')
    }
  };

  newsObjectStartsWithEmptyTopStoriesArray();
  newsObjectStartsWithEmptyArticlesArray();
  newsObjectStartsWithEmptySummaryString();

})(this)
