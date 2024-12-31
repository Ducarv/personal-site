import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      css: {
        // Aqui você adiciona o arquivo global
        additionalData: `@import './src/styles/globals.css';`
      }
    }
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
