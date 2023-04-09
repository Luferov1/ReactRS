/* eslint-disable import/no-extraneous-dependencies */

/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    coverage: {
      provider: 'c8',
      all: true,
      skipFull: false,
      reporter: 'text',
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://api.football-data.org/v2',
        changeOrigin: true,
        secure: false,
        headers: {
          'X-Auth-Token': '2960231e1d704e1484c2676c1ad21b44',
        },
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
