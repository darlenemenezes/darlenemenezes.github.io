<?php

// Replace this with your actual Formspree endpoint
$formspreeEndpoint = 'https://formspree.io/brummos@gmail.com';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = trim($_POST["name"]);
    $email = trim($_POST["email"]);
    $subject = isset($_POST["subject"]) ? trim($_POST["subject"]) : "Contact Form Submission";
    $message = trim($_POST["message"]);

    $data = array(
        'name' => $name,
        'email' => $email,
        'subject' => $subject,
        'message' => $message
    );

    $ch = curl_init($formspreeEndpoint);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    // Execute the request
    $response = curl_exec($ch);

    // Close cURL session
    curl_close($ch);

    // Check if the request was successful
    if ($response !== false) {
        echo "OK";
    } else {
        echo "Something went wrong. Please try again.";
    }
}

?>
