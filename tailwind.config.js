/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        light: {
          primary: '#FFFFFF',
          secondary: '#FFEB3B',
          background: '#F9F9F9',
          surface: '#FFFFFF',
          text: '#000000',
          muted: '#BDBDBD',
        }
      },
      backgroundImage: {
        'light-gradient-primary': 'linear-gradient(45deg, #FFFFFF 0%, #FFEB3B 100%)',
        'light-gradient-surface': 'linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(249, 249, 249, 0.8) 100%)'
      }
    }
  },
  plugins: [],
};