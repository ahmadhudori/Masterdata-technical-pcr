import { useEffect, useState } from "react";

export default function useTheme() {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme" || "system"),
    );

    useEffect(() => {
        const root = window.document.documentElement;

        const applyTheme = () => {
            if (theme === "dark") {
                root.classList.add("dark");
            } else if (theme === "light") {
                root.classList.remove("dark");
            } else {
                if (window.matchMedia("(prefers-color-scheme: dark").matches) {
                    root.classList.add("dark");
                } else {
                    root.classList.remove("dark");
                }
            }
        };

        applyTheme();
        localStorage.setItem("theme", theme);

        const media = window.matchMedia("(prefers-color-scheme: dark");
        media.addEventListener("change", applyTheme);

        return () => media.removeEventListener("change", applyTheme);
    }, [theme]);

    return { theme, setTheme };
}
