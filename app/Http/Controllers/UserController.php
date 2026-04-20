<?php

namespace App\Http\Controllers;

use App\Models\ReqNewUser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class UserController extends Controller
{
    public function reqNewUser(Request $request) {
    $request->validate([
        "name" => "required|unique:req_new_users,name",
        "email" => "required|email|unique:req_new_users,email",
        "role" => "required"
    ], [
		'role.required' => 'Role belum diisi',
		'email.unique' => 'Email tersebut sudah terdaftar',
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
			"message" => "Someting went wrong",
			"error" => $th
		]);
	}

}
}
