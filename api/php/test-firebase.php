<?php

require './lib/vendor/autoload.php';

file_put_contents('/tmp/auth.json', base64_decode( getenv('firebase_auth') ));

use Kreait\Firebase\Factory;
use Kreait\Firebase\ServiceAccount;

// This assumes that you have placed the Firebase credentials in the same directory
// as this PHP file.
$serviceAccount = ServiceAccount::fromJsonFile('/tmp/auth.json');

$firebase = (new Factory)
    ->withServiceAccount($serviceAccount)
    // The following line is optional if the project id in your credentials file
    // is identical to the subdomain of your Firebase project. If you need it,
    // make sure to replace the URL with the URL of your project.
    ->withDatabaseUri('https://goodform-d0096.firebaseio.com')
    ->create();

$database = $firebase->getDatabase();

$newPost = $database
    ->getReference('forms')
    ->push([
        'name' => 'Test',
    ]);

echo $newPost->getKey(); // => -KVr5eu8gcTv7_AHb-3-
echo $newPost->getUri();
