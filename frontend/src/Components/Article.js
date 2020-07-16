import React, { useState } from "react";
import AbstractDetails from "./AbstractDetails";
import { NavLink } from "react-router-dom";
import Collapsible from "react-collapsible";

const Article = ({ article }) => {
  const [showAbstract, setShowAbstract] = useState(false);
  const [open, setOpen] = useState(false);
  const { paper_id, title, doc_date, authors, abstract, answer } = article;
  var MAX_ITEMS = 3;
  // var listAnswers = answer.sents.slice(0, size).map(sent => <li>{sent}</li>);
  const author = authors.join(", ");

  // function toggle() {
  //   setOpen(!open);
  // }

  // function getRenderedItems() {
  //   if (open) {
  //     return answer.sents;
  //   }
  //   return answer.sents.slice(0, MAX_ITEMS);
  // }

  return (
    <div className="article">
      <div className="title-author-date">
        <h3>Title: {title}</h3>
        <NavLink
          to={{
            pathname: `/specificArticle/${paper_id}`,
            state: { article: article }
          }}
          className="inactive"
          activeClassName="active"
        >
          Show Details
        </NavLink>

        <span>
          &nbsp;&nbsp;|&nbsp;&nbsp;Authors: {author}{" "}
          &nbsp;&nbsp;|&nbsp;&nbsp;Publish Date: {doc_date}
        </span>
      </div>
      <Collapsible trigger="Sentences Answering the Query">
        <div className="answer-list">
          {" "}
          {answer.sents.map((item, id) => (
            <div key={id}>{item}</div>
          ))}
        </div>
      </Collapsible>

      <Collapsible trigger="Show Abstract">
        <AbstractDetails abstract={abstract} />
      </Collapsible>

      {/* <div className="answer-list">
          <h3> Sentences answering the query</h3>
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
        </button> */}
      {/* {showAbstract && <AbstractDetails abstract={abstract} />} */}
    </div>
  );
};

export default Article;
