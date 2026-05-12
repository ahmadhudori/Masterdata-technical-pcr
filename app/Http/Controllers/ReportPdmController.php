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
        return Inertia::render('ReportPdm/Index', ['reportPdms' => $reportPdms]);
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
        $request->validate([
			'code' => 'required|max:6',
			'status' => 'required',
			'pattern' => 'required',
			'pic_konstruksi' => 'required',
			'tgl_kirim_konstruksi' => 'required|date',
		]);
	
		ReportPdm::create([
			'code' => $request->code,
			'status' => $request->status,
			'pattern' => $request->pattern,
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
			'tgl_approve_masterspec' => 'required|date|after_or_equal:today',
		], [
			'tgl_done_masterspec.after_or_equal' => 'Hayoo, kamu mau input tanggal sebelum hari ini ya???',
			'tgl_approve_masterspec.after_or_equal' => 'Hayoo, kamu mau input tanggal sebelum hari ini ya???',
		]);

		ReportPdm::find($id)->update([
			'pic_masterspec' => $request->pic_masterspec,
			'tgl_done_masterspec' => $request->tgl_done_masterspec,
			'approve_masterspec' => $request->tgl_approve_masterspec
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
			'tgl_done_masterspec' => 'required|date|after_or_equal:today',
			// 'tgl_approve_masterspec' => 'required|date|after_or_equal:today',
			'pic_material' => 'required',
			'tgl_done_material' => 'required|date|after_or_equal:today',
		], [
			'tgl_done_material.after_or_equal' => 'Hayoo, kamu mau input tanggal sebelum hari ini ya???',
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
		// dd($request->all());
		$request->validate([
			'pic_konstruksi' => 'required',
			'tgl_kirim_konstruksi' => 'required|date|after_or_equal:today',
			'tgl_approve_masterspec' => 'required|date|after_or_equal:today',
		], [
			'tgl_kirim_konstruksi.after_or_equal' => 'Hayoo, kamu mau input tanggal sebelum hari ini ya???',
			'tgl_approve_masterspec.after_or_equal' => 'Hayoo, kamu mau input tanggal sebelum hari ini ya???',
		]);

		ReportPdm::find($id)->update([
			'approve_masterspec' => $request->tgl_approve_masterspec,
		]);

		return to_route('report-pdm.index');
	}
}
