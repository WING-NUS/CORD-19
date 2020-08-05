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

  const check_author = () => {
    var result = "No author available";
    if (authors.length > 0) {
      result = authors.join(", ");
    }
    return result;
  };

  const check_title = () => {
    var result = "No title available";
    if (title !== "") {
      result = title;
    }
    return result;
  };
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
          {check_title()}↗︎
        </NavLink>
        <span>
          <br />
          Authors: {check_author()} &nbsp;&nbsp;|&nbsp;&nbsp;Date: {doc_date}
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
