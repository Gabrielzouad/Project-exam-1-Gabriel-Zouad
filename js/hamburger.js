const hamButton = document.querySelector(".hamburger");
const mobileHam = document.querySelector(".mobileLinks");

hamButton.addEventListener("click", function () {
  hamButton.classList.toggle("active");
  mobileHam.classList.toggle("active");
});
