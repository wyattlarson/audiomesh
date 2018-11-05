function scrollToTop() {
  window.scrollTo({
    top: 0, // could be negative value
    left: 0,
    behavior: "smooth"
  });
}

document.querySelector("#topBtn").addEventListener("click", scrollToTop);
document.querySelector("#menuBtn").addEventListener("click", slideOutMenu);

function slideOutMenu() {
  console.log("menu slide call");
  var menu = document.querySelector("#slide-out-menu");
  var menuBtn = document.querySelector("#menuBtn");
  var menuLines = document.querySelectorAll(".menuLine");
  if (menu.classList[1] == "show") {
    menu.classList.remove("show");
    menuBtn.classList.remove("menu-x");
    menuLines.forEach(line => {
      line.classList.remove("menuLine-hide");
    });
  } else {
    menu.classList.add("show");
    menuBtn.classList.add("menu-x");
    menuLines.forEach(line => {
      line.classList.add("menuLine-hide");
    });
  }

  //   if (menuBtn.classList[0] == "menu-x") {
  //   } else {
  //   }
}
function showSignUp() {
  document.querySelector("#signUpBody").classList.add("showSignup");
}
function closeSignUp() {
  document.querySelector("#signUpBody").classList.remove("showSignup");
}
function showLogin() {
  document.querySelector("#loginBody").classList.add("showSignup");
}
function closeLogin() {
  document.querySelector("#loginBody").classList.remove("showSignup");
}
