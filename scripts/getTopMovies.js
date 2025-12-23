import api from "./getApi.js";
import { hideOldContent } from "./hideOldContent.js";
import { checkForErrors, showErrorMessage } from "./errors.js";

export function getMostPopularMovies() {
  fetchUrl("popular");
}

export function getTopRatedMovies() {
  fetchUrl("top_rated");
}

function fetchUrl(type) {
  const url = `https://api.themoviedb.org/3/movie/${type}?language=en-US`;

  fetch(url, api())
    .then((res) => checkForErrors(res))
    .then((json) => showMovies(json))
    .catch((err) => showErrorMessage(err));
}

function showMovies(json) {
  hideOldContent();
  const listOfMovies = [];
  for (let i = 0; i < 10; i++) {
    listOfMovies.push({
      title: json.results[i].title,
      image: json.results[i].poster_path,
      release_date: json.results[i].release_date,
    });
  }
  for (const movie of listOfMovies) {
    const innerContainer = document.createElement("div");
    innerContainer.innerHTML = `
      <h2>${movie.title}</h2>
      <img width="250" height="250" src="https://image.tmdb.org/t/p/w500/${movie.image}" />
      <p>${movie.release_date}</p>
    `;

    const content = document.querySelector("#content");
    content.appendChild(innerContainer);
  }
}
