const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // Paths to your files,
  daisyui: {
    themes: [
      {
        portifolio: {
          primary: '#ffc300',
          secondary: '#ffffff',
          accent: '#ffd60a',
          neutral: '#001d3d',
          neutralTwo: '#003566',
          text: '#000814',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
