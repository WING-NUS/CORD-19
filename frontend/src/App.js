import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import ComplexList from "./Components/ComplexList";

function App() {
  return (
    <div>
      <Header />

      <div className="p-3">
        <Switch>
          <Route exact path="/" component={ComplexList} exact />
          {/* <Route exact path="/article/new" component={ComplexList} />
          <Route exact path="/article/:articleid" component={ComplexList} /> */}
        </Switch>
      </div>
    </div>
  );
}

export default App;
