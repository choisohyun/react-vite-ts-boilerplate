import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { createHtmlPlugin } from 'vite-plugin-html';
import checker from 'vite-plugin-checker';
import path from 'path';

import { dependencies } from './package.json';
function renderChunks(deps) {
  let chunks = {};
  Object.keys(deps).forEach(key => {
    if (['react', 'react-router-dom', 'react-dom'].includes(key)) return;
    chunks[key] = [key];
  });
  return chunks;
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, 'env');

  return {
    server: { hmr: true },
    plugins: [
      react({
        include: ['**/*.tsx', '**/*.ts'],
      }),
      tsconfigPaths(),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            ...env,
            MODE: mode,
          },
        },
      }),
      checker({ typescript: true }),
    ],
    resolve: {
      alias: { '@': path.resolve(__dirname, 'src/') },
    },
    css: {
      postcss: ctx => ({
        parser: ctx.parser ? 'sugarss' : false,
        map: ctx.env === 'development' ? ctx.map : false,
        plugins: {
          'postcss-import': {},
          'postcss-nested': {},
          cssnano: ctx.env === 'production' ? {} : false,
          autoprefixer: { overrideBrowserslist: ['defaults'] },
        },
      }),
    },
    build: {
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-router-dom', 'react-dom'],
            ...renderChunks(dependencies),
          },
        },
      },
    },
    test: {
      globals: true,
      coverage: {
        reporter: ['text', 'json', 'html'],
      },
    },
  };
});
