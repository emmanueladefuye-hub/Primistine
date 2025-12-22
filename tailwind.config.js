/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#0A192F', // Deep Navy
                    light: '#172A45', // Charcoal
                },
                accent: {
                    gold: '#FFD700',
                    teal: '#64FFDA',
                },
                text: {
                    main: '#CBD5E1', // Slate 300
                    heading: '#F8FAFC', // Slate 50
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Outfit', 'sans-serif'],
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
