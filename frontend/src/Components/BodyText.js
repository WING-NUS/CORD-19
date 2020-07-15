import React from "react";

const BodyText = ({ bodyText }) => {
  const tags = bodyText.tags;
  const tag_dict = tags.sciwingI2B2;
  const keys = Object.keys(tag_dict);

  function bio_tag(i, j, word) {
    const to_check = `${i},${j}`;
    if (keys.indexOf(to_check) > -1) {
      return tag_dict[to_check];
    }
    return;
  }

  const result = bodyText.text.map((text, i) => {
    return (
      <span>
        <span> </span>
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
        Sciwing I2B2:
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
