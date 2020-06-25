import React from "react";
// import { v4 as uuidv4 } from "uuid";

const AbstractDetails = ({ abstract }) => {
  return <div className="answer-list">Abstract: {abstract.text}</div>;
};

export default AbstractDetails;
