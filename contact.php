<?php
/**
 * Contact form handler for proptechsol.com
 *
 * The React contact form POSTs JSON here. This script validates the input
 * and emails it to hello@proptechsol.com using PHP's built-in mail(),
 * which works on Hostinger shared hosting out of the box.
 *
 * Vite copies everything in /public to the build output, so this file ends
 * up at https://proptechsol.com/contact.php after `npm run build`.
 */

// ---------- Settings (change these if needed) ----------
$TO_EMAIL   = 'hello@proptechsol.com';   // where messages are delivered
$FROM_EMAIL = 'hello@proptechsol.com';   // must be an email on YOUR domain, or Hostinger may block it
$SITE_NAME  = 'PropTech Solutions';
// -------------------------------------------------------

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store');

function respond(int $status, array $body): void {
    http_response_code($status);
    echo json_encode($body);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Allow: POST');
    respond(405, ['ok' => false, 'error' => 'Method not allowed.']);
}

// Accept JSON (what the React form sends) or normal form posts.
$raw  = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) {
    $data = $_POST;
}

// Honeypot: real people never see/fill this field, bots do.
// Pretend success so bots don't learn anything.
if (!empty($data['website'])) {
    respond(200, ['ok' => true]);
}

// Strip control characters / line breaks (blocks email header injection).
function clean_line($value, int $max): string {
    $value = is_string($value) ? $value : '';
    $value = preg_replace('/[\x00-\x1F\x7F]+/u', ' ', $value);
    return trim(mb_substr($value, 0, $max));
}

$name    = clean_line($data['name']    ?? '', 100);
$email   = clean_line($data['email']   ?? '', 150);
$subject = clean_line($data['subject'] ?? '', 150);
// The message may contain line breaks, so only strip other control chars.
$message = is_string($data['message'] ?? null) ? $data['message'] : '';
$message = trim(mb_substr(preg_replace('/[^\P{C}\n\r\t]+/u', '', $message), 0, 5000));

if ($name === '' || $subject === '' || $message === '') {
    respond(422, ['ok' => false, 'error' => 'Please fill in all fields.']);
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(422, ['ok' => false, 'error' => 'Please enter a valid email address.']);
}

// Very simple rate limit: max 1 message per 30 seconds per visitor IP.
$ip   = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$lock = sys_get_temp_dir() . '/proptech_contact_' . md5($ip);
if (is_file($lock) && (time() - filemtime($lock)) < 30) {
    respond(429, ['ok' => false, 'error' => 'Please wait a moment before sending another message.']);
}

$body  = "New message from the $SITE_NAME website contact form\n";
$body .= "------------------------------------------------\n\n";
$body .= "Name:    $name\n";
$body .= "Email:   $email\n";
$body .= "Subject: $subject\n\n";
$body .= "Message:\n$message\n\n";
$body .= "------------------------------------------------\n";
$body .= 'Sent: ' . gmdate('Y-m-d H:i:s') . " UTC\n";
$body .= "IP:   $ip\n";

// Encode the subject so non-English characters display properly.
$mailSubject = '=?UTF-8?B?' . base64_encode("[Website Contact] $subject") . '?=';

$headers  = "From: $SITE_NAME <$FROM_EMAIL>\r\n";
// Reply-To lets you hit "Reply" in your inbox and answer the visitor directly.
$headers .= 'Reply-To: ' . str_replace(['"', '<', '>', ','], '', $name) . " <$email>\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "Content-Transfer-Encoding: 8bit\r\n";
$headers .= 'X-Mailer: PHP/' . phpversion() . "\r\n";

// "-f" sets the envelope sender, which helps deliverability on Hostinger.
$sent = @mail($TO_EMAIL, $mailSubject, $body, $headers, '-f' . $FROM_EMAIL);

if ($sent) {
    @touch($lock);
    respond(200, ['ok' => true]);
}

error_log('contact.php: mail() failed for message from ' . $email);
respond(500, ['ok' => false, 'error' => 'Sorry, we could not send your message. Please email us at ' . $TO_EMAIL . '.']);
