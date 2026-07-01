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
        heading: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        dark: {
          bg: '#060B1F',
          card: '#10162E',
        },
        primary: {
          DEFAULT: '#4F7CFF',
          light: '#6B93FF',
          dark: '#3A5FE0',
        },
        secondary: {
          DEFAULT: '#7C4DFF',
          light: '#9B6FFF',
          dark: '#6A3FE0',
        },
        accent: {
          DEFAULT: '#A855F7',
          light: '#C084FC',
          dark: '#9333EA',
        },
        text: {
          DEFAULT: '#FFFFFF',
          secondary: '#BFC8E8',
        },
      },
    },
  },
  plugins: [],
}
