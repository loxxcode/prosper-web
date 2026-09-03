<?php
header('Content-Type: application/json');

// Set Kigali time zone
date_default_timezone_set('Africa/Kigali');

$data = json_decode(file_get_contents('php://input'), true);

$name = $data['name'];
$email = $data['email'];
$message = $data['message'];
$timestamp = $data['timestamp'];

// Convert timestamp to Kigali time zone
$formatted_time = date('Y-m-d H:i:s', strtotime($timestamp));

// Both recipient emails
$recipients = [
    'info@prospertechltd.com',
    'habipross77@gmail.com'
];

$subject = 'New Chat Message from ' . $name;
$body = "
Name: $name\n
Email: $email\n
Time: $formatted_time\n
Message:\n$message
";

$headers = "From: client-inquiries";

// Send to both recipients
$successCount = 0;
foreach ($recipients as $to) {
    if(mail($to, $subject, $body, $headers)) {
        $successCount++;
    }
}

if($successCount > 0) {
    echo json_encode(['status' => 'success', 'sent_to' => $successCount . ' recipients']);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Failed to send emails']);
}
?>