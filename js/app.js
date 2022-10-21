let registrationForm = document.querySelector('#registry-form');
let userName = document.querySelector('#name');
let userEmail = document.querySelector('#email');
let userPassword = document.querySelector('#password');
let confirmPassword = document.querySelector('#confirmPassword');
let userCountry = document.querySelector('#country');
let hobbies = document.querySelectorAll('#hobby')
// let gender = document.querySelector('input [name="gender"]:checked');

registrationForm.addEventListener('submit', createUser)

function createUser(e) {
    e.preventDefault()
    console.log("first")
    
    let userHobbies = [];
    userHobbies.forEach((hobby) => {
        if (hobby.checked === true) {
            userHobbies.push(hobby.value)
        }
    });
    console.log(userHobbies)
    let userDetails = {
        name: userName.value,
        email: userEmail.value,
        password: userPassword.value,
        confirmPassword: confirmPassword.value,
        country: userCountry.value,
        gender: document.querySelector('input[name="gender"]:checked').value,
        hobbies: userHobbies
    };
    console.log(userDetails);
}