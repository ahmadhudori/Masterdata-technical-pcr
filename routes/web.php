<?php

use App\Http\Controllers\PermissionController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ReportPdmController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UserController;
// use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'versi_php' => PHP_VERSION,
//     ]);
// });

Route::get('/', function () {
	return Redirect::route('dashboard');
});

Route::group(['middleware' => ['auth', 'verified']], function () {
	
	Route::get('/dashboard', function () {
		return Inertia::render('MyDashboard');
	})->name('dashboard');

	Route::resource('/permissions', PermissionController::class);
	Route::resource('/roles', RoleController::class)->except('show');
	Route::resource('/users', UserController::class);
	Route::resource('/report-pdm', ReportPdmController::class);

	// Route Report PDM Konstruksi
	Route::get('/report-pdm/{id}/edit-konstruksi', [ReportPdmController::class, 'editKonstruksi'])->name('report-pdm.edit-konstruksi');
	Route::put('/report-pdm/{id}/update-konstruksi', [ReportPdmController::class, 'updateKonstruksi'])->name('report-pdm.update-konstruksi');

	// Route Report PDM Material
	Route::get('/report-pdm/{id}/edit-material', [ReportPdmController::class, 'editMaterial'])->name('report-pdm.edit.material');
	});
	Route::put('/report-pdm/{id}/update-material', [ReportPdmController::class, 'updateMaterial'])->name('report-pdm.update.material');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Route without middleware
Route::get('/request-new-user', function () {
	$roles = Role::all();
	return Inertia::render('Auth/RequestNewUser', [
		'roles' => $roles
	]);
	})->name('ReqNewUser');

Route::post('/request-new-user', [UserController::class, 'reqNewUser'])->name('ReqNewUser.submit');

require __DIR__.'/auth.php';
