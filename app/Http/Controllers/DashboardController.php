<?php

namespace App\Http\Controllers;

use App\Models\ReportPdm;
use App\Models\ReqNewUser;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
	{
		return Inertia::render('MyDashboard', [
			'approved' => ReqNewUser::where('approved', true)->count(),
			'pending' => ReqNewUser::where('approved', false)->count(),
			'total' => ReqNewUser::count(),
		]);
	}
}
