import React from "react";
import { BrowserRouter as Switch, Route, Router } from "react-router-dom";
import InitialPage from "./Components/InitialPage";
import SearchMain from "./Components/SearchMain";
import ArticleDetails from "./Components/ArticleDetails";
import CompareMain from "./Components/CompareMain";
import CompareArticles from "./Components/CompareArticles";

function App() {
  return (
    <div>
      <Switch>
        <div>
          <Route exact path="/" component={InitialPage} exact />
          <Route exact path="/compare" component={CompareMain} exact />
          <Route exact path="/search" component={SearchMain} exact />
          <Route path="/specificArticle/:id" component={ArticleDetails} />
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
