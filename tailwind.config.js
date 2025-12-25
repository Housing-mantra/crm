/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "primary": "#136dec",
                "background-light": "#f6f7f8",
                "surface-white": "#ffffff",
                "text-primary": "#1e293b", // Slate 800
                "text-secondary": "#64748b", // Slate 500
            },
            fontFamily: {
                "display": ["Inter", "sans-serif"]
            },
            borderRadius: { "DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px" },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0", transform: "scale(0.95)" },
                    "100%": { opacity: "1", transform: "scale(1)" },
                },
                slideInLeft: {
                    "0%": { transform: "translateX(-100%)" },
                    "100%": { transform: "translateX(0)" },
                },
                slideInRight: {
                    "0%": { transform: "translateX(100%)" },
                    "100%": { transform: "translateX(0)" },
                },
            },
            animation: {
                "fade-in": "fadeIn 0.2s ease-out forwards",
                "slide-in-left": "slideInLeft 0.3s ease-out forwards",
                "slide-in-right": "slideInRight 0.3s ease-out forwards",
            },
        },
    },
    plugins: [],
}
