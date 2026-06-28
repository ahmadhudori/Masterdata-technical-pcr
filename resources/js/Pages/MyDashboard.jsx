import DashboardLayout from "@/Layouts/DashboardLayout";
import { usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { ResponsiveContainer, PieChart, Pie, Tooltip, Legend } from "recharts";

export default function Dashboard({ approved, pending, total }) {
    const { auth } = usePage().props;
    const [stats, setStats] = useState({
        approved: approved,
        pending: pending,
        total: total,
    });
    const chartData = [
        {
            name: "Approved",
            value: stats.approved,
            fill: "#22c55e",
        },
        {
            name: "Pending",
            value: stats.pending,
            fill: "#facc15",
        },
    ];
    const CustomTooltip = ({ active, payload }) => {
        if (!active || !payload?.length) return null;

        return (
            <div className="rounded-lg bg-white shadow-md border p-3">
                <p className="font-semibold">{payload[0].name}</p>

                <p>Jumlah : {payload[0].value}</p>
            </div>
        );
    };

    useEffect(() => {
        window.Echo.channel("dashboard-users").listen(
            ".approval.updated",
            (event) => {
                setStats({
                    approved: event.approved,
                    pending: event.pending,
                    total: event.total,
                });
            },
        );

        return () => {
            window.Echo.leave("dashboard-users");
        };
    }, []);

    return (
        <DashboardLayout>
            <div className="w-full rounded-lg overflow-hidden shadow-lg p-2">
                <h1 className="text-3xl text-slate-800 text-center font-semibold mb-2">
                    Welcome Back {auth.user.name} / {auth.user.roles[0].name}
                </h1>
                <div className="mt-6 rounded-lg bg-white shadow-md p-6">
                    <h2 className="text-xl font-semibold text-slate-700 mb-4">
                        Status Request User
                    </h2>

                    <div className="grid grid-cols-2 items-center">
                        <div className="h-80">
                            <ResponsiveContainer width="100%" height={300}>
                                <PieChart>
                                    <Pie
                                        data={chartData}
                                        dataKey="value"
                                        nameKey="name"
                                        cx="50%"
                                        cy="50%"
                                        outerRadius={100}
                                        label={({ name, percent }) =>
                                            `${name} ${(percent * 100).toFixed(0)}%`
                                        }
                                    />
                                    <Tooltip content={<CustomTooltip />} />
                                    <Legend />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="space-y-4">
                            <div className="rounded-lg bg-white p-4 shadow-md">
                                <h3>Total Request User</h3>
                                <p className="text-3xl font-bold">
                                    {stats.total}
                                </p>
                            </div>
                            <div className="rounded-lg bg-yellow-100 p-4 shadow">
                                <h3>Pending Approval</h3>
                                <p className="text-3xl font-bold">
                                    {stats.pending}
                                </p>
                            </div>
                            <div className="rounded-lg bg-green-100 p-4 shadow">
                                <h3>Approved</h3>
                                <p className="text-3xl font-bold">
                                    {stats.approved}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
