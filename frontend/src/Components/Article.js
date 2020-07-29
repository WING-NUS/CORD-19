import React, { useState } from "react";
import AbstractDetails from "./AbstractDetails";
import { NavLink } from "react-router-dom";
import Collapsible from "react-collapsible";

const Article = ({ article, abstractHighlights, sentToDisplay }) => {
  console.log(article);
  console.log(abstractHighlights);
  const [showAbstract, setShowAbstract] = useState(false);
  const { paper_id, title, doc_date, authors, abstract, answer } = article;
  const author = authors.join(", ");

  function checkSentsToDisplay() {
    if (answer === undefined) {
      return (
        <div className="main_answer_list_title">
          No Sentences answering the query!
        </div>
      );
    } else {
      return (
        <div>
          <div className="main_answer_list_title">
            Sentences answering the query
          </div>
          {getRenderedItems().map((item, id) => (
            <div key={id}>
              {sent_section(item, id)}
              {/* <span>
                <span className="sentence_index">
                  Sentence {id + 1} in section :
                </span>
                {item}
              </span> */}
            </div>
          ))}
        </div>
      );
    }
  }

  const sent_section = (item, id) => {
    if (answer["sent_section"] === undefined) {
      return (
        <span>
          <span className="sentence_index">Sentence {id + 1} :</span>
          {item}
        </span>
      );
    } else {
      return (
        <span>
          <span className="sentence_index">Sentence {id + 1} :</span>
          {item}
          <span className="sentence_index">
            [{answer.sent_section[id]} section]
          </span>
        </span>
      );
    }
  };

  function getRenderedItems() {
    if (sentToDisplay === "all") {
      return answer.sents;
    }
    if (sentToDisplay === "<=3") {
      return answer.sents.slice(0, 3);
    }
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
        {checkSentsToDisplay()}
        {/* <span className="main_answer_list_title">
          Sentences answering the query &nbsp;&nbsp;|&nbsp;&nbsp;
          <button className="button" onClick={toggle}>
            {open ? "Show Less" : "Show More"}
          </button>
        </span> */}
        {/* {getRenderedItems().map((item, id) => (
          <div key={id}>
            <span>
              <span className="sentence_index">Sentence {id + 1}:</span>
              {item}
            </span>
          </div>
        ))} */}
      </div>

      {showAbstract && (
        <AbstractDetails abstract={abstract} highlights={abstractHighlights} />
      )}
    </div>
  );
};

export default Article;
