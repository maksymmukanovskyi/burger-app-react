import axios from "axios";

const API_URL = "https://hn.algolia.com/api/v1/search?query=";

export const mapper = (articles) => {
  return articles.map(({ objectID, url, title }) => ({
    id: objectID,
    link: url,
    title,
  }));
};

export const getArticleByQuery = (query = "nodeJS") =>
  axios.get(API_URL + query).then((response) => mapper(response.data.hits));
