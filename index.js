const cards = [
  {
    title: "World Energy Event",
    intro: "World event about Renewable Energy, Solar Energy, Clean Energy, with fantastic speakers and workshops",
    text: "World event about Renewable Energy, Solar Energy, Clean Energy, with fantastic speakers and workshops. Many new technologies are coming to the world, and we are going to discuss how to use them. Best of all, we are going to be the best event in the world on these technologies.",
    src: "./assets/energy_event.png",
    img: "energy_event",
    tech: ["html", "bootstrap", "Ruby"],
    links: {
      live: "'https://creative-world-event.netlify.app/'",
      source: "'https://github.com/mrEckendonk/World-Energy-Event'",
    },
  },
  {
    title: "Awesome Books List",
    intro: "World event about Renewable Energy, Solar Energy, Clean Energy, with fantastic speakers and workshops",
    text: "Booklist of books that I have read and enjoyed. I have also read a lot of books that I have not enjoyed. Here I can manage my books and read them later.",
    img: "img1",
    src: "assets/awesome_books.png",
    tech: ["html", "bootstrap", "Ruby"],
    links: {
      live: "'https://awesomebooks-1.netlify.app'",
      source: "'https://github.com/mrEckendonk/Awesome-books'",
    },
  },
  {
    title: "Data Dashboard Healthcare",
    intro: "World event about Renewable Energy, Solar Energy, Clean Energy, with fantastic speakers and workshops",
    text: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    img: "img2",
    src: "assets/image_backgrnd2.png",
    tech: ["html", "bootstrap", "Ruby"],
    links: {
      live: "'https://google.com'",
      source: "'https://google.com'",
    },
  },
  {
    title: "Website Protfolio",
    intro: "World event about Renewable Energy, Solar Energy, Clean Energy, with fantastic speakers and workshops",
    text: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    img: "img3",
    src: "assets/image_backgrnd2.png",
    tech: ["html", "bootstrap", "Ruby"],
    links: {
      live: "'https://google.com'",
      source: "'https://google.com'",
    },
  },
  {
    title: "Professional Art Printing Data",
    intro: "World event about Renewable Energy, Solar Energy, Clean Energy, with fantastic speakers and workshops",
    text: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    img: "img4",
    src: "./assets/energy_event.png",
    tech: ["html", "bootstrap", "Ruby"],
    links: {
      live: "'https://google.com'",
      source: "'https://google.com'",
    },
  },
  {
    title: "Data Dashboard Healthcare",
    intro: "World event about Renewable Energy, Solar Energy, Clean Energy, with fantastic speakers and workshops",
    text: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    img: "img2",
    src: "./assets/energy_event.png",
    tech: ["html", "bootstrap", "Ruby"],
    links: {
      live: "'https://google.com'",
      source: "'https://google.com'",
    },
  },
  {
    title: "Website Protfolio",
    intro: "World event about Renewable Energy, Solar Energy, Clean Energy, with fantastic speakers and workshops",
    text: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    img: "img3",
    src: "./assets/energy_event.png",
    tech: ["html", "bootstrap", "Ruby"],
    links: {
      live: "'https://google.com'",
      source: "'https://google.com'",
    },
  },
];
const menuHamburgerBtn = document.querySelector("#hamburger");
const closeBtn = document.querySelector(".close_btn");

const navLinks = document.querySelectorAll(".nav_link");
const proArtContainer = document.querySelector(".container-section1");

const form = document.getElementById("fs-frm");
const email = document.querySelector("#email-address");
const bubbleCloseBtn = document.querySelector(".bubble_close");
const bubbleContent = document.querySelector(".bubble_content");
const msgContent = "The content of the email field has to be in lower case.";
const bubble = document.querySelector(".bubble_error");
const workSection = document.querySelector("#works_section");

function closeBubble() {
  bubble.classList.add("hidden");
}

function openBubble() {
  bubble.classList.remove("hidden");
}

function displayMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.toggle("hidden");
}

function showCards(i) {
  const professionalArt = document.createElement("div");
  professionalArt.classList.add("professional-art");
  professionalArt.classList.add(cards[i].img);

  const title = document.createElement("h2");
  title.classList.add("hide-desktop1");
  title.innerText = cards[i].title;
  professionalArt.appendChild(title);

  const text = document.createElement("p");
  text.classList.add("hide-desktop2");
  text.innerText = cards[i].text;
  professionalArt.appendChild(text);

  const professionalNavigation = document.createElement("nav");
  professionalNavigation.classList.add("professional-navigation");
  professionalArt.appendChild(professionalNavigation);

  const professionalContainer = document.createElement("ul");
  professionalContainer.classList.add("profesional-container");
  professionalNavigation.appendChild(professionalContainer);

  const professionalBtn1 = document.createElement("li");
  professionalBtn1.classList.add("professional-btn1");
  professionalContainer.appendChild(professionalBtn1);

  const professionalBtn2 = document.createElement("li");
  professionalBtn2.classList.add("professional-btn1");
  professionalContainer.appendChild(professionalBtn2);

  const professionalBtn3 = document.createElement("li");
  professionalBtn3.classList.add("professional-btn1");
  professionalContainer.appendChild(professionalBtn3);
  for (let a = 0; a < cards[i].tech.length; a += 1) {
    const professionalBtn1Link = document.createElement("a");
    professionalBtn1Link.innerText = cards[i].tech[a];
    professionalBtn1.appendChild(professionalBtn1Link);
  }

  const seeProjBtn = document.createElement("button");
  seeProjBtn.classList.add("about-btn1");
  seeProjBtn.classList.add("see_proj");
  seeProjBtn.innerText = "See Project";

  professionalArt.appendChild(seeProjBtn);

  proArtContainer.appendChild(professionalArt);
}

