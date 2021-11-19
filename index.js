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

const form = document.getElementById('fs-frm');
const email = document.querySelector('#email-address');
const bubbleCloseBtn = document.querySelector('.bubble_close');
const bubbleContent = document.querySelector('.bubble_content');
const msgContent = 'The content of the email field has to be in lower case.';
const bubble = document.querySelector('.bubble_error');

function closeBubble() {
  bubble.classList.add('hidden');
}

function openBubble() {
  bubble.classList.remove('hidden');
}

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
bubbleCloseBtn.addEventListener('click', closeBubble);

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

const checkLower = (input) => {
  if (input === input.toLowerCase()) {
    closeBubble();
    email.innerText = '';
    return true;
  }
  bubbleContent.firstChild.innerText = msgContent;
  openBubble();
  return false;
};

form.addEventListener('submit', (event) => {
  if (!checkLower(email.value)) {
    event.preventDefault();
  }
});


const username = form.querySelector('#full-name');
const message = form.querySelector('#message');

const saveDate = () => {
  const formData = {
    name: username.value,
    email: email.value,
    msg: message.value,
  };
  localStorage.setItem('formData', JSON.stringify(formData));
};

username.addEventListener('change', saveDate);
email.addEventListener('change', saveDate);
message.addEventListener('change', saveDate);

window.addEventListener('load', () => {
  const formData = JSON.parse(localStorage.getItem('formData'));
  username.value = formData.name;
  email.value = formData.email;
  message.value = formData.msg;
});