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
      answer
    } = this.props.location.state.article;
    const listAnswers = answer.sents.map(sent => <li>{sent}</li>);
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
            {/* <ul className="answer-list">Answers:{listAnswers}</ul> */}
          </div>
        </div>
      </div>
    );
  }
}

export default ArticleDetails;
