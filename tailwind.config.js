/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        typography: (theme) => ({}),
        extend: {
            typography: (theme) => ({
                dark: {
                    css: {
                        color: 'white',
                    },
                },
            }),
        },
    },
    variants: {
        typography: ['dark'],
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
    ],
}
