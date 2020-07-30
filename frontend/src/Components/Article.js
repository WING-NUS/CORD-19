import React, { useState } from "react";
import AbstractDetails from "./AbstractDetails";
import { NavLink } from "react-router-dom";
import Collapsible from "react-collapsible";

const Article = ({
  article,
  abstractHighlights,
  sentToDisplay,
  abstractHighlightModel
}) => {
  const [showAbstract, setShowAbstract] = useState(false);
  const { paper_id, title, doc_date, authors, abstract, answer } = article;
  const author = authors.join(", ");

  var MAX_ITEMS = 3;
  const [open, setOpen] = useState(false);
  function toggle() {
    setOpen(!open);
  }

  function getRenderedItems() {
    if (open) {
      return answer.sents;
    }
    return answer.sents.slice(0, MAX_ITEMS);
  }

  function checkSentsToDisplay() {
    if (answer === undefined) {
      return (
        <div className="main_answer_list_title">No Relavant Sentences !</div>
      );
    } else {
      return (
        <div>
          {/* <div className="main_answer_list_title"> */}
          Relavant Sentences &nbsp;&nbsp;|&nbsp;&nbsp;
          <button className="button" onClick={toggle}>
            {open ? "Show Less" : "Show More"}
          </button>
          {/* </div> */}
          {getRenderedItems().map((item, id) => (
            <div key={id}>{sent_section(item, id)}</div>
          ))}
        </div>
      );
    }
  }

  const check_sent_section = id => {
    var result = "No Section Available";
    if (answer.sent_section[id]) {
      result = answer.sent_section[id];
    }
    return result;
  };
  const sent_section = (item, id) => {
    if (
      answer["sent_section"] === undefined ||
      answer["sent_section"].length < 1
    ) {
      return (
        <span>
          <span className="sentence_index">Sentence {id + 1} :</span>
          {item}
        </span>
      );
    } else {
      return (
        <span>
          <span className="sentence_index"> [{check_sent_section(id)}]</span>
          {/* <span className="sentence_index"> [{answer.sent_section[id]}]</span> */}
          {item}
        </span>
      );
    }
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
          {title}[↗︎More Details]
        </NavLink>
        <span>
          <br />
          Authors: {author} &nbsp;&nbsp;|&nbsp;&nbsp;Publish Date: {doc_date}
        </span>
      </div>

      {/* <div className="answer-list">{checkSentsToDisplay()}</div> */}

      <div className="answer-list">{checkSentsToDisplay()}</div>

      {showAbstract && (
        <AbstractDetails
          abstract={abstract}
          highlights={abstractHighlights}
          highlightModel={abstractHighlightModel}
        />
      )}
    </div>
  );
};

export default Article;
