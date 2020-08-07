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
  const article_url = `${url}`;

  //control related
  //section header
  var [sentNumber, setSentNumber] = useState({
    value: "Show All",
    label: "Show All"
  });
  const defaultOption = sentNumber;
  const options = [
    { value: "Show Less", label: "Show Less" },
    { value: "Show All", label: "Show All" }
  ];
  const _onSelect = option => {
    setSentNumber(option);
  };

  function getRenderedItems() {
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
    const unique_sections = Object.keys(unique_section_header_to_sents);
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
    if (sentNumber.value === "Show All") {
      return unique_section_sent_list;
    } else {
      var to_return = unique_section_sent_list.slice(0, 1);
      to_return[0] = to_return[0].substring(0, 500) + "...";
      return to_return;
    }
  }

  const sent_section = (item, id, unique_sections) => {
    //add code here

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
      const unique_sections = Object.keys(unique_section_header_to_sents);
      console.log(unique_sections);
      return (
        <div>
          <div className="main_answer_list_title">
            Sentences answering the query
          </div>
          {getRenderedItems().map((item, id) => (
            <div key={id}>{sent_section(item, id, unique_sections)}</div>
          ))}
        </div>
      );
    }
  }

  // var unique_section_header_to_sents = {};
  // for (let i = 0; i < answer.sent_section.length; i++) {
  //   var sh = answer.sent_section[i];
  //   if (sh === "") {
  //     sh = "No Section Available";
  //   }
  //   if (!(sh in unique_section_header_to_sents)) {
  //     unique_section_header_to_sents[sh] = [i];
  //   } else {
  //     unique_section_header_to_sents[sh].push(i);
  //   }
  // }
  // const unique_sections = Object.keys(unique_section_header_to_sents); //header
  // var unique_section_sent_list = [];
  // for (let j = 0; j < unique_sections.length; j++) {
  //   var sent = "";
  //   for (
  //     let k = 0;
  //     k < unique_section_header_to_sents[unique_sections[j]].length;
  //     k++
  //   ) {
  //     var position = unique_section_header_to_sents[unique_sections[j]][k];
  //     if (k === 0) {
  //       sent = sent + answer.sents[position];
  //     } else {
  //       sent = sent + "." + answer.sents[position];
  //     }
  //   }
  //   unique_section_sent_list.push(sent);
  // }

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
            <h2>{check_title()}</h2>
            <span>
              {/* Relevant Sentences | Abstract | Body Text | Original PDF ↗︎ */}
              Authors: {check_author()}
              &nbsp;&nbsp;|&nbsp;&nbsp;Date: {doc_date}
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
          <div className="answer-list">{checkSentsToDisplay()}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
