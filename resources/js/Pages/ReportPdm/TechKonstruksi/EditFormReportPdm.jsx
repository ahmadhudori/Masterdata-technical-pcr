import Container from "@/Components/Container";
import DateTimeFlatpickr from "@/Components/DateTimeFlatpickr";
import InputError from "@/Components/InputError";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { useForm, usePage } from "@inertiajs/react";
import Swal from "sweetalert2";

export default function EditFormReportPdm({ reportPdm }) {
    const { auth } = usePage().props;

    const formatDateNow = () => {
        const now = new Date();
        const pad = (n) => n.toString().padStart(2, "0");

        return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(
            now.getDate(),
        )} ${pad(now.getHours())}:${pad(now.getMinutes())}`;
    };

    const formatDate = (date) => {
        const d = new Date(date);
        const pad = (n) => n.toString().padStart(2, "0");

        return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(
            d.getDate(),
        )} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
    };

    const { data, setData, get, put, errors, reset } = useForm({
        code: reportPdm.code,
        pattern: reportPdm.pattern,
        pic_konstruksi: reportPdm.pic_konstruksi,
        tgl_kirim_konstruksi: formatDate(reportPdm.tgl_kirim_konstruksi),
        pic_masterspec: reportPdm.pic_masterspec ?? "",
        tgl_done_masterspec: reportPdm.tgl_done_masterspec ?? "",
        tgl_approve_masterspec: reportPdm.approve_masterspec ?? "",
        status: reportPdm.status,
        pic_material: reportPdm.pic_material ?? "",
        tgl_done_material: reportPdm.tgl_done_material ?? "",
        pic_curing: reportPdm.pic_curing ?? "",
        tgl_done_curing: reportPdm.tgl_done_curing ?? "",
        tgl_done_cek_bop: reportPdm.tgl_done_cek_bop ?? "",
        _method: "PUT",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route("report-pdm.update-konstruksi", reportPdm.id), {
            onSuccess: () => {
                reset();
                Swal.fire({
                    title: "Success!",
                    text: "Data Masterspec has approved",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 2000,
                });
            },
        });
    };

    const handleClose = () => {
        reset();
        get(route("report-pdm.index"));
    };

    return (
        <>
            <DashboardLayout>
                <Container>
                    <div className="p-6 bg-gray-800 flex flex-col items-center text-white w-full rounded-xl">
                        <h1 className="text-xl font-semibold mb-4">
                            Approve Masterspec - {auth.user.roles[0].name}
                        </h1>
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-2 gap-10 mb-6">
                                {/* LEFT */}
                                <div className="space-y-4">
                                    {/* CODE */}
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
                                            className="filled"
                                            value={data.code}
                                            onChange={(e) =>
                                                setData("code", e.target.value)
                                            }
                                            disabled
                                        />
                                        <InputError message={errors.code} />
                                    </div>

                                    {/* PATTERN */}
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
                                            className="filled"
                                            value={data.pattern}
                                            onChange={(e) =>
                                                setData(
                                                    "pattern",
                                                    e.target.value,
                                                )
                                            }
                                            disabled
                                        />
                                        <InputError message={errors.pattern} />
                                    </div>

                                    {/* PIC KONSTRUKSI */}
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
                                            className="filled"
                                            value={data.pic_konstruksi}
                                            disabled
                                        />
                                        <InputError
                                            message={errors.pic_konstruksi}
                                        />
                                    </div>

                                    {/* TGL KIRIM KONSTRUKSI */}
                                    <div className="grid grid-cols-[180px_1fr] items-center gap-4">
                                        <label className="text-white font-semibold">
                                            Tanggal Kirim
                                        </label>
                                        <DateTimeFlatpickr
                                            className="filled"
                                            value={data.tgl_kirim_konstruksi}
                                            readOnly
                                        />
                                        <InputError
                                            message={
                                                errors.tgl_kirim_konstruksi
                                            }
                                        />
                                    </div>

                                    {/* PIC MASTERSPEC */}
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
                                            className="disabled"
                                            value={data.pic_masterspec}
                                            disabled
                                            // onChange={(e) =>
                                            //     setData(
                                            //         "pic_masterspec",
                                            //         e.target.value,
                                            //     )
                                            // }
                                        />
                                        <InputError
                                            message={errors.pic_masterspec}
                                        />
                                    </div>

                                    {/* TGL DONE MASTERSPEC */}
                                    <div className="grid grid-cols-[180px_1fr] items-center gap-4">
                                        <label className="text-white font-semibold">
                                            Done Masterspec
                                        </label>
                                        <DateTimeFlatpickr
                                            className="disabled"
                                            value={data.tgl_done_masterspec}
                                            readOnly
                                            // onChange={(value) =>
                                            //     setData(
                                            //         "tgl_approve_masterspec",
                                            //         value,
                                            //     )
                                            // }
                                        />
                                        <InputError
                                            message={errors.tgl_done_masterspec}
                                        />
                                    </div>

                                    {/* TGL APPROVE MASTERSPEC */}
                                    <div className="grid grid-cols-[180px_1fr] items-center gap-4">
                                        <label className="text-white font-semibold">
                                            Approve Masterspec
                                        </label>
                                        <DateTimeFlatpickr
                                            className="input"
                                            value={data.tgl_approve_masterspec}
                                            // readOnly={true}
                                            onChange={(value) =>
                                                setData(
                                                    "tgl_approve_masterspec",
                                                    value,
                                                )
                                            }
                                            onClose={(value) =>
                                                setData(
                                                    "tgl_approve_masterspec",
                                                    value,
                                                )
                                            }
                                        />
                                        <InputError
                                            message={
                                                errors.tgl_approve_masterspec
                                            }
                                        />
                                    </div>
                                </div>

                                {/* RIGHT */}
                                <div className="space-y-4">
                                    {/* STATUS */}
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
                                            className="filled"
                                            value={data.status}
                                            disabled
                                            // onChange={(e) =>
                                            //     setData("status", e.target.value)
                                            // }
                                        />
                                        <InputError message={errors.status} />
                                    </div>

                                    {/* PIC WIP MATERIAL */}
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
                                            className="disabled"
                                            type="text"
                                            value={data.pic_material}
                                            disabled
                                            // onChange={(e) =>
                                            //     setData(
                                            //         "pic_material",
                                            //         e.target.value,
                                            //     )
                                            // }
                                        />
                                        <InputError
                                            message={errors.pic_material}
                                        />
                                    </div>

                                    {/* TGL DONE WIP MATERIAL */}
                                    <div className="grid grid-cols-[180px_1fr] items-center gap-4">
                                        <label className="text-white font-semibold">
                                            Done WIP Material
                                        </label>
                                        <DateTimeFlatpickr
                                            className="disabled"
                                            value={data.tgl_done_material}
                                            readOnly={true}
                                            // onChange={(value) =>
                                            //     setData("tgl_done_material", value)
                                            // }
                                        />
                                        <InputError
                                            message={errors.pic_material}
                                        />
                                    </div>

                                    {/* PIC WIP CURING */}
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
                                            className="disabled"
                                            type="text"
                                            value={data.pic_curing}
                                            disabled
                                            // onChange={(e) =>
                                            //     setData(
                                            //         "pic_curing",
                                            //         e.target.value,
                                            //     )
                                            // }
                                        />
                                        <InputError
                                            message={errors.pic_curing}
                                        />
                                    </div>

                                    {/* TGL DONE WIP CURING */}
                                    <div className="grid grid-cols-[180px_1fr] items-center gap-4">
                                        <label className="text-white font-semibold">
                                            Done WIP Curing
                                        </label>
                                        <DateTimeFlatpickr
                                            className="disabled"
                                            value={data.tgl_done_curing}
                                            readOnly={true}
                                            // onChange={(value) =>
                                            //     setData("tgl_done_curing", value)
                                            // }
                                        />
                                        <InputError
                                            message={errors.tgl_done_curing}
                                        />
                                    </div>

                                    {/* TGL DONE CEK BOP */}
                                    <div className="grid grid-cols-[180px_1fr] items-center gap-4">
                                        <label className="text-white font-semibold">
                                            Done Cek BOP (Release)
                                        </label>
                                        <DateTimeFlatpickr
                                            className="disabled"
                                            value={data.tgl_done_cek_bop}
                                            readOnly={true}
                                            // onChange={(value) =>
                                            //     setData("tgl_done_cek_bop", value)
                                            // }
                                        />
                                        <InputError
                                            message={errors.tgl_done_cek_bop}
                                        />
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
                                    onClick={handleClose}
                                    className="px-4 py-2 bg-red-600 rounded-md hover:bg-red-700"
                                >
                                    Batal
                                </button>
                            </div>
                        </form>
                    </div>
                </Container>
            </DashboardLayout>
        </>
    );
}
