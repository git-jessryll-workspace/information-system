<?php

namespace App\Http\DTO;

class UserProfileDto
{
    public function __construct(
        public readonly string $firstName,
        public readonly string $lastName,
        public readonly ?string $middleName,
        public readonly ?string $address,
        public readonly ?string $gender,
        public readonly ?string $birthday,
        public readonly ?string $religion,
        public readonly ?string $contactPhone,
        public readonly ?string $city,
        public readonly ?string $state,
        public readonly ?string $zip,
    ) {
    }

    public static function create(
        string $firstName,
        string $lastName,
        ?string $middleName,
        ?string $address,
        ?string $gender,
        ?string $birthday,
        ?string $religion,
        ?string $contactPhone,
        ?string $city,
        ?string $state,
        ?string $zip
    ) {
        return new self(
            $firstName,
            $lastName,
            $middleName,
            $address,
            $gender,
            $birthday,
            $religion,
            $contactPhone,
            $city,
            $state,
            $zip
        );
    }
}
