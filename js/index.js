/* Variables */
let lastScrollTop = 0;

/* DOM Elements */
const Header = document.getElementById("app-header");
const navToggler = document.getElementById("nav-toggler");
const navigationMenu = document.getElementById("navigation-menu");

/* Navigation Menu Functions */
function openNavigationMenu() {
  navigationMenu.classList.add("expanded");
  navToggler.src = "/assets/icon/close.svg";
}

function closeNavigationMenu() {
  navigationMenu.classList.remove("expanded");
  navToggler.src = "/assets/icon/menu.svg";
}

/* Window Events */
window.onload = function () {
  navToggler.addEventListener("click", (e) => {
    if (navigationMenu.classList.contains("expanded")) {
      closeNavigationMenu();
    } else {
      openNavigationMenu();
    }
  });
};

window.onscroll = function () {
  const st = window.pageYOffset || document.documentElement.scrollTop;
  if (st > lastScrollTop) {
    Header.style.boxShadow = "10px 0 20px rgba(0,0,0,0.4)";
  } else {
    Header.style.boxShadow = null;
  }
  lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
};

window.onclick = function (e) {
  if (e.target !== null) {
    const target_id = e.target.id;
    if (target_id !== navToggler.id) {
      closeNavigationMenu();
    }
  }
};
