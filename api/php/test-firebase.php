<?php

file_put_contents('auth.json', base64_decode( getenv('firebase_auth') ));

var_dump(file_get_contents('auth.json'));

die();