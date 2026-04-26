<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $userSpec = User::create([
			'name' => 'Tech Spec',
			'email' => 'tech.spec@gt-tires.com',
			'password' => bcrypt('tech123'),
		]);

		$specRole = Role::where('name', 'Tech Spec')->first();
		$userSpec->assignRole($specRole);
    }
}
