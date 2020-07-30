import React, { useState, useEffect } from "react";
import Axios from "axios";
import Article from "./Article";
import Footer from "./Footer";
import Select from "react-select";
import Dropdown from "react-dropdown";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      articles: []
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange = e => this.setState({ query: e.target.value });

  onSubmit = e => {
    e.preventDefault();

    this.props.history.push({
      pathname: `/search/query/${this.state.query}`,
      state: { query: this.state.query, articles: [] }
    });
  };
  render() {
    return (
      <div>
        <div className="header">
          <form
            onSubmit={this.onSubmit}
            className="search-form"
            htmlFor="search-input"
          >
            <input
              type="text"
              name="query"
              value={this.state.query}
              id="search-input"
              placeholder="Search..."
              autoComplete="off"
              onChange={this.onChange}
            />
            <input type="submit" value="Search" />
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Search;
