javascript
// Form validation

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.querySelector('input[name="name"]').value;
    let email = document.querySelector('input[name="email"]').value;
    let password = document.querySelector('input[name="password"]').value;

    if (name === "" || email === "" || password === "") {
        alert("Please fill all fields!");
    } else {
        alert("Registration successful!");
    }
});