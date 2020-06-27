import React from "react";
// import { v4 as uuidv4 } from "uuid";

const AbstractDetails = ({ abstract }) => {
  const result = abstract.text.map((text, i) => {
    return <span className={abstract.tags.sciwing[i]}>{text}</span>;
  });
  return <p className="answer-list">Abstract:{result}</p>;
};

export default AbstractDetails;
