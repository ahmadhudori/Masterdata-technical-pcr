import React from "react";
import { IconSearch } from "@tabler/icons-react";
import { useForm } from "@inertiajs/react";

export default function Search({ placeholder, url }) {
    const { data, setData, get } = useForm({
        search: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        get(`${url}?search=${data.search}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="relative">
                <input
                    type="text"
                    className="py-2 px-4 block w-full rounded-lg text-sm border focus:outline-none focus:ring-0 focus:ring-gray-700 bg-white focus:border-gray-200 text-gray-700"
                    placeholder={placeholder}
                    value={data.search}
                    onChange={(e) => setData("search", e.target.value)}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-4">
                    <IconSearch size={18} strokeWidth={1.5} type="submit" />
                </div>
            </div>
        </form>
    );
}
