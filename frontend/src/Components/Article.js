import React, { useState } from "react";
import AbstractDetails from "./AbstractDetails";
import { Link } from "react-router-dom";
const Article = ({ article }) => {
  const [showAbstract, setShowAbstract] = useState(false);
  const [open, setOpen] = useState(false);
  const { paper_id, title, doc_date, authors, abstract, answer } = article;
  var MAX_ITEMS = 3;
  // var listAnswers = answer.sents.slice(0, size).map(sent => <li>{sent}</li>);
  const author = authors.join(", ");

  function toggle() {
    setOpen(!open);
  }

  function getRenderedItems() {
    if (open) {
      return answer.sents;
    }
    return answer.sents.slice(0, MAX_ITEMS);
  }

  return (
    <div>
      <div className="article">
        <div className="title-author-date">
          <h3>Title: {title}</h3>
          <Link
            to={{
              pathname: `/specificArticle/${paper_id}`,
              state: { article: article }
            }}
          >
            Show Details
          </Link>

          <div>Authors: {author}</div>
          <div>Publish Date: {doc_date}</div>
        </div>
        <div className="answer-list">
          <h3> Related sentences </h3>
          {getRenderedItems().map((item, id) => (
            <div key={id}>{item}</div>
          ))}
          <button onClick={toggle}>{open ? "Show Less" : "Show More"}</button>
        </div>
        <button
          className="button"
          onClick={() => setShowAbstract(!showAbstract)}
        >
          <h3> Show Abstract</h3>
        </button>
        {showAbstract && <AbstractDetails abstract={abstract} />}
      </div>
    </div>
  );
};

export default Article;
