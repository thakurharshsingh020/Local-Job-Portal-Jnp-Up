<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST["name"]));
    $email = htmlspecialchars(trim($_POST["email"]));
    $subject = htmlspecialchars(trim($_POST["subject"]));
    $message = htmlspecialchars(trim($_POST["message"]));

    $to = "thakurharshsingh020@gmail.com"; // Replace with your email address
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=utf-8\r\n";

    $emailSubject = "New Message from $name - $subject";
    $emailBody = "Name: $name\nEmail: $email\n\nMessage:\n$message";

    if (mail($to, $emailSubject, $emailBody, $headers)) {
        echo "<script>alert('Message sent successfully.');</script>";
    } else {
        echo "<script>alert('Failed to send message. Please try again.');</script>";
    }
}
header("Location: index.html"); // Redirect back to the form page
exit();
?>
