<?php

require_once './lib/vendor/autoload.php';

use Kreait\Firebase\Query;
use Kreait\Firebase\Database\Transaction;

function update($database, $documentId) {
  $formReference = $database->getReference('forms/'.$documentId);

  $formData = $formReference->getSnapshot()->getValue();

  $rateReference = $database->getReference('usages/'.$formData['userId'].'/'.date('Ym'));

  $database->runTransaction(function (Transaction $transaction) use ($rateReference) {

    $rateSnapshot = $transaction->snapshot($rateReference);

    $value = $rateSnapshot->getValue() ?: 0;
    $newValue = ++$value;

    $transaction->set($rateReference, $newValue);
  });
}