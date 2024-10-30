//! DATA
const DATA = [
  {
    id: 0,
    url: "./assests/img/the-shawshank-redemption.jpg",
    wide: "./assests/img/the-shawshank-redemption-h.jpg",
    movie_name: "The Shawshank Redemption",
    release_date: "1994-09-23",
    rating: 5,
    cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
  },
  {
    id: 1,
    url: "./assests/img/The-Dark-Knight.jpg",
    wide: "./assests/img/The-Dark-Knight-wide.jpg",
    movie_name: "The Dark Knight",
    release_date: "2008-07-18",
    rating: 5,
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    description:
      "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
  },
  {
    id: 2,
    url: "./assests/img/Inception.jpg",
    wide: "./assests/img/Inception-wide.avif",
    movie_name: "Inception",
    release_date: "2010-07-16",
    rating: 5,
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
  },
  {
    id: 3,
    url: "./assests/img/The-Matrix.jpg",
    wide: "./assests/img/The-Matrix-wide.jpg",
    movie_name: "The Matrix",
    release_date: "1999-03-31",
    rating: 5,
    cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    description:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
  },
  {
    id: 4,
    url: "./assests/img/Interstellar.png",
    wide: "./assests/img/Interstellar-wide.png",
    movie_name: "Interstellar",
    release_date: "2014-11-07",
    rating: 5,
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
  },
  {
    id: 5,
    url: "./assests/img/Iron-Man.jpg",
    wide: "./assests/img/Iron-Man-wide.webp",
    movie_name: "Iron Man",
    release_date: "2008-05-02",
    rating: 5,
    cast: ["Robert Downey Jr.", "Gwyneth Paltrow", "Jeff Bridges"],
    description:
      "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
  },
  {
    id: 6,
    url: "./assests/img/Speed.jpg",
    wide: "./assests/img/Speed-wide.webp",
    movie_name: "Speed",
    release_date: "1994-06-10",
    rating: 4,
    cast: ["Keanu Reeves", "Sandra Bullock", "Dennis Hopper"],
    description:
      "A young police officer must prevent a bomb from exploding aboard a city bus by keeping its speed above 50 mph.",
  },
  {
    id: 7,
    url: "./assests/img/The-Godfather.jpg",
    wide: "./assests/img/The-Godfather-wide.jpg",
    movie_name: "The Godfather",
    release_date: "1972-03-24",
    rating: 5,
    cast: ["Marlon Brando", "Al Pacino", "James Caan"],
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
  },
  {
    id: 8,
    url: "./assests/img/Iron-Man-2.jpg",
    wide: "./assests/img/Iron-Man-2-wide.webp",
    movie_name: "Iron Man 2",
    release_date: "1994-10-14",
    rating: 5,
    cast: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
    description:
      "The lives of two mob hitmen, a boxer, a gangster, and his wife intertwine in four tales of violence and redemption.",
  },
  {
    id: 9,
    url: "./assests/img/Fight-Club.jpg",
    wide: "./assests/img/Fight-Club-wide.avif",
    movie_name: "Fight Club",
    release_date: "1999-10-15",
    rating: 5,
    cast: ["Brad Pitt", "Edward Norton", "Meat Loaf"],
    description:
      "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
  },
  {
    id: 10,
    url: "./assests/img/kraven-the-hunter.jpg",
    wide: "./assests/img/kraven-the-hunter-wide.jpg",
    movie_name: "Kraven The Hunter",
    release_date: "1999-10-15",
    rating: 5,
    cast: ["Brad Pitt", "Edward Norton", "Meat Loaf"],
    description:
      "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
  },
  {
    id: 11,
    url: "./assests/img/Venom-Let-There-Be-Carnage.jpg",
    wide: "./assests/img/Venom-Let-There-Be-Carnage-wide.jpg",
    movie_name: "Venom: Let There Be Carnage",
    release_date: "1999-10-15",
    rating: 5,
    cast: ["Brad Pitt", "Edward Norton", "Meat Loaf"],
    description:
      "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
  },
  {
    id: 11,
    url: "./assests/img/Venom.jpg",
    wide: "./assests/img/Venom-wide.webp",
    movie_name: "Venom",
    release_date: "1999-10-15",
    rating: 5,
    cast: ["Brad Pitt", "Edward Norton", "Meat Loaf"],
    description:
      "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
  },
];
const favDATA = JSON.parse(localStorage.getItem("favoriteMovies")) || [];
