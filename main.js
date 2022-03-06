const header = document.getElementById("header")
const aboutButton = document.getElementById("about")
const aboutTextDropdown = document.getElementById("about-text")
const aboutTextWrapper = document.getElementById("about-text-wrapper")
const contactButton = document.getElementById("contact")
const contactDropdown = document.getElementById("contact-form")
const contactFormWrapper = document.getElementById("contact-form-wrapper")
const dw = document.getElementById("dw")

// const homeButton = document.getElementById("home")
// const contactButtonDesktop = document.getElementById("contact-desktop")
const navBar = document.getElementById("navbar")

// const bg = document.getElementById('bg')
// bg.addEventListener("click", clear, true)

var currentInfoBoxId = "info-1";
document.getElementById(currentInfoBoxId).classList.add("translate-y-[100vh]")


// SWIPE UP GESTURE DETECTION
let touchstartY = 0
let touchendY = 0
let touchstartX = 0
let touchendX = 0

function swipeVertical() {
  if (Math.abs(touchendX - touchstartX) > 20) return;
  if (touchendY < touchstartY) swipeUp();
  if (touchendY > touchstartY) swipeDown();
  }

bg.addEventListener('touchstart', e => {
  touchstartY = e.changedTouches[0].screenY;
  touchstartX = e.changedTouches[0].screenX;
})

bg.addEventListener('touchend', e => {
  touchendY = e.changedTouches[0].screenY;
  touchendX = e.changedTouches[0].screenX;
  swipeVertical()
})

function swipeUp() {
  document.getElementById(currentInfoBoxId).classList.remove("translate-y-[100vh]")
  document.getElementById(currentInfoBoxId).addEventListener("click", swipeDown, true)
  aboutTextDropdown.classList.add("-translate-y-[100vh]")
  contactDropdown.classList.add("translate-y-[100vh]")
  aboutTextWrapper.classList.add("h-0");
  header.classList.remove("-translate-y-[100vh]")
}
function swipeDown() {
  document.getElementById(currentInfoBoxId).classList.add("translate-y-[100vh]")
}

function swipeHorizontal() {
  if (Math.abs(touchendY - touchstartY) > 20) return;
  swipeDown()
  if (touchendX < touchstartX) setTimeout(swipeLeft, 700);
  if (touchendX > touchstartX) setTimeout(swipeRight, 700);
  }

bg.addEventListener('touchstart', e => {
  touchstartY = e.changedTouches[0].screenY;
  touchstartX = e.changedTouches[0].screenX;
})

bg.addEventListener('touchend', e => {
  touchendY = e.changedTouches[0].screenY;
  touchendX = e.changedTouches[0].screenX;
  swipeHorizontal()
})

function swipeLeft() {
  scrollX = bg.scrollLeft
  currentInfoBoxId = `info-${Math.floor(scrollX / window.innerWidth + 1)}`
}
function swipeRight() {
  scrollX = bg.scrollLeft
  currentInfoBoxId = `info-${Math.floor(scrollX / window.innerWidth + 1)}`
}

// ABOUT TEXT DROPDOWN //
function showAboutDropdown () {
  aboutTextWrapper.classList.toggle("h-0");
  aboutTextDropdown.classList.toggle("-translate-y-[100vh]");
  contactDropdown.classList.add("translate-y-[100vh]");
  contactFormWrapper.classList.add("h-0")
  aboutButton.classList.toggle("text-shadow");
  contactButton.classList.remove("text-shadow");
  document.getElementById(currentInfoBoxId).classList.add("translate-y-[100vh]")

  
}
aboutButton.addEventListener("click", showAboutDropdown);

// CONTACT FORM DROPDOWN //

function showContactDropdown () {
  contactFormWrapper.classList.toggle("h-0");
  contactDropdown.classList.toggle("translate-y-[100vh]");
  aboutTextDropdown.classList.add("-translate-y-[100vh]");
  aboutTextWrapper.classList.add("h-0");
  contactButton.classList.toggle("text-shadow");
  aboutButton.classList.remove("text-shadow");
  document.getElementById(currentInfoBoxId).classList.add("translate-y-[100vh]")
  header.classList.remove("-translate-y-[100vh]")

}

contactButton.addEventListener("click", showContactDropdown);


// HIDE HEADER ON FORM ENTRY
const userName = document.getElementById("userName")
const userEmail = document.getElementById("userEmail")
const userMessage = document.getElementById("userMessage")


function hideHeader () {
  header.classList.add("-translate-y-[100vh]")
}

userName.addEventListener("focusin", hideHeader);
userEmail.addEventListener("focusin", hideHeader);
userMessage.addEventListener("focusin", hideHeader);

function clear () {
  aboutTextDropdown.classList.add("-translate-y-[100vh]");
  aboutButton.classList.remove("text-shadow");
  contactDropdown.classList.add("translate-y-[100vh]")
  contactButton.classList.remove("text-shadow");
  document.getElementById(currentInfoBoxId).classList.add("translate-y-[100vh]")
  header.classList.remove("-translate-y-[100vh]")
}

window.onclick = function(event) {
  if (event.target.classList.contains("clear-item")) {
    clear()
  }
}

function home () {
  bg.scrollTo({ left: 0, behavior: 'smooth' })
  currentInfoBoxId = "info-1"
  console.log("go home")
}

dw.addEventListener("click", home)

  // reelLeftButton.classList.remove("carat-popup");
  // reelRightButton.classList.remove("carat-popup");
  // contactDropdown.classList.remove("contact-form-dropdown");
  // reelNav.classList.remove("selected");

// homeButton.addEventListener("click", goHome);

// REEL NAVIGATION //
// const reelNav = document.getElementById("reel")
// const reelLeftButton = document.getElementById("left-carat")
// const reelRightButton = document.getElementById("right-carat")

// function selected3 () {
//   reelNav.classList.toggle("selected");
// }
// function showReelButtons () {
//   reelLeftButton.classList.toggle("carat-popup");
//   reelRightButton.classList.toggle("carat-popup");
// }

// reelNav.addEventListener("click", selected3);
// reelNav.addEventListener("click", showReelButtons);