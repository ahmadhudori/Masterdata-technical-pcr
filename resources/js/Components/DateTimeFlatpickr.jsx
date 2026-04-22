import flatpickr from "flatpickr";
import { useEffect, useRef } from "react";
import "flatpickr/dist/flatpickr.min.css";

export default function DateTimeFlatpickr({ value, readOnly, className }) {
    const inputRef = useRef(null);

    useEffect(() => {
        flatpickr(inputRef.current, {
            enableTime: true,
            noCalendar: false,
            dateFormat: "Y-m-d H:i",
            time_24hr: true,
            defaultDate: value || new Date(),
            clickOpens: !readOnly,
        });
    }, [value, readOnly]);

    return (
        <input
            ref={inputRef}
            className={className}
            placeholder="Pilih Tanggal & Jam"
            readOnly={readOnly}
        />
    );
}
