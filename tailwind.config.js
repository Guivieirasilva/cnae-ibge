/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'base-background': '#E5E8EB',
        'base-list': '#E8EDF2',
        'base-span': '#4F7396',
      },
    },
    fontFamily: {
      sans: ['Public Sans', 'sans-serif'],
    },
  },
  plugins: [],
}
