<?php

require_once 'vendor/autoload.php';

function send($emailTo, $content) {
    $email = new \SendGrid\Mail\Mail();
    $email->setFrom("goodform@digitalsurgeons.dev", "Goodform");
    $email->setSubject("Goodform Submission");
    if (is_array($emailTo)) {
        foreach ($emailTo as $email);
        $email->addTo($email);
    } else {
        $email->addTo($emailTo);
    }

    $email->addContent("text/plain", $content);

    try {
        $sendgrid = new SendGrid(getenv('sendgrid_api_key'));

        $response = $sendgrid->send($email);

        print $response->statusCode() . "\n";
        print_r($response->headers());
        print $response->body() . "\n";
    } catch (Exception $e) {
        echo 'Caught exception: '. $e->getMessage() ."\n";
    }
}

