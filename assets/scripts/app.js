window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader");
  preloader.classList.add("preloader-finish");
});

function hamburgerToggle() {
  const hamburgerMenu = document.querySelector(".dropdown");
  hamburgerMenu.classList.toggle("on");
}

const hamburgerButton = document.querySelector("nav button");
const dropdownButton = document.querySelector(".dropdown");

hamburgerButton.addEventListener("click", hamburgerToggle);
dropdownButton.addEventListener("click", hamburgerToggle);