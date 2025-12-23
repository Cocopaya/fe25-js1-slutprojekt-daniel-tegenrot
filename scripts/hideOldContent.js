export function hideOldContent() {
  const content = document.querySelector("#content");
  content.replaceChildren();
  errorMessage.innerText = "";
}
