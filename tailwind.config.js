/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '0px',
      md: '768px',
      lg: '992px',
      xl: '1440px',
    },
    extend: {
      colors: {
        'strong-cyan': 'hsl(171, 66%, 44%)',
        'light-blue': 'hsl(233, 100%, 69%)',
        'dark-grayish-blue': 'hsl(210, 10%, 33%)',
        'grayish-blue': 'hsl(201, 11%, 66%)',
        'light-gray': 'hsl(0deg 0% 61.96% / 15%)',
      },

      backgroundImage: {
        'header-mobile': "url('./src/assets/images/bg-header-mobile.png')",
        'header-desktop': "url('./src/assets/images/bg-header-desktop.png')",
      },
    },
  },
  plugins: [],
};
