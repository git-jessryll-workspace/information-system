<?php

namespace App\Http\Controllers;

use App\Http\Requests\User\CreateUserRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Illuminate\Support\Str;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $request = request();
        $users = User::query()
        ->select([
            'users.id as id',
            'users.name as name',
            'users.email as email',
            'users.username as username',
            'users.is_active as is_active',
            'users.user_type as user_type',
            'users.email_verified_at as email_verified_at',
            'users.created_at as created_at',
            'user_profiles.first_name as first_name',
            'user_profiles.last_name as last_name',
            'user_profiles.middle_name as middle_name',
            'user_profiles.gender as gender',
            'user_profiles.birthday as birthday',
            'user_profiles.religion as religion',
            'user_profiles.contact_phone as contact_phone',
            'user_profiles.address as address',
            'user_profiles.city as city',
            'user_profiles.state as state',
            'user_profiles.zip as zip',
        ])
        ->leftJoin('user_profiles', 'users.id', 'user_profiles.user_id')
        ->paginate(50);
        
        return Inertia::render('User/Users', [
            'users' => $users
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('User/Create',[]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateUserRequest $request)
    {
        DB::transaction(function () use ($request) {
            $user = User::create([
                'email' => $request->validated('email'),
                'password' => Str::random(10),
                'name' => $request->getName(),
            ]);
            
        });

        
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
