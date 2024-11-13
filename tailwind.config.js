/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {},
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '540px',
          md: '614px',
          lg: '819px',
          xl: '1024px',
          '2xl': '1228px',
        },
      },
    },
    plugins: [],
  };
  