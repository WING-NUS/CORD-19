import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import ComplexList from "./Components/ComplexList";
import ArticleList from "./Components/ArticleList";
// import Footer from "./Components/Footer";
// import Home from "./Views/Home";
// import About from "./Views/About";
// import Product from "./Views/Product";

function App() {
  return (
    <div>
      <Header />

      <div className="p-3">
        <Switch>
          <Route exact path="/" component={ComplexList} exact />
          <Route exact path="/article/new" component={ComplexList} />
          <Route exact path="/article/:articleid" component={ComplexList} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
