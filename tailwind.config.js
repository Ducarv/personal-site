import daisyui from 'daisyui';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  daisyui: {
    themes: [
      {
        portifolio: {
          "primary": "#ffc300", // Amarelo/Dourado (principal)
          "secondary": "#ededed", // Cinza claro (secundária)
          "accent": "#ffd60a", // Amarelo mais claro (destaque)
          "neutral": "#212529", // Azul escuro/Quase preto (neutra)
          "base-100": "#ffffff", // Branco (fundo principal)
          "base-200": "#f2f2f2", // Cinza muito claro (fundo secundário)
          "base-300": "#e6e6e6", // Cinza claro (fundo terciário)
          "neutral-content": "#ffffff",
          "neutralTwo": "#343a40", // Azul um pouco mais claro (neutra 2)
          "info": "#0077b6", // Azul (informativo)
          "success": "#4CAF50", // Verde (sucesso)
          "warning": "#FF9800", // Laranja (aviso)
          "error": "#f44336",   // Vermelho (erro)
          "text": "#000814",     // Preto/Azul muito escuro (texto)
        },
      },
    ],
  },
  plugins: [daisyui],
};
