import React from "react";
import "../App.css";
import Search from "./Search";
import ComplexList from "./ComplexList";

const Header = () => {
  return (
    <div className="App-header">
      <h2 className="heading">WING-NUS COVID</h2>
      {/* <ComplexList /> */}
      <Search />
    </div>
  );
};

export default Header;
