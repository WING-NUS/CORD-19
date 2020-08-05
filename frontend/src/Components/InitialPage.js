import React, { useState } from "react";
import logo from "./logo.png";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
export default function ArticleDetails(props) {
  const query1 = "Is there a vaccine for covid-19?";
  const query2 = "Is there a cure for covid-19?";
  const query3 = "What do we know about covid-19 risk factor?";
  return (
    <div>
      <div className="header">
        <NavLink
          to={{
            pathname: `/`
          }}
          className="initial_button"
          activeClassName="active"
        >
          <img className="logo" src={logo} alt="Logo" />
        </NavLink>
        WING-NUS COVID-19
      </div>
      <div className="articles_main_initial">
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
              coronavirus research online, It uses a modern scientific document
              processing system,&nbsp;
              <a
                target="_blank"
                href="https://pypi.org/project/sciwing/"
                className="external_link_initial"
              >
                SciWING
              </a>
              &nbsp;from&nbsp;
              <a
                target="_blank"
                href="https://wing.comp.nus.edu.sg/"
                className="external_link_initial"
              >
                WING-NUS
              </a>
              &nbsp;to facilitate abstract and named entity tagging and section
              analyses.
            </p>
            <br />
            <h3>Search Function</h3>
            <p>
              This website uses the &nbsp;
              <a
                target="_blank"
                href="http://cslab241.cs.aueb.gr:5000/"
                className="external_link_initial"
              >
                AUEB NLP Group Search Engine
              </a>
              &nbsp; to retrieve relevant documents and sentences to perform
              further document analysis. You can use WING-NUS COVID-19 to
              facilitate your understanding of COVID-19.
            </p>
            <p>
              <NavLink
                to={{
                  pathname: `/Search`
                }}
                className="initial_button"
                activeClassName="active"
              >
                Try a Search Here
              </NavLink>
            </p>
            <p>Or test it out with these popular queries:</p>
            <p>
              <NavLink
                to={{
                  pathname: `/search/query/${query1}`,
                  state: { query: query1, articles: [] }
                }}
                className="initial_link"
                activeClassName="active"
              >
                {query1}↗︎
              </NavLink>
            </p>
            <p>
              <NavLink
                to={{
                  pathname: `/search/query/${query2}`,
                  state: { query: query2, articles: [] }
                }}
                className="initial_link"
                activeClassName="active"
              >
                {query2}↗︎
              </NavLink>
            </p>
            <p>
              <NavLink
                to={{
                  pathname: `/search/query/${query3}`,
                  state: { query: query3, articles: [] }
                }}
                className="initial_link"
                activeClassName="active"
              >
                {query3}↗︎
              </NavLink>
            </p>
            <br />
            <h3>2d Compare Function</h3>
            <p>
              WING-NUS COVID-19 also provides a 2D comparison to help you drill
              down on articles matching filters by their publication time.
            </p>
            <p>
              <NavLink
                to={{
                  pathname: `/compare`
                }}
                className="initial_button"
                activeClassName="active"
              >
                Try out the trending comparison function
              </NavLink>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
