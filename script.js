// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Smooth Page Transitions
document.addEventListener("DOMContentLoaded", function () {
    document.body.style.opacity = 0;
    setTimeout(() => { document.body.style.opacity = 1; }, 300);
});

// Contact Form Submission
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const responseMessage = document.getElementById("form-response");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent actual form submission

        // Show success message
        responseMessage.classList.remove("hidden");
        responseMessage.textContent = "Your message has been sent!";

        // Clear the form
        form.reset();

        // Hide message after 3 seconds
        setTimeout(() => {
            responseMessage.classList.add("hidden");
        }, 3000);
    });
});
