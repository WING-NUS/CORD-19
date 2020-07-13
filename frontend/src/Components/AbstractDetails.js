import React from "react";
// import { v4 as uuidv4 } from "uuid";

const AbstractDetails = ({ abstract }) => {
  const result = abstract.text.map((text, i) => {
    return <span className={abstract.tags.sciwing[i]}>{text}</span>;
  });
  return (
    <div>
      <div className="answer-list">
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
        <p>{result}</p>
      </div>
    </div>
  );
};

export default AbstractDetails;
