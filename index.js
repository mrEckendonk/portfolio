const menu-hamburger = document.querySelector('.menu');
const close = document.querySelectorAll('.menu-close');
const mobileMenu = document.getElementById('mobileMenu');


function hideMenu() {
 mobileMenu.classlist.replace('menu-mobile', 'hidden');
}

function displayMenu() {
 mobileMenu.classlist.replace('hidden', 'menu-mobile');
 console.log('working'); 
}

menu-hamburger.addEventListener('click', displayMenu);
