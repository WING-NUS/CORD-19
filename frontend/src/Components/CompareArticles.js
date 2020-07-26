import React from "react";
import Header from "./Header";
import SimilarArticle from "./SimilarArticle";

export default function CompareArticles(props) {
  const articles = props.location.state.articless;

  return (
    <div className="App-header">
      <Header />
      <ul className="articles">
        {articles !== [] &&
          articles.map(article => (
            <SimilarArticle key={article.paper_id} article={article} />
          ))}
      </ul>
    </div>
  );
}
