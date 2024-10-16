/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          darkGreen: '#1A5632',
          lightGreen: '#B4BD01',
          orange: '#F89D2B',
          beige: '#F1EAD1',
        },
        neutral: {
          darkGray: '#121212',
        },
      },
      fontFamily: {
        primary: 'CooperBlk',
        secondary: 'Avenir',
      },
    },
  },
  plugins: [],
};
