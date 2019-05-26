<?php

require_once './lib/vendor/autoload.php';

// file_put_contents('/tmp/auth.json', base64_decode( getenv('firebase_auth') ));


use Kreait\Firebase\Query;

function verify($database, $documentId, $emailValue, $domain) {

  $formReference = $database->getReference('forms/'.$documentId);

  $formData = $formReference->getSnapshot()->getValue();

  if ($formData == NULL) {
    return [
      "success" => false,
      "message" => "The form could not be found.",
    ];
  }

  if (!array_key_exists ( 'enabled' , $formData )) {
    return [
      "success" => false,
      "message" => "The form record is incomplete.",
    ];
  }

  if ($formData['enabled'] != true) {
    return [
      "success" => false,
      "message" => "The form is disabled",
    ];
  }

  $userReference = $database->getReference('usages/'.$userId);

  if ($userReference == null) {
    $userReference->set([
      date('Ym') => 0
    ]);
  }

  die();

  // $newPost = $database
  //     ->getReference('forms')
  //     ->push([
  //         'name' => 'Test',
  //     ]);

  // echo $newPost->getKey(); // => -KVr5eu8gcTv7_AHb-3-
  // echo $newPost->getUri();
}
