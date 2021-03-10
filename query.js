let urlParams = new URLSearchParams(window.location.search);
const welcomeText = document.querySelector(".title-container");

if (urlParams.has("first-name")) {
  let firstName = urlParams.get("first-name");
  let nameText = document.createElement("p");
  nameText.classList.add("welcome-title");
  nameText.innerText = `Välkommen ${firstName}!`;
  welcomeText.append(nameText);
}
