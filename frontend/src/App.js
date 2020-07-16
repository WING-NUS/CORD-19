import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import InitialPage from "./Components/InitialPage";
import SearchMain from "./Components/SearchMain";
import ArticleDetails from "./Components/ArticleDetails";

function App() {
  return (
    <div>
      <Switch>
        <div>
          <Route exact path="/InitialPage" component={InitialPage} exact />
          <Route exact path="/" component={SearchMain} exact />
          <Route path="/specificArticle/:id" component={ArticleDetails} />
        </div>
      </Switch>
    </div>
  );
}

export default App;
