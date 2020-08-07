import SimilarArticle from "./SimilarArticle";
import React, { useState } from "react";
import Header from "./Header";
import Select from "react-select";
import Footer from "./Footer";
import Dropdown from "react-dropdown";

export default function CompareArticles(props) {
  const articles = props.location.state.articless;
  const x_value = props.location.state.x_value;
  const y_value = props.location.state.y_value;
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
  };

  const _title_for_the_page = (x_value, y_value) => {
    const result =
      "Articles published in " + x_value + " related to " + y_value;
    return <h3>{result}</h3>;
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

      <ul className="articles">
        <div className="article">
          <div className="control_title">
            <h2>{_title_for_the_page(x_value, y_value)}</h2>
          </div>
        </div>

        {articles !== [] &&
          articles.map(article => (
            <SimilarArticle
              key={article.paper_id}
              article={article}
              abstractHighlights={highlightList(highlightParts)}
              abstractHighlightModel={highlightModel.value}
            />
          ))}
      </ul>
      <Footer />
    </div>
  );
}
