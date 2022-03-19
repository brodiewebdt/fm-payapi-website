
// Code to set the checkbox on the Contact page
const checkBox = document.querySelector(".check-box");
const checkmark = document.querySelector(".checkmark");

checkBox.addEventListener("click", () => {
    if (checkmark.style.display === "block") {
        checkmark.style.display = "none";
    } else {
        checkmark.style.display = "block";
    }
});


// Code to check the error states in the contact form
const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = contactForm["name"].value;
    const email = contactForm["email"].value;
    const message = contactForm["message"].value;

    if (name === "") {
        addErrorTo("name", "This field can't be empty");
    } else {
        removeErrorFrom("name");
    }

    if (email === "") {
        addErrorTo("email", "Please use a valid email address");
    } else if (!isValid(email)) {
        addErrorTo("email", "Email is not valid");
    } else {
        removeErrorFrom("email");
    }

    if (message === "") {
        addErrorTo("message", "This field can't be empty");
    } else {
        removeErrorFrom("message");
    }
});

function addErrorTo(field, message) {
    const formControl = contactForm[field].parentNode;
    formControl.classList.add("error");

    const contactFormError = formControl.querySelector(".contact-form-error");
    contactFormError.innerText = message;
}

function removeErrorFrom(field) {
    const formControl = contactForm[field].parentNode;
    formControl.classList.remove("error");

    const contactFormError = formControl.querySelector(".contact-form-error");
    contactFormError.innerText = "";
}

function isValid(email) {
    var re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
