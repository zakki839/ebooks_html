const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");
  // Name
  const nameRegex = /^[A-Za-z]+$/;
  // Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let isValid = true;

  if (name.value.length < 2 || !nameRegex.test(name.value)) {
    name.classList.add("is-invalid");
    isValid = false;
  } else {
    name.classList.remove("is-invalid");
  }

  if (!emailRegex.test(email.value)) {
    email.classList.add("is-invalid");
    isValid = false;
  } else {
    email.classList.remove("is-invalid");
  }

  if (subject.value.length < 5) {
    subject.classList.add("is-invalid");
    isValid = false;
  } else {
    subject.classList.remove("is-invalid");
  }

  if (message.value.length < 5) {
    message.classList.add("is-invalid");
    isValid = false;
  } else {
    message.classList.remove("is-invalid");
  }
  if (isValid) {
    alert("Contact form submitted successfully");
    contactForm.reset();
  } else {
    alert("Correct the errors and try again");
  }
});