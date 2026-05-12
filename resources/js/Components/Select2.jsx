import React from "react";
import Select from "react-select";

export default function Select2({
    options,
    onChange,
    placeholder,
    defaultOptions,
}) {
    // Custom Styles
    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            borderColor: "#708090", // Warna border saat fokus
            boxShadow: state.isFocused
                ? "0 0 5px rgba(112, 128, 144, 0.5)"
                : "none",
            outline: "none", // Menghilangkan garis biru
            "&:hover": {
                borderColor: "#708090", // Warna border saat hover
            },
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? "#4CAF50" : "transparent", // Warna latar belakang saat dipilih
            color: state.isSelected ? "white" : "black", // Warna teks saat dipilih
            "&:hover": {
                backgroundColor: "#708090", // Warna latar belakang saat hover
                color: "white", // Warna teks saat hover
            },
        }),

        input: (provided) => ({
            ...provided,
            "input:focus": {
                boxShadow: "none !important", // Menghilangkan kotak biru/bayangan saat mengetik
            },
        }),
    };

    return (
        <Select
            options={options}
            onChange={onChange}
            className="basic-multi-select2"
            defaultValue={defaultOptions || null} // Set nilai default
            classNamePrefix="select"
            placeholder={placeholder || "Pilih opsi..."}
            isMulti={true} // Aktifkan fitur multiple select
            styles={customStyles}
            menuPortalTarget={document.body}
        />
    );
}
