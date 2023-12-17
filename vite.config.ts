import react from '@vitejs/plugin-react'
/// <reference types="vitest" />
import { defineConfig } from 'vite';

import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: /^@\/(.+)/,
        replacement: path.resolve(__dirname, 'src') + '/$1'
      }
    ],
  },
  define: {
    "import.meta.vitest": "undefined",
  },
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',

        assetFileNames: ({name}) => {
          if (/\.(gif|jpe?g|jpg|png|svg)$/.test(name ?? '')){
            return 'assets/images/[name]-[hash][extname]';
          }

          if (/\.css$/.test(name ?? '')) {
            return 'assets/css/[name]-[hash][extname]';
          }

          // default value
          // ref: https://rollupjs.org/guide/en/#outputassetfilenames
          return 'assets/[name]-[hash][extname]';
        },
      },
    }
  },
  optimizeDeps: {
    exclude: ['js-big-decimal']
  }
})
