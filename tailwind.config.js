/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'primary-purple': '#7C3AED',
        'soft-purple': '#A78BFA',
        'soft-pink': '#FBCFE8',
        'light-pink': '#FDF2F8',
        'dark-text': '#111827',
        'secondary-text': '#4B5563',
      },
    },
  },
  plugins: [],
}
