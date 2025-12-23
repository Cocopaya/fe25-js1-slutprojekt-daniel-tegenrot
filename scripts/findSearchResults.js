import api from "./getApi.js";
import { hideOldContent } from "./hideOldContent.js";
import { checkForErrors, showErrorMessage } from "./errors.js";

function find(type) {
  hideOldContent();
  const searchMovieInput = document.querySelector("#searchInput");
  search(searchMovieInput.value, type);
}

function search(query, type) {
  const url = `https://api.themoviedb.org/3/search/${type}?query=${query}&language=en-US`;

  fetch(url, api())
    .then((res) => checkForErrors(res))
    .then((json) => show(json, type))
    .catch((err) => showErrorMessage(err));
}

function show(json, type) {
  for (const result of json.results) {
    const searchResult = document.createElement("div");
    if (type === "movie") {
      let imageSrc = result.poster_path
        ? `https://image.tmdb.org/t/p/w500/${result.poster_path}`
        : "../assets/placeholder-picture.jpg";

      searchResult.innerHTML = `
        <h2>${result.title}</h2>
        <img width="250" height="250" src=${imageSrc} />
        <p>${result.release_date}</p>
        <p>${result.overview}</p>
      `;
    } else if (type === "person") {
      let imageSrc = result.profile_path
        ? `https://image.tmdb.org/t/p/w500/${result.profile_path}`
        : "../assets/placeholder-picture.jpg";

      searchResult.innerHTML = `
        <h2>${result.name}</h2>
        <img width="250" height="250" src=${imageSrc} />
        <p>Department: ${result.known_for_department}</p>
        <h3>Known for: </h3>
      `;
      const knownFor = document.createElement("ul");
      for (const item of result.known_for) {
        const listElement = document.createElement("li");
        listElement.innerText = `${item.media_type}: ${item.title}`;
        knownFor.appendChild(listElement);
      }
      searchResult.append(knownFor);
    }

    const content = document.querySelector("#content");
    content.appendChild(searchResult);
  }

  if (content.childElementCount === 0) {
    const errorMessage = document.querySelector("#errorMessage");
    errorMessage.innerText =
      "The search didn't give any results. Try something else.";
  }
}

export default find;
