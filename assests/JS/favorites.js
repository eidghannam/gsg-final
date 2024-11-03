"use strict";

//! Render a single movie
const renderMovie = (movie) => {
  const movieList = document.querySelector(".movies-container");
  const movieHTML = `
    <div class="movie">
      <img src="${movie.url}" alt="" />
      <div class="actions-containers">
        <p>${movie.movie_name}</p>
        <button onclick="Details(${movie.id})">Details</button>
        <button onclick="removeFromFavorites(${movie.id})">Remove</button>
      </div>
    </div>
  `;
  movieList.insertAdjacentHTML("beforeend", movieHTML);
};

//! Render all favorite movies
const renderAllMovies = () => {
  const movieList = document.querySelector(".movies-container");
  const favoriteMoviesList =
    JSON.parse(localStorage.getItem("favoriteMovies")) || [];

  movieList.innerHTML = "";
  if (favoriteMoviesList.length > 0) {
    favoriteMoviesList.forEach((movie) => renderMovie(movie));
  } else {
    movieList.innerHTML = "<p>No favorite movies yet.</p>";
  }
};

//! Event listener for DOM content loaded
document.addEventListener("DOMContentLoaded", function () {
  const movieList = document.querySelector(".movies-container");

  if (!movieList) {
    console.error("Movies container not found in the DOM.");
    return;
  }

  renderAllMovies();
});

//! Show Details
function Details(id) {
  const favoriteMoviesList =
    JSON.parse(localStorage.getItem("favoriteMovies")) || [];
  const selectedMovie = favoriteMoviesList.find((movie) => movie.id === id);

  if (selectedMovie) {
    localStorage.setItem("selectedMovie", JSON.stringify(selectedMovie));
    window.location.href = "./details.html"; // Ensure this path is correct
  } else {
    console.error("Movie not found in DATA.");
  }
}

//! Remove from Favorites
function removeFromFavorites(id) {
  let favoriteMoviesList =
    JSON.parse(localStorage.getItem("favoriteMovies")) || [];
  // Filter out the movie with the matching ID
  favoriteMoviesList = favoriteMoviesList.filter((movie) => movie.id !== id);
  // Update localStorage with the new list
  localStorage.setItem("favoriteMovies", JSON.stringify(favoriteMoviesList));
  // Re-render the favorite movies list
  renderAllMovies(); // This will now correctly re-render the list
}
