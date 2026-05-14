<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('report_pdm', function (Blueprint $table) {
            $table->id();
			$table->string('code');
			$table->string('pattern');
			$table->string('konstruksi');
			$table->string('pic_konstruksi');
			$table->dateTime('tgl_kirim_konstruksi');
			$table->string('pic_masterspec')->nullable();
			$table->dateTime('tgl_done_masterspec')->nullable();
			$table->dateTime('approve_masterspec')->nullable();
			$table->string('status')->nullable();
			$table->string('pic_wip_material')->nullable();
			$table->dateTime('tgl_done_material')->nullable();
			$table->string('pic_wip_curing')->nullable();
			$table->dateTime('tgl_done_curing')->nullable();
			$table->dateTime('tgl_done_bop_release')->nullable();
			$table->string('pic_ekspedisi')->nullable();
			$table->dateTime('tgl_ekspedisi')->nullable();
			$table->double('berat_gt')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('report_pdm');
    }
};
