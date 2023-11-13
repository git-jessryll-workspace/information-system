<?php

namespace App\Http\Enums;

enum UserTypeEnum: string {
    case CustomerType = 'CUSTOMER';
    case SystemType = 'SYSTEM';
    case AgentType = 'AGENT';
}