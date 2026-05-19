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
        Schema::table('report_pdm', function (Blueprint $table) {
			$table->renameColumn('pic_wip_curing', 'pic_wip_curing_and_building');
            $table->renameColumn('tgl_done_curing', 'tgl_done_curing_and_building');
		});
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
		Schema::table('report_pdm', function (Blueprint $table) {
			$table->renameColumn('pic_wip_curing_and_building', 'pic_wip_curing');
			$table->renameColumn('tgl_done_curing_and_building', 'tgl_done_curing');
		});
    }
};
