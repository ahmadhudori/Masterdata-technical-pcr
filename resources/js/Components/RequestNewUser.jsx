export default function RequestNewUser({ data }) {
    const handleClick = () => {
        const to = "dori@gmail.com";
        const cc = "manager@gmail.com";
        const subject = encodeURIComponent("Request New User");
        const body = encodeURIComponent(
            `
Dear Pak Andi PW,

Mohon dibuatkan akun baru dengan detail sebagai berikut:

username: ${data.email}
email: ${data.email}

Thanks
			`,
        );

        const mailtoLink = `mailto:${to}?cc=${cc}&subject=${subject}&body=${body}`;
        window.location.href = mailtoLink;
    };
    return (
        <button
            type="button"
            onClick={handleClick}
            className="bg-gray-800 text-xs text-white px-2 py-1 rounded-md"
        >
            Request New User
        </button>
    );
}
