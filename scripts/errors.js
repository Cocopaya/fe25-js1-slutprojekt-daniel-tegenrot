export function checkForErrors(res) {
  if (res.status >= 400 && res.status < 500) {
    throw new Error("client");
  }

  if (res.status >= 500) {
    throw new Error("server");
  }

  return res.json();
}

export function showErrorMessage() {
  {
    const messageElement = document.querySelector("#errorMessage");
    if (err.message === "client") {
      messageElement.innerText = "Something is wrong with your request.";
    } else if (err.message === "server") {
      messageElement.innerText = "Server error. Please try again later.";
    } else {
      messageElement.innerText = "Network error:";
    }
  }
}
