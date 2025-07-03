/// <reference types="vitest" />
import { defineConfig } from 'vite';
import { configDefaults } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      '@': '/src',
      '@/styles': '/src/styles',
    },
  },
  server: {
    port: 5173,
    strictPort: true,
  },
  test: {
    environment: 'jsdom',
    coverage: {
      enabled: true,
      include: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.js', 'src/**/*.jsx'],
      exclude: [...configDefaults.exclude, 'src/vite-env.d.ts'],
      reporter: ['text', 'json', 'html', 'json-summary'],
    },
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
    exclude: [...configDefaults.exclude],
  },
  css: {
    preprocessorOptions: {
      scss: {
        // No additional configuration needed
      },
    },
  },
});
