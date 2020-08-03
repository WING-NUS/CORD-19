import React, { useState, useEffect } from "react";
import Axios from "axios";
import Article from "./Article";
import Footer from "./Footer";
import logo from "./logo.png";
import { NavLink } from "react-router-dom";

class SearchMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: props.location.state.query,
      articles: props.location.state.articles
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.getData = this.getData.bind(this);
    this.get_articles = this.get_articles.bind(this);
  }

  getData = async () => {
    //url for search function
    const url = `https://cord19backend.herokuapp.com/answer/?query=${this.state.query}`;

    if (this.state.query !== "") {
      const result = await Axios.get(url);
      this.setState({ articles: result.data });
    }
  };

  get_articles = () => {
    if (this.state.articles.length === 0) {
      this.getData();
    }
  };

  onChange = e => this.setState({ query: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    this.getData();

    this.props.history.push({
      pathname: `/search/query/${this.state.query}`,
      state: { articles: [], query: this.state.query }
    });
  };

  render() {
    return (
      <div>
        <div className="header">
          <NavLink
            to={{
              pathname: `/`
            }}
            className="initial_button"
            activeClassName="active"
          >
            <img className="logo" src={logo} alt="Logo" />
          </NavLink>
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
              placeholder={this.state.query}
              autoComplete="off"
              onChange={this.onChange}
            />
            <input type="submit" value="Search" />
          </form>
        </div>

        <div className="articles_main">
          {this.get_articles()}
          {this.state.articles !== [] &&
            this.state.articles.map(article => (
              <Article
                key={article.paper_id}
                article={article}
                abstractHighlights={[]}
                abstractHighlightModel={"sciwing"}
                sentToDisplay={"all"}
              />
            ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default SearchMain;
