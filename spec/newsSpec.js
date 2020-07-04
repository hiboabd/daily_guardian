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
    apiRequestUrl = 'http://content.guardianapis.com/search?from-date=2020-07-04&show-fields=thumbnail&api-key=test'
    news.retrieveTopStories(apiRequestUrl);
    setTimeout(function(){ expect(news.topStories.length).toEqual(10); }, 1000);
  };

  newsObjectStartsWithEmptyTopStoriesArray();
  newsObjectStartsWithEmptyArticlesArray();
  newsObjectStartsWithEmptySummaryString();
  retrieveDataFunctionReturnsArrayOfTenArticles();

})(this)
