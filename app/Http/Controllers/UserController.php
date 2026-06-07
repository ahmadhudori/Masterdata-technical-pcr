<?php

namespace App\Http\Controllers;

use App\Models\ReqNewUser;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;

class UserController extends Controller implements HasMiddleware
{
	public static function middleware()
    {
        return [
            new Middleware('permission:users index', only : ['index']),
            new Middleware('permission:users create', only : ['create', 'store']),
            new Middleware('permission:users edit', only : ['edit', 'update   ']),
            new Middleware('permission:users delete', only : ['destroy']),
        ];
    }

	/**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        // get all users
        $users = User::with('roles')
            ->when(request('search'), fn($query) => $query->where('name', 'like', '%'.$request->search.'%'))
            ->latest()
            ->paginate(6);

        // render view
        return inertia::render('Users/Index', ['users' => $users,'filters' => $request->only(['search'])]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
         // get roles
         $roles = Role::latest()->get();
         // render view
         return inertia::render('Users/Create', ['roles' => $roles]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
         // validate request
         $request->validate([
            'name' => 'required|min:3|max:255|unique:users',
            'email' => 'required|email',
            'password' => 'required|confirmed|min:4',
            'selectedRoles' => 'required|array|min:1',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);

        $user->assignRole($request->selectedRoles);

        return to_route('users.index');
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
    public function edit(User $user)
    {
        // get roles
        $roles = Role::where('name', '!=', 'Tech Spec')->get();

        // load roles
        $user->load('roles');

        // render view
        return inertia::render('Users/Edit', ['user' => $user, 'roles' => $roles]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        // validate request
        $request->validate([
            'name' => 'required|min:3|max:255|unique:users,name,'.$user->id,
            'email' => 'required|email,'.$user->id,
            'selectedRoles' => 'required|array|min:1',
        ]);

        $user->update([
            'name' => $request->name,
            'email' => $request->email,
        ]);

        $user->syncRoles($request->selectedRoles);

        return to_route('users.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        // delete user data
        $user->delete();

        // render view
        return back();
    }

	// request new user

    public function reqNewUser(Request $request) 
	{
		$request->validate([
			"name" => "required|unique:req_new_users,name",
			"email" => "required|email",
			"role" => "required"
		], [
			'role.required' => 'Role belum diisi',
			'name.unique' => 'Username tersebut sudah terdaftar',
		]);

		try {
			$requestNewUser = ReqNewUser::create([
				"name" => $request->name,
				"email" => $request->email,
				"role" => $request->role
			]);
			return Inertia::render('Auth/RequestNewUser', [
				"data" => $requestNewUser
			]);
		} catch (\Throwable $th) {
			return back()->with([
			"message" => "Something went wrong",
			"error" => $th->getMessage() // ✅ hanya string
		]);
		}

	}

	public function reqNewUserList()
	{
		return Inertia::render('Users/reqNewUser/Index');
	}

	public function reqNewUserApprove(ReqNewUser $requestNewUser)
	{
		$requestNewUser->update([
			"approved" => true
		]);

		return redirect()->route('request-new-users.list');
	}
}
