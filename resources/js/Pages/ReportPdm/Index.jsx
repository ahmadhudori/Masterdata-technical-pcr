import Container from "@/Components/Container";
import DashboardLayout from "@/Layouts/DashboardLayout";
import AddFormReportPdm from "@/Pages/ReportPdm/TechKonstruksi/AddFormReportPdm";
import hasAnyPermission from "@/Utils/Permissions";
import { Link, useForm } from "@inertiajs/react";
import { useState } from "react";

export default function Index({ reportPdms, auth, filters }) {
    const [showAddForm, setShowAddForm] = useState(false);
    const [selectedId, setSelectedId] = useState("");
    const { data, setData, get } = useForm({
        search: filters.search || "",
    });

    const handleSearch = (e) => {
        e.preventDefault();
        get(route("report-pdm.index") + `?search=${data.search}`);
    };

    return (
        <DashboardLayout>
            <Container>
                <div className="bg-gray-800 p-6 text-white rounded-xl shadow-lg">
                    <h1 className="text-xl font-semibold mb-4">
                        List Report PDM - {auth.user.roles[0].name}
                    </h1>

                    <div>
                        <form className="mb-4 flex" onSubmit={handleSearch}>
                            <input
                                type="text"
                                placeholder="Cari Spesifikasi..."
                                className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none"
                                value={data.search}
                                onChange={(e) =>
                                    setData("search", e.target.value)
                                }
                            />
                            <button
                                className="ml-2 px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700"
                                type="submit"
                            >
                                Cari
                            </button>
                        </form>
                    </div>
                    <div className="w-full overflow-auto">
                        <table className="min-w-full text-sm text-left">
                            <thead className="bg-gray-700 text-gray-300">
                                <tr>
                                    <th className="p-3 whitespace-nowrap">
                                        Code
                                    </th>
                                    <th className="p-3 whitespace-nowrap">
                                        Status
                                    </th>
                                    <th className="p-3 whitespace-nowrap">
                                        Pattern (List)
                                    </th>
                                    <th className="p-3 whitespace-nowrap">
                                        Konstruksi (List)
                                    </th>
                                    <th className="p-3 whitespace-nowrap">
                                        PIC Konstruksi
                                    </th>
                                    <th className="p-3 whitespace-nowrap">
                                        Tanggal Kirim Konstruksi
                                    </th>
                                    <th className="p-3 whitespace-nowrap">
                                        PIC Masterspec
                                    </th>
                                    <th className="p-3 whitespace-nowrap">
                                        Tanggal Done Masterspec
                                    </th>
                                    <th className="p-3 whitespace-nowrap">
                                        Tanggal Approve Masterspec
                                    </th>
                                    <th className="p-3 whitespace-nowrap">
                                        PIC WIP Material
                                    </th>
                                    <th className="p-3 whitespace-nowrap">
                                        Tanggal Done WIP Material
                                    </th>
                                    <th className="p-3 whitespace-nowrap">
                                        PIC WIP Curing & Building
                                    </th>
                                    <th className="p-3 whitespace-nowrap">
                                        Tanggal Done WIP Curing & Building
                                    </th>
                                    <th className="p-3 whitespace-nowrap">
                                        Tanggal Done Cek BOP ( Release )
                                    </th>
                                    <th className="p-3 whitespace-nowrap">
                                        PIC Ekspedisi
                                    </th>
                                    <th className="p-3 whitespace-nowrap">
                                        Tanggal Ekspedisi
                                    </th>
                                    <th className="p-3 whitespace-nowrap">
                                        Berat GT
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {reportPdms.map((value, index) => (
                                    <tr
                                        key={value.id}
                                        className={`cursor-pointer ${
                                            selectedId === value.id
                                                ? "bg-gray-500 text-white"
                                                : "bg-gray-600 text-gray-300 hover:bg-gray-500"
                                        }`}
                                        onClick={() =>
                                            setSelectedId(
                                                selectedId === value.id
                                                    ? ""
                                                    : value.id,
                                            )
                                        }
                                    >
                                        <td className="p-3 whitespace-nowrap">
                                            {value.code}
                                        </td>
                                        <td className="p-3 whitespace-nowrap">
                                            {value.status}
                                        </td>
                                        <td className="p-3 whitespace-nowrap">
                                            {value.pattern}
                                        </td>
                                        <td className="p-3 whitespace-nowrap">
                                            {value.konstruksi}
                                        </td>
                                        <td className="p-3 whitespace-nowrap">
                                            {value.pic_konstruksi}
                                        </td>
                                        <td className="p-3 whitespace-nowrap">
                                            {value.tgl_kirim_konstruksi_human}
                                        </td>
                                        <td className="p-3 whitespace-nowrap">
                                            {value.pic_masterspec}
                                        </td>
                                        <td className="p-3 whitespace-nowrap">
                                            {value.tgl_done_masterspec_human}
                                        </td>
                                        <td className="p-3 whitespace-nowrap">
                                            {value.approve_masterspec_human}
                                        </td>
                                        <td className="p-3 whitespace-nowrap">
                                            {value.pic_wip_material}
                                        </td>
                                        <td className="p-3 whitespace-nowrap">
                                            {value.tgl_done_material_human}
                                        </td>
                                        <td className="p-3 whitespace-nowrap">
                                            {value.pic_wip_curing_and_building}
                                        </td>
                                        <td className="p-3 whitespace-nowrap">
                                            {
                                                value.tgl_done_curing_and_building_human
                                            }
                                        </td>
                                        <td className="p-3 whitespace-nowrap">
                                            {value.tgl_done_bop_release_human}
                                        </td>
                                        <td className="p-3 whitespace-nowrap">
                                            {value.pic_ekspedisi}
                                        </td>
                                        <td className="p-3 whitespace-nowrap">
                                            {value.tgl_ekspedisi}
                                        </td>
                                        <td className="p-3 whitespace-nowrap">
                                            {value.berat_gt}
                                        </td>
                                    </tr>
                                ))}
                                {reportPdms.length === 0 && (
                                    <tr>
                                        <td
                                            colSpan={4}
                                            className="p-3 text-red-400"
                                        >
                                            Data Code {filters.search} tidak
                                            ditemukan. Coba kata kunci lain.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    <div>
                        {hasAnyPermission(["report pdm create"]) && (
                            <button
                                onClick={() => setShowAddForm(true)}
                                className="mt-4 px-4 py-2 bg-green-600 rounded-md hover:bg-green-700"
                            >
                                Add
                            </button>
                        )}
                        {hasAnyPermission(["report pdm edit"]) &&
                            selectedId && (
                                <Link
                                    href={
                                        auth.user.roles[0].name === "Tech Spec"
                                            ? route(
                                                  "report-pdm.edit",
                                                  selectedId,
                                              )
                                            : auth.user.roles[0].name ===
                                                "Tech Konstruksi"
                                              ? route(
                                                    "report-pdm.edit-konstruksi",
                                                    selectedId,
                                                )
                                              : auth.user.roles[0].name ===
                                                  "Tech Material"
                                                ? route(
                                                      "report-pdm.edit.material",
                                                      selectedId,
                                                  )
                                                : auth.user.roles[0].name ===
                                                    "Tech Curing & Building"
                                                  ? route(
                                                        "report-pdm.edit.curing-building",
                                                        selectedId,
                                                    )
                                                  : "#"
                                    }
                                >
                                    <button className="mt-4 ml-2 px-4 py-2 bg-yellow-600 rounded-md hover:bg-yellow-700">
                                        Edit
                                    </button>
                                </Link>
                            )}
                        <button className="mt-4 ml-2 px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700">
                            Impact Analysis
                        </button>
                        <button className="mt-4 ml-2 px-4 py-2 bg-red-600 rounded-md hover:bg-red-700">
                            Close
                        </button>
                    </div>
                </div>
                <AddFormReportPdm
                    isOpen={showAddForm}
                    onClose={() => setShowAddForm(false)}
                />
            </Container>
        </DashboardLayout>
    );
}
