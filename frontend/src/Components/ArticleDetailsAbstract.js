import React, { useState } from "react";
import AbstractDetails from "./AbstractDetails";
import Header from "./Header";
import Select from "react-select";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import Dropdown from "react-dropdown";

export default function ArticleDetailsAbstract(props) {
  //dinamic similar articles, comment out &set correct url to use

  const {
    paper_id,
    doc_date,
    title,
    authors,
    abstract,
    url
  } = props.location.state.article;
  const article = props.location.state.article;
  const article_url = `${url}`;

  //control related

  //control of highlightmodel
  var [highlightModel, setHighlightModel] = useState({
    value: "sciwing",
    label: "SCIWING"
  });
  const defaulthHighlightModelOption = highlightModel;
  const highlightModeloptions = [
    { value: "sciwing", label: "SCIWING" },
    { value: "coda19", label: "CODA19" }
  ];
  const _highlightModelOnSelect = option => {
    setHighlightModel(option);
  };

  //abstract highlight
  var [highlightParts, setHighlightParts] = useState([
    { label: "Finding", value: "finding" }
  ]);
  const defaultHighlightParts = highlightParts;
  const highlightPartsOptions = [
    { label: "Background", value: "background" },
    { label: "Purpose", value: "purpose" },
    { label: "Finding", value: "finding" },
    { label: "Method", value: "method" },
    { label: "Others", value: "others" }
  ];
  const highlightList = highlightParts => {
    var result = [];
    if (highlightParts === null) {
      return result;
    } else {
      for (let i = 0; i < highlightParts.length; i++) {
        result.push(highlightParts[i].value);
      }
      return result;
    }
  };
  const _highlightOnSelect = option => {
    setHighlightParts(option);
    highlightList(option);
    console.log(highlightList(option));
  };

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
            <h4>Abstract</h4>
          </div>
          <div className="answer-list">
            Highlight Model:
            <Dropdown
              options={highlightModeloptions}
              onChange={_highlightModelOnSelect}
              value={defaulthHighlightModelOption}
              placeholder="Select Type"
            />
          </div>
          <div className="answer-list">
            Highlight Sections:
            <div className="Dropdown">
              <Select
                options={highlightPartsOptions}
                onChange={_highlightOnSelect}
                value={defaultHighlightParts}
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
          <AbstractDetails
            abstract={abstract}
            highlights={highlightList(highlightParts)}
            highlightModel={highlightModel.value}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
