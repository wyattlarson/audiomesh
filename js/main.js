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

// Get the modal
var modal = document.getElementById('signupModal');

// Get the button that opens the modal
var btn = document.getElementById("signupBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Get the modal signup
var modal = document.getElementById('signupModal');

// Get the button that opens the modal
var btn = document.getElementById("signupBtnBottom");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/*
// Get the modal login
var modal = document.getElementById('loginModal');

// Get the button that opens the modal
var btn = document.getElementById("login");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
/*
// Get the modal login bottom
var modal = document.getElementById('loginModal');

// Get the button that opens the modal
var btn = document.getElementById("loginBtnBottom");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}*/
