/** @type {import('tailwindcss').Config} */
const path = require('path')

module.exports = {
    safelist: [],
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    darkMode: ['class', '[class="dark"]', '[data-mode="dark"]'],
    theme: {
        extend: {},
    },
    variants: {
        extend: {
            opacity: ['disabled'],
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/line-clamp'),
    ],
}
