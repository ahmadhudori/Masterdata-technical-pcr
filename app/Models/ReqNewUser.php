<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ReqNewUser extends Model
{
	protected $table = 'req_new_users';
    protected $fillable = [
		'name',
		'email',
		'role'
	];
}
