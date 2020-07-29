import React from "react";
// import { v4 as uuidv4 } from "uuid";

const AbstractDetails = ({ abstract, highlights }) => {
  const result = abstract.text.map((text, i) => {
    var style;
    if (highlights.includes(abstract.tags.sciwing[i])) {
      style = abstract.tags.sciwing[i];
    }
    return <span className={style}>{text}</span>;
  });

  const abstract_details = () => {
    if (abstract.text[0] === "" || abstract.text.length < 1) {
      return <div>No Abstract Available</div>;
    } else {
      return (
        <div>
          <span className="main_answer_list_title">
            <h3>Abstract</h3>
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
