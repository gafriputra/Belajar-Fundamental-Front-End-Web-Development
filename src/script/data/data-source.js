class DataSource {
  static searchMovie(keyword) {
    return fetch(
        `https://www.omdbapi.com/?apikey=a231956b&s=${keyword}`
      )
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.Search) {
          return Promise.resolve(responseJson.Search);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }
}

export default DataSource;