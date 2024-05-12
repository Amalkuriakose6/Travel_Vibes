document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registration-form");

    // Define usersDatabase to store registered users
    const usersDatabase = JSON.parse(localStorage.getItem('users')) || [];

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const destination = document.getElementById("destination").value;
        const date = document.getElementById("date").value;
        const phone = document.getElementById("phone").value;
        const password = document.getElementById("password").value;

        // Check if any field is empty
        if (!name || !email || !destination || !date || !phone || !password) {
            alert("Please fill out all fields.");
        } else if (!isValidEmail(email)) {
            alert("Please enter a valid email address.");
        } else if (!isValidPhoneNumber(phone)) {
            alert("Please enter a valid phone number.");
        } else {
            // Check if the user already exists
            const userExists = usersDatabase.some(user => user.email === email);

            if (userExists) {
                alert("User with this email already exists.");
            } else {
                // Register the user
                usersDatabase.push({ name, email, destination, date, phone, password });
                localStorage.setItem('users', JSON.stringify(usersDatabase));

                alert("Registration successful!\nName: " + name + "\nEmail: " + email + "\nDestination: " + destination + "\nDate: " + date + "\nPhone: " + phone);
                form.reset();
                window.location.href = "home.html"; // Redirect to home page
            }
        }
    });

    function isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        return emailPattern.test(email);
    }

    function isValidPhoneNumber(phone) {
        const phonePattern = /^\d{10}$/;
        return phonePattern.test(phone);
    }
});
