import React, { useState } from "react";

const BodyText = ({ bodyText }) => {
  const tags = bodyText.tags;
  const tag_dict = tags.sciwing;
  const keys = Object.keys(tag_dict);
  const text = bodyText.text;

  const section_headers = bodyText.section_header.Original;

  var unique_section_header_to_body = {};
  //map section_header:[setence index]
  for (let i = 0; i < section_headers.length; i++) {
    var sh = section_headers[i];
    if (!(sh in unique_section_header_to_body)) {
      unique_section_header_to_body[sh] = [i];
    } else {
      unique_section_header_to_body[sh].push(i);
    }
  }
  console.log(unique_section_header_to_body);

  var header_switches = {};
  for (var key in unique_section_header_to_body) {
    header_switches[key] = true;
  }
  const [headerOpen, setHeaderOpen] = useState(header_switches);

  function bio_tag(i, j, word) {
    const to_check = `${i},${j}`;
    if (keys.indexOf(to_check) > -1) {
      return tag_dict[to_check];
    }
    return;
  }

  //   function toggle(sh) {
  //     setHeaderOpen({sh:!});
  //   }

  function check_section_header(unique_section_header_to_body, i) {
    for (var key in unique_section_header_to_body) {
      var value = unique_section_header_to_body[key];
      if (value[0] == i) {
        return key;
      } else {
        continue;
      }
    }
  }

  const result = bodyText.text.map((text, i) => {
    return (
      <span>
        <span> </span>
        {/* <button
          onClick={toggle(
            check_section_header(unique_section_header_to_body, i)
          )}
        >
          {check_section_header(unique_section_header_to_body, i)}
        </button> */}
        <h3>{check_section_header(unique_section_header_to_body, i)}</h3>
        {text.split(" ").map((word, j) => (
          <span className={bio_tag(i, j, word)}>{word + " "}</span>
        ))}
        <br />
        <br />
      </span>
    );
  });

  //   const result = bodyText.text.map((text, i) => {
  //     return (
  //       <span>
  //         <span> </span>
  //         {text.split(" ").map((word, j) => (
  //           <span className={bio_tag(i, j, word)}>{word + " "}</span>
  //         ))}
  //         <br />
  //         <br />
  //       </span>
  //     );
  //   });

  return (
    <div className="answer-list">
      <h3>Body Text</h3>
      <div>
        Font color for bio-ner-tags:
        <span className="problem"> &nbsp;&nbsp;Problem&nbsp;&nbsp;</span>
        <span className="test"> Test&nbsp;&nbsp;</span>
        <span className="treatment"> Treatment &nbsp;&nbsp;</span>
        <br />
      </div>
      <p>{result}</p>
    </div>
  );
};

export default BodyText;
