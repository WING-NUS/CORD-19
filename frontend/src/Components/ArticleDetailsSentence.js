import React, { useState } from "react";
import Header from "./Header";
import Dropdown from "react-dropdown";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";

export default function ArticleDetailsSentence(props) {
  const {
    paper_id,
    doi,
    doc_date,
    title,
    authors,
    summary,
    answer,
    bodyText,
    url
  } = props.location.state.article;
  const article = props.location.state.article;
  const author = authors.join(", ");
  var MAX_ITEMS = 1;
  const article_url = `${url}`;
  const section_headers = bodyText.section_header.original;

  //control related
  //section header
  var [sentNumber, setSentNumber] = useState({
    value: "all",
    label: "all"
  });
  const defaultOption = sentNumber;
  const options = [
    { value: "<=5", label: "Less or = 5" },
    { value: "<=10", label: "Less or = 10" },
    { value: "all", label: "all" }
  ];
  const _onSelect = option => {
    setSentNumber(option);
  };

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

  function checkSents() {
    if (props.location.state.article["answer"] === undefined) {
      return (
        <div className="main_answer_list_title">
          No Sentences answering the query!
        </div>
      );
    } else {
      return (
        <div>
          <div className="main_answer_list_title">
            Sentences answering the query
          </div>
          {getRenderedItems().map((item, id) => (
            <div key={id}>{sent_section(item, id)}</div>
          ))}
        </div>
      );
    }
  }

  function getRenderedItems() {
    if (sentNumber.value === "all") {
      return answer.sents;
    }
    if (sentNumber.value === "<=5") {
      return answer.sents.slice(0, 5);
    }
    if (sentNumber.value === "<=10") {
      return answer.sents.slice(0, 10);
    }
  }

  return (
    <div>
      <Header />
      <div className="control_panel">
        <div className="article">
          <div className="control_title">
            <h3>Control Panel</h3>
          </div>
        </div>
        <div className="article">
          <div className="control_title">
            <h4>Relavant Sentences</h4>
          </div>
          <div className="answer-list">
            Number of Sentences to display:
            <Dropdown
              options={options}
              onChange={_onSelect}
              value={defaultOption}
              placeholder="Select Type"
            />
          </div>
        </div>
      </div>

      <div className="articles">
        <div className="article">
          <div className="title-author-date">
            <h2>{title}</h2>
            <span>
              {/* Relevant Sentences | Abstract | Body Text | Original PDF ↗︎ */}
              Authors: {author}
              &nbsp;&nbsp;|&nbsp;&nbsp;Publish Date: {doc_date}
            </span>
            <br />
            <NavLink
              to={{
                pathname: `/specificArticle/sentences/${paper_id}`,
                state: { article: article }
              }}
              className="inactive"
              activeClassName="active"
            >
              Relevant Sentences
            </NavLink>{" "}
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <NavLink
              to={{
                pathname: `/specificArticle/abstract/${paper_id}`,
                state: { article: article }
              }}
              className="inactive"
              activeClassName="active"
            >
              Abstract
            </NavLink>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <NavLink
              to={{
                pathname: `/specificArticle/bodyText/${paper_id}`,
                state: { article: article }
              }}
              className="inactive"
              activeClassName="active"
            >
              Body Text
            </NavLink>{" "}
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <NavLink
              to={{
                pathname: `/specificArticle/similarPaper/${paper_id}`,
                state: { article: article }
              }}
              className="inactive"
              activeClassName="active"
            >
              Similar Papers
            </NavLink>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <a target="_blank" href={article_url} className="external_link">
              Original PDF ↗︎
            </a>
            <br />
          </div>
          <div className="answer-list">{checkSents()}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
