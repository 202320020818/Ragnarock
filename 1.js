const authWrapper = document.getElementById("authWrapper");
const registerLink = document.querySelector(".register-link");
const loginLink = document.querySelector(".login-link");
const closeAuth = document.getElementById("closeAuth");
const openBtn = document.querySelector(".btn-eshan");

if (registerLink) {
  registerLink.addEventListener("click", (e) => {
    e.preventDefault();
    authWrapper.classList.add("open");
    authWrapper.classList.add("active");
  });
}

if (loginLink) {
  loginLink.addEventListener("click", (e) => {
    e.preventDefault();
    authWrapper.classList.add("open");
    authWrapper.classList.remove("active");
  });
}

if (closeAuth) {
  closeAuth.addEventListener("click", () => {
    authWrapper.classList.remove("active");
    authWrapper.classList.remove("open");
  });
}

if (openBtn) {
  openBtn.addEventListener("click", () => {
    authWrapper.classList.add("open");
    authWrapper.classList.remove("active");
    authWrapper.scrollIntoView({ behavior: "smooth", block: "center" });
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    authWrapper.classList.remove("active");
    authWrapper.classList.remove("open");
  }
});
