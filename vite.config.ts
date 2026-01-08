import { defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"
import { resolve } from 'node:path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  root : './src',
  build : {
    rollupOptions : {
      input : {
        main : resolve(__dirname, './src/index.html')
      }
    },
  },
  css: {
     preprocessorOptions: {
        scss: {
          silenceDeprecations: [
            'import',
            'mixed-decls',
            'color-functions',
            'global-builtin',
          ],
        },
     },
  },
  server :{
    fs : {
      allow : ['..'],
    }
  }
})
