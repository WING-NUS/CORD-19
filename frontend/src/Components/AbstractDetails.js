import React from "react";

const AbstractDetails = ({ abstract, highlights, highlightModel }) => {
  const result = abstract.text.map((text, i) => {
    var style;

    if (!(abstract.tags[highlightModel] === undefined)) {
      if (highlights.includes(abstract.tags[highlightModel][i])) {
        style = abstract.tags[highlightModel][i];
      }
    }

    return (
      <span>
        <span key={i} className={style}>
          {text}
        </span>
        &nbsp;&nbsp;
      </span>
    );
  });

  const abstract_details = () => {
    if (abstract.text[0] === "" || abstract.text.length < 1) {
      return <div>No Abstract Available</div>;
    } else {
      return (
        <div>
          <span className="main_answer_list_title">
            <div className="abstract">Abstract</div>
            <div>
              Highlight for abstract:
              <span id="square_background"></span>
              Background
              <span id="square_purpose"></span>
              Purpose
              <span id="square_finding"></span>
              Finding
              <span id="square_method"></span>
              Method
              <span id="square_other"></span>
              Others
            </div>
          </span>
          <p>{result}</p>
        </div>
      );
    }
  };

  return <div className="answer-list">{abstract_details()}</div>;
};

export default AbstractDetails;
