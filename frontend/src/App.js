import React from "react";
import { BrowserRouter as Switch, Route, Router } from "react-router-dom";
import InitialPage from "./Components/InitialPage";
import SearchMain from "./Components/SearchMain";
import Search from "./Components/Search";
import ArticleDetails from "./Components/ArticleDetails";
import CompareMainOriginal from "./Components/CompareMainOriginal";
import CompareMain from "./Components/CompareMain";
import Compare from "./Components/Compare";
import CompareArticles from "./Components/CompareArticles";
import ArticleDetailsAbstract from "./Components/ArticleDetailsAbstract";
import ArticleDetailsSentence from "./Components/ArticleDetailsSentence";
import ArticleDetailsBodyText from "./Components/ArticleDetailsBodyText";
import ArticleDetailsSimilarPaper from "./Components/ArticleDetailsSimilarPaper";

function App() {
  return (
    <div>
      <Switch>
        <div>
          <Route exact path="/" component={InitialPage} exact />
          {/* <Route exact path="/compare" component={CompareMain} exact /> */}
          <Route exact path="/compare" component={CompareMainOriginal} exact />
          <Route exact path="/search" component={Search} exact />
          <Route
            exact
            path="/search/query/:query"
            component={SearchMain}
            exact
          />
          {/* /Search/Query/${this.state.query} */}
          <Route exact path="/specificArticle/:id" component={ArticleDetails} />
          <Route exact path="/compare/:type" component={Compare} />
          <Route
            exact
            path="/specificArticle/sentences/:id"
            component={ArticleDetailsSentence}
          />
          <Route
            exact
            path="/specificArticle/abstract/:id"
            component={ArticleDetailsAbstract}
          />
          <Route
            exact
            path="/specificArticle/bodyText/:id"
            component={ArticleDetailsBodyText}
          />
          <Route
            exact
            path="/specificArticle/similarPaper/:id"
            component={ArticleDetailsSimilarPaper}
          />

          <Route
            exact
            path="/CompareArticles"
            component={CompareArticles}
            exact
          />
        </div>
      </Switch>
    </div>
  );
}

export default App;
