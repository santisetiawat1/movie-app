const menuButton = document.querySelectorAll(".menu-button");
const screenOverlay = document.querySelector(".screen-overlay");
const themeButton = document.querySelector(".theme-button");

// INITIALIZE DARK MODE BASED ON localStorage
if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark-mode");
  themeButton.classList.replace("uil-moon", "uil-sun");
} else {
  themeButton.classList.replace("uil-sun", "uil-moon");
}

// TOGGLE DARK MODE WHEN THEME BUTTON IS CLICKED
themeButton.addEventListener("click", () => {
  const isDarkMode = document.body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
  themeButton.classList.toggle("uil-sun", isDarkMode);
  themeButton.classList.toggle("uil-moon", !isDarkMode);
});

// TOGGLE SIDEBAR VISIBILITY WHEN MENU BUTTONS ARE CLICKED
menuButton.forEach((button) => {
  button.addEventListener("click", () => {
    document.body.classList.toggle("sidebar-hidden");
  });
});

// TOGGLE SIDEBAR VISIBILITY WHEN SCREEN OVERLAY IS CLICKED
screenOverlay.addEventListener("click", () => {
  document.body.classList.toggle("sidebar-hidden");
});

// SHOW SIDEBAR ON LARGE SCREENS BY DEFAULT
if (window.innerWidth >= 768) {
  document.body.classList.remove("sidebar-hidden");
}
