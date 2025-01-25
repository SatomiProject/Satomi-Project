<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the email address from the form
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);

    // Generate a random verification code
    $verification_code = rand(100000, 999999);

    // Compose the email
    $subject = "Your Password Recovery Verification Code";
    $message = "Dear user,\n\nYour verification code is: $verification_code\n\nPlease enter this code on the website to reset your password.\n\nThank you.";
    $headers = "From: no-reply@yourwebsite.com";

    // Send the email
    if (mail($email, $subject, $message, $headers)) {
        echo "A verification code has been sent to your email address.";
    } else {
        echo "Failed to send verification code. Please try again later.";
    }
}
?>
