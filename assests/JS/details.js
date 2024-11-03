"use strict";
const movie = JSON.parse(localStorage.getItem("selectedMovie"));

const renderMovieDetails = () => {
  const movieDetailsContainer = document.getElementById("movie-details");
  const backgroundContainer = document.querySelector(".background");

  if (movie) {
    backgroundContainer.style.backgroundImage = `url(${movie.wide})`;

    let ratingStars = "";
    for (let i = 0; i < movie.rating; i++) {
      ratingStars += '<i class="fa-solid fa-star"></i>';
    }

    const castHTML = movie.cast
      .map(
        (actor) => `
      <div class="cast-member">
        <img src="./assests/img/image.png" alt="${actor}" class="avatar" />
        <p>${actor}</p>
      </div>
    `
      )
      .join("");

    const movieHTML = `
      <img src="${movie.url}" alt="${movie.movie_name}" />
      <div class="info-div">
      <h2>${movie.movie_name}</h2>
      <p>Release Date :  ${movie.release_date}</p>
      <p>Rating: ${ratingStars}</p>
      <p>Description: ${movie.description}</p>
      <p>Cast:</p>
      <div class="cast-list">${castHTML}</div>
      </div>
    `;

    movieDetailsContainer.insertAdjacentHTML("beforeend", movieHTML);
  } else {
    movieDetailsContainer.innerHTML = "<p>No movie selected.</p>";
  }
};

window.onload = renderMovieDetails;
