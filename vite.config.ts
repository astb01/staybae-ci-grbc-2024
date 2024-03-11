/// <reference types="vitest" />
/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

import react from '@vitejs/plugin-react';
import { defineConfig, UserConfig } from 'vite';
import type { InlineConfig } from 'vitest';
import instanbul from 'vite-plugin-istanbul';
import svgr from 'vite-plugin-svgr';

type ViteConfig = UserConfig & { test: InlineConfig };

const config: ViteConfig = {
  base: './',
  plugins: [
    svgr(),
    react(),
    instanbul({
      include: 'src/*',
      exclude: [
        'node_modules',
        'src/**/*.spec.*',
        'src/**/**/*.spec.*',
        'src/**/**/**/*.spec.*',
      ],
      extension: ['.ts*'],
      requireEnv: true,
    }),
  ],
  resolve: {
    alias: {
      src: '/src',
    },
  },
  server: {
    port: 4000,
    host: '0.0.0.0',
    strictPort: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
    css: true,
    coverage: {
      provider: 'istanbul',
      reporter: ['lcov', 'text', 'json', 'html'],
      reportsDirectory: './coverage',
    },
  },
  define: {
    'process.env': process.env,
  },
};

// https://vitejs.dev/config/
export default defineConfig(config);
