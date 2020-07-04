(function () {
  let news = new News();

  function newsObjectStartsWithEmptyTopStoriesArray(){
    expect(news.topStories.length).toEqual(0)
  };

  function newsObjectStartsWithEmptyArticlesArray(){
    expect(news.allArticles.length).toEqual(0)
  };

  function newsObjectStartsWithEmptySummaryString(){
    expect(news.summary).toEqual("")
  };

  function retrieveDataFunctionReturnsArrayOfTenArticles(){
    news.retrieveData();
    expect(news.topStories.length).toEqual(10)
  };

  newsObjectStartsWithEmptyTopStoriesArray();
  newsObjectStartsWithEmptyArticlesArray();
  newsObjectStartsWithEmptySummaryString();
  retrieveDataFunctionReturnsArrayOfTenArticles();

})(this)
