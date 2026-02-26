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
  closeAuth.addEventListener("click", (e) => {
    e.preventDefault();
    authWrapper.classList.remove("active");
    authWrapper.classList.remove("open");
  });

  // also ensure clicking the inner icon closes the popup
  const closeIcon = closeAuth.querySelector("i");
  if (closeIcon) {
    closeIcon.addEventListener("click", (e) => {
      e.preventDefault();
      authWrapper.classList.remove("active");
      authWrapper.classList.remove("open");
    });
  }
}

// fallback: close when clicking the close element or its children (robust)
document.addEventListener("click", (e) => {
  const target = e.target;
  if (!authWrapper) return;
  // if the click is on the close control (or its child), close
  if (target.closest && target.closest("#closeAuth")) {
    authWrapper.classList.remove("active");
    authWrapper.classList.remove("open");
  }
});

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
