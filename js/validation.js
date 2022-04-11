const nameInput = document.querySelector('.contact__input--name');
const emailInput = document.querySelector('.contact__input--email');
const passwordInput = document.querySelector('.contact__input--password');
const birthdayInput = document.querySelector('.contact__input--birthday');
const submit = document.querySelector('.contact__submit');
let nameError, emailError, passwordError, birthdayError, error = false;
const inputToClearReport = [nameInput, emailInput, passwordInput, birthdayInput];

validateEmail = (emailInput) => {
    const email = emailInput.value;
    const emailRegexp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    if(!emailRegexp.test(email)) {
        emailError = true;
        emailInput.setCustomValidity('Correct email form expected!');
        emailInput.reportValidity();
    } else {
        emailError = false;
        emailInput.setCustomValidity('');
    }
}

validateName = (nameInput) => {
    const name = nameInput.value;
    if(name.length < 6) {
        nameError = true;
        nameInput.setCustomValidity('Name have to be greater than 6 characters!');
        nameInput.reportValidity();
    } else {
        nameError = false;
        nameInput.setCustomValidity('');
    }
}

validatePassword = (passwordInput) => {
    const password = passwordInput.value;
    const passwordRegexp = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if(!passwordRegexp.test(password)) {
        passwordError = true;
        passwordInput.setCustomValidity('Password must be at least 8 characters, must contain at least one big character, digit and special character!');
        passwordInput.reportValidity();
    } else {
        passwordError = false;
        passwordInput.setCustomValidity('');
    }
}

validateBirthday = (birthdayInput) => {
    const birthday = new Date(birthdayInput.value);
    if(isNaN(birthday) || birthday.getFullYear() < 1960 || birthday > new Date()) {
        birthdayError = true;
        birthdayInput.setCustomValidity('Birth date must be between 1960 - now!');
        birthdayInput.reportValidity();
    } else {
        birthdayError = false;
        birthdayInput.setCustomValidity('');
    }
}

inputToClearReport.forEach(input => {
    input.addEventListener('keyup', () => {
        input.setCustomValidity('');
    })
})

if(submit) submit.addEventListener('click', (event) => {
    validateName(nameInput);
    validateEmail(emailInput);
    validatePassword(passwordInput);
    validateBirthday(birthdayInput);
    if(nameError === true || emailError === true || passwordError === true || birthdayError === true) event.preventDefault();
});