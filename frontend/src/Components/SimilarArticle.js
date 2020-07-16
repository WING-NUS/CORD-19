import React, { useState } from "react";
import AbstractDetails from "./AbstractDetails";
import { Link } from "react-router-dom";
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
        {<AbstractDetails abstract={abstract} />}
      </div>
    </div>
  );
};

export default SimilarArticle;
