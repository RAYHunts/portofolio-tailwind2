const X = document.getElementById("cross");
const H = document.getElementById("ham");
const menu = document.getElementById("menu");
const btn = document.getElementById("btn");
const dark = document.getElementById("dark1");
const dark1 = document.getElementById("dark2");
const darkIcon1 = document.getElementById("isDark1");
const darkIcon2 = document.getElementById("isDark2");
const lightIcon1 = document.getElementById("isLight1");
const lightIcon2 = document.getElementById("isLight2");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  X.classList.toggle("hidden");
  H.classList.toggle("hidden");
});

dark.addEventListener("click", () => {
  if (localStorage.theme == "light") {
    localStorage.theme = "dark";
    document.documentElement.classList.add("dark");
    lightIcon1.classList.toggle("hidden");
    lightIcon2.classList.toggle("hidden");
    darkIcon1.classList.toggle("hidden");
    darkIcon2.classList.toggle("hidden");
  } else {
    localStorage.theme = "light";
    document.documentElement.classList.remove("dark");
    lightIcon1.classList.toggle("hidden");
    lightIcon2.classList.toggle("hidden");
    darkIcon1.classList.toggle("hidden");
    darkIcon2.classList.toggle("hidden");
  }
});
dark1.addEventListener("click", () => {
  if (localStorage.theme == "light") {
    localStorage.theme = "dark";
    document.documentElement.classList.add("dark");
    lightIcon1.classList.toggle("hidden");
    lightIcon2.classList.toggle("hidden");
    darkIcon1.classList.toggle("hidden");
    darkIcon2.classList.toggle("hidden");
  } else {
    localStorage.theme = "light";
    document.documentElement.classList.remove("dark");
    lightIcon1.classList.toggle("hidden");
    lightIcon2.classList.toggle("hidden");
    darkIcon1.classList.toggle("hidden");
    darkIcon2.classList.toggle("hidden");
  }
});

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  document.documentElement.classList.add("dark");
  lightIcon1.classList.toggle("hidden");
  lightIcon2.classList.toggle("hidden");
  darkIcon1.classList.toggle("hidden");
  darkIcon2.classList.toggle("hidden");
} else {
  document.documentElement.classList.remove("dark");
}

const scriptURL = "https://script.google.com/macros/s/AKfycbxjdf1ELHa7sfhBiKJDl9V0hDbrzg-As5hbf3F6GsTPvc_kv_yg0HUafvaU0MGxY2di/exec";
const form = document.forms["contactMe"];
const sendBtn = document.getElementById("sendBtn");
const sendingBtn = document.getElementById("sendingBtn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendBtn.classList.toggle("hidden");
  sendingBtn.classList.toggle("hidden");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      console.log("Success!", response);
      sendBtn.classList.toggle("hidden");
      sendingBtn.classList.toggle("hidden");
      Swal.fire("Message Sent", "Thank You", "success");
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
