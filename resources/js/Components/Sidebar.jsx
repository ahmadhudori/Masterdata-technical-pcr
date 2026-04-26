import hasAnyPermission from "@/Utils/Permissions";
import { Link } from "@inertiajs/react";
import { useState } from "react";

export default function Sidebar({ open }) {
    const [openDropdown, setOpenDropdown] = useState(false);
    return (
        <aside
            className={`bg-gray-800 text-white w-64 p-4 transition duration-300 ${open ? "" : "hidden"}`}
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
                    className={`block hover:bg-gray-700 p-2 rounded ${(openDropdown ? "bg-gray-700" : "", route().current("ReportPdm") ? "bg-gray-700" : "")}`}
                    onClick={() => setOpenDropdown(!openDropdown)}
                >
                    <button>Report PDM</button>
                    {openDropdown && (
                        <>
                            <div className="bottom-0 left-0 bg-gray-700 hover:bg-gray-600 shadow-md rounded">
                                <Link
                                    href={route("ReportPdm")}
                                    className="block px-4 py-2"
                                >
                                    Tech Spec
                                </Link>
                            </div>
                            <div className="bottom-0 left-0 bg-gray-700 hover:bg-gray-600 shadow-md rounded">
                                <a href="#" className="block px-4 py-2">
                                    Tech Konstruksi
                                </a>
                            </div>
                            <div className="bottom-0 left-0 bg-gray-700 hover:bg-gray-600 shadow-md rounded">
                                <a href="#" className="block px-4 py-2">
                                    Tech Material
                                </a>
                            </div>
                            <div className="bottom-0 left-0 bg-gray-700 hover:bg-gray-600 shadow-md rounded">
                                <a href="#" className="block px-4 py-2">
                                    Tech Building
                                </a>
                            </div>
                            <div className="bottom-0 left-0 bg-gray-700 hover:bg-gray-600 shadow-md rounded">
                                <a href="#" className="block px-4 py-2">
                                    Tech Curing
                                </a>
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
                        active={route().current("roles*")}
                        className={`block hover:bg-gray-700 p-2 mt-2 ${route().current("roles.index") ? "bg-gray-700" : ""}`}
                    >
                        Roles
                    </Link>
                )}
                {hasAnyPermission(["users index"]) && (
                    <Link
                        href={route("users.index")}
                        active={route().current("users*")}
                        className={`block hover:bg-gray-700 p-2 mt-2 ${route().current("users.index") ? "bg-gray-700" : ""}`}
                    >
                        Users
                    </Link>
                )}
            </nav>
        </aside>
    );
}
