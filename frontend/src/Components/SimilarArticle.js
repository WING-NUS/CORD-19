import React, { useState } from "react";
import AbstractDetails from "./AbstractDetails";
import { NavLink } from "react-router-dom";
const SimilarArticle = ({ article }) => {
  const [showAbstract, setShowAbstract] = useState(false);
  const [open, setOpen] = useState(false);
  const {
    paper_id,
    doi,
    doc_date,
    title,
    authors,
    summary,
    abstract
  } = article;

  var MAX_ITEMS = 3;
  // var listAnswers = answer.sents.slice(0, size).map(sent => <li>{sent}</li>);
  const author = authors.join(", ");

  return (
    <div>
      <div className="article">
        <div className="title-author-date">
          <h2>Title: {title}</h2>
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
        {<AbstractDetails abstract={abstract} />}
      </div>
    </div>
  );
};

export default SimilarArticle;
