const usernameRegex = /^[a-z0-9]{4,12}$/;
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{4,}$/;
var errors = [];

function validate(input, verb, type, regEx) {
    console.log(input);
    if (input === "") {
        errors.push(emptyMessage(verb, type))
    } else {
        if (!regEx.test(input)) {
            errors.push(invalidMessage(verb, type))
        }
    }
}

function validateGender(gender) {
    console.log(gender)
    genderCheck = [];

    for (let select of gender) {
        genderCheck.push(select.checked);
    }
    if (!genderCheck.includes(true)) {
        errors.push(emptyMessage('Select', 'Gender'))
    }
}

function validateBirthday(birthday) {
    console.log(birthday)
    birthdayCheck = [];
    for (let i = 0; i < birthday.length; i++) {
        birthdayCheck.push(birthday[i].value !== "");
        }
    if (birthdayCheck.includes(false)) {
        errors.push(emptyMessage('Select', 'Birthday'));
    }
}

function emptyMessage(verb, noun) {
    return `<p>Please ${verb} <span class='error'>${noun}<span></p>`
}

function invalidMessage(verb, noun) {
    return `<p>Please ${verb} <span class='warning'>a valid ${noun}<span><p>`
}

function eventHandler(event) {
    event.preventDefault();
    errors = [];
    document.getElementById('output').innerHTML = '';

    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let password = [document.getElementById('password').value, document.getElementById('confirm').value]
    let gender = [document.getElementById('female'), document.getElementById('male'), document.getElementById('other')]
    let birthday = document.getElementsByTagName('select')
    // let checkbox = [document.getElementByType('checkbox')]

    validate(username, 'Enter', 'Username', usernameRegex);
    validate(email, 'Enter', 'Email Address', emailRegex);
    validate(phone, 'Enter', 'Phone Number', phoneRegex);
    validate(password[0], 'Enter', 'Password', passwordRegex);
    validateGender(gender);
    validateBirthday(birthday)

    if (errors.length === 0) {
        if (password[0] !== password[1]) {
            console.log(password[0]);
            console.log(password[1])
            confirm('Passwords do not match')
        } else {
            window.location.href = 'index.html'
        }
    } else {
        errors.forEach(error => {
            document.getElementById('output').innerHTML += `${error}`;
        })
    }
}

myForm.addEventListener('submit', eventHandler);
myForm.addEventListener('reset', event => {
    document.getElementById('output').innerHTML = ''; 
});