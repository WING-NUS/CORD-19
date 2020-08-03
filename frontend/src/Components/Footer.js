import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <span>
        <a
          target="_blank"
          href="https://wing.comp.nus.edu.sg/"
          className="external_link"
        >
          WING-NUS
        </a>
        &nbsp;&copy; Copyright 2020
      </span>
      <p>
        System by: &nbsp;
        <a
          target="_blank"
          href=" https://www.linkedin.com/in/zijin-kong-108b48160/"
          className="external_link"
        >
          Zijin Kong
        </a>
        &nbsp;&nbsp;Website by: &nbsp;
        <a
          target="_blank"
          href="https://www.linkedin.com/in/minyu-gao-9a9865113/"
          className="external_link"
        >
          Minyu Gao
        </a>
      </p>
    </footer>
  );
}

export default Footer;
