import hasAnyPermission from "@/Utils/Permissions";
import { Link, usePage } from "@inertiajs/react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Sidebar({ open }) {
    const { auth, reqNewUsers } = usePage().props;
    const [openDropdown, setOpenDropdown] = useState(false);
    const [requestNewUsers, setRequestNewUsers] = useState(
        reqNewUsers.filter((req) => req.approved === 0).length,
    );

    useEffect(() => {
        const interval = setInterval(async () => {
            try {
                const response = await axios.get(
                    "/cek-update-request-new-users",
                );
                setRequestNewUsers(response.data.count);
            } catch (error) {
                console.error("Error fetching request new users:", error);
            }
        }, 600000); // Cek setiap 10 menit (600000 ms)

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (reqNewUsers) {
            setRequestNewUsers(
                reqNewUsers.filter((req) => req.approved === 0).length,
            );
        }
    }, [reqNewUsers]);

    return (
        <aside
            className={`bg-gray-800 text-white transition duration-300 ${open ? " w-64 p-4" : "w-0 overflow-hidden"}`}
        >
            <h1 className="text-xl font-bold mb-6">Technical PCR</h1>

            <nav className="space-y-2">
                <Link
                    href={route("dashboard")}
                    className={`block hover:bg-gray-700 p-2 rounded ${route().current("dashboard") ? "bg-gray-700" : ""}`}
                >
                    Dashboard
                </Link>
                <Link href="#" className="block hover:bg-gray-700 p-2 rounded">
                    Analytic
                </Link>
                <Link href="#" className="block hover:bg-gray-700 p-2 rounded">
                    Order Die
                </Link>
                <Link href="#" className="block hover:bg-gray-700 p-2 rounded">
                    Master Tabel
                </Link>
                <Link href="#" className="block hover:bg-gray-700 p-2 rounded">
                    Order PR Technical
                </Link>
                <Link href="#" className="block hover:bg-gray-700 p-2 rounded">
                    Order EJO Technical
                </Link>
                <div
                    className={`block hover:bg-gray-700 p-2 rounded ${openDropdown ? "bg-gray-700" : route().current("report-pdm.*") ? "bg-gray-700" : ""}`}
                    onClick={() => setOpenDropdown(!openDropdown)}
                >
                    <button>Report PDM</button>
                    {openDropdown && (
                        <>
                            <div className="bottom-0 left-0 bg-gray-700 hover:bg-gray-600 shadow-md rounded">
                                <Link
                                    href={
                                        auth.user.roles[0].name === "Tech Spec"
                                            ? route("report-pdm.index")
                                            : "#"
                                    }
                                    className="block px-4 py-2"
                                >
                                    Tech Spec
                                </Link>
                            </div>
                            <div className="bottom-0 left-0 bg-gray-700 hover:bg-gray-600 shadow-md rounded">
                                <Link
                                    href={
                                        auth.user.roles[0].name ===
                                        "Tech Konstruksi"
                                            ? route("report-pdm.index")
                                            : "#"
                                    }
                                    className="block px-4 py-2"
                                >
                                    Tech Konstruksi
                                </Link>
                            </div>
                            <div className="bottom-0 left-0 bg-gray-700 hover:bg-gray-600 shadow-md rounded">
                                <Link
                                    href={
                                        auth.user.roles[0].name ===
                                        "Tech Material"
                                            ? route("report-pdm.index")
                                            : "#"
                                    }
                                    className="block px-4 py-2"
                                >
                                    Tech Material
                                </Link>
                            </div>
                            <div className="bottom-0 left-0 bg-gray-700 hover:bg-gray-600 shadow-md rounded">
                                <Link
                                    href={
                                        auth.user.roles[0].name ===
                                        "Tech Curing & Building"
                                            ? route("report-pdm.index")
                                            : "#"
                                    }
                                    className="block px-4 py-2"
                                >
                                    Tech Curing/Building
                                </Link>
                            </div>
                        </>
                    )}
                </div>
                <a
                    href="#"
                    className="block hover:bg-gray-700 p-2 rounded mt-2"
                >
                    Start Produksi
                </a>
                {hasAnyPermission(["permissions index"]) && (
                    <Link
                        href={route("permissions.index")}
                        className={`block hover:bg-gray-700 p-2 mt-2 ${route().current("permissions.index") ? "bg-gray-700" : ""}`}
                    >
                        Permission
                    </Link>
                )}
                {hasAnyPermission(["roles index"]) && (
                    <Link
                        href={route("roles.index")}
                        className={`block hover:bg-gray-700 p-2 mt-2 ${route().current("roles.index") ? "bg-gray-700" : ""}`}
                    >
                        Roles
                    </Link>
                )}
                {hasAnyPermission(["users index"]) && (
                    <Link
                        href={route("users.index")}
                        className={`block hover:bg-gray-700 p-2 mt-2 ${route().current("users.index") ? "bg-gray-700" : ""}`}
                    >
                        Users
                    </Link>
                )}
                <Link
                    href={route("request-new-users.list")}
                    className="block hover:bg-gray-700 p-2 mt-2 rounded"
                >
                    <div className="flex items-center justify-between">
                        <button type="button">Request New User</button>
                        <span className="p-1 bg-red-600 w-5 h-5 text-xs font-bold rounded-full flex justify-center items-center">
                            {requestNewUsers}
                        </span>
                    </div>
                </Link>
            </nav>
        </aside>
    );
}
