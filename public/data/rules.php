<?php
return [
    [
        'src'     => '10.0.0.1',
        'dst'     => '192.168.0.1',
        'service' => '80/tcp',
        'allowed' => true,
        'enabled' => false,
    ],
    [
        'src'     => '172.16.0.0/24',
        'dst'     => '10.178.3.0/29',
        'service' => '25/tcp',
        'allowed' => false,
        'enabled' => false,
    ],
];