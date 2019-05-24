<?php

use TANIOS\Airtable\Airtable;

$airtable = new Airtable([
    'api_key' => getenv('airtable_api_key'),
    'base'    => getenv('airtable_base_id'),
]);

$data = [
	'Name' => 'What the heck happened to firebase',
	'Notes' => 'Its all like enterprisey and such now',
];

$airtable->saveContent('Forms', $data);
