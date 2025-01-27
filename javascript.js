const myform = document.getElementById('myform');
myform.noValidate = true;
const firstName = document.getElementById('first_name');
const lastName = document.getElementById('last_name');
const Email = document.getElementById("user_email");
const password = document.getElementById("user_password");
const confrim_password = document.getElementById("confrim_password");
const Eye = document.getElementById("eye");
const firstError = document.getElementById('firstname');
const lastError = document.getElementById('lastname');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confrimpassword = document.getElementById('confrimpassword');
const regex = /^[a-zA-Z]+$/;
const regexEmail = /^\w*(\-\w)?(\.\w*)?@\w*(-\w*)?\.\w{2,3}(\.\w{2,3})?$/;
const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,12}$/;
let passValue = true;

function passwordTypeChanger(){
    passValue = !passValue;
    (passValue) ? password.type = "password" : password.type = "text";

}
function validateForm(e){
    e.preventDefault();
    if(!regex.test(firstName.value) || !(firstName.value)){
        firstError.style.display = "block"
        firstError.textContent = "Please type alphabbetic letters only"
        firstError.style.color = '#EA0063'
        firstError.style.fontStyle = "italic"
        firstName.style.border = "2px solid red";
    }
    else if(!regex.test(lastName.value) || !(lastName.value)){
        firstError.style.display = "none";
        firstName.style.border = "2px solid #54ACDB";
        lastError.style.display = "block";
        lastError.textContent = "Please type alphabbetic letters only";
        lastError.style.color = '#EA0063';
        lastError.style.fontStyle = "italic";
        lastName.style.border = "2px solid red";
    }
    else if(!regexEmail.test(Email.value) || !(Email.value)){
        firstError.style.display = "none";
        firstName.style.border = "2px solid #54ACDB";
        lastError.style.display = "none";
        lastName.style.border = "2px solid #54ACDB";
        emailError.style.display = "block";
        emailError.textContent = "Please Type Appropriate Email Address";
        emailError.style.color = '#EA0063';
        emailError.style.fontStyle = "italic";
    }
    else if(!regexPassword.test(password.value) || !(password.value)){
        emailError.style.display = "none";
        firstError.style.display = "none";
        firstName.style.border = "2px solid #54ACDB";
        lastError.style.display = "none";
        lastName.style.border = "2px solid #54ACDB";
        password.style.border = "2px solid red";
        passwordError.style.display = "block";
        passwordError.textContent = "Please Type A password b/n 6 and 12 containing atleast 1 uppercase, 1 lowwercase, 1character"
        passwordError.style.color = '#EA0063';
        passwordError.style.fontStyle = "italic";
    }
    else if(password.value != confrim_password.value || !(confrim_password.value)){
        emailError.style.display = "none";
        firstError.style.display = "none";
        firstName.style.border = "2px solid #54ACDB";
        lastError.style.display = "none";
        lastName.style.border = "2px solid #54ACDB";
        password.style.border = "2px solid #54ACDb";
        passwordError.style.display = "none";
        confrimpassword.style.display = "block";
        confrimpassword.textContent = "please make sure password and confrim password is the same";
        confrimpassword.style.color = '#EA0063';
        confrimpassword.style.fontStyle = "italic";
        confrim_password.style.border = "2px solid red";
    }
    else{
        confrimpassword.style.display = "none";
        confrim_password.style.border = '2px solid #54ACDB';
        alert("Hello THERE")
    }
    }
myform.addEventListener('submit', validateForm);
Eye.addEventListener('click', passwordTypeChanger);
    