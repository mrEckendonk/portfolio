const menuHamburgerBtn = document.querySelector('#hamburger');
const popupMenu = document.querySelector('.popup);
const closeBtn = document.querySelector('.close_btn');
const popupCloseBtn = document.querySelector('.popup-close_btn');
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.querySelectorAll('.nav_link');

function displayMenu() {
  mobileMenu.classList.toggle('hidden');
}
function displayPopup() {
  popupMenu.classList.toggle('hidden');
}


menuHamburgerBtn.addEventListener('click', displayMenu);
closeBtn.addEventListener('click', displayMenu);
popupCloseBtn.addEventListener('click', displayPopup);

for (let i = 0; i < navLinks.length; i += 1) {
  navLinks[i].addEventListener('click', displayMenu);
}
