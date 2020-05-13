import "../component/movie-list.js";
import "../component/search-bar.js";
import DataSource from "../data/data-source.js";

const main = () => {
  const searchElement = document.querySelector("search-bar");
  const movieListElement = document.querySelector("movie-list");

  // Promise
  const onButtonSearchClicked = () => {
    DataSource.searchMovie(searchElement.value)
      .then(renderResult)
      .catch(fallbackResult);
  };


  const renderResult = results => {
    movieListElement.movies = results;
  };

  const fallbackResult = message => {
    movieListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;