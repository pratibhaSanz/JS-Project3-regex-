console.log("this is project 4");

const name = document.getElementById('name');
const email = document.getElementById('email');
const number = document.getElementById('number');

let validName = false;
let validEmail = false;
let validNumber = false;

// console.log(name, email,number);

name.addEventListener('blur', () => {
    console.log("the name is blurred");
    //validate ur name
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,20}$/;
    let str = name.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("your name is valid");
        name.classList.remove('is-invalid');
        validName = true;
    } else {
        console.log("your name is not-valid");
        name.classList.add('is-invalid');
        validName = false;
    }
})

email.addEventListener('blur', () => {
    console.log("the email is blurred");
    //validate ur name
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("your email is valid");
        email.classList.remove('is-invalid');
        validEmail = true;
    } else {
        console.log("your email is not-valid");
        email.classList.add('is-invalid');
        validEmail = false;
    }
})

number.addEventListener('blur', () => {
    console.log("the number is blurred");
    //validate ur number
    let regex = /^([0-9]){10}$/;
    let str = number.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("your number is valid");
        number.classList.remove('is-invalid');
        validNumber = true;
    } else {
        console.log("your number is not-valid");
        number.classList.add('is-invalid');
        validNumber = false;
    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('u clicked on submit');
    console.log(validName ,validEmail, validNumber);
    // submit ur form here
    if (validEmail && validName && validNumber) {
        console.log("phone, email and number is valid hence submitting the form");
        let success = document.getElementById('success');
        success.classList.add('show');
        failure.classList.remove('show');
    } else {
        console.log("phone, email and number is not valid hence not submitting the form . Please coreect the errors and try");
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        success.classList.remove('show');
    }


})