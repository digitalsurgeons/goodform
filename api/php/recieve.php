<?php

require_once 'lib/vendor/autoload.php';

file_put_contents('/tmp/auth.json', base64_decode( getenv('firebase_auth') ));

require 'lib/send.php';
require 'lib/verify.php';

use Kreait\Firebase\Factory;
use Kreait\Firebase\ServiceAccount;

$serviceAccount = ServiceAccount::fromJsonFile('/tmp/auth.json');

$firebase = (new Factory)
    ->withServiceAccount($serviceAccount)
    ->withDatabaseUri('https://goodform-d0096.firebaseio.com')
    ->create();

$database = $firebase->getDatabase();

$verify = verify($database, $_POST['goodform_id'], $_POST['goodform_to'], $_SERVER['HTTP_HOST']);

if ($verify['success'] == false) {
    http_response_code(403);
    header($_SERVER['SERVER_PROTOCOL'] . ' 403 Forbidden', true, 403);
    echo $verify['message'];
    die();
}

$to_email = $_POST['goodform_to'];

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

send($to_email, $emailContent);

echo "success";