import DateTimeFlatpickr from "@/Components/DateTimeFlatpickr";
import Modal from "@/Components/Modal";
import { usePage } from "@inertiajs/react";
import { useEffect, useRef } from "react";

export default function AddFormReportPdm({ title, onClose, isOpen, onSubmit }) {
    const addFormRef = useRef(null);
    const user = usePage().props.auth.user;

    return (
        <>
            <Modal show={isOpen} onClose={onClose}>
                <div className="p-6 bg-gray-800 flex flex-col items-center text-white w-full">
                    <h1 className="text-xl font-semibold mb-4">
                        Add Report PDM - {title}
                    </h1>
                    <form>
                        <div className="grid grid-cols-2 gap-10 mb-6">
                            {/* LEFT */}
                            <div className="space-y-4">
                                <div className="grid grid-cols-[180px_1fr] items-center gap-4">
                                    <label
                                        htmlFor="code"
                                        className="text-white font-semibold"
                                    >
                                        Code
                                    </label>
                                    <input
                                        type="text"
                                        name="code"
                                        id="code"
                                        className="input"
                                    />
                                </div>

                                <div className="grid grid-cols-[180px_1fr] items-center gap-4">
                                    <label
                                        htmlFor="pattern"
                                        className="text-white font-semibold"
                                    >
                                        Pattern
                                    </label>
                                    <input
                                        id="pattern"
                                        name="pattern"
                                        type="text"
                                        className="input"
                                    />
                                </div>

                                <div className="grid grid-cols-[180px_1fr] items-center gap-4">
                                    <label
                                        htmlFor="pic_konstruksi"
                                        className="text-white font-semibold"
                                    >
                                        PIC Konstruksi
                                    </label>
                                    <input
                                        id="pic_konstruksi"
                                        name="pic_konstruksi"
                                        type="text"
                                        className="input"
                                        value={user.name}
                                    />
                                </div>

                                <div className="grid grid-cols-[180px_1fr] items-center gap-4">
                                    <label className="text-white font-semibold">
                                        Tanggal Kirim
                                    </label>
                                    <DateTimeFlatpickr
                                        className="input"
                                        readOnly
                                    />
                                </div>

                                <div className="grid grid-cols-[180px_1fr] items-center gap-4">
                                    <label
                                        htmlFor="pic_masterspec"
                                        className="text-white font-semibold"
                                    >
                                        PIC Masterspec
                                    </label>
                                    <input
                                        id="pic_masterspec"
                                        name="pic_masterspec"
                                        type="text"
                                        className="input"
                                    />
                                </div>

                                <div className="grid grid-cols-[180px_1fr] items-center gap-4">
                                    <label className="text-white font-semibold">
                                        Done Masterspec
                                    </label>
                                    <DateTimeFlatpickr
                                        className="input"
                                        readOnly
                                    />
                                </div>

                                <div className="grid grid-cols-[180px_1fr] items-center gap-4">
                                    <label className="text-white font-semibold">
                                        Approve Masterspec
                                    </label>
                                    <DateTimeFlatpickr
                                        className="input"
                                        readOnly
                                    />
                                </div>
                            </div>

                            {/* RIGHT */}
                            <div className="space-y-4">
                                <div className="grid grid-cols-[180px_1fr] items-center gap-4">
                                    <label
                                        htmlFor="status"
                                        className="text-white font-semibold"
                                    >
                                        Status
                                    </label>
                                    <input
                                        id="status"
                                        name="status"
                                        type="text"
                                        className="input"
                                    />
                                </div>

                                <div className="grid grid-cols-[180px_1fr] items-center gap-4">
                                    <label
                                        htmlFor="pic_material"
                                        className="text-white font-semibold"
                                    >
                                        PIC WIP Material
                                    </label>
                                    <input
                                        id="pic_material"
                                        name="pic_material"
                                        className="input"
                                    />
                                </div>

                                <div className="grid grid-cols-[180px_1fr] items-center gap-4">
                                    <label className="text-white font-semibold">
                                        Done WIP Material
                                    </label>
                                    <DateTimeFlatpickr
                                        className="input"
                                        readOnly
                                    />
                                </div>

                                <div className="grid grid-cols-[180px_1fr] items-center gap-4">
                                    <label
                                        htmlFor="pic_curing"
                                        className="text-white font-semibold"
                                    >
                                        PIC WIP Curing
                                    </label>
                                    <input
                                        id="pic_curing"
                                        name="pic_curing"
                                        className="input"
                                        type="text"
                                    />
                                </div>

                                <div className="grid grid-cols-[180px_1fr] items-center gap-4">
                                    <label className="text-white font-semibold">
                                        Done WIP Curing
                                    </label>
                                    <DateTimeFlatpickr
                                        className="input"
                                        readOnly
                                    />
                                </div>

                                <div className="grid grid-cols-[180px_1fr] items-center gap-4">
                                    <label className="text-white font-semibold">
                                        Done Cek BOP (Release)
                                    </label>
                                    <DateTimeFlatpickr className="input" />
                                </div>
                            </div>
                        </div>

                        {/* BUTTON */}
                        <div className="flex gap-3 mt-6">
                            <button className="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700">
                                Simpan
                            </button>
                            <button
                                type="button"
                                onClick={onClose}
                                className="px-4 py-2 bg-red-600 rounded-md hover:bg-red-700"
                            >
                                Batal
                            </button>
                        </div>
                    </form>
                </div>
            </Modal>
        </>
    );
}