function populatePopup(card) {
  const { title, text, src, tech, links } = card;
  const popupTemplate = `<div class="popup">
        <div class="popup-content">
          <header class="popup-header">
            <h2>${ title }</h2>
            <div class="popup-close_btn">
              <img src="assets/Icon-Cancel.png" alt="Cancel Button" />
            </div>
          </header>
          <nav class="pro-nav">
            <ul class="pro-cont">
            ${
              tech.map(technology => `
                <li class="pro-btn">
                  <a href="#">${ technology }</a>
                </li>
              `).join("")
            }
            </ul>
          </nav>
          <div class="middle_section">
            <img src=${ src } alt="project image" class="joga" />
            <div class="side_section">
              <div class="text3">
                <p>
                ${ text }
                </p>
              </div>
              <div class="btns">
                <button
                  type="button"
                  class="see_btn"
                  onclick="window.location.href =${ links.live };"
                >
                See Live

                <img src="assets/see_src.svg" alt="See Source">

                </button>
                <button
                type="button"
                class="see_btn"
                onclick="window.location.href=${ links.source };"
                >
                See Source

                <img src="assets/GitHub.svg" alt="github logo">

                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
`;
  document.querySelector(".projects-container").insertAdjacentHTML("beforeend", popupTemplate);
  const popupCloseBtn = document.querySelector(".popup-close_btn");
  popupCloseBtn.addEventListener("click", () => {
    const popupMenu = document.querySelector(".popup");
    document.querySelector(".popup").remove();
  });
  console.log('objechellot');
}

menuHamburgerBtn.addEventListener("click", displayMenu);
closeBtn.addEventListener("click", displayMenu);
bubbleCloseBtn.addEventListener("click", closeBubble);

const { title, text, src, tech, links } = cards[0];

const mainProjecttemplate = `
      <div>
        <img src="${ src }" alt="project image" class="joga" />
      </div>
      <div class="text2">
        <h3>${ title }</h3>
      </div>
      <div class="text3">
        <p>
          ${ text }
        </p>
      </div>
      <!-- Menu Items-->
      <div class="language-container">
        <nav class="nav-page2">
          <ul class="link-tag">
          ${
            tech.map(
              (technology) => `
              <li class="link-1">
                ${ technology }
              </li>
            `
            ).join("")
          }
          </ul>
        </nav>
        <button type="button" class="btn2 see_proj">
          See Project
        </button>
        <div class="space"></div>
      </div>
`;
workSection.insertAdjacentHTML("beforeend", mainProjecttemplate);

for (let i = 0; i < navLinks.length; i += 1) {
  navLinks[i].addEventListener("click", displayMenu);
}

for (let i = 1; i < cards.length; i += 1) {
  showCards(i);
}

const seeProjList = document.querySelectorAll(".see_proj");
for (let i = 0; i < seeProjList.length; i += 1) {
//  seeProjList[i].addEventListener("click", displayPopup);
  seeProjList[i].addEventListener('click', () => {
    populatePopup(cards[i]);
  });
}

const checkLower = (input) => {
  if (input === input.toLowerCase()) {
    closeBubble();
    email.innerText = "";
    return true;
  }
  bubbleContent.firstChild.innerText = msgContent;
  openBubble();
  return false;
};

form.addEventListener("submit", (event) => {
  if (!checkLower(email.value)) {
    event.preventDefault();
  }
});

const username = form.querySelector("#full-name");
const message = form.querySelector("#message");

// Local Storage
const saveDate = () => {
  const formData = {
    name: username.value,
    email: email.value,
    msg: message.value,
  };
  localStorage.setItem("formData", JSON.stringify(formData));
};

username.addEventListener("change", saveDate);
email.addEventListener("change", saveDate);
message.addEventListener("change", saveDate);

window.addEventListener("load", () => {
  const formData = JSON.parse(localStorage.getItem("formData"));
  if (formData) {
    username.value = formData.name;
    email.value = formData.email;
    message.value = formData.msg;
  }
});
