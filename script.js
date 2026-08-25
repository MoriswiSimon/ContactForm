const contactForm = document.querySelector(".contact-form");
const successMessage = document.getElementById("successMessage");
const submitButton = contactForm.querySelector("button");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || subject === "" || message === "") {
    alert("Please fill in all fields.");
    return;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
}

    // Change button while processing
    submitButton.textContent = "Sending...";
    submitButton.disabled = true;

    setTimeout(function () {

        successMessage.textContent =
            "Thank you, " + name + "! Your message has been sent successfully.";

        successMessage.style.display = "block";

        contactForm.reset();

        // Restore button
        submitButton.textContent = "Send Message";
        submitButton.disabled = false;

    }, 1500);
});