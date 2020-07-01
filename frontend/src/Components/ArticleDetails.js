import React, { useState } from "react";
import AbstractDetails from "./AbstractDetails";
import { Link } from "react-router-dom";
import Header from "./Header";

class ArticleDetails extends React.Component {
  componentDidMount() {}
  render() {
    const {
      doi,
      paper_id,
      doc_date,
      title,
      authors,
      abstract,
      bodyText
    } = this.props.location.state.article;
    const author = authors.join(", ");
    return (
      <div className="App-header">
        <Header />
        <div className="articles">
          <div className="article">
            <div className="title-author-date">
              <h2>Title: {title}</h2>
              <div>Authors: {author}</div>
              <div>Publish Date: {doc_date}</div>
            </div>
            <AbstractDetails abstract={abstract} />
            <div className="answer-list">
              <h3>Body Text</h3>
              {bodyText.text}
            </div>
            {/* <ul className="answer-list">Answers:{listAnswers}</ul> */}
          </div>
        </div>
      </div>
    );
  }
}

export default ArticleDetails;
