import DashboardLayout from "@/Layouts/DashboardLayout";

export default function Dashboard() {
    return (
        <DashboardLayout>
            <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
                <img
                    src="/images/bg-dashboard.jpg"
                    alt="dashboard"
                    className="w-full h-full object-cover"
                />
            </div>
        </DashboardLayout>
    );
}
