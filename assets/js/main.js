const featuresDropdown = document.querySelector("#dropdown-features p");
const companyDropdown = document.querySelector("#dropdown-company p");

featuresDropdown.onclick = () => {
  document.querySelector(".features").classList.toggle("show");
};

companyDropdown.onclick = () => {
  document.querySelector(".company").classList.toggle("show");
};
