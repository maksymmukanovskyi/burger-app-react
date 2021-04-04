import React, { Component } from "react";
import { getArticleByQuery } from "./Services/api";
import "./App.css";
import ArticleList from "./ArticleList";

const DEFAULT_QUERY = "react";
const styles = {
  header: { textAlign: "center" },
};

class App extends Component {
  state = {
    articles: [],
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    this.setState({ isLoading: true });

    getArticleByQuery(DEFAULT_QUERY)
      .then((articles) => this.setState({ articles, isLoading: false }))
      .catch((error) => this.setState({ error, isLoading: false }));
  }

  render() {
    const { articles, isLoading, error } = this.state;

    return (
      <div className="App">
        <h1 className={styles.header}>Remote data in React</h1>
        {error && <p>Something went wrong(</p>}
        {isLoading && <p>Loading...</p>}
        {articles.length > 0 && <ArticleList articles={articles} />}
      </div>
    );
  }
}

export default App;
