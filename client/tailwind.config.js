/** @type {import('tailwindcss').Config} */
import tailwindscrollbar from "tailwind-scrollbar"

export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
    theme: {
        extend: {
            fontFamily: {
                "space-grotesk": ["Space Grotesk", "sans-serif"],
            },
            colors: {
                dark: "#212429",
                darkHover: "#3D404A",
                light: "#ffffff",
                lightHover: "#e5e5e5",
                primary: "#607AFB",
                danger: "#ef4444",
            },
        },
    },
    plugins: [tailwindscrollbar],
}
