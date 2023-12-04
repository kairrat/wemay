/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
    theme: {
    extend: {},
  },
  plugins: [],
  screens: {
    'sm': '640px', // мобильные устройства
    'md': '768px', // планшеты
    'lg': '1024px', // настольные компьютеры
    'xl': '1280px', // большие настольные компьютеры
  },
}

