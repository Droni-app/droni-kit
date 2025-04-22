import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({ tsconfigPath: './tsconfig.app.json' }),
    tailwindcss()
  ],
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'droni-kit',
      formats: ['es', 'cjs'],
      fileName: (format) => `droni-kit.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        },
        dir: 'dist' 
      }
    }
  },
})
