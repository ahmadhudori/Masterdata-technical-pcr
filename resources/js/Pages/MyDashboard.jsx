import DashboardLayout from "@/Layouts/DashboardLayout";
import { usePage } from "@inertiajs/react";

export default function Dashboard() {
    const { auth } = usePage().props;
    return (
        <DashboardLayout>
            <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
                <h1 className="text-3xl text-slate-800 text-center">
                    Welcome Back {auth.user.name} / {auth.user.roles[0].name}
                </h1>
            </div>
        </DashboardLayout>
    );
}
