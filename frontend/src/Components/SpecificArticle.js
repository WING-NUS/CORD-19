import React, { useState } from "react";
import AbstractDetails from "./AbstractDetails";
import { Link } from "react-router-dom";
import Header from "./Header";
const SpecificArticle = ({}) => {
  //   const [show, setShow] = useState(false);
  //   const [showDetails, setShowDetails] = useState(false);
  //   //const { label, image, url, ingredients } = article.recipe;
  const {
    doi,
    paper_id,
    doc_date,
    title,
    authors,
    abstract,
    answer
  } = this.props.location.state.article;
  // const { doi, paper_id, doc_date, title, authors, abstract, answer } = article;
  const listAnswers = answer.sents.map(sent => <li>{sent}</li>);
  const author = authors.join(", ");

  return (
    <div className="App-header">
      <div className="article">
        <div className="title-author-date">
          <h2>Title: {title}</h2>
          <div>Authors: {author}</div>
          <div>Publish Date: {doc_date}</div>
        </div>
        <ul className="answer-list">Answers:{listAnswers}</ul>
      </div>
    </div>
  );
};

export default SpecificArticle;
