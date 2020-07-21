import React, { useState } from "react";
import Header from "./Header";
import { NavLink } from "react-router-dom";
export default function ArticleDetails(props) {
  return (
    <div>
      <div className="App-header">
        <Header />
      </div>
      <div className="initial_intro">
        <div className="article">
          <div className="title-author-date">Introduction</div>
          <div className="answer-list">
            <h3>What is WING-NUS COVID?</h3>
            <p>
              With the rapid spread of COVID-19 pandemic all over the world,
              in-depth knowledge is desperately needed for the development of
              successful vaccines. Online academic and non-academic articles,
              therefore, play a crucial role in facilitating research work with
              needed insights.
            </p>
            <p>
              Although many papers are published online every day, some of them
              are not reliable. As research has shown, thirty percent of the
              articles are known as preprint papers which are put out to the
              public before the peer-review process. This makes it hard to
              locate rigorous sources of knowledge. Furthermore, it is
              technically impossible to summarise useful information from every
              article within a limited time.
            </p>
            <p>
              WING-NUS COVID is a web scientific document tool that helps
              scientists decipher important information from floods of
              coronavirus research online. Rather than the current solutions, it
              will provide multiple clear functions for users.
            </p>
          </div>
        </div>
      </div>

      <div className="initial_search">
        <div className="article">
          <div className="title-author-date">
            <NavLink
              to={{
                pathname: `/`
              }}
              className="inactive"
              activeClassName="active"
            >
              Search Function
            </NavLink>
          </div>
          <div className="answer-list">
            <h3>What is search function?</h3>
            <p>
              The website uses a third-party search engine to provide an
              improved interface of related papers to the query. The most
              relevant sentences and paragraphs for each article will be shown.
              The user can also choose to view the abstract of each related
              paper, highlight the different sections (background, purpose,
              method, etc) to facilitate understanding.
            </p>
            <br />
            <br />
          </div>
        </div>
      </div>

      <div className=" initial_compare">
        <div className="article">
          <div className="title-author-date">
            <NavLink
              to={{
                pathname: `/compare`
              }}
              className="inactive"
              activeClassName="active"
            >
              2d compare Function
            </NavLink>
          </div>
          <div className="answer-list">
            <h3>What is 2d compare function?</h3>
            <p>
              The website provides a 2d comparison function where the user can
              select 2 areas to categorize the articles. For example, if the
              user wishes to find out the risk factors of Corona Virus according
              to the publishing timeline of articles, the application will
              retrieve relevant articles about risk factors such as smoking,
              preexisting pulmonary disease, Neonates and pregnant women, and
              show the result on a 2d graph, with the x axis representing the
              factors and y axis depicting the date of the articles published.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
