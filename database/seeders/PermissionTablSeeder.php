<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class PermissionTablSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
		//permission users
        Permission::create(['name' => 'users index', 'guard_name' => 'web']);
        Permission::create(['name' => 'users create', 'guard_name' => 'web']);
        Permission::create(['name' => 'users edit', 'guard_name' => 'web']);
        Permission::create(['name' => 'users delete', 'guard_name' => 'web']);

        //permission roles
        Permission::create(['name' => 'roles index', 'guard_name' => 'web']);
        Permission::create(['name' => 'roles create', 'guard_name' => 'web']);
        Permission::create(['name' => 'roles edit', 'guard_name' => 'web']);
        Permission::create(['name' => 'roles delete', 'guard_name' => 'web']);

        //permission permissions
        Permission::create(['name' => 'permissions index', 'guard_name' => 'web']);
        Permission::create(['name' => 'permissions create', 'guard_name' => 'web']);
        Permission::create(['name' => 'permissions edit', 'guard_name' => 'web']);
        Permission::create(['name' => 'permissions delete', 'guard_name' => 'web']);

		// Report PDM
		Permission::create(['name' => 'report pdm index', 'guard_name' => 'web']);
		Permission::create(['name' => 'report pdm create', 'guard_name' => 'web']);
		Permission::create(['name' => 'report pdm edit', 'guard_name' => 'web']);
		Permission::create(['name' => 'report pdm delete', 'guard_name' => 'web']);

		Role::findByName('Tech Spec')->givePermissionTo([
			Permission::all()
		]);

		Role::findByName('Tech Konstruksi')->givePermissionTo([
			'report pdm index',
			'report pdm create',
			'report pdm edit',
		]);
		Role::findByName('Tech Material')->givePermissionTo([
			'report pdm index',
			'report pdm edit',
		]);
		Role::findByName('Tech Curing & Building')->givePermissionTo([
			'report pdm index',
			'report pdm edit',
		]);
    }
}
