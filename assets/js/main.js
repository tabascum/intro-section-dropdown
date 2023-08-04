const featuresDropdown = document.querySelector("#dropdown-features p");
const companyDropdown = document.querySelector("#dropdown-company p");

const featuresArrow = document.querySelector("#features-arrow");
const companyArrow = document.querySelector("#company-arrow");

featuresDropdown.onclick = () => {
  document.querySelector(".features").classList.toggle("show");
};

companyDropdown.onclick = () => {
  document.querySelector(".company").classList.toggle("show");
};

const openMenu = document.querySelector("#open-menu");
const closeMenu = document.querySelector("#close-button");

openMenu.onclick = () => {
  document.querySelector("nav").style.width = "250px";
  openMenu.style.display = "none";
  closeMenu.style.display = "block";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
};

closeMenu.onclick = () => {
  document.querySelector("nav").style.width = "0px";
  openMenu.style.display = "block";
  closeMenu.style.display = "none";
  document.body.style.backgroundColor = "transparent";
};
