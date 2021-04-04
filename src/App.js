import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import ArticleList from "./ArticleList";

const API_URL = "https://hn.algolia.com/api/v1/search?query=";
const DEFAULT_QUERY = "react";
const styles = {
  header: { textAlign: "center" },
};

const mapper = (articles) => {
  return articles.map(({ objectID, url, title }) => ({
    id: objectID,
    link: url,
    title,
  }));
};

class App extends Component {
  state = {
    articles: [],
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    this.setState({
      isLoading: true,
    });
    axios
      .get(API_URL + DEFAULT_QUERY)
      .then((response) =>
        this.setState({
          articles: mapper(response.data.hits),
          isLoading: false,
        })
      )
      .catch((error) =>
        this.setState({
          error,
          isLoading: false,
        })
      );
  }

  render() {
    const { articles, isLoading, error } = this.state;
    console.log(articles);
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
