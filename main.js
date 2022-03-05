// ABOUT TEXT DROPDOWN //
// const dwButton = document.getElementById("dw-button")
const header = document.getElementById("header")
// const homeButton = document.getElementById("home")
const aboutButton = document.getElementById("about")
const aboutTextDropdown = document.getElementById("about-text")

const contactButton = document.getElementById("contact")
// const contactButtonDesktop = document.getElementById("contact-desktop")
const contactDropdown = document.getElementById("contact-form")
// const navBar = document.getElementById("navbar")

// HIDE HEADER ON FORM ENTRY
const userName = document.getElementById("userName")
const userEmail = document.getElementById("userEmail")
const userMessage = document.getElementById("userMessage")

const userNameClassList = Array.from(userName.classList)
const userEmailClassList = Array.from(userEmail.classList)
const userMessageClassList = Array.from(userMessage.classList)

function hideHeader () {
  header.classList.add("h-0")
  header.classList.add("overflow-hidden")
}

userName.addEventListener("focusin", hideHeader);
userEmail.addEventListener("focusin", hideHeader);
userMessage.addEventListener("focusin", hideHeader);

function selected () {
  aboutButton.classList.toggle("text-shadow");
  // contactButton.classList.remove("text-shadow");
  // dwButton.classList.toggle("selected");
}

function showAboutDropdown () {
  console.log(userNameClassList)
  aboutTextDropdown.classList.toggle("h-0");
  // dwButton.classList.toggle("dw-button-dropdown");
  // if(contactDropdownClassList.includes("h-0")) { 
  // } else {
  //   contactDropdown.classList.add("h-0");
  //   contactDropdownClassList.push("h-0");
  // }
  contactDropdown.classList.add("h-0")
  // navBar.classList.remove("navbar-dropdown");
  contactButton.classList.remove("text-shadow");
  
}

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

// dwButton.addEventListener("click", selected);
// dwButton.addEventListener("click", showAboutDropdown);
aboutButton.addEventListener("click", selected);
aboutButton.addEventListener("click", showAboutDropdown);
// homeButton.addEventListener("click", goHome);

// CONTACT FORM DROPDOWN //


function selected2 () {
  contactButton.classList.toggle("text-shadow");
  // aboutButton.classList.remove("text-shadow");
}

function showContactDropdown () {
  contactDropdown.classList.toggle("h-0");
  // navBar.classList.toggle("navbar-dropdown");
  // aboutTextDropdown.classList.toggle("h-0");
  // dwButton.classList.remove("dw-button-dropdown");
  // dwButton.classList.remove("selected");
  aboutTextDropdown.classList.remove("text-shadow");
  aboutTextDropdown.classList.add("h-0");
  header.classList.remove("h-0")
  header.classList.remove("overflow-hidden")
  // if(aboutTextClassList.includes("h-0")) { 
    
  // } else {
  //   aboutTextDropdown.classList.add("h-0");
  //   aboutTextClassList.push("h-0");
  // }
}

contactButton.addEventListener("click", selected2);
contactButton.addEventListener("click", showContactDropdown);

// REEL NAVIGATION //
const reelNav = document.getElementById("reel")
const reelLeftButton = document.getElementById("left-carat")
const reelRightButton = document.getElementById("right-carat")

function selected3 () {
  reelNav.classList.toggle("selected");
}
function showReelButtons () {
  reelLeftButton.classList.toggle("carat-popup");
  reelRightButton.classList.toggle("carat-popup");
}

reelNav.addEventListener("click", selected3);
reelNav.addEventListener("click", showReelButtons);

// CLICK OUTSIDE TO RETURN //
// window.onclick = function(event) {
//   if  (!event.target.classList.contains("deanwallflower") &&
//     aboutTextDropdown.classList.contains("about-text-dropdown")
//   ) {
//     aboutTextDropdown.classList.remove("about-text-dropdown");
//   }
// }