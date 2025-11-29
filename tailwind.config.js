/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ec4899', // Pink
          dark: '#db2777',
          light: '#f9a8d4',
        },
        secondary: {
          DEFAULT: '#fbbf24', // Yellow
          dark: '#f59e42',
          light: '#fef3c7',
        },
        accent: {
          DEFAULT: '#a78bfa', // Purple
          dark: '#7c3aed',
          light: '#ddd6fe',
        },
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
