# Daily Guardian

[![Netlify Status](https://api.netlify.com/api/v1/badges/392f4737-c1bf-4d1f-b5c6-2e402a53dac0/deploy-status)](https://app.netlify.com/sites/daily-guardian/deploys)

Daily Guardian is a frontend, single page app that summarises the top 10 guardian articles daily for your convenience.

More specifically, this app grabs all the top 10 headlines from the Guardian newspaper API and displays them on a page. Clicking on a headline will show a summary of the article.

This app was written entirely in frontend JavaScript, CSS and HTML.

Check it out [here](https://daily-guardian.netlify.app/)

## How to use Daily Guardian

Firstly, if you do not have Node and npm installed. Please do the following:

## Installing Node

In your terminal, run:

    $ node -v

If you get a message that says `node: command not found`, run:

    $ brew install node

npm will automatically be installed when you install node.

## To run this app on your computer, complete the following steps:

1. Fork this repository, and clone it to your local machine.
2. In your terminal, make sure you are in the root directory 'daily_guardian' and run the command ‘npm install’
3. When the installation completes, you may type 'open index.html' in your terminal to open the app.


## User Stories

The following user stories were used to create the app.

```
As a busy politician
I can see all of today's headlines in one place
So I know what the big stories of the day are
```

```
As a busy politician
I can click a link to see the original news article
So that I can get an in depth understanding of a very important story
```

```
As a busy politician
I can see a summary of a news article
So I can get a few more details about an important story
```

```
As a busy politician
I can see a picture to illustrate each news article when I browse headlines
So that I have something nice to look at
```

```
As a busy politician
I can read the site comfortably on my phone
Just in case my laptop breaks
```

## Planning

### Class Responsibility Collaborator

| Class        | Methods                  | Instance variables | Responsibility |
| :---         |     :---:                |        :---:       |         ---:   |
| News         | retrieveTopArticles()    | this.topStories    | Printer        |
|              | retrieveSummaryData()    | this.singleArticle |                |
|              |                          | this.articleSummary|                |
|              |                          | this.printer       |                |


| Class        | Methods              | Relationships |
| :---         |     :---:            |          ---: |
| Printer      | generateTitleHTML()  |               |
|              | generateSummaryHTML()|               |
|              | displayHTML()        |               |

## Resources used

This app makes use of an API provided by Makers Academy that you can use to talk to the Guardian API and the Aylien text summarisation API. This API's only job is to take your request and add an API key. More information about each of these API's can be found below:

* [Makers News Summary API](https://github.com/makersacademy/news-summary-api)
* [Guardian newspaper API homepage](http://open-platform.theguardian.com/documentation/)
* [Aylien text summary API docs](http://docs.aylien.com/docs/summarize)
