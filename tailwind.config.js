/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        rose: { 950: '#4b1937', 900: '#682044', 700: '#b83878', 500: '#e85b9a', 100: '#ffe5f0' },
        butter: '#fff3b5',
        lilac: '#d9c5ff',
        mint: '#bcebd9',
      },
      fontFamily: {
        display: ['Georgia', 'serif'],
        sans: ['Arial', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 70px rgba(121, 40, 86, .13)',
      },
    },
  },
  plugins: [],
}
