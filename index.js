const cards = [
  {
    title: 'Profesional Art Printing Data Ramoun',
    text: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    img: 'img1',
    tech: ['html', 'bootstrap', 'Ruby'],
    links: {
      live: 'https://google.com',
      source: 'https://google.com',
    },
  },
  {
    title: 'Data Dashboard Healthcare',
    text: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    img: 'img2',
    tech: ['html', 'bootstrap', 'Ruby'],
    links: {
      live: 'https://google.com',
      source: 'https://google.com',
    },
  },
  {
    title: 'Website Protfolio',
    text: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    img: 'img3',
    tech: ['html', 'bootstrap', 'Ruby'],
    links: {
      live: 'https://google.com',
      source: 'https://google.com',
    },
  },
  {
    title: 'Professional Art Printing Data',
    text: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    img: 'img4',
    tech: ['html', 'bootstrap', 'Ruby'],
    links: {
      live: 'https://google.com',
      source: 'https://google.com',
    },
  },
  {
    title: 'Data Dashboard Healthcare',
    text: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    img: 'img2',
    tech: ['html', 'bootstrap', 'Ruby'],
    links: {
      live: 'https://google.com',
      source: 'https://google.com',
    },
  },
  {
    title: 'Website Protfolio',
    text: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    img: 'img3',
    tech: ['html', 'bootstrap', 'Ruby'],
    links: {
      live: 'https://google.com',
      source: 'https://google.com',
    },
  },
];
const menuHamburgerBtn = document.querySelector('#hamburger');
const popupMenu = document.querySelector('.popup');
const closeBtn = document.querySelector('.close_btn');
const popupCloseBtn = document.querySelector('.popup-close_btn');
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.querySelectorAll('.nav_link');
const proArtContainer = document.querySelector('.container-section1');
const form = document.querySelector('#contact_form');
const email = document.querySelector('#email');
const warning = document.querySelector('small');

function displayMenu() {
  mobileMenu.classList.toggle('hidden');
}
function closePopup() {
  popupMenu.classList.toggle('hidden');
}

function showCards(i) {
  const professionalArt = document.createElement('div');
  professionalArt.classList.add('professional-art');
  professionalArt.classList.add(cards[i].img);

  const title = document.createElement('h2');
  title.classList.add('hide-desktop1');
  title.innerText = cards[i].title;
  professionalArt.appendChild(title);

  const text = document.createElement('p');
  text.classList.add('hide-desktop2');
  text.innerText = cards[i].text;
  professionalArt.appendChild(text);

  const professionalNavigation = document.createElement('nav');
  professionalNavigation.classList.add('professional-navigation');
  professionalArt.appendChild(professionalNavigation);

  const professionalContainer = document.createElement('ul');
  professionalContainer.classList.add('profesional-container');
  professionalNavigation.appendChild(professionalContainer);

  const professionalBtn1 = document.createElement('li');
  professionalBtn1.classList.add('professional-btn1');
  professionalContainer.appendChild(professionalBtn1);

  const professionalBtn2 = document.createElement('li');
  professionalBtn2.classList.add('professional-btn1');
  professionalContainer.appendChild(professionalBtn2);

  const professionalBtn3 = document.createElement('li');
  professionalBtn3.classList.add('professional-btn1');
  professionalContainer.appendChild(professionalBtn3);
  for (let a = 0; a < cards[i].tech.length; a += 1) {
    const professionalBtn1Link = document.createElement('a');
    professionalBtn1Link.innerText = cards[i].tech[a];
    professionalBtn1.appendChild(professionalBtn1Link);
  }

  const seeProjBtn = document.createElement('button');
  seeProjBtn.classList.add('about-btn1');
  seeProjBtn.classList.add('see_proj');
  seeProjBtn.innerText = 'See Project';
  professionalArt.appendChild(seeProjBtn);

  proArtContainer.appendChild(professionalArt);
}

function displayPopup() {
  popupMenu.classList.toggle('hidden');
}

menuHamburgerBtn.addEventListener('click', displayMenu);
closeBtn.addEventListener('click', displayMenu);
popupCloseBtn.addEventListener('click', closePopup);

for (let i = 0; i < navLinks.length; i += 1) {
  navLinks[i].addEventListener('click', displayMenu);
}

for (let i = 0; i < cards.length; i += 1) {
  showCards(i);
}

const seeProjList = document.querySelectorAll('.see_proj');
for (let i = 0; i < seeProjList.length; i += 1) {
  seeProjList[i].addEventListener('click', displayPopup);
}
