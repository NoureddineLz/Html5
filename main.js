// script.js

// Function to display a greeting message
function displayGreeting() {
    alert('Hello, Welcome to our page!');
}

// Get the button element using its ID
var buttonElement = document.getElementById('greetButton');

// Attach a click event listener to the button
buttonElement.addEventListener('click', displayGreeting);
