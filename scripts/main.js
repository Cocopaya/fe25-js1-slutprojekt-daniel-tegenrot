import { getTopRatedMovies, getMostPopularMovies } from "./getTopMovies.js";
import find from "./findSearchResults.js";

console.log(document.querySelector("#typedHeader"));

const searchForm = document.querySelector("#searchForm");
const showBestMoviesButton = document.querySelector("#showBestMoviesButton");
const showPopularMoviesButton = document.querySelector(
  "#showPopularMoviesButton"
);

searchForm.addEventListener("submit", getSearchType);
showBestMoviesButton.addEventListener("click", getTopRatedMovies);
showPopularMoviesButton.addEventListener("click", getMostPopularMovies);

function getSearchType(event) {
  event.preventDefault();
  find(event.srcElement[0].value); // 0 = dropdown
}

document.addEventListener("DOMContentLoaded", () => {
  new window.Typed("#typedHeader", {
    strings: ["Mini Movie DataBase"],
    typeSpeed: 100,
    loop: false,
  });
});
