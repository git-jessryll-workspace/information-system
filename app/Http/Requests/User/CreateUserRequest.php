<?php

namespace App\Http\Requests\User;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;

class CreateUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return $this->user()->can('create', User::class);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'first_name' => ['required', 'string', 'min:4'],
            'last_name' => ['required', 'string', 'min:4'],
            'email' => ['required', 'email', 'unique:users,email'],
            'username' => ['required', 'min:8'],
            'role' => ['required'],
        ];
    }

    public function getName()
    {
        if ($this->get('middle_name') && $this->get('middle_name') !== '') {
            return $this->get('first_name') . ' ' . $this->get('middle_name') . ' ' . $this->get('last_name');
        }
        return $this->get('first_name') . ' ' . $this->get('last_name');
    }
}
