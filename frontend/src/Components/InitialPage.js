import React, { useState } from "react";
import Header from "./Header";
import { NavLink } from "react-router-dom";
export default function ArticleDetails(props) {
  return (
    <div>
      <div className="App-header">
        <Header />
      </div>

      <div className="initial_search">
        <div className="article">
          <div className="title-author-date">
            <NavLink
              to={{
                pathname: `/`
              }}
              className="inactive"
              activeClassName="active"
            >
              Search Function
            </NavLink>
          </div>
          <div className="answer-list">What is search function?</div>
        </div>
      </div>
    </div>
  );
}
