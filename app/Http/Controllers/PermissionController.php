<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;
use Inertia\Inertia;
use Spatie\Permission\Models\Permission;

class PermissionController extends Controller implements HasMiddleware
{
	public static function middleware() {
		return [
			new Middleware('permission:permissions index', only: ['index']), 
			new Middleware('permission:permissions create', only: ['create']), 
			new Middleware('permission:permissions edit', only: ['update']), 
			new Middleware('permission:permissions delete', only: ['destroy']), 
		];
	}
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        //get permissions
		$permissions = Permission::select('id', 'name')->when($request->search, fn($search) => $search->where('name', 'like', '%' . $request->search . '%'))->latest()->paginate(6)->withQueryString();

		return Inertia::render('Permission/Index', [
			'permissions' => $permissions]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Permission/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
		//validate request
		$request->validate([
			'name' => 'required|unique:permissions,name'
		]);

		//create permission
		Permission::create([
			'name' => $request->name
		]);

		return to_route('permissions.index');
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
    public function edit(Permission $permission)
    {
        return Inertia::render('Permission/Edit', [
			'permission' => $permission
		]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Permission $permission)
    {
        //validate request
		$request->validate([
			'name' => 'required|unique:permissions,name,'
		]);

		//update permission
		$permission->update([
			'name' => $request->name
		]);

		return to_route('permissions.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Permission $permission)
    {
        $permission->delete();

		return to_route('permissions.index');
    }
}
