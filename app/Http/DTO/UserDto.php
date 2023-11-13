<?php

namespace App\Http\DTO;

class UserDto
{
    public function __construct(
        public readonly string $name,
        public readonly string $email,
        public readonly ?string $username,
        public readonly ?string $password,
    ) {
    }
}
