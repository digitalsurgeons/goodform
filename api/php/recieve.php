<?php

require 'lib/send.php';

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