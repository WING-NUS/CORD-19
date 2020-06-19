import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import ComplexList from "./Components/ComplexList";
// import Footer from "./Components/Footer";
// import Home from "./Views/Home";
// import About from "./Views/About";
// import Product from "./Views/Product";

function App() {
  return (
    <div className="relative pb-10 min-h-screen">
      { <Router> }
      <Header />
      /*<ComplexList />*/
      { <div className="p-3">
          <Switch>
             <Route exact path="/">
              <Home />
            </Route>
            <Route path="/api">
              <About />
            </Route>
            <Route path="/api/paper/:id">
              <Product />
            </Route>
          </Switch>
        </div> }
      { </Router> }
    </div>
  );
}

export default App;
