window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader");
  preloader.classList.add("preloader-finish");
});

function hamburgerToggle() {
  const hamburgerMenu = document.querySelector(".dropdown");
  hamburgerMenu.classList.toggle("on");
}
