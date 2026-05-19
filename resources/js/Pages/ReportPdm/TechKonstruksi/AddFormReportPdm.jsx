import DateTimeFlatpickr from "@/Components/DateTimeFlatpickr";
import InputError from "@/Components/InputError";
import Modal from "@/Components/Modal";
import { useForm, usePage } from "@inertiajs/react";
import Swal from "sweetalert2";

export default function AddFormReportPdm({ onClose, isOpen }) {
    const { auth } = usePage().props;

    const formatDate = () => {
        const now = new Date();
        const pad = (n) => n.toString().padStart(2, "0");

        return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(
            now.getDate(),
        )} ${pad(now.getHours())}:${pad(now.getMinutes())}`;
    };
    const { data, setData, post, errors, reset } = useForm({
        code: "",
        pattern: "",
        konstruksi: "",
        pic_konstruksi:
            auth.user.roles[0].name === "Tech Konstruksi" ? auth.user.name : "",
        tgl_kirim_konstruksi:
            auth.user.roles[0].name === "Tech Konstruksi" ? formatDate() : "",
        pic_masterspec: "",
        tgl_done_masterspec: "",
        tgl_approve_masterspec: "",
        status: "",
        pic_material: "",
        tgl_done_material: "",
        pic_curing_and_building: "",
        tgl_done_curing_and_building: "",
        tgl_done_bop_release: "",
        pic_ekspedisi: "",
        tgl_ekspedisi: "",
        berat_gt: "",
    });

    // useEffect(() => {
    //     if (auth.user.roles[0].name === "Tech Spec") {
    //         setData("tgl_done_masterspec", formatDate());
    //     }
    // }, [auth]);

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("report-pdm.store"), {
            onSuccess: () => {
                reset();
                onClose();
                Swal.fire({
                    title: "Success!",
                    text: "Data created successfully!",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 2000,
                });
            },
        });
    };

    const handleClose = () => {
        reset();
        onClose();
    };

    return (
        <>
            <Modal show={isOpen} onClose={handleClose}>
                <div className="p-6 bg-gray-800 flex flex-col items-center text-white w-full">
                    <h1 className="text-xl font-semibold mb-4">
                        Add Report PDM - {auth.user.roles[0].name}
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 gap-10 mb-6">
                            {/* LEFT */}
                            <div className="space-y-4">
                                {/* Code */}
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
                                        value={data.code}
                                        onChange={(e) =>
                                            setData("code", e.target.value)
                                        }
                                    />
                                    <InputError message={errors.code} />
                                </div>

                                {/* Pattern */}
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
                                        value={data.pattern}
                                        onChange={(e) =>
                                            setData("pattern", e.target.value)
                                        }
                                    />
                                    <InputError message={errors.pattern} />
                                </div>

                                {/* Konstruksi */}
                                <div className="grid grid-cols-[180px_1fr] items-center gap-4">
                                    <label
                                        htmlFor="konstruksi"
                                        className="text-white font-semibold"
                                    >
                                        Konstruksi
                                    </label>
                                    <input
                                        id="konstruksi"
                                        name="konstruksi"
                                        type="text"
                                        className="input"
                                        value={data.konstruksi}
                                        onChange={(e) =>
                                            setData(
                                                "konstruksi",
                                                e.target.value,
                                            )
                                        }
                                    />
                                    <InputError message={errors.konstruksi} />
                                </div>

                                {/* PIC Konstruksi */}
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
                                        onChange={(e) =>
                                            setData(
                                                "pic_konstruksi",
                                                e.target.value,
                                            )
                                        }
                                    />
                                    <InputError
                                        message={errors.pic_konstruksi}
                                    />
                                </div>

                                {/* Tanggal Kirim Konstruksi */}
                                <div className="grid grid-cols-[180px_1fr] items-center gap-4">
                                    <label className="text-white font-semibold">
                                        Tanggal Kirim
                                    </label>
                                    <DateTimeFlatpickr
                                        className="filled"
                                        value={data.tgl_kirim_konstruksi}
                                        onChange={(value) =>
                                            setData(
                                                "tgl_kirim_konstruksi",
                                                value,
                                            )
                                        }
                                        readOnly={true}
                                    />
                                    <InputError
                                        message={errors.tgl_kirim_konstruksi}
                                    />
                                </div>

                                {/* PIC Masterspec */}
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
                                        // onChange={(e) =>
                                        //     setData(
                                        //         "pic_masterspec",
                                        //         e.target.value,
                                        //     )
                                        // }
                                        disabled
                                    />
                                    <InputError
                                        message={errors.pic_masterspec}
                                    />
                                </div>

                                {/* Tanggal Done Masterspec */}
                                <div className="grid grid-cols-[180px_1fr] items-center gap-4">
                                    <label className="text-white font-semibold">
                                        Done Masterspec
                                    </label>
                                    <DateTimeFlatpickr
                                        className="disabled"
                                        value={data.tgl_done_masterspec}
                                        // onChange={(value) =>
                                        //     setData(
                                        //         "tgl_done_masterspec",
                                        //         value,
                                        //     )
                                        // }
                                        readOnly={true}
                                    />
                                    <InputError
                                        message={errors.tgl_done_masterspec}
                                    />
                                </div>

                                {/* Tanggal Approve Masterspec */}
                                <div className="grid grid-cols-[180px_1fr] items-center gap-4">
                                    <label className="text-white font-semibold">
                                        Approve Masterspec
                                    </label>
                                    <DateTimeFlatpickr
                                        className="disabled"
                                        value={data.tgl_approve_masterspec}
                                        // onChange={(value) =>
                                        //     setData(
                                        //         "tgl_approve_masterspec",
                                        //         value,
                                        //     )
                                        // }
                                        readOnly={true}
                                    />
                                    <InputError
                                        message={errors.tgl_approve_masterspec}
                                    />
                                </div>
                            </div>

                            {/* RIGHT */}
                            <div className="space-y-4">
                                {/* Status */}
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
                                        value={data.status}
                                        onChange={(e) =>
                                            setData("status", e.target.value)
                                        }
                                    />
                                    <InputError message={errors.status} />
                                </div>

                                {/* PIC WIP Material */}
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
                                        // onChange={(e) =>
                                        //     setData(
                                        //         "pic_material",
                                        //         e.target.value,
                                        //     )
                                        // }
                                        disabled
                                    />
                                    <InputError message={errors.pic_material} />
                                </div>

                                {/* Tanggal Done WIP Material */}
                                <div className="grid grid-cols-[180px_1fr] items-center gap-4">
                                    <label className="text-white font-semibold">
                                        Done WIP Material
                                    </label>
                                    <DateTimeFlatpickr
                                        className="disabled"
                                        value={data.tgl_done_material}
                                        // onChange={(value) =>
                                        //     setData("tgl_done_material", value)
                                        // }
                                        readOnly={true}
                                    />
                                    <InputError message={errors.pic_material} />
                                </div>

                                {/* PIC WIP Curing */}
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
                                        // onChange={(e) =>
                                        //     setData(
                                        //         "pic_curing",
                                        //         e.target.value,
                                        //     )
                                        // }
                                        disabled
                                    />
                                    <InputError message={errors.pic_curing} />
                                </div>

                                {/* Tanggal Done WIP Curing */}
                                <div className="grid grid-cols-[180px_1fr] items-center gap-4">
                                    <label className="text-white font-semibold">
                                        Done WIP Curing
                                    </label>
                                    <DateTimeFlatpickr
                                        className="disabled"
                                        value={data.tgl_done_curing}
                                        // onChange={(value) =>
                                        //     setData("tgl_done_curing", value)
                                        // }
                                        readOnly={true}
                                    />
                                    <InputError
                                        message={errors.tgl_done_curing}
                                    />
                                </div>

                                {/* PIC Cek BOP */}
                                <div className="grid grid-cols-[180px_1fr] items-center gap-4">
                                    <label className="text-white font-semibold">
                                        Done Cek BOP (Release)
                                    </label>
                                    <DateTimeFlatpickr
                                        className="disabled"
                                        value={data.tgl_done_cek_bop}
                                        // onChange={(value) =>
                                        //     setData("tgl_done_cek_bop", value)
                                        // }
                                        readOnly={true}
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
            </Modal>
        </>
    );
}
