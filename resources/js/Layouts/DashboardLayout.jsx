import { useState } from "react";
import useTheme from "@/Hooks/UseTheme";
import Sidebar from "@/Components/Sidebar";
import Dropdown from "@/Components/Dropdown";

export default function DashboardLayout({ children }) {
    const [open, setOpen] = useState(true);
    const { theme, setTheme } = useTheme();

    return (
        <div className="flex h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
            {/* Sidebar */}
            <Sidebar open={open} />

            {/* Main */}
            <div className="flex-1 flex flex-col min-w-0">
                {/* Topbar */}
                <header className="flex justify-between items-center p-4 bg-blue-500 dark:bg-gray-800 shadow">
                    <button onClick={() => setOpen(!open)}>☰</button>

                    {/* Theme Switcher */}
                    <div className="space-x-2">
                        <button
                            onClick={() => setTheme("light")}
                            className="px-2 text-md"
                        >
                            ☀️
                        </button>
                        <button
                            onClick={() => setTheme("dark")}
                            className="px-2"
                        >
                            🌙
                        </button>
                        <button
                            onClick={() => setTheme("system")}
                            className="px-2"
                        >
                            💻
                        </button>
                        <div className="inline-block relative">
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <button>⚙️</button>
                                </Dropdown.Trigger>
                                <Dropdown.Content>
                                    <Dropdown.Link href={route("profile.edit")}>
                                        Profile
                                    </Dropdown.Link>
                                    <Dropdown.Link href="#">
                                        Settings
                                    </Dropdown.Link>
                                    <Dropdown.Link
                                        href={route("logout")}
                                        method="post"
                                        as="button"
                                    >
                                        Logout
                                    </Dropdown.Link>
                                </Dropdown.Content>
                            </Dropdown>
                        </div>
                    </div>
                </header>

                {/* Content */}
                <main className="p-6 overflow-scroll">{children}</main>
            </div>
        </div>
    );
}
