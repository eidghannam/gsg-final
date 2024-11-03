"use strict";

// Slider
const slider = function () {
  let slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");

  let curSlide = 0;

  const goToSlide = function (slide) {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;

      const testimonial = s.querySelector(".testimonial");
      const movie = DATA[i];
      testimonial.style.backgroundImage = `url(${movie.wide})`;
      testimonial.style.backgroundPosition = "center";
      testimonial.style.backgroundSize = "cover";
      testimonial.style.backgroundRepeat = "no-repeat";
    });

    const currentMovie = DATA[slide];
    const header = document.querySelector(".header");
    header.style.backgroundImage = `url(${currentMovie.wide})`;
    header.style.backgroundPosition = "center";
    header.style.backgroundSize = "cover";
    header.style.backgroundRepeat = "no-repeat";
  };

  const nextSlide = function () {
    slides = document.querySelectorAll(".slide");
    const maxSlide = slides.length;
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
  };

  const prevSlide = function () {
    slides = document.querySelectorAll(".slide");
    const maxSlide = slides.length;
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
  };

  const init = function () {
    goToSlide(0);
  };
  init();

  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    if (e.key === "ArrowRight") nextSlide();
  });
};

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

//! Render testimonial
const slidesList = document.querySelector(".slider");
const renderSlide = (movie = defaultMovie) => {
  const slideHTML = `
  <div class="slide">
      <div class="testimonial">
        <div class="testimonial-content">
          <p>${movie.movie_name}</p>
          <div class="testimonial-action">
            <button id="details-button" onclick="showDetails(${movie.id})">Details</button>
            <button id="favorites-button" onclick="addToFavorites(${movie.id})">Add To Favorites</button>
          </div>
         </div>
      </div>
  </div>`;

  slidesList.insertAdjacentHTML("beforeend", slideHTML);
};

const renderAllSlides = () => {
  slidesList.innerHTML = "";
  DATA.forEach((movie) => {
    renderSlide(movie);
  });

  const buttonsHTML = `
  <button class="slider__btn slider__btn--left"><i class="fa-solid fa-arrow-left"></i></button>
  <button class="slider__btn slider__btn--right"><i class="fa-solid fa-arrow-right"></i></button>`;

  slidesList.insertAdjacentHTML("beforeend", buttonsHTML);

  slider();
};

renderAllSlides();

//! Rendering Trending movies

const movieList = document.querySelector(".movies-container");

const renderMovie = (movie = defaultMovie) => {
  const movieHTML = `
     <div class="movie">
          <img src="${movie.url}" alt="" />
          <div class="actions-containers">
               <button onclick="showDetails(${movie.id})">Details</button>
               <button onclick="addToFavorites(${movie.id})">Add To Favorites</button>
          </div>
        </div>
`;

  movieList.insertAdjacentHTML("beforeend", movieHTML);
};

const renderAllMovies = () => {
  movieList.innerHTML = "";
  DATA.forEach((movie) => {
    renderMovie(movie);
  });
};

renderAllMovies();

//! Show Details

const showDetails = (id) => {
  const selectedMovie = DATA.find((movie) => movie.id === id);

  localStorage.setItem("selectedMovie", JSON.stringify(selectedMovie));
  window.location.href = "../details.html";
};

//! Add To Favorites

const addToFavorites = (id) => {
  const favMovie = DATA.find((movie) => movie.id === id);

  let favDATA = JSON.parse(localStorage.getItem("favoriteMovies")) || [];

  const isAlreadyFavorite = favDATA.some((movie) => movie.id === id);

  if (!isAlreadyFavorite) {
    favDATA.push(favMovie);
    localStorage.setItem("favoriteMovies", JSON.stringify(favDATA));
  } else {
    console.log("Movie is already in favorites.");
  }
};

//! Search Movie
const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector(".search-button");

const searchMovie = () => {
  const searchMovie = searchInput.value;
  const searchResults = DATA.filter((movie) =>
    movie.movie_name.toLowerCase().includes(searchMovie.toLowerCase())
  );
  localStorage.setItem("searchResults", JSON.stringify(searchResults));
};

searchButton.addEventListener("click", () => {
  searchMovie();
  window.location.href = "../serachResults.html";
});
