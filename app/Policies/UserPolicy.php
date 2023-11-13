<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\Response;

class UserPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        if ($user->role !== "ADMIN") return false;
        return true;
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, User $model): bool
    {
        if ($user->id !== $model->id) {
            if (!$user->is_active) return false;

            if ($user->user_type !== 'SYSTEM') return false;

            return true;
        }

        return true;
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        if (!$user->is_active) return false;

        if ($user->user_type !== 'SYSTEM') return false;

        return true;
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, User $model): bool
    {
        if ($user->id !== $model->id) {
            if (!$user->is_active) return false;

            if ($user->user_type !== 'SYSTEM') return false;

            return true;
        }

        return true;
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, User $model): bool
    {
        if (!$user->is_active) return false;

        if ($user->user_type !== 'SYSTEM') return false;

        return true;
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, User $model): bool
    {
        if (!$user->is_active) return false;

        if ($user->user_type !== 'SYSTEM') return false;

        return true;
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, User $model): bool
    {
        if ($user->id !== $model->id) {
            if (!$user->is_active) return false;

            if ($user->user_type !== 'SYSTEM') return false;

            return false;
        }

        return true;
    }
}
