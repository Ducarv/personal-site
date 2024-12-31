import daisyui from 'daisyui';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  daisyui: {
    themes: [
      {
        portifolio: {
          primary: '#ffc300',
          secondary: '#ededed',
          accent: '#ffd60a',
          neutral: '#001d3d',
          neutralTwo: '#003566',
          text: '#000814',
        },
      },
    ],
  },
  plugins: [daisyui],
};
