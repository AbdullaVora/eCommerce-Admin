/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#071739',
        'secondary-bg': '#112143',
        'tertiary-bg': '#052e60',
        'border-color': '#0d99ff',
      },
    },
  },
  plugins: [],
}