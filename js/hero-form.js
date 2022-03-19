
// Code to check and validate the email form in the Hero section in the front page of the website
const heroForm = document.querySelector(".hero-form");
const heroEmail = document.querySelector("#hero-email");

heroForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const heroEmailVal = heroEmail.value;

    // check if it is a valid email
    if (!validateEmail(heroEmailVal)) {
        heroForm.classList.add("error");

    } else {
        heroForm.classList.remove("error");
    }
});