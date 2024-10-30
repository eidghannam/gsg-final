"use strict";

//! Rendering Favorite movies

document.addEventListener("DOMContentLoaded", function () {
  const movieList = document.querySelector(".movies-container");

  if (!movieList) {
    console.error("Movies container not found in the DOM.");
    return;
  }

  const favoriteMoviesList =
    JSON.parse(localStorage.getItem("favoriteMovies")) || [];

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
        <img src="${movie.url}" alt="" />
        <div class="actions-containers">
               <p>${movie.movie_name}</p>
               <button onclick="showDetails(${movie.id})">Details</button>
        </div>
      </div>
    `;

    movieList.insertAdjacentHTML("beforeend", movieHTML);
  };

  const renderAllMovies = () => {
    movieList.innerHTML = "";
    if (favoriteMoviesList.length > 0) {
      favoriteMoviesList.forEach((movie) => renderMovie(movie));
    } else {
      movieList.innerHTML = "<p>No favorite movies yet.</p>";
    }
  };

  renderAllMovies();
});
