const myform = document.getElementById('myform');
myform.noValidate = true;
const firstName = document.getElementById('first_name');
const lastName = document.getElementById('last_name');
const Email = document.getElementById("user_email");
const password = document.getElementById("user_password");
const firstError = document.getElementById('firstname');
const lastError = document.getElementById('lastname');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const regex = /^[a-zA-Z]+$/;
const regexEmail = /^\w*(\-\w)?(\.\w*)?@\w*(-\w*)?\.\w{2,3}(\.\w{2,3})?$/;
const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,12}$/;
function validateForm(e){
    e.preventDefault();
    if(!regex.test(firstName.value)){
        firstError.style.display = "block"
        firstError.textContent = "Please type alphabbetic letters only"
        firstName.style.border = "2px solid red";
    }
    else if(!regex.test(lastName.value)){
        firstError.style.display = "none";
        firstName.style.border = "2px solid #54ACDB";
        lastError.style.display = "block";
        lastError.textContent = "Please type alphabbetic letters only";
        lastName.style.border = "2px solid red";
    }
    else if(!regexEmail.test(Email.value)){
        lastError.style.display = "none";
        lastName.style.border = "2px solid #54ACDB";
        emailError.style.display = "block"
        emailError.textContent = "Please Type Appropriate Email Address"
    }
    else if(!regexPassword.test(password.value)){
        emailError.style.display = "none";
        password.style.border = "2px solid red";
        passwordError.style.display = "block";
        passwordError.textContent = "Please Type A password between 6 and 12 that contains at least one uppercase, one lower case , one digit & one other characters"
    }
    else{
        password.style.border = "2px solid #54ACDb";
        passwordError.style.display = "none";
    }
    }
myform.addEventListener('submit', validateForm);
    