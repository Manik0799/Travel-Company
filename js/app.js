const links = document.getElementById("nav-links");
const navbarToggler = document.getElementById("nav-toggler");
const navbar = document.getElementById("navbar");

navbarToggler.addEventListener("click", () => {
  links.classList.toggle("show-links");
});

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 71) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
});
