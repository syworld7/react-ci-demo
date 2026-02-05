import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/react-ci-demo/',
  test: {
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
  },
});
