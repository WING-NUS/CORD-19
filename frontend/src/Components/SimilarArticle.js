import React, { useState } from "react";
import AbstractDetails from "./AbstractDetails";
import { NavLink } from "react-router-dom";
const SimilarArticle = ({
  article,
  abstractHighlights,
  abstractHighlightModel
}) => {
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
