// Get root of html
const root = document.querySelector(":root");

// Change values of color variables based on theme.
// Theme function called on click, onclick attribute setup in html

function lightTheme() {
  root.style.setProperty("--color-main-bg", "hsl(0, 0%, 90%)");
  root.style.setProperty("--color-keypad-bg", "hsl(0, 5%, 81%)");
  root.style.setProperty("--color-screen-bg", "hsl(0, 0%, 93%)");
  root.style.setProperty("--color-key-bg-1", "hsl(185, 42%, 37%)");
  root.style.setProperty("--color-key-shadow-1", "hsl(185, 58%, 25%)");
  root.style.setProperty("--color-key-bg-2", "hsl(25, 98%, 40%)");
  root.style.setProperty("--color-key-shadow-2", "hsl(25, 99%, 27%)");
  root.style.setProperty("--color-key-bg-3", "hsl(45, 7%, 89%)");
  root.style.setProperty("--color-key-shadow-3", "hsl(35, 11%, 61%)");
  root.style.setProperty("--color-text-keys", "hsl(60, 10%, 19%)");
  root.style.setProperty("--color-text-primary", "hsl(0, 0%, 100%)");
  root.style.setProperty("--color-hover-keys-1", "hsl(185, 42%, 57%)");
  root.style.setProperty("--color-hover-keys-2", "hsl(25, 98%, 60%)");
  root.style.setProperty("--color-hover-keys-3", "hsl(45, 7%, 99%)");
  document.querySelector(".heading-toggle-container").style.color =
    "var(--color-text-keys)";
  document.querySelector(".screen").style.color = "var(--color-text-keys)";
  document.querySelector(".equal").style.color = "var(--color-text-primary)";
}

function midnightTheme() {
  root.style.setProperty("--color-main-bg", "hsl(268, 75%, 9%)");
  root.style.setProperty("--color-keypad-bg", "hsl(268, 71%, 12%)");
  root.style.setProperty("--color-screen-bg", "hsl(268, 71%, 12%)");
  root.style.setProperty("--color-key-bg-1", "hsl(281, 89%, 26%)");
  root.style.setProperty("--color-key-shadow-1", "hsl(285, 91%, 52%)");
  root.style.setProperty("--color-key-bg-2", "hsl(176, 100%, 44%)");
  root.style.setProperty("--color-key-shadow-2", "hsl(177, 92%, 70%)");
  root.style.setProperty("--color-key-bg-3", "hsl(268, 47%, 21%)");
  root.style.setProperty("--color-key-shadow-3", "hsl(290, 70%, 36%)");
  root.style.setProperty("--color-text-keys", "hsl(52, 100%, 62%)");
  root.style.setProperty("--color-text-primary", "hsl(0, 0%, 100%)");
  root.style.setProperty("--color-hover-keys-1", "hsl(281, 89%, 46%)");
  root.style.setProperty("--color-hover-keys-2", "hsl(176, 100%, 64%)");
  root.style.setProperty("--color-hover-keys-3", "hsl(268, 47%, 41%)");
  document.querySelector(".heading-toggle-container").style.color =
    "var(--color-text-keys)";
  document.querySelector(".screen").style.color = "var(--color-text-keys)";
  document.querySelector(".equal").style.color = "hsl(198, 20%, 13%)";
}

function darkTheme() {
  root.style.setProperty("--color-main-bg", "hsl(222, 26%, 31%)");
  root.style.setProperty("--color-keypad-bg", "hsl(223, 31%, 20%)");
  root.style.setProperty("--color-screen-bg", "hsl(224, 36%, 15%)");
  root.style.setProperty("--color-key-bg-1", "hsl(225, 21%, 49%)");
  root.style.setProperty("--color-key-shadow-1", "hsl(224, 28%, 35%)");
  root.style.setProperty("--color-key-bg-2", "hsl(6, 63%, 50%)");
  root.style.setProperty("--color-key-shadow-2", "hsl(6, 70%, 34%)");
  root.style.setProperty("--color-key-bg-3", "hsl(30, 25%, 89%)");
  root.style.setProperty("--color-key-shadow-3", "hsl(28, 16%, 65%)");
  root.style.setProperty("--color-text-keys", "hsl(221, 14%, 31%)");
  root.style.setProperty("--color-text-primary", "hsl(0, 0%, 100%)");
  root.style.setProperty("--color-hover-keys-1", "hsl(225, 21%, 70%)");
  root.style.setProperty("--color-hover-keys-2", "hsl(6, 63%, 60%)");
  root.style.setProperty("--color-hover-keys-3", "hsl(30, 25%, 100%)");
  document.querySelector(".heading-toggle-container").style.color =
    "var(--color-text-primary)";
  document.querySelector(".screen").style.color = "var(--color-text-primary)";
  document.querySelector(".equal").style.color = "var(--color-text-primary)";
}
