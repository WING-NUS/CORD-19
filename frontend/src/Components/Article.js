import React, { useState } from "react";
import AbstractDetails from "./AbstractDetails";
import { NavLink } from "react-router-dom";
import Collapsible from "react-collapsible";

const Article = ({ article, abstractHighlights }) => {
  console.log(article);
  console.log(abstractHighlights);
  const [showAbstract, setShowAbstract] = useState(false);
  const [open, setOpen] = useState(false);
  const { paper_id, title, doc_date, authors, abstract, answer } = article;
  var MAX_ITEMS = 3;
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
    <div className="article">
      <div className="title-author-date">
        <h3>{title}</h3>
        <NavLink
          to={{
            pathname: `/specificArticle/sentences/${paper_id}`,
            state: { article: article }
          }}
          className="inactive"
          activeClassName="active"
        >
          Show Details
        </NavLink>

        <span>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <button
            className="button"
            onClick={() => setShowAbstract(!showAbstract)}
          >
            Show Abstract
          </button>
          &nbsp;&nbsp;|&nbsp;&nbsp;Authors: {author}{" "}
          &nbsp;&nbsp;|&nbsp;&nbsp;Publish Date: {doc_date}
        </span>
      </div>

      <div className="answer-list">
        <span className="main_answer_list_title">
          Sentences answering the query &nbsp;&nbsp;|&nbsp;&nbsp;
          <button className="button" onClick={toggle}>
            {open ? "Show Less" : "Show More"}
          </button>
        </span>
        {getRenderedItems().map((item, id) => (
          <div key={id}>
            <span>
              <span className="sentence_index">Sentence {id + 1}:</span>
              {item}
            </span>
          </div>
        ))}
      </div>

      {showAbstract && (
        <AbstractDetails abstract={abstract} highlights={abstractHighlights} />
      )}
    </div>
  );
};

export default Article;
