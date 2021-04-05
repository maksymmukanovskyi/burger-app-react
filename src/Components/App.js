import React, { Component } from "react";
import { getArticleByQuery } from "../Services/api";
import "../Styles/App.css";
import ArticleList from "./ArticleList";
import CategorySelector from "./CategorySelector";
import {ErrorNotification} from "./ErrorNotification";
import {Spinner} from './Spinner';

const styles = {
  header: { textAlign: "center" },
};
const categorySelectorOptions = ["html", "css", "react", "javascript"];

class App extends Component {
  state = {
    articles: [],
    isLoading: false,
    error: null,
    category: categorySelectorOptions[2],
  };

  fetchArticles = query => {
    const { category } = this.state;
    this.setState({ isLoading: true });

    getArticleByQuery(category)
      .then((articles) => this.setState({ articles, isLoading: false }))
      .catch((error) => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.fetchArticles(this.state.category);
  }

  componentDidUpdate(prevProps, prevState) {
    const prevCategory = prevState.category;
    const nextCategory = this.state.category;

    if (prevCategory !== nextCategory) {
      this.fetchArticles(nextCategory);
    }
  }

  handleCategoryChange = ({ target: { value } }) => {
    this.setState({
      category: value,
    });
  };

  render() {
    const { articles, isLoading, error, category } = this.state;

    return (
      <div className="App">
        <h1 className={styles.header}>Remote data in React</h1>
        <CategorySelector
          options={categorySelectorOptions}
          category={category}
          onChange={this.handleCategoryChange}
        />
        {error && <ErrorNotification />}
        {isLoading ? <Spinner/> : <ArticleList articles={articles} />}
      </div>
    );
  }
}

export default App;
