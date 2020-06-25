import React from "react";
// import { v4 as uuidv4 } from "uuid";

const AbstractDetails = ({ abstract }) => {
  const listabatract = abstract.text.map(sent => <li>{sent}</li>);

  return <div className="answer-list">Abstract: {abstract.text}</div>;
};

export default AbstractDetails;
