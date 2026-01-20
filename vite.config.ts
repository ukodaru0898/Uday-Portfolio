import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Uday-Portfolio/',
  plugins: [react()],
  server: {
    port: 5173
  }
});
