import React, { useState } from "react";
import AbstractDetails from "./AbstractDetails";
import { Link } from "react-router-dom";
const Article = ({ article }) => {
  const [show, setShow] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  //const { label, image, url, ingredients } = article.recipe;
  const { doi, paper_id, doc_date, title, authors, abstract, answer } = article;
  const listAnswers = answer.sents.map(sent => <li>{sent}</li>);
  const author = authors.join(", ");

  return (
    <div className="article">
      <div className="title-author-date">
        <h2>Title: {title}</h2>
        {/* <Link to={{ pathname: `/specificArticle?${paper_id}`, data: article }}>
          Show Details
        </Link> */}
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
      <ul className="answer-list">Answers:{listAnswers}</ul>

      <button className="button" onClick={() => setShow(!show)}>
        <h3> Show Abstract</h3>
      </button>
      {show && <AbstractDetails abstract={abstract} />}
    </div>
  );
};

export default Article;
