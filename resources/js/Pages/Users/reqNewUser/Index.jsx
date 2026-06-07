import Container from "@/Components/Container";
import DashboardLayout from "@/Layouts/DashboardLayout";
import hasAnyPermission from "@/Utils/Permissions";
import { Link, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function ReqNewUserList({ message }) {
    const { reqNewUsers } = usePage().props;
    const [newUsers, setNewUsers] = useState(reqNewUsers);
    const [searchTerm, setSearchTerm] = useState("");
    const [keyword, setKeyword] = useState("");

    useEffect(() => {
        setNewUsers(reqNewUsers);
    }, [reqNewUsers]);

    const search = (e) => {
        e.preventDefault();
        setKeyword(searchTerm);

        const filteredUsers = reqNewUsers.filter(
            (user) =>
                user.name.toLowerCase().includes(searchTerm) ||
                user.email.toLowerCase().includes(searchTerm) ||
                user.role.toLowerCase().includes(searchTerm),
        );
        setNewUsers(filteredUsers);
    };

    return (
        <>
            <DashboardLayout>
                <Container>
                    <div className="bg-gray-800 p-6 text-white rounded-xl shadow-lg">
                        <h1 className="text-xl font-semibold mb-4">
                            List Of Request New User
                        </h1>

                        <div>
                            <form className="mb-4 flex" onSubmit={search}>
                                <input
                                    type="text"
                                    placeholder="Cari Spesifikasi..."
                                    className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none"
                                    onChange={(e) => {
                                        setSearchTerm(
                                            e.target.value.toLowerCase(),
                                        );
                                    }}
                                />
                                <button
                                    className="ml-2 px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700"
                                    type="submit"
                                    onClick={search}
                                >
                                    Cari
                                </button>
                            </form>
                        </div>
                        <div className="w-full overflow-auto">
                            {message && (
                                <div className="mb-4 px-4 py-2 bg-green-600 text-white rounded-md">
                                    {message}
                                </div>
                            )}
                            <table className="min-w-full text-sm text-left">
                                <thead className="bg-gray-700 text-gray-300">
                                    <tr>
                                        <th className="p-3 whitespace-nowrap">
                                            Name
                                        </th>
                                        <th className="p-3 whitespace-nowrap">
                                            Email
                                        </th>
                                        <th className="p-3 whitespace-nowrap">
                                            Role
                                        </th>
                                        <th className="p-3 whitespace-nowrap">
                                            Approve
                                        </th>
                                        <th className="p-3 whitespace-nowrap">
                                            Created At
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {newUsers.map((value, index) => (
                                        <tr
                                            key={value.id}
                                            className="bg-gray-500 text-white hover:bg-gray-600"
                                        >
                                            <td className="p-3 whitespace-nowrap">
                                                {value.name}
                                            </td>
                                            <td className="p-3 whitespace-nowrap">
                                                {value.email}
                                            </td>
                                            <td className="p-3 whitespace-nowrap">
                                                {value.role}
                                            </td>
                                            <td className="p-3 whitespace-nowrap">
                                                {value.approved ? (
                                                    <span className="px-2 py-1 bg-green-600 rounded-md text-xs">
                                                        Approved
                                                    </span>
                                                ) : (
                                                    <Link
                                                        href={route(
                                                            "req-new-user.approve",
                                                            value.id,
                                                        )}
                                                        method="patch"
                                                        as="button"
                                                    >
                                                        <span className="px-2 py-1 bg-red-600 rounded-md text-xs">
                                                            Not Approved
                                                        </span>
                                                    </Link>
                                                )}
                                            </td>
                                            <td className="p-3 whitespace-nowrap">
                                                {value.created_at}
                                            </td>
                                        </tr>
                                    ))}
                                    {newUsers.length === 0 && (
                                        <tr>
                                            <td
                                                colSpan={4}
                                                className="p-3 text-red-400"
                                            >
                                                Data Code {keyword} tidak
                                                ditemukan. Coba kata kunci lain.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Container>
            </DashboardLayout>
        </>
    );
}
