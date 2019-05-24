<?php

use \Firebase\FirebaseLib as Firebase;

$firebaseCredentials = [
    'defaultUrl'   => getenv('firebase_default_url'),
    'defaultToken' => getenv('firebase_default_token'),
    'defaultPath'  => getenv('firebase_default_path'),
];

$firebase = new Firebase(
    $firebaseCredentials['defaultUrl'],
    $firebaseCredentials['defaultToken']
);

$data = [
    'some' => 'data',
];

$firebase->set($firebaseCredentials['defaultPath'] . "/testendpoint", $data);
