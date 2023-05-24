/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#a5b4fc',
        secondary: '#64748b',
        dark: '#020617',
      },
    },
  },
  plugins: [],
};
