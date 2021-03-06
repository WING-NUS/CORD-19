import React, { useState, useEffect } from "react";
import Collapsible from "react-collapsible";

//bio tag for each word in body text
const bio_tag = (i, j, keys, tag_dict, tag_list) => {
  const to_check = `${i},${j}`;
  if (keys.indexOf(to_check) > -1 && tag_list.includes(tag_dict[to_check])) {
    return tag_dict[to_check];
  }
  return;
};

const highlight_tag_in_text = (text, textIndex, keys, tag_dict, tag_list) => {
  return text.split(" ").map((word, j) => (
    <span key={j} className={bio_tag(textIndex, j, keys, tag_dict, tag_list)}>
      {word + " "}
    </span>
  ));
};

const create_text_from_header = (
  header,
  keys,
  tag_dict,
  bodyText,
  unique_section_header_to_body,
  tag_list
) => {
  return (
    <Collapsible trigger={header}>
      {/* position refers to where the text is in the document */}
      {unique_section_header_to_body[header].map((position, i) => (
        <p key={i}>
          {highlight_tag_in_text(
            bodyText.text[position],
            position,
            keys,
            tag_dict,
            tag_list
          )}
        </p>
      ))}
    </Collapsible>
  );
};

const BodyText = ({ bodyText, sectionHeaderType, tag_list }) => {
  const tags = bodyText.tags;
  const tag_dict = tags.sciwingI2B2;
  const keys = Object.keys(tag_dict);

  const section_headers = bodyText.section_header[sectionHeaderType];

  var unique_section_header_to_body = {};
  for (let i = 0; i < section_headers.length; i++) {
    var sh = section_headers[i];
    if (sh === "") {
      sh = "No Section Header for this section";
    }
    if (!(sh in unique_section_header_to_body)) {
      unique_section_header_to_body[sh] = [i];
    } else {
      unique_section_header_to_body[sh].push(i);
    }
  }
  //return correctly: {conclusion:[3.4.5],intro:[0]}

  const unique_headers = Object.keys(unique_section_header_to_body);

  const result = unique_headers.map((header, i) => {
    return (
      <div key={i}>
        {create_text_from_header(
          header,
          keys,
          tag_dict,
          bodyText,
          unique_section_header_to_body,
          tag_list
        )}
      </div>
    );
  });

  return (
    <div className="answer-list">
      <div className="main_answer_list_title">
        <h3>Body Text</h3>
        <div>
          Sciwing I2B2:
          <span className="problem"> &nbsp;&nbsp;Problem&nbsp;&nbsp;</span>
          <span className="test"> Test&nbsp;&nbsp;</span>
          <span className="treatment"> Treatment &nbsp;&nbsp;</span>
          <br />
        </div>
      </div>
      <div>{result}</div>
    </div>
  );
};

export default BodyText;
