/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                lobster: ['Lobster Two', 'cursive'],
                jura: ['Jura', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
