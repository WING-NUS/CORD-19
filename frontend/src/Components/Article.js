import React, { useState } from "react";
import AbstractDetails from "./AbstractDetails";
import { NavLink } from "react-router-dom";

const Article = ({
  article,
  abstractHighlights,
  sentToDisplay,
  abstractHighlightModel
}) => {
  const [showAbstract, setShowAbstract] = useState(false);
  const { paper_id, title, doc_date, authors, abstract, answer } = article;

  const [open, setOpen] = useState(false);
  function toggle() {
    setOpen(!open);
  }

  function getRenderedItems() {
    if (open) {
      return unique_section_sent_list;
    } else {
      var to_return = unique_section_sent_list.slice(0, 1);
      to_return[0] = to_return[0].substring(0, 300) + "...";
      return to_return;
    }
  }

  const sent_section = (item, id) => {
    return (
      <span>
        <span className="sentence_index"> [{unique_sections[id]}]</span>
        {item}
      </span>
    );
  };

  function checkSentsToDisplay() {
    if (answer === undefined) {
      return (
        <div className="main_answer_list_title">No Relavant Sentences !</div>
      );
    } else {
      return (
        <div>
          {/* <div className="main_answer_list_title"> */}
          Relevant Sentences &nbsp;&nbsp;|&nbsp;&nbsp;
          <button className="button" onClick={toggle}>
            {open ? "Show Less" : "Show More"}
          </button>
          {getRenderedItems().map((item, id) => (
            <div key={id}>{sent_section(item, id)}</div>
          ))}
        </div>
      );
    }
  }

  var unique_section_header_to_sents = {};
  for (let i = 0; i < answer.sent_section.length; i++) {
    var sh = answer.sent_section[i];
    if (sh === "") {
      sh = "No Section Available";
    }
    if (!(sh in unique_section_header_to_sents)) {
      unique_section_header_to_sents[sh] = [i];
    } else {
      unique_section_header_to_sents[sh].push(i);
    }
  }
  const unique_sections = Object.keys(unique_section_header_to_sents); //header
  var unique_section_sent_list = [];
  for (let j = 0; j < unique_sections.length; j++) {
    var sent = "";
    for (
      let k = 0;
      k < unique_section_header_to_sents[unique_sections[j]].length;
      k++
    ) {
      var position = unique_section_header_to_sents[unique_sections[j]][k];
      if (k === 0) {
        sent = sent + answer.sents[position];
      } else {
        sent = sent + "." + answer.sents[position];
      }
    }
    unique_section_sent_list.push(sent);
  }

  const check_author = () => {
    var result = "No author available";
    if (authors.length > 0) {
      result = authors.join(", ");
    }
    if (result.length > 70) {
      result = result.substring(0, 69) + "...";
    }
    return result;
  };

  const check_title = () => {
    var result = "No title available";
    if (title !== "") {
      result = title;
    }
    if (result.length > 150) {
      result = result.substring(0, 149) + "...";
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
