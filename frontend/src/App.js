import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import SearchMain from "./Components/SearchMain";
import ArticleDetails from "./Components/ArticleDetails";

function App() {
  return (
    <div>
      <Switch>
        <div className="App-header">
          <Route exact path="/" component={SearchMain} exact />
          <Route path="/specificArticle/:id" component={ArticleDetails} />
        </div>
      </Switch>
    </div>
  );
}

export default App;
