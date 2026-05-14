<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class ReportPdm extends Model
{
	protected $table = 'report_pdm';
	protected $fillable = [
		'code',
		'pattern',
		'konstruksi',
		'pic_konstruksi',
		'tgl_kirim_konstruksi',
		'pic_masterspec',
		'tgl_done_masterspec',
		'approve_masterspec',
		'status',
		'pic_wip_material',
		'tgl_done_material',
		'pic_wip_curing',
		'tgl_done_curing',
		'tgl_done_bop_release',
		'pic_ekspedisi',
		'tgl_ekspedisi',
		'berat_gt',
	];

	public $timestamps = true;
	protected $casts = [
		'tgl_kirim_konstruksi' => 'datetime',
		'tgl_done_masterspec' => 'datetime',
		'approve_masterspec' => 'datetime',
		'tgl_done_material' => 'datetime',
		'tgl_done_curing' => 'datetime',
		'tgl_done_bop_release' => 'datetime',
		'tgl_ekspedisi' => 'datetime',
	];

	protected $appends = ['tgl_kirim_konstruksi_human', 'tgl_done_masterspec_human', 'approve_masterspec_human', 'tgl_done_material_human', 'tgl_done_curing_human', 'tgl_done_bop_release_human', 'tgl_ekspedisi_human'];

	public function getTglKirimKonstruksiHumanAttribute() {
		return $this->attributes['tgl_kirim_konstruksi'] ? Carbon::parse($this->attributes['tgl_kirim_konstruksi'])->isoFormat('dddd, D MMMM YYYY HH:mm', 'Asia/Jakarta'): null;
	}

	public function getTglDoneMasterspecHumanAttribute() {
		return $this->attributes['tgl_done_masterspec'] ? Carbon::parse($this->attributes['tgl_done_masterspec'])->isoFormat('dddd, D MMMM YYYY HH:mm', 'Asia/Jakarta'): null;
	}

	public function getApproveMasterspecHumanAttribute() {
		return $this->attributes['approve_masterspec'] ? Carbon::parse($this->attributes['approve_masterspec'])->isoFormat('dddd, D MMMM YYYY HH:mm', 'Asia/Jakarta'): null;
	}

	public function getTglDoneMaterialHumanAttribute() {
		return $this->attributes['tgl_done_material'] ? Carbon::parse($this->attributes['tgl_done_material'])->isoFormat('dddd, D MMMM YYYY HH:mm', 'Asia/Jakarta'): null;
	}

	public function getTglDoneCuringHumanAttribute() {
		return $this->attributes['tgl_done_curing'] ? Carbon::parse($this->attributes['tgl_done_curing'])->isoFormat('dddd, D MMMM YYYY HH:mm', 'Asia/Jakarta'): null;
	}

	public function getTglDoneBopReleaseHumanAttribute() {
		return $this->attributes['tgl_done_bop_release'] ? Carbon::parse($this->attributes['tgl_done_bop_release'])->isoFormat('dddd, D MMMM YYYY HH:mm', 'Asia/Jakarta'): null;
	}

	public function getTglEkspedisiHumanAttribute() {
		return $this->attributes['tgl_ekspedisi'] ? Carbon::parse($this->attributes['tgl_ekspedisi'])->isoFormat('dddd, D MMMM YYYY HH:mm', 'Asia/Jakarta'): null;
	}
}
