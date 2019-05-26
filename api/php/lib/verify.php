<?php

require_once './lib/vendor/autoload.php';

use Kreait\Firebase\Query;

function verify($database, $documentId, $domain) {

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

  if (!($formData['domain'] == $domain)) {
    return [
      "success" => false,
      "message" => "The domain does not match",
    ];
  }

  if (!array_key_exists ( 'emailList' , $formData )) {
    return [
      "success" => false,
      "message" => "The form record is incomplete.",
    ];
  }

  if (!array_key_exists ( 'userId' , $formData )) {
    return [
      "success" => false,
      "message" => "The form record is incomplete.",
    ];
  }

  $usageReference = $database->getReference('usages/'.$formData['userId'].'/'.date('Ym'))->getValue();

  if ($usageReference == null) {
    $usageReference->set(0);
  } else {
    if ($usageReference >= 100) {
      return [
        "success" => false,
        "message" => "The account API limit has been reached.",
      ];
    }
  }

  return [
    "success" => true,
    "toEmail" => $formData['emailList']
  ];

  // $newPost = $database
  //     ->getReference('forms')
  //     ->push([
  //         'name' => 'Test',
  //     ]);

  // echo $newPost->getKey(); // => -KVr5eu8gcTv7_AHb-3-
  // echo $newPost->getUri();
}
