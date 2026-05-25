import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function RequestNewUser() {
    const { data, setData, post, processing, errors, setError, reset } =
        useForm({
            name: "",
            email: "",
            role: "",
        });

    const submit = (e) => {
        e.preventDefault();

        post(route("ReqNewUser.submit"), {
            onSuccess: (page) => {
                if (!page.props.data) {
                    return alert("Data not found");
                }
                const { name, email, role } = page.props.data;

                const body = encodeURIComponent(
                    `Dear Pak Andi PW,

Mohon untuk dibuatkan akun baru dengan detail sebagai berikut:
- Nama: ${name}
- Email: ${email}
- Role: ${role}

Terima kasih.`,
                );

                const mailto = `mailto:andipw@gt-tires.com?cc=bagus@gt-tires.com,fandi.irawan@gt-tires.com&subject=Request%20New%20User%20App%20Masterdata&body=${body}`;

                window.location.href = mailto;

                reset();
                window.location.href = route("login");
            },
        });
    };

    return (
        <GuestLayout>
            <Head title="Request New User" />

            <h1 className="text-4xl text-center font-bold my-4">
                Request New User
            </h1>

            <form onSubmit={submit}>
                {/* Username */}
                <div>
                    <InputLabel value="Username" />
                    <TextInput
                        value={data.name}
                        onChange={(e) => {
                            setData("name", e.target.value);
                            if (errors.name) {
                                setError("name", null);
                            }
                        }}
                        className="mt-1 block w-full"
                        required
                    />
                    <InputError message={errors.name} className="mt-2" />
                </div>

                {/* Email */}
                <div className="mt-4">
                    <InputLabel value="Email" />
                    <TextInput
                        type="email"
                        value={data.email}
                        onChange={(e) => {
                            setData("email", e.target.value);
                            if (errors.email) {
                                setError("email", null);
                            }
                        }}
                        className="mt-1 block w-full"
                        required
                    />
                    <InputError message={errors.email} className="mt-2" />
                </div>

                {/* Role */}
                <div className="mt-4">
                    <InputLabel value="Role" />
                    <select
                        value={data.role}
                        onChange={(e) => {
                            setData("role", e.target.value);
                            if (errors.role) {
                                setError("role", null);
                            }
                        }}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:bg-gray-900 dark:text-gray-300"
                    >
                        <option value="">Pilih Role</option>
                        <option value="Tech Spec">Tech Spec</option>
                        <option value="Tech Konstruksi">Tech Konstruksi</option>
                        <option value="Tech Material">Tech Material</option>
                        <option value="Tech Curing/Building">
                            Tech Curing/Building
                        </option>
                    </select>
                    <InputError message={errors.role} className="mt-2" />
                </div>

                {/* Button */}
                <button
                    type="submit"
                    disabled={processing}
                    className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                >
                    Request
                </button>

                {/* Link */}
                <div className="mt-4 flex justify-end">
                    <Link href={route("login")} className="text-sm underline">
                        Already request?
                    </Link>
                </div>
            </form>
        </GuestLayout>
    );
}
