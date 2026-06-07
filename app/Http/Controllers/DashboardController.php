<?php

namespace App\Http\Controllers;

use App\Models\ReqNewUser;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
	{
		return Inertia::render('MyDashboard');
	}
}
