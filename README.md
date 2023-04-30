# Frontend Mentor - Ping coming soon page solution

This is a solution to the [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty. The message for this error should say _"Whoops! It looks like you forgot to add your email"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Please provide a valid email address"_

### Screenshot

![](./images/screenshot.png)

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/ping-coming-soon-page--HUbnHsUVk](https://www.frontendmentor.io/solutions/ping-coming-soon-page--HUbnHsUVk)
- Live Site URL: [https://josh76543210-fm-ping-coming-soon-page.netlify.app/](https://josh76543210-fm-ping-coming-soon-page.netlify.app/)

## My process

### Built with

- HTML
- CSS
- JavaScript

### What I learned

Refining form validation skills using JavaScript.

```javascript
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
```

## Author

- Frontend Mentor - [@josh76543210](https://www.frontendmentor.io/profile/josh76543210)
- Twitter - [@josh76543210](https://www.twitter.com/josh76543210)
