/* eslint-disable import/no-extraneous-dependencies */

/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import { configDefaults } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    coverage: {
      exclude: [...configDefaults.coverage.exclude, 'src/main.tsx'],
      all: true,
      src: ['src'],
      provider: 'c8',
      reporter: ['text'],
    },
  },
});
