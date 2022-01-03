/* DOM Elements */
const Header = document.getElementById("app-header");
const navToggler = document.getElementById("nav-toggler");
const navigationMenu = document.getElementById("navigation-menu");

/* Navigation Menu Functions */
function openNavigationMenu() {
  navigationMenu.classList.add("expanded");
}

function closeNavigationMenu() {
  navigationMenu.classList.remove("expanded");
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
  if (st > 0) {
    Header.style.boxShadow = "10px 0 20px rgba(0,0,0,0.4)";
  } else {
    Header.style.boxShadow = null;
  }
};

window.onclick = function (e) {
  if (e.target !== null) {
    const target_id = e.target.id;
    if (target_id !== navToggler.id) {
      closeNavigationMenu();
    }
  }
};
