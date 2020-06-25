import React, { useState } from "react";
import AbstractDetails from "./AbstractDetails";

const Article = ({ article }) => {
  const [show, setShow] = useState(false);
  //const { label, image, url, ingredients } = article.recipe;
  const { doi, paper_id, doc_date, title, authors, abstract, answer } = article;
  const listAnswers = answer.sents.map(sent => <li>{sent}</li>);
  const author = authors.join(", ");

  {
    /* {articles.map(item => (
        <li key={item.paper_id}>
          <div>{item.paper_id}</div>
          <div>{item.title}</div>
          <div>{item.author}</div>
          <div>{item.abstract}</div>
          <div>{item.body_text}</div>
        </li>
      ))} */
  }

  return (
    <div className="article">
      <div className="title-author-date">
        <h2>Title: {title}</h2>
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
