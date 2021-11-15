const hamburger = document.querySelector('.hamburger');
const mobile = document.querySelector('.mobile');

hamburger.addEventListener("click", () => { navLinks.classList.toggle("open()")}; 

function displayMobile() {
  hamburger.classList.toggle('hamburger--active');
  mobile.classList.toggle('mobile--active');
}

