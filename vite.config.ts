import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: './tsconfig.app.json',
      // Solo tipos de la API pública: fuera playground, stories y componentes de prueba
      exclude: ['src/App.vue', 'src/main.ts', 'src/components/**', 'src/**/*.stories.ts'],
    }),
    tailwindcss()
  ],
  build: {
    // public/ es del playground; no debe publicarse en dist
    copyPublicDir: false,
    lib: {
      entry: './src/index.ts',
      name: 'droni-kit',
      formats: ['es', 'cjs'],
      // Debe coincidir con main/module/exports de package.json
      fileName: (format) => (format === 'cjs' ? 'droni-kit.cjs' : `droni-kit.${format}.js`),
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
