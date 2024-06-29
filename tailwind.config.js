/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"];
export const theme = {
    extend: {
        colors: {
            "primary-green": "#588B8B",
            "primary-orange": "#F28F3B",
            "orange-border": "rgba(242, 143, 59, 0.3)",
            "body-font": "#263C3C",
            "secondary-font": "#989696",
        },
        fontFamily: {
            "lato": ["Lato", "sans-serif"],
            "heading": ["Montserrat", "sans-serif"],
        },
    },
};
export const variants = {
    extend: {},
};
export const plugins = [];
