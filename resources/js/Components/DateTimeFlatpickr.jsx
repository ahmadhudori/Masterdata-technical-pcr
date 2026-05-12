import flatpickr from "flatpickr";
import { useEffect, useRef } from "react";
import "flatpickr/dist/flatpickr.min.css";

export default function DateTimeFlatpickr({
    value,
    readOnly,
    className,
    onChange,
}) {
    const inputRef = useRef(null);

    useEffect(() => {
        const fp = flatpickr(inputRef.current, {
            enableTime: true,
            dateFormat: "Y-m-d H:i",
            time_24hr: true,
            defaultDate: value || null,
            clickOpens: !readOnly,

            onChange: function (selectedDates, dateStr) {
                if (onChange) {
                    onChange(dateStr); // kirim ke parent
                }
            },
        });

        return () => fp.destroy(); // cleanup
    }, []);

    return (
        <input
            ref={inputRef}
            className={className}
            placeholder="Pilih Tanggal & Jam"
            readOnly={readOnly}
            type="text"
        />
    );
}
