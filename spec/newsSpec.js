(function () {
  let news = new News();

  function newsObjectStartsWithEmptyTopStoriesArray(){
    expect(news.topStories.length).toEqual(0)
  };

  function newsObjectStartsWithEmptyArticleArray(){
    expect(news.article.length).toEqual(0)
  };

  function newsObjectStartsWithEmptySummaryString(){
    expect(news.summary).toEqual("")
  };

  function retrieveTopStoriesFunctionReturnsArrayOfTenArticles(){
    apiRequestUrl = 'http://content.guardianapis.com/search?from-date=2020-07-04&show-fields=thumbnail&api-key=test'
    news.retrieveTopStories(apiRequestUrl);
    setTimeout(function(){ expect(news.topStories.length).toEqual(10); }, 1000);
  };

  function retrieveArticleSummaryFunctionReturnsArticleSummaryInfo(){
    article = {
      webUrl: "https://www.theguardian.com/stage/2020/mar/17/hottest-front-room-seats-the-best-theatre-and-dance-to-watch-online"
    }
    news.topStories = [article]
    news.retrieveArticleSummary(0);
    setTimeout(function(){ expect(news.summary).toNotEqual(""); }, 3000);
  };

  newsObjectStartsWithEmptyTopStoriesArray();
  newsObjectStartsWithEmptyArticleArray();
  newsObjectStartsWithEmptySummaryString();
  retrieveTopStoriesFunctionReturnsArrayOfTenArticles();
  retrieveArticleSummaryFunctionReturnsArticleSummaryInfo();

})(this)
