"use strict";

// Elements
const formSectionEl = document.querySelector(".form-section");
const emailInputEl = document.querySelector(".email-input");
const emailSubmitBtn = document.querySelector(".email-submit");

// Event-listeners
emailInputEl.addEventListener("click", resetFormStyle);
emailSubmitBtn.addEventListener("click", submitForm);

// Functions
// reset all styles of the form
function resetFormStyle() {
  formSectionEl.classList.remove("empty");
  formSectionEl.classList.remove("error");
  formSectionEl.classList.remove("success");
}

// submit form
function submitForm() {
  if (emailInputEl.value) {
    if (validateEmail(emailInputEl.value)) {
      // success
      formSectionEl.classList.remove("empty");
      formSectionEl.classList.remove("error");
      formSectionEl.classList.add("success");
      emailInputEl.value = "";
    } else {
      // invalid
      formSectionEl.classList.remove("empty");
      formSectionEl.classList.add("error");
      formSectionEl.classList.remove("success");
    }
  } else {
    // empty
    formSectionEl.classList.add("empty");
    formSectionEl.classList.remove("error");
    formSectionEl.classList.remove("success");
  }
}

// email validation
function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}
