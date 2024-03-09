<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = trim($_POST["email"]);
    $message = trim($_POST["message"]);

    $data = array(
        'email' => $email,
        'message' => $message
    );

    $formspreeEndpoint = 'https://formspree.io/f/mqkrlboe'; // Your Formspree form URL

    $ch = curl_init($formspreeEndpoint);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    // Execute the request
    $response = curl_exec($ch);

    // Check if the request was successful
    if ($response !== false) {
        // You might want to handle the response here, but for simplicity, we'll just echo "OK"
        echo "OK";
    } else {
        echo "Something went wrong. Please try again.";
    }

    // Close cURL session
    curl_close($ch);
}

?>
