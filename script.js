const naame = document.querySelector('#name');
const mobNumber = document.querySelector('#mob');
const email = document.querySelector('email');
const username = document.querySelector('#uname');
const password = document.querySelector('#pwd');
const cnfPassword = document.querySelector('#cnfpwd');
const form = document.querySelector("#form");
const error = document.querySelector('#error')

let flag = false;

// function validate() {
    // let message = [];
    // if (naame.value === '' || naame == null) {
    //     error.innerHTML = "name shoule be filled!";
    //     message.push("name is requred");

    //     return flag;
    // }
    // if (message.length > 0) {
    //     e.preventDefault()
    // }

// }


form.addEventListener('submit', (e) => {
    let message = [];
    if (naame.value === '' || naame == null) {
        error.innerHTML = "name shoule be filled!";
        message.push("name is requred");
    }
    if (message.length > 0) {   
        e.preventDefault()
    }
})