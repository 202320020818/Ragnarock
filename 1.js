const authWrapper = document.getElementById("authWrapper");
const registerLinks = document.querySelectorAll(".register-link");
const loginLinks = document.querySelectorAll(".login-link");
const closeAuth = document.getElementById("closeAuth");
const openBtn = document.querySelector(".btn-eshan");
const forgotLink = document.querySelector(".forgot-link");
const sendCodeBtn = document.getElementById("sendCode");
const verifySection = document.getElementById("verifySection");
const verifyBtn = document.getElementById("verifyCode");
const verificationInput = document.getElementById("verificationCode");

if (registerLinks && registerLinks.length) {
  registerLinks.forEach((rl) => {
    rl.addEventListener("click", (e) => {
      e.preventDefault();
      authWrapper.classList.add("open");
      authWrapper.classList.add("active");
      // ensure forgot view not active
      authWrapper.classList.remove("show-forgot");
    });
  });
}

if (loginLinks && loginLinks.length) {
  loginLinks.forEach((ll) => {
    ll.addEventListener("click", (e) => {
      e.preventDefault();
      authWrapper.classList.add("open");
      authWrapper.classList.remove("active");
      authWrapper.classList.remove("show-forgot");
    });
  });
}

if (forgotLink) {
  forgotLink.addEventListener("click", (e) => {
    e.preventDefault();
    authWrapper.classList.add("open");
    authWrapper.classList.remove("active");
    authWrapper.classList.add("show-forgot");
    // hide verify section until code sent
    if (verifySection) verifySection.style.display = "none";
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

// send code (fake) -> show verification input
if (sendCodeBtn) {
  sendCodeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const emailEl = document.getElementById("forgotEmail");
    if (!emailEl || !emailEl.value) {
      emailEl && emailEl.focus();
      return alert("Please enter your email");
    }
    // simulate sending code
    sendCodeBtn.textContent = "Code sent";
    sendCodeBtn.disabled = true;
    if (verifySection) verifySection.style.display = "block";
  });
}

// verify code (fake)
if (verifyBtn) {
  verifyBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const code = verificationInput && verificationInput.value;
    if (!code) {
      verificationInput && verificationInput.focus();
      return alert("Enter verification code");
    }
    // fake verify success
    alert(
      "Verification successful — you can now set a new password (not implemented)",
    );
    authWrapper.classList.remove("show-forgot");
    authWrapper.classList.remove("open");
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    authWrapper.classList.remove("active");
    authWrapper.classList.remove("open");
  }
});
