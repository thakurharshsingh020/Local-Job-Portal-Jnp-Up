// Simple form validation
function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
    const successMessage = document.getElementById("successMessage");

    if (name === "" || email === "" || subject === "" || message === "") {
        alert("Please fill out all fields.");
        return false;
    }
    successMessage.textContent = "Your message has been sent successfully!";
    return true;
}
