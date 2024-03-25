const nameError = document.getElementById("name-error");
const phoneError = document.getElementById("phone-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");
const submitError = document.getElementById("submit-error");


const nameFld = document.getElementById("contact-name");
const phoneFld = document.getElementById("phone-number");
const emailFld = document.getElementById("email");
const messageFld = document.getElementById("message");
const submitBtn = document.getElementById("submit");



function validateName() {
    const contactName = nameFld.value;

    if (contactName.length === 0) {
        nameError.innerHTML = "Name is required"
        return false;
    }

    if (!contactName.match(/^[a-zA-Z]{3,}\s{0,1}[a-zA-Z]{4,}$/)) {
        nameError.innerHTML = "Write Full Name";
        return false;
    }

    nameError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: seagreen;"></i>';
    return true;
}

function validatePhone() {
    const phoneNumber = phoneFld.value;

    if (phoneNumber.length === 0) {
        phoneError.innerHTML = "Phone no. is required"
        return false;
    }

    if (!phoneNumber.match(/^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/)) {
        phoneError.innerHTML = "Write Correct Phone Format";
        return false;
    }

    phoneError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: seagreen;"></i>';
    return true;
}


function validateEmail() {
    const email = emailFld.value;

    if (email.length === 0) {
        emailError.innerHTML = "Email is required"
        return false;
    }

    if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
        emailError.innerHTML = "Write Correct Email";
        return false;
    }

    emailError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: seagreen;"></i>';
    return true;
}

function validateMessage() {
    const message = messageFld.value;
    const minMessageLength = 30;

    if (message.length === 0) {
        messageError.innerHTML = "Message is required"
        return false;
    }

    if (message.length < minMessageLength) {
        messageError.innerHTML = (minMessageLength - message.length) + " characters remaining";
        return false;
    }

    messageError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: seagreen;"></i>';
    return true;
}


nameFld.addEventListener("keyup", validateName);
phoneFld.addEventListener("keyup", validatePhone);
emailFld.addEventListener("keyup", validateEmail);
messageFld.addEventListener("keyup", validateMessage);
submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (validateName() && validatePhone() && validateEmail() && validateMessage()) {
        document.querySelector(".success-message").innerHTML = "Form Submitted!!";
    } else {
        submitError.innerHTML = "Please fix the error(s)";
        setTimeout(() => {
            submitError.innerHTML = "";
        }, 3000);
    }
});