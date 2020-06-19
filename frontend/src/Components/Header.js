import React from "react";
import "../App.css";
import Search from "./Search";

const Header = () => {
  return (
    <div className="App-header">
      <h2 className="heading">WING-NUS COVID</h2>
      <Search />
    </div>
  );
};

export default Header;
