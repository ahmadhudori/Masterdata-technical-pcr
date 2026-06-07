<?php

namespace App\Http\Controllers;

use App\Models\ReportPdm;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ReportPdmController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
		$reportPdms = ReportPdm::query()
    	->when(request('search'), fn ($q, $search) =>
    	$q->where('code', 'like', "%$search%")
		)
		->latest()->get();
		// dd($reportPdms);
        return Inertia::render('ReportPdm/Index', ['reportPdms' => $reportPdms, 'filters' => $request->only(['search'])]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */

	// konstruksi store
    public function store(Request $request)
    {
		// dd($request->all());
        $request->validate([
			'code' => 'required|max:6',
			'status' => 'required|string|max:255',
			'pattern' => 'required|string|max:255',
			'konstruksi' => 'required|string|max:255',
			'pic_konstruksi' => 'required|string|max:255',
			'tgl_kirim_konstruksi' => 'required|date',
		]);
	
		ReportPdm::create([
			'code' => $request->code,
			'status' => $request->status,
			'pattern' => $request->pattern,
			'konstruksi' => $request->konstruksi,
			'pic_konstruksi' => $request->pic_konstruksi,
			'tgl_kirim_konstruksi' => $request->tgl_kirim_konstruksi
		]);

		return to_route('report-pdm.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
	// Tech Spec edit
    public function edit(string $id)
    {
        return Inertia::render('ReportPdm/TechSpec/EditFormReportPdm', ['reportPdm' => ReportPdm::find($id)]);
    }

    /**
     * Update the specified resource in storage.
     */
	// Tech Spec update
    public function update(Request $request, string $id)
    {
		$request->validate([
			'pic_masterspec' => 'required',
			'tgl_done_masterspec' => 'required|date|after_or_equal:today',
		], [
			'tgl_done_masterspec.after_or_equal' => 'Hayoo, kamu mau input tanggal sebelum hari ini ya???',
		]);

		ReportPdm::find($id)->update([
			'pic_masterspec' => $request->pic_masterspec,
			'tgl_done_masterspec' => $request->tgl_done_masterspec,
		]);

		return to_route('report-pdm.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

	// Material Edit
	public function editMaterial(string $id)
	{
		return Inertia::render('ReportPdm/Material/EditFormReportPdm', ['reportPdm' => ReportPdm::find($id)]);
	}

	// Material Update
	public function updateMaterial(Request $request, string $id)
	{
		// dd($request->all());
		$request->validate([
			'pic_masterspec' => 'required',
			'tgl_done_masterspec' => 'required|date|before_or_equal:now',
			'tgl_approve_masterspec' => 'required|date|before_or_equal:now',
			'pic_material' => 'required',
			'tgl_done_material' => 'required|date|after_or_equal:tgl_approve_masterspec',
		], [
			'tgl_done_material.after_or_equal' => 'tanggal selesai material tidak bisa diinput sebelum tanggal approve masterspec',
		]);

		ReportPdm::find($id)->update([
			'pic_wip_material' => $request->pic_material,
			'tgl_done_material' => $request->tgl_done_material,
		]);

		return to_route('report-pdm.index');
	}

	// Konstruksi Edit
	public function editKonstruksi(string $id)
	{
		return Inertia::render('ReportPdm/TechKonstruksi/EditFormReportPdm', ['reportPdm' => ReportPdm::find($id)]);
	}

	// Konstruksi Update
	public function updateKonstruksi(Request $request, string $id)
	{
		// dd($request->tgl_approve_masterspec);
		$request->validate([
			'pic_konstruksi' => 'required',
			'tgl_kirim_konstruksi' => 'required|date|before_or_equal:now',
			'pic_masterspec' => 'required',
			'tgl_done_masterspec' => 'required|date|before_or_equal:now',
			'tgl_approve_masterspec' => 'required|date|after_or_equal:tgl_done_masterspec',
		], [
			'tgl_kirim_konstruksi.after_or_equal' => 'Hayoo, kamu mau input tanggal sebelum hari ini ya???',
			'tgl_approve_masterspec.after_or_equal' => 'Input tidak bisa sebelum tanggal selesai masterspec',
		]);

		ReportPdm::find($id)->update([
			'approve_masterspec' => $request->tgl_approve_masterspec,
		]);

		return to_route('report-pdm.index');
	}

	// Curing & Building Edit
	public function editCuringBuilding(string $id)
	{
		return Inertia::render('ReportPdm/TechCuringBuilding/EditFormReportPdm', ['reportPdm' => ReportPdm::find($id)]);
	}

	// Curing & Building Update
	public function updateCuringBuilding(Request $request, string $id)
	{
		$request->validate([
			'pic_masterspec' => 'required',
			'tgl_done_masterspec' => 'required|date|before_or_equal:now',
			'tgl_approve_masterspec' => 'required|date|before_or_equal:now',
			'pic_material' => 'required',
			'tgl_done_material' => 'required|date|before_or_equal:now',
			'pic_curing_building' => 'required',
			'tgl_done_curing_building' => 'required|date|before_or_equal:now',
			'bop_release' => 'required|date|after_or_equal:tgl_done_curing_building',
		], [
			'bop_release.after_or_equal' => 'Input tidak bisa sebelum tanggal selesai curing & building',
		]);

		ReportPdm::find($id)->update([
			'pic_wip_curing_and_building' => $request->pic_curing_building,
			'tgl_done_curing_and_building' => $request->tgl_done_curing_building,
			'tgl_done_bop_release' => $request->bop_release
		]);

		return to_route('report-pdm.index');
		
	}
}
