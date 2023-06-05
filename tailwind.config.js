/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'gray-20': '#F8F4EB',
        'gray-50': '#EFE6E6',
        'gray-100': '#DFCCCC',
        'gray-500': '#5E0000',
        'primary-100': '#D6F1FF',
        'primary-300': '#53A1F3',
        'primary-500': '#083B72',
        'secondary-400': '#F4B942',
        'secondary-500': '#F45B69',
      },
      backgroundImage: (theme) => ({
        'gradient-yellowred':
          'linear-gradient(90deg, #F45B69 0%, #F4B942 100%)',
        'mobile-home': "url('./src/assets/DryCleaner.png')",
      }),
      fontFamily: {
        dmsans: ['DM Sans', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      content: {
        cleanifytext: "url('./assets/CLEANIFY-text.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      },
    },
    screens: {
      xs: '480px',
      sm: '768px',
      md: '1060px',
    },
  },
  plugins: [],
};
