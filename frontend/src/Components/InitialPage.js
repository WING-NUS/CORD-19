import React, { useState } from "react";
import Header from "./Header";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
export default function ArticleDetails(props) {
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="initial_intro">
        <div className="article">
          <div className="title-author-date">
            <h3>WING-NUS COVID-19</h3>
          </div>
          <div className="answer-list">
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
              WING-NUS COVID-19 is a web scientific document tool that helps
              scientists decipher important information from floods of
              coronavirus research online, it uses &nbsp;
              <a
                target="_blank"
                href="https://pypi.org/project/sciwing/"
                className="external_link_initial"
              >
                SciWING
              </a>
              &nbsp;a modern framework from&nbsp;
              <a
                target="_blank"
                href="https://wing.comp.nus.edu.sg/"
                className="external_link_initial"
              >
                WING-NUS
              </a>
              &nbsp;to facilitate Scientidic Document Processing. Rather than
              the current solutions, it will provide multiple clear functions
              for users.
            </p>
          </div>
        </div>
      </div>

      <div className="initial_search">
        <div className="article">
          <div className="title-author-date">
            <h3>Search Function</h3>
          </div>
          <div className="answer-list">
            <p>
              The website uses a third-party search engine to provide an
              improved interface of related papers to the query. The most
              relevant sentences and paragraphs for each article will be shown.
              The user can also choose to view the abstract of each related
              paper, highlight the different sections (background, purpose,
              method, etc) to facilitate understanding.
            </p>
            <p>
              <NavLink
                to={{
                  pathname: `/Search`
                }}
                className="initial_button"
                activeClassName="active"
              >
                Click here to play with Search Function ↗︎
              </NavLink>
            </p>
            <br />
            <br />
          </div>
        </div>
      </div>

      <div className=" initial_compare">
        <div className="article">
          <div className="title-author-date">
            <h3>2d Compare Function</h3>
          </div>
          <div className="answer-list">
            <p>
              The website provides a 2d comparison function where the user can
              select 2 areas to categorize the articles. For now, X-axis is
              fixed as Publish Time.
            </p>
            <p>Senario:</p>
            <span>
              If the user wishes to find out the risk factors of Corona Virus
              according to the publishing timeline of articles. Simiply
              <span className="bold">
                &nbsp; Select the Y-axis from the Dropdown List &nbsp;
              </span>
              in control panel , the application will retrieve relevant articles
              about risk factors such as Asthma, Dementia, Smoking status and
              Overweight or obese, and show the result on a 2d graph, with the x
              axis representing the factors and y axis depicting the date of the
              articles published.
            </span>
            <p>
              <NavLink
                to={{
                  pathname: `/compare`
                }}
                className="initial_button"
                activeClassName="active"
              >
                Click to play with 2d Compare Function ↗︎
              </NavLink>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
