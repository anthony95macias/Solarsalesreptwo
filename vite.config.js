import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import windicss from 'vite-plugin-windicss';

export default defineConfig({
  plugins: [react(), windicss()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    // Set this value to `false` if you're using a reverse proxy
    https: false,
  },
});
