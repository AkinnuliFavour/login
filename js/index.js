const body = document.querySelector("body");
const formContainer = document.querySelector(".form-container");
const firstContainer = document.querySelector(".container-01");
const login = document.querySelector(".login");
const userName = document.querySelector(".username");
const password = document.querySelector(".password");
const logoContainers = document.querySelectorAll(".logo-container");
const images = document.querySelectorAll(".login-logos img");
const darkMode = document.querySelector(".dark-mode");
const lightMode = document.querySelector(".light-mode");

darkMode.addEventListener("click", (e) => {
  e.preventDefault();
  body.style.backgroundColor = "#111";
  formContainer.style.backgroundColor = "#333";
  formContainer.style.boxShadow = "inset -7px -7px 4px 5px #333";
  firstContainer.style.boxShadow =
    "-5px -5px 9px 9px rgba(243, 239, 239, 0.493)";
  login.style.boxShadow = "-3px -3px 5px 2px #111";
  userName.style.boxShadow = "inset -5px -7px 5px 4px #111";
  password.style.boxShadow = "inset -5px -7px 5px 4px #111";
  [...logoContainers].map(
    (container) => (container.style.boxShadow = "-3px -3px 5px 2px #111")
  );
  [...images].map((img) => (img.style.boxShadow = "3px 3px 5px 2px #333"));
  darkMode.style.display = "none";
  lightMode.style.display = "block";
  lightMode.style.backgroundColor = "#333";
});

lightMode.addEventListener("click", (e) => {
  e.preventDefault();
  body.style.backgroundColor = "rgba(238, 236, 236, 0.856)";
  formContainer.style.backgroundColor = "rgba(228, 227, 227, 0.651)";
  formContainer.style.boxShadow = "inset -7px -7px 4px 5px white";
  firstContainer.style.boxShadow =
    "-5px -5px 9px 9px rgba(255, 255, 255, 0.952)";
  login.style.boxShadow = "-3px -3px 5px 2px white";
  userName.style.boxShadow = "inset -5px -7px 5px 4px white";
  password.style.boxShadow = "inset -5px -7px 5px 4px white";
  [...logoContainers].map(
    (container) => (container.style.boxShadow = "-3px -3px 5px 2px white")
  );
  [...images].map(
    (img) =>
      (img.style.boxShadow = "3px 3px 5px 2px rgba(112, 112, 112, 0.719)")
  );
  lightMode.style.display = "none";
  darkMode.style.display = "block";
  darkMode.style.backgroundColor = "rgba(228, 227, 227, 0.651)";
});
