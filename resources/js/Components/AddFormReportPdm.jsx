import DateTimeFlatpickr from "@/Components/DateTimeFlatpickr";
import { usePage } from "@inertiajs/react";
import { useEffect, useRef } from "react";

export default function AddFormReportPdm({ title, onClose, isOpen, onSubmit }) {
    const addFormRef = useRef(null);
    const user = usePage().props.auth.user;

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", handleEsc);
        return () => {
            document.removeEventListener("keydown", handleEsc);
        };
    }, [onClose]);

    if (!isOpen) return null;

    const handleClickOutside = (e) => {
        if (addFormRef.current && !addFormRef.current.contains(e.target)) {
            onClose();
        }
    };

    return (
        <>
            <div
                onClick={handleClickOutside}
                ref={addFormRef}
                className="absolute z-10 inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            >
                <div className="bg-gray-800 px-8 py-6 text-white rounded-xl shadow-lg">
                    <h1 className="text-xl font-semibold mb-4">
                        Add Report DPM - {title}
                    </h1>
                    <form>
                        <div className="flex gap-8 mb-4">
                            <div className="flex flex-col gap-4">
                                <div className="">
                                    <label className="block mb-2">Code</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none"
                                    />
                                </div>
                                <div className="">
                                    <label className="block mb-2">
                                        Pattern
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none"
                                    />
                                </div>
                                <div className="">
                                    <label className="block mb-2">
                                        PIC Konstruksi
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none"
                                    />
                                </div>
                                <div className="">
                                    <label className="block mb-2">
                                        Tanggal Kirim Konstruksi
                                    </label>
                                    <DateTimeFlatpickr
                                        className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none"
                                        readOnly={true}
                                    />
                                </div>
                                <div className="">
                                    <label className="block mb-2">
                                        PIC Masterspec
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none"
                                    />
                                </div>
                                <div className="">
                                    <label className="block mb-2">
                                        Tanggal Done Masterspec
                                    </label>
                                    <DateTimeFlatpickr
                                        className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none"
                                        readOnly={true}
                                    />
                                </div>
                                <div className="">
                                    <label className="block mb-2">
                                        Tanggal Approve Masterspec
                                    </label>
                                    <DateTimeFlatpickr
                                        className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none"
                                        readOnly={true}
                                    />
                                </div>
                            </div>
                            <div className="fex flex-col gap-4">
                                <div className="mb-4">
                                    <label className="block mb-2">Status</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2">
                                        PIC WIP Material
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2">
                                        Tanggal Done WIP Material
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2">
                                        PIC WIP Curing & Building
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2">
                                        Tanggal Done WIP Curing & Building
                                    </label>
                                    <DateTimeFlatpickr
                                        readOnly
                                        className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2">
                                        Tanggal Done Cek BOP ( Release )
                                    </label>
                                    <DateTimeFlatpickr
                                        readOnly
                                        className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <button
                                type="submit"
                                className="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700"
                            >
                                Simpan
                            </button>
                            <button
                                type="button"
                                onClick={onClose}
                                className="px-4 py-2 ml-2 bg-red-600 rounded-md hover:bg-red-700"
                            >
                                Batal
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
