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
        status: "",
    });

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
                                    <select
                                        name="pattern"
                                        id="pattern"
                                        className="input"
                                        value={data.pattern}
                                        onChange={(e) =>
                                            setData("pattern", e.target.value)
                                        }
                                    >
                                        <option value="">Select Pattern</option>
                                        <option value="ADVENTURO AT3">
                                            ADVENTURO AT3
                                        </option>
                                        <option value="ADVENTURO ATX">
                                            ADVENTURO ATX
                                        </option>
                                        <option value="ADVENTURO HT">
                                            ADVENTURO HT
                                        </option>
                                        <option value="ALL SEASON H/T">
                                            ALL SEASON H/T
                                        </option>
                                        <option value="ALL TERRAIN">
                                            ALL TERRAIN
                                        </option>
                                        <option value="BFGOODRICH ADVANTAGE">
                                            BFGOODRICH ADVANTAGE
                                        </option>
                                        <option value="CLASSIRO 75">
                                            CLASSIRO 75
                                        </option>
                                        <option value="CHAMPIRO BTX PLUS">
                                            CHAMPIRO BTX PLUS
                                        </option>
                                        <option value="CHAMPIRO BTX PRO">
                                            CHAMPIRO BTX PRO
                                        </option>
                                        <option value="CHAMPIRO ECO">
                                            CHAMPIRO ECO
                                        </option>
                                        <option value="CHAMPIRO HPY EV">
                                            CHAMPIRO HPY EV
                                        </option>
                                        <option value="CHAMPIRO GTX PRO">
                                            CHAMPIRO GTX PRO
                                        </option>
                                        <option value="CHAMPIRO GTX PRO2">
                                            CHAMPIRO GTX PRO2
                                        </option>
                                        <option value="CHAMPIRO HPY">
                                            CHAMPIRO HPY
                                        </option>
                                        <option value="SAVERO M/T PRO">
                                            SAVERO M/T PRO
                                        </option>
                                        <option value="CHAMPIRO LUXE">
                                            CHAMPIRO LUXE
                                        </option>
                                        <option value="CHAMPIRO SX2">
                                            CHAMPIRO SX2
                                        </option>
                                        <option value="CHAMPIRO SX-R">
                                            CHAMPIRO SX-R
                                        </option>
                                        <option value="CHAMPIRO TOURING A/S">
                                            CHAMPIRO TOURING A/S
                                        </option>
                                        <option value="CHAMPIRO UHP AS">
                                            CHAMPIRO UHP AS
                                        </option>
                                        <option value="CHAMPIRO ULTIMATE">
                                            CHAMPIRO ULTIMATE
                                        </option>
                                        <option value="CLASSIRO">
                                            CLASSIRO
                                        </option>
                                        <option value="CONFIDENCE ALL SEASON">
                                            CONFIDENCE ALL SEASON
                                        </option>
                                        <option value="DAT1">DAT1</option>
                                        <option value="DEXTERO DAT1">
                                            DEXTERO DAT1
                                        </option>
                                        <option value="DHT2">DHT2</option>
                                        <option value="FE2 EVO">FE2 EVO</option>
                                        <option value="GitiComfort 225v1">
                                            GitiComfort 225v1
                                        </option>
                                        <option value="GitiComfort F50">
                                            GitiComfort F50
                                        </option>
                                        <option value="GitiComfort F50s">
                                            GitiComfort F50s
                                        </option>
                                        <option value="GitiComfort T29">
                                            GitiComfort T29
                                        </option>
                                        <option value="GitiCompete GTR2">
                                            GitiCompete GTR2
                                        </option>
                                        <option value="GitiControl P10">
                                            GitiControl P10
                                        </option>
                                        <option value="GitiSport S2">
                                            GitiSport S2
                                        </option>
                                        <option value="GitiSynergy H2">
                                            GitiSynergy H2
                                        </option>
                                        <option value="GitiSynergy H2+">
                                            GitiSynergy H2+
                                        </option>
                                        <option value="GitiSynergy H3">
                                            GitiSynergy H3
                                        </option>
                                        <option value="GitiXcursion RT">
                                            GitiXcursion RT
                                        </option>
                                        <option value="GitiXross HT71">
                                            GitiXross HT71
                                        </option>
                                        <option value="KLEBER DYNAXER HP4">
                                            KLEBER DYNAXER HP4
                                        </option>
                                        <option value="MAXMILER CX">
                                            MAXMILER CX
                                        </option>
                                        <option value="MAXMILER PRO">
                                            MAXMILER PRO
                                        </option>
                                        <option value="MAXMILER TR01">
                                            MAXMILER TR01
                                        </option>
                                        <option value="MAXMILER TR88">
                                            MAXMILER TR88
                                        </option>
                                        <option value="MAXMILER TR99">
                                            MAXMILER TR99
                                        </option>
                                        <option value="MAXTOUR ALL Season">
                                            MAXTOUR ALL Season
                                        </option>
                                        <option value="MAXTOUR LX">
                                            MAXTOUR LX
                                        </option>
                                        <option value="PS890 TOURING">
                                            PS890 TOURING
                                        </option>
                                        <option value="PV610">PV610</option>
                                        <option value="RIKEN RAPTOR HR">
                                            RIKEN RAPTOR HR
                                        </option>
                                        <option value="RIKEN RAPTOR VR">
                                            RIKEN RAPTOR VR
                                        </option>
                                        <option value="RIKEN RAPTOR ZR A/S">
                                            RIKEN RAPTOR ZR A/S
                                        </option>
                                        <option value="SAVERO">SAVERO</option>
                                        <option value="SAVERO A/T">
                                            SAVERO A/T
                                        </option>
                                        <option value="SAVERO A/T PLUS">
                                            SAVERO A/T PLUS
                                        </option>
                                        <option value="CHAMPIRO ECOTEC">
                                            CHAMPIRO ECOTEC
                                        </option>
                                        <option value="SAVERO AT PRO-X">
                                            SAVERO AT PRO-X
                                        </option>
                                        <option value="SAVERO HT2">
                                            SAVERO HT2
                                        </option>
                                        <option value="SAVERO KOMODO M/T PLUS">
                                            SAVERO KOMODO M/T PLUS
                                        </option>
                                        <option value="SAVERO M/T">
                                            SAVERO M/T
                                        </option>
                                        <option value="SAVERO A/T PRO">
                                            SAVERO A/T PRO
                                        </option>
                                        <option value="SAVERO SUV">
                                            SAVERO SUV
                                        </option>
                                        <option value="TERRAIN ATTACK A/T A">
                                            TERRAIN ATTACK A/T A
                                        </option>
                                        <option value="TERRAIN ATTACK M/T A">
                                            TERRAIN ATTACK M/T A
                                        </option>
                                        <option value="TERRAIN PRO A/T P">
                                            TERRAIN PRO A/T P
                                        </option>
                                        <option value="TOURING DHT1">
                                            TOURING DHT1
                                        </option>
                                        <option value="TOURING DTR1 ECO">
                                            TOURING DTR1 ECO
                                        </option>
                                        <option value="TOURING VP PLUS">
                                            TOURING VP PLUS
                                        </option>
                                        <option value="UNIROYAL POWER PAW A/S">
                                            UNIROYAL POWER PAW A/S
                                        </option>
                                        <option value="UNIROYAL TIGER PAW TOURING A/S">
                                            UNIROYAL TIGER PAW TOURING A/S
                                        </option>
                                        <option value="VALERA ALL SEASON">
                                            VALERA ALL SEASON
                                        </option>
                                        <option value="VALERA AT">
                                            VALERA AT
                                        </option>
                                        <option value="VALERA HT">
                                            VALERA HT
                                        </option>
                                        <option value="VALERA Sport AS">
                                            VALERA Sport AS
                                        </option>
                                    </select>
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
                                    <select
                                        name="konstruksi"
                                        id="konstruksi"
                                        className="input"
                                        value={data.konstruksi}
                                        onChange={(e) =>
                                            setData(
                                                "konstruksi",
                                                e.target.value,
                                            )
                                        }
                                    >
                                        <option value="">
                                            Select Konstruksi
                                        </option>
                                        <option value="2P2S+1JF-COS">
                                            2P2S+1JF-COS
                                        </option>
                                        <option value="2P2S+JEJF-COS">
                                            2P2S+JEJF-COS
                                        </option>
                                        <option value="2P2S+2JF-COS">
                                            2P2S+2JF-COS
                                        </option>
                                        <option value="2P2S+2JF-SOC">
                                            2P2S+2JF-SOC
                                        </option>
                                        <option value="1P2S+JEJF-COS">
                                            1P2S+JEJF-COS
                                        </option>
                                        <option value="1P2S+1JF-COS">
                                            1P2S+1JF-COS
                                        </option>
                                        <option value="3P2S+JEJF-COS">
                                            3P2S+JEJF-COS
                                        </option>
                                        <option value="1P2S+2JF-COS">
                                            1P2S+2JF-COS
                                        </option>
                                        <option value="1R2S+JEJF-COS">
                                            1R2S+JEJF-COS
                                        </option>
                                        <option value="2R2S+2JF-COS">
                                            2R2S+2JF-COS
                                        </option>
                                        <option value="1P2S+2JF-SOC">
                                            1P2S+2JF-SOC
                                        </option>
                                        <option value="1P2S-COS">
                                            1P2S-COS
                                        </option>
                                        <option value="1R2S+2JF-COS">
                                            1R2S+2JF-COS
                                        </option>
                                        <option value="2R2S+JEJF-COS">
                                            2R2S+JEJF-COS
                                        </option>
                                        <option value="2P2S-COS">
                                            2P2S-COS
                                        </option>
                                        <option value="3P2S+2JF-COS">
                                            3P2S+2JF-COS
                                        </option>
                                        <option value="3P2S+1JF-COS">
                                            3P2S+1JF-COS
                                        </option>
                                        <option value="2P2S+2NE-COS">
                                            2P2S+2NE-COS
                                        </option>
                                        <option value="1R2S+2JF-SOC">
                                            1R2S+2JF-SOC
                                        </option>
                                        <option value="2R2S+JEJF-SOC">
                                            2R2S+JEJF-SOC
                                        </option>
                                        <option value="2R2S+2JF-SOC">
                                            2R2S+2JF-SOC
                                        </option>
                                        <option value="2R2S+JE2JF-COS">
                                            2R2S+JE2JF-COS
                                        </option>
                                        <option value="2P2S+1NF-COS">
                                            2P2S+1NF-COS
                                        </option>
                                        <option value="2P2S+JEJF-SOC">
                                            2P2S+JEJF-SOC
                                        </option>
                                        <option value="1P2S+1NF-COS">
                                            1P2S+1NF-COS
                                        </option>
                                        <option value="1P2S+2NF-COS">
                                            1P2S+2NF-COS
                                        </option>
                                        <option value="1P2S+JEJF-SOC">
                                            1P2S+JEJF-SOC
                                        </option>
                                        <option value="2P2S+1JF-COS">
                                            2P2S+1JF-COS
                                        </option>
                                        <option value="2P2S+JEJF-COS">
                                            2P2S+JEJF-COS
                                        </option>
                                        <option value="2P2S+2JF-COS">
                                            2P2S+2JF-COS
                                        </option>
                                        <option value="2P2S+2JF-SOC">
                                            2P2S+2JF-SOC
                                        </option>
                                        <option value="1P2S+JEJF-COS">
                                            1P2S+JEJF-COS
                                        </option>
                                        <option value="1R2S+JEJF-COS">
                                            1R2S+JEJF-COS
                                        </option>
                                        <option value="2R2S+2JF-COS">
                                            2R2S+2JF-COS
                                        </option>
                                        <option value="3R2S+1JF-COS">
                                            3R2S+1JF-COS
                                        </option>
                                        <option value="1P2S+1NE-COS">
                                            1P2S+1NE-COS
                                        </option>
                                        <option value="2P2S+2NF-COS">
                                            2P2S+2NF-COS
                                        </option>
                                        <option value="1P２S+1NE1NF-COS">
                                            1P２S+1NE1NF-COS
                                        </option>
                                        <option value="２P２S+1NE-COS">
                                            ２P２S+1NE-COS
                                        </option>
                                        <option value="１R２S+1JF-COS">
                                            １R２S+1JF-COS
                                        </option>
                                        <option value="２P２S+1NE1NF-COS">
                                            ２P２S+1NE1NF-COS
                                        </option>
                                        <option value="１P２S+２NE-COS">
                                            １P２S+２NE-COS
                                        </option>
                                        <option value="２P３S+１NF-COS">
                                            ２P３S+１NF-COS
                                        </option>
                                        <option value="１P２S+１JE-COS">
                                            １P２S+１JE-COS
                                        </option>
                                        <option value="2P2S+2JE-COS">
                                            2P2S+2JE-COS
                                        </option>
                                        <option value="2P2S+1JFT-COS">
                                            2P2S+1JFT-COS
                                        </option>
                                    </select>
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
                                        disabled
                                    />
                                </div>

                                {/* Tanggal Done Masterspec */}
                                <div className="grid grid-cols-[180px_1fr] items-center gap-4">
                                    <label className="text-white font-semibold">
                                        Done Masterspec
                                    </label>
                                    <DateTimeFlatpickr
                                        className="disabled"
                                        readOnly={true}
                                    />
                                </div>

                                {/* Tanggal Approve Masterspec */}
                                <div className="grid grid-cols-[180px_1fr] items-center gap-4">
                                    <label className="text-white font-semibold">
                                        Approve Masterspec
                                    </label>
                                    <DateTimeFlatpickr
                                        className="disabled"
                                        readOnly={true}
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
                                        disabled
                                    />
                                </div>

                                {/* Tanggal Done WIP Material */}
                                <div className="grid grid-cols-[180px_1fr] items-center gap-4">
                                    <label className="text-white font-semibold">
                                        Done WIP Material
                                    </label>
                                    <DateTimeFlatpickr
                                        className="disabled"
                                        readOnly={true}
                                    />
                                </div>

                                {/* PIC WIP Curing & Building */}
                                <div className="grid grid-cols-[180px_1fr] items-center gap-4">
                                    <label
                                        htmlFor="pic_curing_and_building"
                                        className="text-white font-semibold"
                                    >
                                        PIC WIP Curing &amp; Building
                                    </label>
                                    <input
                                        id="pic_curing"
                                        name="pic_curing_and_building"
                                        className="disabled"
                                        type="text"
                                        disabled
                                    />
                                </div>

                                {/* Tanggal Done WIP Curing & Building */}
                                <div className="grid grid-cols-[180px_1fr] items-center gap-4">
                                    <label className="text-white font-semibold">
                                        Done WIP Curing &amp; Building
                                    </label>
                                    <DateTimeFlatpickr
                                        className="disabled"
                                        readOnly={true}
                                    />
                                </div>

                                {/* PIC Cek BOP */}
                                <div className="grid grid-cols-[180px_1fr] items-center gap-4">
                                    <label className="text-white font-semibold">
                                        Done Cek BOP (Release)
                                    </label>
                                    <DateTimeFlatpickr
                                        className="disabled"
                                        readOnly={true}
                                    />
                                </div>

                                {/* PIC Ekspedisi */}
                                <div className="grid grid-cols-[180px_1fr] items-center gap-4">
                                    <label className="text-white font-semibold">
                                        PIC Ekspedisi
                                    </label>
                                    <input
                                        type="text"
                                        className="disabled"
                                        disabled
                                    />
                                </div>

                                {/* Tanggal Ekspedisi */}
                                <div className="grid grid-cols-[180px_1fr] items-center gap-4">
                                    <label className="text-white font-semibold">
                                        Tanggal Ekspedisi
                                    </label>
                                    <DateTimeFlatpickr
                                        className="disabled"
                                        readOnly={true}
                                    />
                                </div>

                                {/* Berat GT */}
                                <div className="grid grid-cols-[180px_1fr] items-center gap-4">
                                    <label className="text-white font-semibold">
                                        Berat GT
                                    </label>
                                    <input
                                        type="text"
                                        className="disabled"
                                        disabled
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
