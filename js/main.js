document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const menuBtn = document.getElementById("menuBtn");
  const menu = document.getElementById("menu");

  menuBtn.addEventListener("click", function () {
    menu.classList.toggle("active");
  });

  document.addEventListener("click", (event) => {
    if (!menuBtn.contains(event.target)) {
      menu.classList.remove("active");
    }
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    clearErrors();

    let isValid = true;

    // Name validation
    const name = document.getElementById("name");
    if (name.value.trim() === "") {
      showError(name, "Full name is required");
      isValid = false;
    }

    // Email validation
    const email = document.getElementById("email");
    if (email.value.trim() === "") {
      showError(email, "Email is required");
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
      showError(email, "Enter a valid email address");
      isValid = false;
    }

    // Message validation
    const message = document.getElementById("message");
    if (message.value.trim() === "") {
      showError(message, "Message cannot be empty");
      isValid = false;
    }

    if (isValid) {
      alert("Form submitted successfully!");
      form.reset();
    }
  });

  // show error under input
  function showError(input, message) {
    const wrapper = input.parentElement;
    let error = wrapper.nextElementSibling;

    error.textContent = message;
  }

  // clear all errors
  function clearErrors() {
    document
      .querySelectorAll(".error__message")
      .forEach((el) => (el.textContent = ""));
  }
});
