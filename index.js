"use strict";

var typed = new Typed('.type', {
    strings: ['Best travel partner', 'spend your weekends', 'spend your holidays '],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true
});

const usersDatabase = JSON.parse(localStorage.getItem('users')) || [];

function validateLogin() {
    const loginEmail = document.getElementById("useremail").value;
    const loginPassword = document.getElementById("loginPassword").value;
    const loginMessage = document.getElementById("loginMessage");

  
    const user = usersDatabase.find(user => user.email === loginEmail && user.password === loginPassword);

    if (user) {
        loginMessage.innerHTML = "Login successful!";
        window.location.href = "ala.html"; 
    } else {
        loginMessage.innerHTML = "Invalid email or password. Please try again.";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const accordion = document.querySelector("#accordion");
    if (accordion) {
        accordion.addEventListener('click', () => {
            accordion.style.height = accordion.scrollHeight + 'px';
        });
    }
});

const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');

if (loginLink && wrapper) {
    loginLink.addEventListener('click', () => {
        wrapper.classList.remove('active');
    });
}
