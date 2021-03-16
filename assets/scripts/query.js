let urlParams = new URLSearchParams(window.location.search);
const welcomeText = document.querySelector(".title-container");
const nameForm = document.querySelector("#fname");
const emailForm = document.querySelector("#email");

if (urlParams.has("first-name")) {
  let firstName = urlParams.get("first-name");
  let nameText = document.createElement("p");
  nameText.classList.add("welcome-title");
  nameText.innerText = `Välkommen ${firstName}!`;
  welcomeText.append(nameText);
  nameForm.setAttribute("value", firstName);
}

if (urlParams.has("email")) {
  let email = urlParams.get("email");
  emailForm.setAttribute("value", email);
}
