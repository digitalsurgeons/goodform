<?php

require_once 'lib/vendor/autoload.php';

file_put_contents('/tmp/auth.json', base64_decode( getenv('firebase_auth') ));

require 'lib/send.php';
require 'lib/verify.php';
require 'lib/update.php';

use Kreait\Firebase\Factory;
use Kreait\Firebase\ServiceAccount;

$serviceAccount = ServiceAccount::fromJsonFile('/tmp/auth.json');

if (!array_key_exists('HTTP_REFERER', $_SERVER)) {
    http_response_code(403);
    header($_SERVER['SERVER_PROTOCOL'] . ' 403 Forbidden', true, 403);
    echo 'Could not determine the referer.';
    die();
}

$firebase = (new Factory)
    ->withServiceAccount($serviceAccount)
    ->withDatabaseUri('https://goodform-d0096.firebaseio.com')
    ->create();

$database = $firebase->getDatabase();

$verify = verify($database, $_POST['goodform_id'], $_SERVER['HTTP_REFERER']);

if ($verify['success'] == false) {
    http_response_code(403);
    header($_SERVER['SERVER_PROTOCOL'] . ' 403 Forbidden', true, 403);
    echo $verify['message'];
    die();
} else {
    $to_email = $verify['toEmail'];
}

$date = date("M, d, Y h:i:s A");

$emailContent =
"The following was submitted through Goodform:
{$date}\n";

if(isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on')
    $link = "https";
else
    $link = "http";

$link .= "://";
$link .= $_SERVER['HTTP_HOST'];
$link .= $_SERVER['REQUEST_URI'];

$emailContentFooter =
"\nRequest URI: {$link}
IP Address: {$_SERVER['REMOTE_ADDR']}
User Agent: {$_SERVER['HTTP_USER_AGENT']};";

$iterator = new RecursiveIteratorIterator(new RecursiveArrayIterator($_POST));

foreach($iterator as $key=>$value) {
    $emailContent = $emailContent . "\n" . $key.': '.$value;
}

$emailContent = $emailContent . "\n" . $emailContentFooter;

$update = update($database, $_POST['goodform_id']);
send($to_email, $emailContent);

echo "success";