import DashboardLayout from "@/Layouts/DashboardLayout";
import AddFormReportPdm from "@/Components/AddFormReportPdm";
import { useState, useRef } from "react";

export default function Index() {
    const [showAddForm, setShowAddForm] = useState(false);
    const addFormRef = useRef(null);
    const handleAddClick = () => {
        // Logic untuk menampilkan form tambah data
        setShowAddForm(true);
    };

    return (
        <DashboardLayout>
            <div className="bg-gray-800 p-6 text-white rounded-xl shadow-lg">
                <h1 className="text-xl font-semibold mb-4">
                    List Report DPM - Tech Spec
                </h1>

                <div className="mb-4 flex">
                    <input
                        type="text"
                        placeholder="Cari Spesifikasi..."
                        className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none"
                    />
                    <button className="ml-2 px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700">
                        Cari
                    </button>
                </div>

                <div className="w-[1150px] overflow-scroll">
                    <table className="min-w-max text-sm text-left">
                        <thead className="bg-gray-700 text-gray-300">
                            <tr>
                                <th className="p-3 whitespace-nowrap">Code</th>
                                <th className="p-3 whitespace-nowrap">
                                    Status
                                </th>
                                <th className="p-3 whitespace-nowrap">
                                    Pattern
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
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>
                <div>
                    <button
                        onClick={handleAddClick}
                        className="mt-4 px-4 py-2 bg-green-600 rounded-md hover:bg-green-700"
                    >
                        Add
                    </button>
                    <button className="mt-4 ml-2 px-4 py-2 bg-yellow-600 rounded-md hover:bg-yellow-700">
                        Edit
                    </button>
                    <button className="mt-4 ml-2 px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700">
                        Impact Analysis
                    </button>
                    <button className="mt-4 ml-2 px-4 py-2 bg-red-600 rounded-md hover:bg-red-700">
                        Close
                    </button>
                </div>
            </div>
            {showAddForm && (
                <AddFormReportPdm
                    title="Tech Spec"
                    isOpen={showAddForm}
                    onClose={() => setShowAddForm(false)}
                />
            )}
        </DashboardLayout>
    );
}
