<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name    = htmlspecialchars($_POST['name'] ?? '');
    $phone   = htmlspecialchars($_POST['phone'] ?? '');
    $email   = htmlspecialchars($_POST['email'] ?? '');
    $service = htmlspecialchars($_POST['service'] ?? '');
    $message = htmlspecialchars($_POST['message'] ?? '');

    $to      = "your-email@gmail.com";   // ← CHANGE THIS TO YOUR EMAIL
    $subject = "New Lead - $service from Fakhar Al Mas Website";
    $body    = "Name: $name\nPhone: $phone\nEmail: $email\nService: $service\nMessage:\n$message\n\nSent: " . date('Y-m-d H:i:s');

    if (mail($to, $subject, $body)) {
        echo json_encode(['status' => 'success']);
    } else {
        echo json_encode(['status' => 'error']);
    }
} else {
    echo json_encode(['status' => 'error']);
}
?>