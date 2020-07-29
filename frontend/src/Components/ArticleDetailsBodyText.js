import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import BodyText from "./BodyText";
import Dropdown from "react-dropdown";
import Select from "react-select";
import { NavLink } from "react-router-dom";

export default function ArticleDetailsBodyText(props) {
  const {
    paper_id,
    doi,
    doc_date,
    title,
    authors,
    summary,
    abstract,
    bodyText,
    url
  } = props.location.state.article;
  const article = props.location.state.article;
  const author = authors.join(", ");
  const article_url = `${url}`;

  //control related
  //section header
  var [sectionHeaderType, setSectionHeaderType] = useState({
    value: "generic",
    label: "Generic"
  });
  const defaultOption = sectionHeaderType;
  const options = [
    { value: "generic", label: "Generic" },
    { value: "original", label: "Original" }
  ];
  const _onSelect = option => {
    setSectionHeaderType(option);
  };

  //NER tagging
  var [NERTaggingParts, setNERTaggingParts] = useState([
    { label: "Treatment", value: "treatment" }
  ]);

  const defaultNERTagging = NERTaggingParts;
  const NERTaggingOptions = [
    { label: "Problem", value: "problem" },
    { label: "Test", value: "test" },
    { label: "Treatment", value: "treatment" }
  ];
  const NERTaggingList = NERTaggingParts => {
    var result = [];
    if (NERTaggingParts === null) {
      return result;
    } else {
      for (let i = 0; i < NERTaggingParts.length; i++) {
        result.push(NERTaggingParts[i].value);
      }
      return result;
    }
  };
  const _NERTaggingOnSelect = option => {
    setNERTaggingParts(option);
    NERTaggingList(option);
    console.log(NERTaggingList(option));
  };

  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="control_panel">
        <div className="article">
          <div className="control_title">
            <h3>Control Panel</h3>
          </div>
        </div>

        <div className="article">
          <div className="control_title">
            <h4>Body Text</h4>
          </div>
          <div className="answer-list">
            Section Header Type:
            <Dropdown
              options={options}
              onChange={_onSelect}
              value={defaultOption}
              placeholder="Select Type"
            />
          </div>
          <div className="answer-list">
            NER Tagging:
            <div className="Dropdown">
              <Select
                options={NERTaggingOptions}
                onChange={_NERTaggingOnSelect}
                value={defaultNERTagging}
                isMulti
              />
              <div className="col-md-4"></div>
            </div>
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
            </NavLink>{" "}
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
          <div>
            <BodyText
              bodyText={bodyText}
              sectionHeaderType={sectionHeaderType.value.replace(/^"|"$/g, "")}
              tag_list={NERTaggingList(NERTaggingParts)}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
