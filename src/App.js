import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import ArticleList from "./ArticleList";

const API_URL = "https://hn.algolia.com/api/v1/search?query=";
const DEFAULT_QUERY = "react";
const styles = {
  header: { textAlign: "center" },
};

const mapper = articles => {
  return articles.map(({objectID, url, title}) => ({
    id: objectID,
    link: url,
    title
  }))
};

class App extends Component {
  state = {
    articles: [],
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    axios.get(API_URL + DEFAULT_QUERY).then((response) =>
      this.setState({
        articles: mapper(response.data.hits),
      })
    );
  }

  render() {
    const { articles } = this.state;
    console.log(articles);
    return (
      <div className="App">
        <h1 className={styles.header}>ee</h1>
        <ArticleList articles={articles} />
      </div>
    );
  }
}

export default App;
