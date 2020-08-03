import React, { useState } from "react";
import AbstractDetails from "./AbstractDetails";
import { NavLink } from "react-router-dom";
const SimilarArticle = ({
  article,
  abstractHighlights,
  abstractHighlightModel
}) => {
  const {
    paper_id,
    doi,
    doc_date,
    title,
    authors,
    summary,
    abstract
  } = article;

  const author = authors.join(", ");

  return (
    <div className="article">
      <div className="title-author-date">
        {/* <div className="main_answer_list_title"> */}
        <NavLink
          to={{
            pathname: `/specificArticle/sentences/${paper_id}`,
            state: { article: article }
          }}
          className="inactive"
          activeClassName="active"
        >
          {title}[↗︎More Details]
        </NavLink>
        <span>
          <br />
          Authors: {author} &nbsp;&nbsp;|&nbsp;&nbsp;Publish Date: {doc_date}
        </span>
      </div>

      {
        <AbstractDetails
          abstract={abstract}
          highlights={abstractHighlights}
          highlightModel={abstractHighlightModel}
        />
      }
    </div>
  );
};

export default SimilarArticle;
