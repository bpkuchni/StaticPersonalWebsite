window.onscroll = scrollHandler;
window.setInterval(bitRandom, 75);
window.setInterval(historySequence, 750);
window.setInterval(toggleContactMe, 600);
let historySequenceState = 0;
let toggleContact = false;
setAlternatingSectionStyles();
swapIconIfLightMode();
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", swapIconIfLightMode);

const navbar = document.getElementById("nav-container");
const heroAnchor = document.getElementById("hero-anchor");
navbar.style.top = heroAnchor.getBoundingClientRect().top + "px";
navbar.style.position = "fixed";

function scrollHandler() {
  const element = document.getElementById("nav-container");
  const top = getTop();
  element.style.top = top + "px";
}

function getTop() {
  return Math.max(0, heroAnchor.getBoundingClientRect().top);
}

function bitRandom() {
  const bit = document.getElementById("bit");
  const randomInt = getRandomInt(5);
  if (randomInt < 3) {
    bit.textContent = "1";
  } else {
    bit.textContent = "0";
  }
}

function historySequence() {
  const history = document.getElementById("history");
  const historyHidden = document.getElementById("historyHidden");
  historySequenceState = (historySequenceState + 1) % 4;

  history.textContent = "".padStart(historySequenceState, ".");
  historyHidden.textContent = "".padStart(3 - historySequenceState, ".");

  console.log("State: " + historySequenceState);
  console.log("hidden: " + (3 - historySequenceState));
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function setAlternatingSectionStyles() {
  const elements = document.getElementsByTagName("section");
  for (let i = 0; i < elements.length; i++) {
    if (i % 2 == 1) {
      elements[i].classList.add("alternate");
    }
  }
}

function swapIconIfLightMode() {
  const link = document.getElementById("icon");
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches
  ) {
    link.href = "./favicon-light.ico";
  } else {
    link.href = "./favicon.ico";
  }
}

function toggleContactMe() {
  const contact = document.getElementById("me");

  if (toggleContact) {
    contact.textContent = ">Me";
    toggleContact = false;
  } else {
    toggleContact = true;
    contact.textContent = "_Me";
  }
}
