import React, { useState, useEffect } from "react";

const BodyText = ({ bodyText }) => {
  const tags = bodyText.tags;
  const tag_dict = tags.sciwing;
  const keys = Object.keys(tag_dict);
  const text = bodyText.text;

  const section_headers = bodyText.section_header.Original;
  //map section_header:[setence index]
  var unique_section_header_to_body = {};
  for (let i = 0; i < section_headers.length; i++) {
    var sh = section_headers[i];
    if (!(sh in unique_section_header_to_body)) {
      unique_section_header_to_body[sh] = [i];
    } else {
      unique_section_header_to_body[sh].push(i);
    }
  }
  console.log(unique_section_header_to_body);

  //add state  for each header button
  //switch_array = [];
  //   unique_section_header_to_position_in_state = {};
  //   counter = 0;
  //   for (var key in unique_section_header_to_body) {
  //     switch_array.push(true);
  //     unique_section_header_to_position_in_state[key] = counter++;
  //   }
  //   const [headerSwitch, setHeaderSwitch] = useState(switch_array);

  const [headerSwitch, setHeaderSwitch] = useState([]);
  const addHeaderSwitch = key => {
    console.log("adding headerSwitch");

    setHeaderSwitch([
      ...headerSwitch,
      {
        id: key,
        value: true
      }
    ]);
    return headerSwitch;
  };

  useEffect(() => {
    for (var key in unique_section_header_to_body) {
      console.log("iterating key to state");
      addHeaderSwitch(key);
    }
    console.log("finished initializing state...");
  }, []);

  //bio tag for each word in body text
  function bio_tag(i, j, word) {
    const to_check = `${i},${j}`;
    if (keys.indexOf(to_check) > -1) {
      return tag_dict[to_check];
    }
    return;
  }

  const toggleHeaderSwitch = sh => {
    console.log("updating headerSwitch: " + sh);

    setHeaderSwitch([
      ...headerSwitch,
      {
        id: sh,
        value: !headerSwitch.value
      }
    ]);

    return headerSwitch;
  };

  //   const text_from_header = sh => {
  //     return (
  //         <span>
  //         <span> </span>
  //         {unique_section_header_to_body[sh].map(position, i) => (
  //             highlight_tag_in_text(bodyText.text[position]);
  //         )}
  //         <br />
  //         <br />
  //         </span>
  //     );
  //   }

  //   const highlight_tag_in_text = text => {
  //     return text
  //       .split(" ")
  //       .map((word, j) => (
  //         <span className={bio_tag(i, j, word)}>{word + " "}</span>
  //       ));
  //   };

  const unique_headers = Object.keys(unique_section_header_to_body);
  //   const result = unique_headers.map((header, index) => {
  //     return (
  //       <span>
  //         <span> </span>
  //         <button>
  //           {check_section_header(unique_section_header_to_body, index)}
  //         </button>
  //         {text.split(" ").map((word, j) => (
  //           <span className={bio_tag(index, j, word)}>{word + " "}</span>
  //         ))}
  //         <br />
  //         <br />
  //       </span>
  //     );
  //   });

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
        <h3>{check_section_header(unique_section_header_to_body, i)}</h3>
        {text.split(" ").map((word, j) => (
          <span className={bio_tag(i, j, word)}>{word + " "}</span>
        ))}
        <br />
        <br />
      </span>
    );
  });

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
