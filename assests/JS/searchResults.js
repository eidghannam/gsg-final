"use strict";

//! Rendering Search Results

document.addEventListener("DOMContentLoaded", function () {
  const movieList = document.querySelector(".movies-container");

  if (!movieList) {
    console.error("Movies container not found in the DOM.");
    return;
  }

  const searchResultsMoviesList =
    JSON.parse(localStorage.getItem("searchResults")) || [];

  const defaultMovie = {
    id: 0,
    url: "",
    wide: "",
    movie_name: "",
    release_date: "",
    rating: 0,
    cast: ["", "", ""],
    description: "",
  };

  const renderMovie = (movie = defaultMovie) => {
    const movieHTML = `
      <div class="movie">
        <img src="${movie.url}" alt="${movie.movie_name}" />
        <div class="actions-container">
          <p class="movie-title">${movie.movie_name}</p>
          <p class="release-date">Release Date: ${movie.release_date}</p>
          <p class="rating">Rating: ${movie.rating} / 5</p>
        </div>
      </div>
    `;

    movieList.insertAdjacentHTML("beforeend", movieHTML);
  };

  const renderAllMovies = () => {
    movieList.innerHTML = "";
    if (searchResultsMoviesList.length > 0) {
      searchResultsMoviesList.forEach((movie) => renderMovie(movie));
    } else {
      movieList.innerHTML = "<p>No search results found.</p>";
    }
  };

  renderAllMovies();
});
