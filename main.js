// SWIPE UP GESTURE DETECTION
let touchstartY = 0
let touchendY = 0
let touchstartX = 0
let touchendX = 0

const bg = document.getElementById('bg')
var currentInfoBoxId = "info-1";

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

function swipeHorizontal() {
  if (Math.abs(touchendY - touchstartY) > 20) return;
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

function swipeUp() {
  document.getElementById(currentInfoBoxId).classList.remove("translate-y-[100vh]")
}
function swipeDown() {
  document.getElementById(currentInfoBoxId).classList.add("translate-y-[100vh]")
}
function swipeLeft() {
  scrollX = bg.scrollLeft
  currentInfoBoxId = `info-${Math.floor(scrollX / window.innerWidth + 1)}`
  console.log(currentInfoBoxId)
}
function swipeRight() {
  scrollX = bg.scrollLeft
  currentInfoBoxId = `info-${Math.floor(scrollX / window.innerWidth + 1)}`
  console.log(currentInfoBoxId)
}

// ABOUT TEXT DROPDOWN //
const header = document.getElementById("header")
// const homeButton = document.getElementById("home")
const aboutButton = document.getElementById("about")
const aboutTextDropdown = document.getElementById("about-text")

const contactButton = document.getElementById("contact")
// const contactButtonDesktop = document.getElementById("contact-desktop")
const contactDropdown = document.getElementById("contact-form")
// const navBar = document.getElementById("navbar")

function selected () {
  aboutButton.classList.toggle("text-shadow");
  contactButton.classList.remove("text-shadow");
}

function showAboutDropdown () {
  aboutTextDropdown.classList.toggle("h-0");
  contactDropdown.classList.add("h-0")
  contactButton.classList.remove("text-shadow");
  header.classList.remove("h-0")
  header.classList.remove("overflow-hidden")
  document.getElementById(currentInfoBoxId).classList.add("translate-y-[100vh]")

  
}
aboutButton.addEventListener("click", selected);
aboutButton.addEventListener("click", showAboutDropdown);

// CONTACT FORM DROPDOWN //

function selected2 () {
  contactButton.classList.toggle("text-shadow");
  aboutButton.classList.remove("text-shadow");
}

function showContactDropdown () {
  contactDropdown.classList.toggle("h-0");
  aboutTextDropdown.classList.remove("text-shadow");
  aboutTextDropdown.classList.add("h-0");
  header.classList.remove("h-0")
  header.classList.remove("overflow-hidden")
  document.getElementById(currentInfoBoxId).classList.add("translate-y-[100vh]")
}

contactButton.addEventListener("click", selected2);
contactButton.addEventListener("click", showContactDropdown);


// HIDE HEADER ON FORM ENTRY
const userName = document.getElementById("userName")
const userEmail = document.getElementById("userEmail")
const userMessage = document.getElementById("userMessage")


function hideHeader () {
  header.classList.add("h-0")
  header.classList.add("overflow-hidden")
}

userName.addEventListener("focusin", hideHeader);
userEmail.addEventListener("focusin", hideHeader);
userMessage.addEventListener("focusin", hideHeader);

// function goHome () {
//   aboutTextDropdown.classList.remove("about-text-dropdown");
//   aboutButton.classList.remove("selected");
//   dwButton.classList.remove("selected");
//   reelLeftButton.classList.remove("carat-popup");
//   reelRightButton.classList.remove("carat-popup");
//   contactDropdown.classList.remove("contact-form-dropdown");
//   contactButton.classList.remove("selected");
//   reelNav.classList.remove("selected");
  
  
// }

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

// CLICK OUTSIDE TO RETURN //
// window.onclick = function(event) {
//   if  (!event.target.classList.contains("deanwallflower") &&
//     aboutTextDropdown.classList.contains("about-text-dropdown")
//   ) {
//     aboutTextDropdown.classList.remove("about-text-dropdown");
//   }
// }