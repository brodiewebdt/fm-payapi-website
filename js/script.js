
// Code for the mobile navigation toggle
const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible");

    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else if (visibility === "true") {
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
});


// Code to check and validate the email form in the CTA sections of the website
const ctaForm = document.querySelector(".cta-form");
const ctaEmail = document.querySelectorAll(".cta-email");

const ctaError = document.getElementById("cta-error");
const signupError = document.getElementById("signup-error");

ctaForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailVal = ctaEmail.value;

    // check if it is a valid email
    if (!validateEmail(emailVal)) {
        ctaForm.classList.add("error");

    } else {
        ctaForm.classList.remove("error");
    }
});

function validateEmail(email) {
    var re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}